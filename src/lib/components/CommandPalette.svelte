<script lang="ts">
	import { isCommandPaletteOpen } from '$lib/stores/commandPaletteStore';
	import Input from './Input.svelte';
</script>

<svelte:window
	on:keydown={(event) => {
		if ((event.ctrlKey || event.metaKey) && event.key === '/') {
			event.preventDefault();
			$isCommandPaletteOpen = !$isCommandPaletteOpen;
		}
		if (event.key === 'Escape' && $isCommandPaletteOpen) {
			$isCommandPaletteOpen = false;
		}
	}}
/>

{#if $isCommandPaletteOpen}
	<div
		class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-gray-500 opacity-80 z-10"
		on:click={() => ($isCommandPaletteOpen = false)}
	>
		<div class="bg-white  rounded p-8 relative max-w-xl" on:click|stopPropagation>
			<Input autoFocus placeholder="Search..." />
		</div>
	</div>
{/if}
