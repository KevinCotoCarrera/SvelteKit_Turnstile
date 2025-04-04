<script lang="ts">
	import { enhance } from "$app/forms";

	let { title = 'Contact Me', children }: { title?: string, children: any} = $props();
</script>

<form
    method="POST"
	use:enhance
	class="mx-auto w-full max-w-2xl flex flex-col gap-4 rounded-2xl border border-gray/20 bg-gray/10 p-6 shadow-lg backdrop-blur-md"
>
	<h2 class="mb-4 text-center text-2xl font-bold text-gray/90">{title}</h2>

        {@render children()}
    <div class="flex justify-end">
	<button
		type="submit"
		class="mt-4 w-40 rounded-xl bg-amber-100 px-6 py-2 text-gray/80 transition hover:bg-gray/30 hover:text-gray"
	>
		Send Message
	</button>
</div>
</form>