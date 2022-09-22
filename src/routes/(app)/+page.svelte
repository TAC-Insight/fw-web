<script lang="ts">
	import { format, subDays } from 'date-fns';
	import type { GridOptions, Grid as GridType, GridApi } from 'ag-grid-enterprise';
	import type { LoadTicketQueryModel } from '$lib/apiClient';
	import Input from '$lib/components/Input.svelte';
	import { http } from '$lib/http';
	import { onDestroy, onMount } from 'svelte';

	// Grid setup
	let gridRef: HTMLElement;
	let grid: GridType;
	let api: GridApi;
	let gridOptions: GridOptions<LoadTicketQueryModel> = {
		sideBar: 'columns',
		rowHeight: 25,
		defaultColDef: {
			sortable: true,
			resizable: true,
			filter: true,
			pivot: true,
			enableRowGroup: true
		},
		columnDefs: [
			{ field: 'ticketNumber', aggFunc: 'count' },
			{ field: 'ticketDate' },
			{ field: 'netWeight' },
			{ field: 'regionName' },
			{ field: 'locationName' },
			{ field: 'customerID' },
			{ field: 'customerName' },
			{ field: 'orderNumber' },
			{ field: 'orderDescription' },
			{ field: 'productID' },
			{ field: 'productDescription' },
			{ field: 'truckID' },
			{ field: 'haulerID' },
			{ field: 'haulerName' }
		]
	};
	const onGridReady = () => {
		// @ts-ignore
		api = grid.gridOptions.api;
	};
	const updateData = (tickets: LoadTicketQueryModel[]) => {
		if (grid && api) {
			api.setRowData(tickets);
		}
	};
	$: updateData(tickets);

	// Query params
	let fromDate: string = format(subDays(new Date(), 7), 'yyyy-MM-dd');
	let toDate: string = format(new Date(), 'yyyy-MM-dd');

	// Ticket Data
	let tickets: LoadTicketQueryModel[] = [];

	const query = async () => {
		if (api) api.showLoadingOverlay();
		tickets = await http.loadTicket.query({ fromDate, toDate });
		if (api) api.hideOverlay();
	};

	// Card aggregate functions
	$: countOfTickets = tickets.length.toLocaleString();
	$: sumOfNet = parseFloat(
		tickets
			.reduce((prevValue, ticket) => {
				return prevValue + (ticket.netWeight ?? 0);
			}, 0)
			.toFixed(2)
	).toLocaleString();
	$: distinctCounts = () => {
		let customers = new Set();
		let orders = new Set();
		let haulers = new Set();
		let trucks = new Set();
		tickets.forEach((ticket) => {
			customers.add(ticket.customerKey);
			orders.add(ticket.orderKey);
			haulers.add(ticket.haulerID);
			trucks.add(ticket.truckKey);
		});
		return {
			customers: customers.size.toLocaleString(),
			orders: orders.size.toLocaleString(),
			haulers: haulers.size.toLocaleString(),
			trucks: trucks.size.toLocaleString()
		};
	};

	onMount(async () => {
		const { Grid } = await import('ag-grid-enterprise');
		grid = new Grid(gridRef, {
			...gridOptions,
			rowData: tickets,
			onGridReady
		});
		query();
	});
	onDestroy(() => {
		if (grid) {
			grid.destroy();
		}
	});
</script>

<div class="flex flex-col space-y-2">
	<section class="flex space-x-2">
		<h1 class="text-3xl font-bold">Dashboard</h1>
		<button class="bg-teal-500 px-4 rounded text-white font-bold" on:click={query}>Refresh</button>
	</section>

	<section class="flex space-x-2">
		<Input label="From Date:" type="date" bind:value={fromDate} defaultValue={fromDate} />
		<Input label="To Date:" type="date" bind:value={toDate} defaultValue={toDate} />
	</section>

	<section class="grid xl:grid-cols-6 sm:grid-cols-3 gap-4">
		<div class="bg-slate-300 p-4 text-center rounded-xl">
			<h1 class="text-2xl font-bold mb-2">Tickets</h1>
			<p class="text-xl font-semibold">{countOfTickets}</p>
		</div>
		<div class="bg-slate-300 p-4 text-center rounded-xl">
			<h1 class="text-2xl font-bold mb-2">Total Net</h1>
			<p class="text-xl font-semibold">{sumOfNet}</p>
		</div>

		<div class="bg-slate-300 p-4 text-center rounded-xl">
			<h1 class="text-2xl font-bold mb-2">Orders</h1>
			<p class="text-xl font-semibold">{distinctCounts().orders}</p>
		</div>
		<div class="bg-slate-300 p-4 text-center rounded-xl">
			<h1 class="text-2xl font-bold mb-2">Customers</h1>
			<p class="text-xl font-semibold">{distinctCounts().customers}</p>
		</div>
		<div class="bg-slate-300 p-4 text-center rounded-xl">
			<h1 class="text-2xl font-bold mb-2">Haulers</h1>
			<p class="text-xl font-semibold">{distinctCounts().haulers}</p>
		</div>
		<div class="bg-slate-300 p-4 text-center rounded-xl">
			<h1 class="text-2xl font-bold mb-2">Trucks</h1>
			<p class="text-xl font-semibold">{distinctCounts().trucks}</p>
		</div>
	</section>

	<section>
		<div bind:this={gridRef} class="ag-theme-alpine h-96 w-full" />
	</section>
</div>
