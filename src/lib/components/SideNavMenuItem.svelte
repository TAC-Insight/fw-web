<script lang="ts">
	import { fly } from 'svelte/transition';
	import ChevronDownIcon from './icons/ChevronDownIcon.svelte';
	import ChevronRightIcon from './icons/ChevronRightIcon.svelte';
	export let open: boolean = false;
</script>

<section>
	<div
		on:click
		class="flex w-full justify-between place-items-center rounded bg-slate-100 px-2 py-1 text-left text-sm font-medium text-slate-900 hover:bg-blue-100/50 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 cursor-pointer select-none"
	>
		<div class="flex place-items-center space-x-1">
			<div class="h-4 w-4"><slot name="icon" /></div>
			<div><slot name="title" /></div>
		</div>
		{#if !open}
			<ChevronRightIcon class="h-4 w-4" />
		{:else}
			<ChevronDownIcon class="h-4 w-4" />
		{/if}
	</div>

	{#if open}
		<div class="mt-1" in:fly out:fly>
			<slot name="links" />
		</div>
	{/if}
</section>
