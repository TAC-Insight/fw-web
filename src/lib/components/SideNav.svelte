<script lang="ts">
	import { navStore } from '$lib/stores/navStore';
	import { sessionStore } from '$lib/stores/sessionStore';
	import Logo from '$lib/assets/logo.png';
</script>

<nav
	class="flex max-h-screen w-56 flex-col overflow-auto bg-gradient-to-tr from-gray-300 to-slate-300 p-2"
>
	<section class="flex flex-row space-x-1">
		<img src={Logo} height={24} width={24} alt="FW Logo" />
		<h1 class="font-bold">Fast-Weigh</h1>
		<div class="flex-grow" />
		<button
			class="rounded-full bg-slate-200 p-1"
			on:click={() => {
				//
			}}
		>
			close
		</button>
	</section>
</nav>
