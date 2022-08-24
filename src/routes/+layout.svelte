<script>
	import CommandPalette from '$lib/components/CommandPalette.svelte';
	import NavLoadingBar from '$lib/components/NavLoadingBar.svelte';
	import '../app.css';
</script>

<div>
	<NavLoadingBar />
	<CommandPalette />
	<slot />
</div>
