<script>
	import '../app.css';
	import Toast from '$lib/components/Toast.svelte';
	import CommandPalette from '$lib/components/CommandPalette.svelte';
	import NavLoadingBar from '$lib/components/NavLoadingBar.svelte';
</script>

<div>
	<NavLoadingBar />
	<CommandPalette />
	<Toast />
	<slot />
</div>
