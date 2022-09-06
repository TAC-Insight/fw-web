<script lang="ts">
	import { toastStore } from '$lib/stores/toastStore';
</script>

{#if $toastStore}
	<div class="grid place-items-center z-auto">
		<div
			class="flex flex-col absolute self-center top-[2vh] rounded p-2  max-w-xl w-1/2 bg-white"
			class:info={$toastStore.type === 'info'}
			class:danger={$toastStore.type === 'danger'}
			class:success={$toastStore.type === 'success'}
			class:warning={$toastStore.type === 'warning'}
		>
			<div class="font-bold">{$toastStore.title}</div>
			<div class="font-semibold text-sm">{$toastStore.message}</div>
		</div>
	</div>
{/if}

<style>
	.info {
		@apply shadow-md bg-blue-200 shadow-blue-500 text-blue-900;
	}
	.danger {
		@apply shadow-md bg-red-200 shadow-red-600 text-red-900;
	}
	.success {
		@apply shadow-md bg-teal-200 shadow-teal-600 text-teal-900;
	}
	.warning {
		@apply shadow-md bg-amber-200 shadow-amber-500 text-amber-900;
	}
</style>
