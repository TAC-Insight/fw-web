<script>
	import SideNav from '$lib/components/SideNav.svelte';
</script>

<main class="min-h-screen flex space-x-2">
	<SideNav />
	<div class="flex-1 flex flex-col max-h-screen pr-2 py-2 overflow-auto">
		<slot />
	</div>
</main>
