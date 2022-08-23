<script>
	import CommandPalette from '$lib/components/CommandPalette.svelte';
	import NavLoadingBar from '$lib/components/NavLoadingBar.svelte';
	import SideNav from '$lib/components/SideNav.svelte';
	import '../app.css';
</script>

<div>
	<NavLoadingBar />
	<CommandPalette />
	<main class="min-h-screen flex space-x-2">
		<SideNav />
		<div class="flex-1 flex flex-col max-h-screen pr-2 py-2 overflow-auto">
			<slot />
		</div>
	</main>
</div>
