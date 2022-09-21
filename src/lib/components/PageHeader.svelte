<script>
	import { navFavoritesStore } from '$lib/stores/navStore';
	import Star from '$lib/components/icons/Star.svelte';
	import { tooltip } from '$lib/actions';
	import Tooltip from './Tooltip.svelte';
	export let title = '';

	const href = window.location.pathname;
	$: isFavorite = $navFavoritesStore.filter((f) => f.title === title).length > 0;
</script>

<div class="flex space-x-2 place-items-center">
	<Tooltip message="Toggle navigation favorite">
		{#if isFavorite}
			<Star
				class="h-8 w-8 text-yellow-300 cursor-pointer hover:opacity-50"
				fill="currentColor"
				on:click={() => ($navFavoritesStore = $navFavoritesStore.filter((f) => f.title !== title))}
			/>
		{:else}
			<Star
				class="h-8 w-8 cursor-pointer hover:opacity-50"
				on:click={() => ($navFavoritesStore = [...$navFavoritesStore, { title, href }])}
			/>
		{/if}
	</Tooltip>
	<h1 class="font-bold text-3xl">{title}</h1>
</div>

<style>
</style>
