<script lang="ts">
	import { Turnstile } from 'svelte-turnstile';
	import { enhance } from '$app/forms';

	let showCaptcha = $state(true);
	let { form } = $props();

	$effect(() => {
		if (form) {
			showCaptcha = false;
			setTimeout(() => (showCaptcha = true), 0);
			form = null;
		}
	});

	
</script>

<form method="POST" use:enhance>
	{#if showCaptcha}
		<Turnstile siteKey={import.meta.env.VITE_TURNSTILE_SITEKEY} />
	{/if}
	<button type="submit">Submit</button>
</form>