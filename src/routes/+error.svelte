<script>
	import { page } from '$app/stores';
	import Logo from '$lib/assets/logo.png';
</script>

{#if $page.status === 404}
	<div class="h-screen grid place-items-center">
		<div
			class="flex-flex-col space-y-4 p-8 rounded shadow-2xl bg-gradient-to-t from-slate-300 to-gray-300"
		>
			<div class="flex space-x-2 mb-8">
				<img src={Logo} height={32} width={32} alt="FW Road Logo" />
				<h1 class="text-2xl font-bold">Whoops... That page doesn't exist</h1>
			</div>
		</div>
	</div>
{/if}
