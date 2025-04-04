<script lang="ts">
	type FormInputProps = {
		id: string;
		label: string;
		type?: 'text' | 'email' | 'textarea';
		value: string;
		error?: string;
		placeholder?: string;
	};

	let {
		id,
		label,
		type = 'text',
		value = $bindable(''),
		error = '',
		placeholder = ''
	}: FormInputProps = $props();
</script>

<div class="w-auto">
	<label for={id} class="w-auto max-w-48 mb-2 block text-sm font-semibold text-gray/80">{label}:</label>

	{#if type === 'textarea'}
		<textarea
			rows="5"
			{id}
			name={id} 
			bind:value
			class="w-full border rounded-md border-gray/20 bg-gray/10 p-3 text-gray placeholder-gray/60 backdrop-blur-md focus:border-gray/50 focus:outline-none focus:ring-2 focus:ring-gray/30"
			{placeholder}
		></textarea>
	{:else}
		<input
			{id}
			name={id} 
			{type}
			bind:value
			class="flex-1 min-w-[200px] rounded-md border border-gray/20 bg-gray/10 p-3 text-gray placeholder-gray/60 backdrop-blur-md focus:border-gray/50 focus:outline-none focus:ring-2 focus:ring-gray/30"
			{placeholder}
		/>
	{/if}

	{#if error}
		<p class="mt-1 text-sm text-red-400">{error}</p>
	{/if}
</div>
