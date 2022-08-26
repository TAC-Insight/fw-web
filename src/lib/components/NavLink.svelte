<script lang="ts">
	import LockClosed from './icons/LockClosed.svelte';

	export let href: string = '#';
	export let disabled: boolean = false;
</script>

<a
	href={disabled ? null : href}
	class="flex place-items-center rounded p-1 text-sm font-semibold text-blue-800 hover:bg-slate-200/50 "
	class:disabled
>
	{#if disabled}<LockClosed class="h-4 w-4 mr-1" />{/if}<slot />
</a>

<style>
	.disabled {
		@apply text-slate-800 cursor-not-allowed;
	}
</style>
