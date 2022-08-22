<script>
	import NavLoadingBar from '$lib/components/NavLoadingBar.svelte';
	import SideNav from '$lib/components/SideNav.svelte';
	import '../app.css';
</script>

<div>
	<NavLoadingBar />
	<main class="min-h-screen flex space-x-2">
		<SideNav />
		<div class="flex-1 flex flex-col min-h-screen pr-2 py-2 overflow-auto">
			<slot />
		</div>
	</main>
	<p><a href="/">go to home</a></p>
	<p><a href="/tickets/query">go to ticket query</a></p>
	<p><a href="/orders">go to orders</a></p>
	<slot />
</div>
