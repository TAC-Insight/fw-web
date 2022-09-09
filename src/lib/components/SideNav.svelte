<script lang="ts">
	import { navStore } from '$lib/stores/navStore';
	import { isCommandPaletteOpen } from '$lib/stores/commandPaletteStore';
	import Logo from '$lib/assets/logo.png';
	import MenuIcon from './icons/MenuIcon.svelte';
	import SearchIcon from './icons/SearchIcon.svelte';
	import ChevronDoubleUpIcon from './icons/ChevronDoubleUpIcon.svelte';
	import SideNavMenuItems from './SideNavMenuItems.svelte';
	import { createToast } from '$lib/stores/toastStore';
	import { destroySessionAndRedirect } from '$lib/auth';
	import { AuthService } from '$lib/apiClient';
	import { http } from '$lib/http';
</script>

{#if !$navStore.isNavOpen}
	<section class="ml-1 mt-1">
		<button
			class="rounded-full bg-slate-200 p-1"
			on:click={() => {
				$navStore.isNavOpen = true;
			}}
		>
			<MenuIcon class="h-4 w-4" />
		</button>
	</section>
{:else}
	<nav
		class="flex max-h-screen w-56 flex-col overflow-auto bg-gradient-to-tr from-gray-300 to-slate-300 p-2"
	>
		<!-- Header -->
		<section class="flex flex-row space-x-1">
			<img src={Logo} class="h-6 w-6" alt="FW Logo" />
			<h1 class="font-bold">Fast-Weigh</h1>
			<div class="flex-grow" />
			<button
				class="rounded-full bg-slate-200 p-1"
				on:click={() => {
					$navStore.isNavOpen = false;
				}}
			>
				<MenuIcon class="h-4 w-4" />
			</button>
		</section>

		<!-- Command Palette -->
		<section>
			<div
				on:click={() => {
					$isCommandPaletteOpen = true;
				}}
				class="mt-2 flex cursor-pointer flex-row items-center justify-center space-x-1 rounded bg-slate-500/10 p-2 text-xs font-semibold hover:opacity-50"
			>
				<SearchIcon class="h-4 w-4" />
				<div class="mr-1">Press</div>
				<div class="rounded bg-slate-100 px-1 font-mono shadow-xl ring-1 ring-slate-900/20">
					Ctrl
				</div>
				<div class="mx-1">+</div>
				<div class="rounded bg-slate-100 px-1 font-mono shadow-xl ring-1 ring-slate-900/20">/</div>
				<div class="ml-1">to search</div>
			</div>
		</section>

		<!-- Close all menu items -->
		<section>
			<button
				on:click={() => {
					$navStore = { isNavOpen: true };
				}}
				class="mt-2 flex cursor-pointer flex-row items-center justify-center space-x-1 rounded bg-slate-500/10 p-2 text-xs font-semibold hover:opacity-50 w-full"
			>
				<ChevronDoubleUpIcon class="h-4 w-4" />
				<span>Close all menus</span>
			</button>
		</section>

		<!-- Menu items -->
		<SideNavMenuItems />

		<!-- Sign out -->
		<button
			class="rounded font-bold text-white text-xs p-2 bg-gradient-to-t from-red-800 to-red-500"
			on:click={async () => {
				try {
					await http.auth.logout();
					destroySessionAndRedirect();
				} catch (e) {
					createToast({
						title: 'Error',
						message: 'There was an error trying to sign out. Refresh and try again.',
						type: 'warning',
						timeout: 5000
					});
				}
			}}
		>
			Sign out
		</button>
	</nav>
{/if}
