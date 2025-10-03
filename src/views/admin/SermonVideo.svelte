<script>
  import CMSHome from "./CMSHome.svelte";
  import { onMount } from "svelte";

  let date = new Date().toISOString().slice(0, 10);
  let title = "";
  let embed = "";
  let videoFile;
  let videoInput;
  let submitting = false;
  let message = "";
  let items = [];
  let loading = false;

  async function loadList() {
    loading = true;
    try {
      const resp = await fetch("/data/php/admin_sermon_list.php", {
        headers: { Accept: "application/json" },
      });
      if (resp.status === 401) {
        window.location.href = "/data/php/auth_login.php?redirect=/#admin";
        return;
      }
      const json = await resp.json();
      items = json.items || [];
    } catch (e) {
      // ignore
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    loadList();
  });

  async function submit() {
    submitting = true;
    message = "";
    try {
      if (embed && embed.trim()) {
        // Save as social embed
        const resp = await fetch("/data/php/admin_sermon_upsert.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ date, title, embed }),
        });
        if (resp.status === 401) {
          window.location.href = "/data/php/auth_login.php?redirect=/#admin";
          return;
        }
        const json = await resp.json();
        message = json.ok ? "Saved!" : json.error || "Error saving";
        if (json.ok) { await loadList(); }
      } else if (videoFile) {
        // Upload local video
        const form = new FormData();
        form.append("date", date);
        form.append("title", title);
        form.append("video", videoFile);
        const resp = await fetch("/data/php/admin_sermon_upload_video.php", {
          method: "POST",
          body: form,
        });
        if (resp.status === 401) {
          window.location.href = "/data/php/auth_login.php?redirect=/#admin";
          return;
        }
        const json = await resp.json();
        message = json.ok ? "Uploaded!" : json.error || "Error uploading";
        if (json.ok) { await loadList(); }
      } else {
        message = "Provide either an embed code or a video file.";
      }
    } catch (e) {
      message = "Network error";
    }
    submitting = false;
  }

  async function updateRow(row) {
    const body = { id: row.id, date: row.date, title: row.title, src: row.src };
    const resp = await fetch("/data/php/admin_sermon_update.php", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
    });
    if (resp.status === 401) {
      window.location.href = "/data/php/auth_login.php?redirect=/#admin";
      return;
    }
    const json = await resp.json();
    message = json.ok ? "Row updated" : json.error || "Update failed";
    if (json.ok) { await loadList(); }
  }

  async function deleteRow(id) {
    if (!confirm("Delete this sermon?")) return;
    const resp = await fetch(`/data/php/admin_sermon_delete.php?id=${encodeURIComponent(id)}`);
    if (resp.status === 401) {
      window.location.href = "/data/php/auth_login.php?redirect=/#admin";
      return;
    }
    const json = await resp.json();
    if (json.ok) {
      message = "Row deleted";
      await loadList();
    } else {
      message = json.error || "Delete failed";
    }
  }
</script>

<CMSHome>
  <h1>Update Sermon Video</h1>
  <label>Date <input type="date" bind:value={date} required /></label>
  <label>Title <input type="text" bind:value={title} /></label>
  <label>
    Embed code
    <textarea bind:value={embed} rows="6" placeholder="Paste social media embed code here; leave blank to upload a video file instead."></textarea>
  </label>
  <div style="margin:0.5rem 0;">
    <div><strong>Or upload a video file</strong></div>
    <label>
      Video file
      <input bind:this={videoInput} type="file" accept="video/*" on:change={() => {
        videoFile = videoInput && videoInput.files ? videoInput.files[0] : null;
      }} />
    </label>
  </div>
  <button on:click={submit} disabled={submitting}>Save</button>
  <p>{message}</p>

  <h2>Recent Sermons</h2>
  <button on:click={loadList} disabled={loading}>Reload</button>
  {#if loading}
    <p>Loading…</p>
  {:else}
    <table border="1" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Title</th>
          <th>Source</th>
          <th>Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {#each items as row (row.id)}
          <tr>
            <td>{row.id}</td>
            <td><input type="date" bind:value={row.date} /></td>
            <td><input type="text" bind:value={row.title} /></td>
            <td><input type="text" bind:value={row.src} /></td>
            <td>{row.type}</td>
            <td>
              <button on:click={() => updateRow(row)}>Save</button>
              <button on:click={() => deleteRow(row.id)}>Delete</button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</CMSHome>

<style>
  label { display: block; margin: 0.5rem 0; }
  textarea, input { width: 100%; max-width: 40rem; }
</style>
