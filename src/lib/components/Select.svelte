<script lang="ts">
	export let options: string[];
	export let value: string;
	export let label: string = '';
	let id = `field-${Math.floor(Math.random() * 1000)}`;
</script>

<div class="flex flex-col">
	{#if label}
		<label for={id} class="text-sm font-semibold">
			{label}
		</label>
	{/if}
	<select bind:value class="py-1 rounded">
		{#each options as option}
			<option>{option}</option>
		{/each}
	</select>
</div>
