<script>
	import { page } from '$app/stores';
	import Logo from '$lib/assets/logo.png';
</script>

{#if $page.status === 404}
	<div class="h-screen grid place-items-center">
		<div
			class="flex flex-col space-y-4 p-8 rounded shadow-2xl bg-gradient-to-t from-slate-300 to-gray-300"
		>
			<div class="flex place-items-center space-x-2">
				<img src={Logo} class="h-8 w-8" alt="FW Road Logo" />
				<h1 class="text-2xl font-bold">Whoops... This page doesn't exist</h1>
			</div>
			<p>
				We're not sure how you got here, but you should head back <a
					href="/"
					class="text-blue-500 underline font-semibold">home</a
				>.
			</p>
		</div>
	</div>
{/if}
