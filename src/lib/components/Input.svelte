<script lang="ts">
	export let type: 'text' | 'password' = 'text';
	export let value: string | number = '';
	export let label: string = '';
	export let placeholder: string = '';
	export let required: boolean = false;
	export let autoFocus: boolean = false;

	let id = `field-${Math.floor(Math.random() * 1000)}`;
	function handleInput(e: any) {
		value = e?.target?.value;
	}
</script>

{#if label}
	<label for={id} class="text-sm font-semibold">
		{label}
		{#if required}<span class="text-red-500">*</span>{/if}
	</label>
{/if}
<!-- svelte-ignore a11y-autofocus -->
<input {id} {type} {placeholder} {autoFocus} on:input={handleInput} class="rounded p-1" />
