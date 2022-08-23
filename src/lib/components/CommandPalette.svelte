<script lang="ts">
	import { goto } from '$app/navigation';
	import { isCommandPaletteOpen } from '$lib/stores/commandPaletteStore';

	let searchTerm = '';

	interface Item {
		href: string;
		label: string;
		group: string;
	}
	const items: Item[] = [
		{ href: '/', label: 'Dashboard', group: 'Home' },
		{ href: '/resources/customers', label: 'Customers', group: 'Resources' },
		{ href: '/resources/products', label: 'Products', group: 'Resources' },
		{ href: '/resources/regions', label: 'Company Locations', group: 'Resources' },
		{ href: '/resources/salespeople', label: 'Salespeople', group: 'Resources' },
		{ href: '/resources/inspectors', label: 'Inspectors', group: 'Resources' },
		{ href: '/trucks', label: 'Trucks', group: 'Trucks' },
		{ href: '/trucks/haulers', label: 'Haulers', group: 'Trucks' },
		{ href: '/trucks/types', label: 'Truck Types', group: 'Trucks' },
		{ href: '/quotes/dashboard', label: 'Quotes Dashboard', group: 'Quotes' },
		{ href: '/quotes', label: 'Quotes List', group: 'Quotes' },
		{ href: '/quotes/projects', label: 'Projects', group: 'Quotes' },
		{ href: '/orders', label: 'Orders', group: 'Orders' }
	];

	let filteredItems: Item[] = items;
	const filterItems = () => {
		if (!searchTerm) filteredItems = items;
		filteredItems = items.filter((item) => {
			return (
				item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
				item.group.toLowerCase().includes(searchTerm.toLowerCase())
			);
		});
	};

	const reset = () => {
		searchTerm = '';
		filteredItems = items;
		$isCommandPaletteOpen = false;
	};

	const navigateToFirstItem = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			goto(filteredItems[0].href);
			reset();
		}
	};

	const navigateToItem = (item: Item) => {
		goto(item.href);
		reset();
	};
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
		class="w-screen h-screen fixed top-0 left-0 flex justify-center  bg-gray-500 opacity-95 z-10"
		on:click={() => ($isCommandPaletteOpen = false)}
	>
		<div
			class="bg-white absolute top-[10vh] rounded p-8  max-w-xl w-1/2 z-20"
			on:click|stopPropagation
		>
			<div class="text-xs text-right italic mb-1">
				Press enter to select top result. Or tab through and enter to select.
			</div>
			<!-- svelte-ignore a11y-autofocus -->
			<input
				bind:value={searchTerm}
				on:input={filterItems}
				on:keydown={navigateToFirstItem}
				autofocus
				type="text"
				class="w-full rounded text-lg ring-1 ring-slate-400/50 focus:ring-slate-400 border-0"
				placeholder="⚡Type to search..."
			/>
			<section class="max-h-72 overflow-auto p-2 font-semibold ">
				{#each filteredItems as item}
					<button
						on:click={() => navigateToItem(item)}
						class="w-full flex justify-between place-items-center p-1 rounded cursor-pointer hover:bg-blue-200"
					>
						<div>
							{item.label}
						</div>
						<div class="bg-slate-300 rounded-md text-xs p-1">
							{item.group}
						</div>
					</button>
				{/each}
			</section>
		</div>
	</div>
{/if}
