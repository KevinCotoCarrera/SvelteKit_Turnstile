<script lang="ts">
	import { Turnstile } from 'svelte-turnstile';
	import FormContainer from '$lib/components/FormContainer.svelte';
	import FormInput from '$lib/components/FormInput.svelte';
	import { validateForm } from '$lib/utils/form-validation.js';
	let message = $state('');
	let email = $state('');
	let name = $state('');
	let errors = $derived(validateForm({ message, email, }));
	let showCaptcha = $state(true);
	let { form } = $props();

	$effect(() => {
		if (form) {
			alert(form.message)
			showCaptcha = false;
			setTimeout(() => (showCaptcha = true), 0);
			form = null;
		}
	});

	
</script>
<FormContainer>
	<FormInput
		id="message" 
		label="Message" 
		type="textarea" 
		bind:value={message} 
		placeholder="Tell me how we can collaborate"
		error={errors.message}
	/>
	<div class="flex flex-row justify-between">
	<FormInput 
		id="email" 
		label="Your email" 
		type="email" 
		bind:value={email} 
		placeholder="Enter your email address"
		error={errors.email}

	/>
	<FormInput 
		id="name" 
		label="Your name" 
		type="text" 
		bind:value={name} 
		placeholder="Enter your name, please"
		error={errors.name}

	/>
</div>
<div class="flex justify-center">
{#if showCaptcha}
		<Turnstile siteKey={import.meta.env.VITE_TURNSTILE_SITEKEY} />
{/if}
</div>
</FormContainer>
