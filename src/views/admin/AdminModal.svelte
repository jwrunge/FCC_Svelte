<script>
	import { createEventDispatcher, tick } from "svelte";

	// Reusable admin modal shell with focus trap, Escape/backdrop close,
	// opener focus restoration, and optional initial focus selector.
	export let open = false;
	export let title = "";
	export let hint = "";
	// Optional CSS selector for an element inside the modal to focus when opening
	export let initialFocusSelector = "";
	const dispatch = createEventDispatcher();

	let modalEl;
	let previouslyFocusedEl;

	// Lock background scroll while modal is open
	$: {
		if (open) {
			try {
				document.body.classList.add("no-scroll");
			} catch {}
		} else {
			try {
				document.body.classList.remove("no-scroll");
			} catch {}
		}
	}

	// Capture the element that had focus right before opening to restore later
	$: if (open && !previouslyFocusedEl) {
		previouslyFocusedEl =
			document.activeElement instanceof HTMLElement
				? document.activeElement
				: null;
	}

	// Autofocus inside the modal on open, if selector provided
	$: if (open) {
		tick().then(() => {
			if (!open) return; // guard if closed quickly
			if (initialFocusSelector && modalEl) {
				const el = modalEl.querySelector(initialFocusSelector);
				if (el && typeof el["focus"] === "function") {
					try {
						el.focus();
					} catch {}
				}
			}
		});
	}

	function closeInternal() {
		dispatch("close");
		// Restore focus to opener after DOM updates
		const toFocus = previouslyFocusedEl;
		previouslyFocusedEl = null;
		setTimeout(() => {
			try {
				toFocus && toFocus.focus();
			} catch {}
		}, 0);
	}

	function onWindowKey(e) {
		if (!open) return;
		if (e.key === "Escape") return closeInternal();
		if (e.key === "Tab" && modalEl) {
			const selectors =
				'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),[tabindex]:not([tabindex="-1"])';
			const f = Array.from(modalEl.querySelectorAll(selectors)).filter(
				(el) => el.offsetParent !== null
			);
			if (f.length === 0) return;
			const first = f[0],
				last = f[f.length - 1];
			const active = document.activeElement;
			if (e.shiftKey) {
				if (active === first || !modalEl.contains(active)) {
					e.preventDefault();
					last.focus();
				}
			} else {
				if (active === last || !modalEl.contains(active)) {
					e.preventDefault();
					first.focus();
				}
			}
		}
	}
</script>

<svelte:window on:keydown={onWindowKey} />

{#if open}
	<div class="admin-modal-root" role="dialog" aria-modal="true">
		<button
			type="button"
			class="admin-modal-backdrop"
			aria-label="Close"
			on:click={closeInternal}
		></button>
		<div class="admin-modal" role="document" bind:this={modalEl}>
			<button
				class="close-x"
				type="button"
				aria-label="Close"
				on:click={closeInternal}
			>
				&times;
			</button>
			{#if title}
				<h2 class="modal-title">{title}</h2>
			{/if}
			{#if hint}
				<p class="hint">{hint}</p>
			{/if}
			<slot />
		</div>
	</div>
{/if}

<style>
	.admin-modal-root {
		position: fixed;
		inset: 0;
		z-index: 1000;
		display: grid;
		place-items: center;
		overflow: hidden; /* contain scroll within modal */
		overscroll-behavior: contain; /* prevent scroll chaining to page */
	}
	.admin-modal-backdrop {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		border: 0;
		padding: 0;
		margin: 0;
		z-index: 0;
	}
	.admin-modal {
		position: relative;
		background: #fff;
		padding: 1.75rem 1.25rem 1.25rem; /* extra top padding to avoid visual clipping when scrolled to top */
		border-radius: 12px;
		width: min(95vw, 640px);
		max-height: 90vh;
		overflow: auto;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
		z-index: 1;
		overscroll-behavior: contain; /* keep wheel/touch scroll inside modal */
	}
	.admin-modal * {
		box-sizing: border-box;
	}
	/* Note: Avoid styling slotted content here to prevent Svelte 'unused selector' warnings. */
	.modal-title {
		margin: 0 0 0.25rem 0;
	}
	.hint {
		margin: 0 0 0.75rem 0;
		color: #555;
		font-size: 0.9rem;
	}
	.close-x {
		position: absolute;
		top: 8px;
		right: 8px;
		background: transparent;
		border: none;
		font-size: 1.5rem;
		line-height: 1;
		cursor: pointer;
	}
	/* Generic actions area defaults; specific components can override */
	:global(.actions) {
		display: flex;
		gap: 0.5rem;
		margin-top: 1rem;
		justify-content: flex-end;
	}
	:global(.actions .primary:disabled) {
		opacity: 0.55;
		cursor: not-allowed;
	}

	/* Prevent background page from scrolling while modal is open */
	:global(body.no-scroll) {
		overflow: hidden;
	}
</style>
