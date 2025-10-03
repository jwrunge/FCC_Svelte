<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let open = false;
  export let initial = { id: 0, date: new Date().toISOString().slice(0,10), title: "", src: "" };

  let date = initial.date;
  let title = initial.title;
  let embed = initial.src && !initial.src.startsWith('/uploads/videos/') ? initial.src : "";
  let videoFile;
  let videoInput;
  let saving = false;
  let error = "";

  $: if (open) {
    date = initial.date || new Date().toISOString().slice(0,10);
    title = initial.title || "";
    embed = initial.src && !initial.src.startsWith('/uploads/videos/') ? initial.src : "";
    videoFile = null;
  }

  function close() {
    dispatch('close');
  }

  async function save() {
    saving = true;
    error = "";
    try {
      if (embed && embed.trim()) {
        const body = { id: initial.id || 0, date, title, embed };
        const resp = await fetch('/data/php/admin_sermon_upsert.php', {
          method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(body)
        });
        if (resp.status === 401) { window.location.href = '/data/php/auth_login.php?redirect=/#admin'; return; }
        const json = await resp.json();
        if (!json.ok) throw new Error(json.error || 'Save failed');
      } else if (videoFile) {
        const form = new FormData();
        form.append('id', String(initial.id || 0));
        form.append('date', date);
        form.append('title', title);
        form.append('video', videoFile);
        const resp = await fetch('/data/php/admin_sermon_upload_video.php', { method: 'POST', body: form });
        if (resp.status === 401) { window.location.href = '/data/php/auth_login.php?redirect=/#admin'; return; }
        const json = await resp.json();
        if (!json.ok) throw new Error(json.error || 'Upload failed');
      } else {
        throw new Error('Provide either an embed code or a video file.');
      }
      dispatch('saved');
      dispatch('close');
    } catch (e) {
      error = e?.message || 'Unexpected error';
    } finally {
      saving = false;
    }
  }
</script>

{#if open}
  <button type="button" class="modal-backdrop" aria-label="Close dialog" on:click={close}>
    <div class="modal">
      <h2>{initial.id ? 'Edit Sermon' : 'New Sermon'}</h2>
      <label>Date <input type="date" bind:value={date} required /></label>
      <label>Title <input type="text" bind:value={title} /></label>
      <label>Embed code
        <textarea bind:value={embed} rows="6" placeholder="Paste social media embed code; leave blank to upload a video file."></textarea>
      </label>
      <div>
        <div><strong>Or upload a video file</strong></div>
        <label>Video file
          <input bind:this={videoInput} type="file" accept="video/*" on:change={() => {
            videoFile = videoInput && videoInput.files ? videoInput.files[0] : null;
          }} />
        </label>
      </div>
      {#if error}<p class="error">{error}</p>{/if}
      <div class="actions">
        <button on:click={save} disabled={saving}>{saving ? 'Saving…' : 'Save'}</button>
        <button on:click={close} disabled={saving}>Cancel</button>
      </div>
    </div>
  </button>
{/if}

<style>
  .modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: grid; place-items: center; z-index: 1000; border: none; padding: 0; margin: 0; }
  .modal { background: white; padding: 1rem; border-radius: 8px; width: min(90vw, 720px); max-height: 85vh; overflow: auto; }
  label { display: block; margin: 0.5rem 0; }
  textarea, input { width: 100%; max-width: 40rem; }
  .actions { display: flex; gap: 0.5rem; margin-top: 1rem; }
  .error { color: #b00020; }
</style>
