<script>
	import { onMount } from 'svelte';
	let me = null; // { id, email }
	let canImport = false;
	let importing = false;
	let importResult = '';

	onMount(async () => {
		try {
			const resp = await fetch('/data/php/admin_me.php', { headers: { Accept: 'application/json' } });
			if (resp.ok) {
				const json = await resp.json();
				if (json?.ok && json.user) {
					me = json.user;
					canImport = String(me.email).toLowerCase() === 'jwrunge@gmail.com';
				}
			}
		} catch {}
	});

	async function runImport() {
		if (!canImport || importing) return;
		importing = true;
		importResult = '';
		try {
			const resp = await fetch('/data/php/admin_run_import.php', { method: 'POST', headers: { Accept: 'application/json' } });
			const json = await resp.json();
			if (json?.ok) {
				importResult = json.output || 'Import complete.';
			} else {
				importResult = json?.error || 'Import failed.';
			}
		} catch (e) {
			importResult = e?.message || 'Import failed.';
		} finally {
			importing = false;
		}
	}
</script>

<div class="cms">
	<div class="admin-nav">
		<h1>FCC Admin</h1>
		<ul>
			<li><a href="#admin/sermon">Sermon video</a></li>
			<li><a href="#admin/manuscript">Sermon manuscript</a></li>
			<li><a href="#admin/newsletter">Newsletter</a></li>
			<li><a href="#admin/event">Event</a></li>
			<li><a href="#admin/frontpage">Front page</a></li>
			<li><a href="#admin/users">Users</a></li>
			<li><a href="/data/php/auth_logout.php">Logout</a></li>
		</ul>

		{#if canImport}
			<div class="import-box">
				<h3>Data import</h3>
				<p class="small">Run JSON → SQLite import (admin only)</p>
				<button class="run-import" disabled={importing} on:click={runImport}>
					{importing ? 'Running…' : 'Run import'}
				</button>
				{#if importResult}
					<pre class="import-output">{importResult}</pre>
				{/if}
			</div>
		{/if}
	</div>

	<div class="admin-content">
		<slot></slot>
	</div>
</div>

<style>
	.cms {
		display: grid;
		gap: 3rem;
		max-width: 2000px;
		margin: 0 auto;
		padding: 0 1rem;
		align-items: start;
		height: 100%;
		overflow-y: scroll;

		@media screen and (min-width: 600px) {
			grid-template-columns: auto 1fr;
		}
	}

	.admin-nav {
		padding: 2rem;
		border-radius: 15px;
		background: rgba(0, 0, 0, 0.15);

		@media screen {
			position: sticky;
			top: 1rem;
		}
	}

	.admin-content {
		margin: 3rem 0;
	}

	.import-box {
		margin-top: 1.5rem;
		background: #fff;
		border: 1px solid #e5e7eb;
		border-radius: 10px;
		padding: 0.75rem;
	}
	.import-box .small { color: #475467; font-size: 0.9rem; margin: 0.25rem 0 0.5rem; }
	.run-import {
		background: #0d6efd;
		color: #fff;
		border: 1px solid #0b5ed7;
		padding: 0.35rem 0.6rem;
		border-radius: 6px;
		cursor: pointer;
	}
	.run-import:disabled { opacity: .6; cursor: not-allowed; }
	.import-output {
		background: #0b1020;
		color: #d1d5db;
		padding: 0.5rem;
		border-radius: 6px;
		max-height: 40vh;
		overflow: auto;
		white-space: pre-wrap;
	}
</style>
