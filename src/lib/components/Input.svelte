<script lang="ts">
	import { autoFocus } from '$lib/actions';
	export let type: 'text' | 'password' = 'text';
	export let value: string | number = '';
	export let label: string = '';
	export let placeholder: string = '';
	export let required: boolean = false;
	export let autofocus: boolean = false;

	let isVisible: boolean = false;

	$: computedType = type === 'password' ? (isVisible ? 'text' : 'password') : type;

	let id = `field-${Math.floor(Math.random() * 1000)}`;

	function handleInput(e: any) {
		value = e?.target?.value;
	}
</script>

<div class="flex flex-col">
	{#if label}
		<div class="flex justify-between place-items-center">
			<label for={id} class="text-sm font-semibold">
				{label}
				{#if required}<span class="text-red-500">*</span>{/if}
			</label>
			{#if type === 'password'}
				<span
					on:click={() => (isVisible = !isVisible)}
					class="inline text-xs text-blue-500 cursor-pointer"
				>
					Toggle visibility
				</span>
			{/if}
		</div>
	{/if}
	<!-- svelte-ignore a11y-autofocus -->
	<input
		{id}
		{placeholder}
		type={computedType}
		use:autoFocus={autofocus}
		on:input={handleInput}
		class="rounded p-1"
	/>
</div>
