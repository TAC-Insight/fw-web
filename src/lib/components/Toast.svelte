<script lang="ts">
	import { toastStore } from '$lib/stores/toastStore';
</script>

{#if $toastStore}
	<div class="grid place-items-center z-100">
		<div
			class=" flex flex-col absolute self-center top-[2vh] rounded p-2  max-w-xl w-1/2"
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
		@apply shadow-md shadow-blue-500 text-blue-500;
	}
	.danger {
		@apply shadow-sm shadow-red-600 text-red-600;
	}
	.success {
		@apply shadow-sm shadow-teal-600 text-teal-600;
	}
	.warning {
		@apply shadow-sm shadow-yellow-600 text-yellow-600;
	}
</style>
