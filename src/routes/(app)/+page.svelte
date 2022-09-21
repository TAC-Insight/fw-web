<script lang="ts">
	import { format } from 'date-fns';
	import type { LoadTicketQueryModel } from '$lib/apiClient';
	import Input from '$lib/components/Input.svelte';
	import { http } from '$lib/http';
	import { onMount } from 'svelte';

	let fromDate: string = format(new Date(), 'yyyy-MM-dd');
	let toDate: string = format(new Date(), 'yyyy-MM-dd');

	let tickets: LoadTicketQueryModel[] = [];

	const query = async () => {
		tickets = await http.loadTicket.query({ fromDate, toDate });
	};

	$: countOfTickets = tickets.length;
	$: sumOfNet = tickets.reduce((prevValue, ticket) => {
		return prevValue + (ticket.netWeight ?? 0);
	}, 0);
	$: distinctOrders = () => {
		let orders = new Set();
		tickets.forEach((ticket) => {
			orders.add(ticket.orderKey);
		});
		return orders.size;
	};
	$: distinctCustomers = () => {
		let customers = new Set();
		tickets.forEach((ticket) => {
			customers.add(ticket.customerKey);
		});
		return customers.size;
	};

	onMount(query);
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

	<section class="flex flex-col space-y-2">
		<div class="text-4xl font-bold leading-relaxed">
			There are <span class="bg-slate-300 px-2 rounded-xl">{countOfTickets} tickets</span> for a
			<span class="bg-slate-300 px-2 rounded-xl">total net of {countOfTickets}</span>, across
			<span class="bg-slate-300 px-2 rounded-xl"
				>{distinctOrders()}
				distinct orders</span
			>
			and
			<span class="bg-slate-300 px-2 rounded-xl"
				>{distinctCustomers()}
				distinct customers</span
			>.
		</div>
	</section>

	<pre>
	{JSON.stringify(tickets, null, 2)}
</pre>
</div>
