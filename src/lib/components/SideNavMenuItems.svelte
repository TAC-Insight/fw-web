<script lang="ts">
	import { navStore } from '$lib/stores/navStore';
	import { sessionStore } from '$lib/stores/sessionStore';
	import { fly } from 'svelte/transition';
	import CashIcon from './icons/CashIcon.svelte';
	import ChartSquareBarIcon from './icons/ChartSquareBarIcon.svelte';
	import ClipboardIcon from './icons/ClipboardIcon.svelte';
	import ClipboardListIcon from './icons/ClipboardListIcon.svelte';
	import CodeIcon from './icons/CodeIcon.svelte';
	import CollectionIcon from './icons/CollectionIcon.svelte';
	import CurrencyDollarIcon from './icons/CurrencyDollarIcon.svelte';
	import HomeIcon from './icons/HomeIcon.svelte';
	import LocationMarkerIcon from './icons/LocationMarkerIcon.svelte';
	import MenuIcon from './icons/MenuIcon.svelte';
	import ShieldCheckIcon from './icons/ShieldCheckIcon.svelte';
	import TicketIcon from './icons/TicketIcon.svelte';
	import TruckIcon from './icons/TruckIcon.svelte';
	import NavLink from './NavLink.svelte';
	import SideNavMenuItem from './SideNavMenuItem.svelte';
</script>

<div class="my-4 flex-col space-y-2">
	<NavLink href="/">
		<HomeIcon class="h-4 w-4" />
		<span class="ml-2">Dashboard</span>
	</NavLink>

	<!-- Resources -->
	<SideNavMenuItem
		open={$navStore.isResourcesOpen}
		on:click={() => ($navStore.isResourcesOpen = !$navStore.isResourcesOpen)}
	>
		<span slot="title">Resources</span>
		<span slot="icon"><CollectionIcon /></span>
		<div slot="links">
			<NavLink href="/resources/customers">Customers</NavLink>
			<NavLink href="/resources/products">Products</NavLink>
			<NavLink href="/resources/regions">Company Locations</NavLink>
			<NavLink href="/resources/salespeople">Salespeople</NavLink>
			<NavLink href="/resources/inspectors">Inspectors</NavLink>
		</div>
	</SideNavMenuItem>

	<!-- Trucks -->
	<SideNavMenuItem
		open={$navStore.isTrucksOpen}
		on:click={() => ($navStore.isTrucksOpen = !$navStore.isTrucksOpen)}
	>
		<span slot="title">Trucks</span>
		<span slot="icon"><TruckIcon /></span>
		<div slot="links">
			<NavLink href="/trucks">Trucks</NavLink>
			<NavLink href="/trucks/haulers">Haulers</NavLink>
			<NavLink href="/trucks/types">Truck Types</NavLink>
		</div>
	</SideNavMenuItem>

	<!-- Quotes -->
	<SideNavMenuItem
		open={$navStore.isQuotesOpen}
		on:click={() => ($navStore.isQuotesOpen = !$navStore.isQuotesOpen)}
	>
		<span slot="title">Quotes</span>
		<span slot="icon"><ClipboardIcon /></span>
		<div slot="links">
			<NavLink href="/quotes/dashboard">Dashboard</NavLink>
			<NavLink href="/quotes">Quotes</NavLink>
			<NavLink href="/quotes/projects">Projects</NavLink>
		</div>
	</SideNavMenuItem>

	<!-- Orders -->
	<SideNavMenuItem
		open={$navStore.isOrdersOpen}
		on:click={() => ($navStore.isOrdersOpen = !$navStore.isOrdersOpen)}
	>
		<span slot="title">Orders</span>
		<span slot="icon"><ClipboardListIcon /></span>
		<div slot="links">
			<NavLink href="/orders">Orders</NavLink>
			<NavLink href="/orders/status">Status Update</NavLink>
			<NavLink href="/orders/jobs">Jobs/Phases</NavLink>
			<NavLink href="/orders/haulzones">Haul Zones</NavLink>
		</div>
	</SideNavMenuItem>

	<!-- Dispatch -->
	<SideNavMenuItem
		open={$navStore.isDispatchOpen}
		on:click={() => ($navStore.isDispatchOpen = !$navStore.isDispatchOpen)}
	>
		<span slot="title">Dispatch</span>
		<span slot="icon"><LocationMarkerIcon /></span>
		<div slot="links">
			<NavLink href="/requests">Requests</NavLink>
			<NavLink href="/requests/live">Live Tracking</NavLink>
			<NavLink href="/requests/query">Tracking Query</NavLink>
			<NavLink href="/requests/drivers">Drivers</NavLink>
		</div>
	</SideNavMenuItem>

	<!-- In Yard -->
	<SideNavMenuItem
		open={$navStore.isInYardOpen}
		on:click={() => ($navStore.isInYardOpen = !$navStore.isInYardOpen)}
	>
		<span slot="title">In-Yard</span>
		<span slot="icon"><ShieldCheckIcon /></span>
		<div slot="links">
			<NavLink href="/in-yard">In-Yard Now</NavLink>
			<NavLink href="/in-yard/history">History</NavLink>
		</div>
	</SideNavMenuItem>

	<!-- Tickets -->
	<SideNavMenuItem
		open={$navStore.isTicketsOpen}
		on:click={() => ($navStore.isTicketsOpen = !$navStore.isTicketsOpen)}
	>
		<span slot="title">Tickets</span>
		<span slot="icon"><TicketIcon /></span>
		<div slot="links">
			<NavLink href="/tickets">Ticket Query</NavLink>
			<NavLink href="/tickets/pod">Delivery Query</NavLink>
			<NavLink href="/tickets/entry">Ticket Entry</NavLink>
			<NavLink href="/tickets/import">Ticket Import</NavLink>
		</div>
	</SideNavMenuItem>

	<!-- Billing/AR -->
	<SideNavMenuItem
		open={$navStore.isBillingOpen}
		on:click={() => ($navStore.isBillingOpen = !$navStore.isBillingOpen)}
	>
		<span slot="title">Billing/AR</span>
		<span slot="icon"><CurrencyDollarIcon /></span>
		<div slot="links">
			<NavLink href="/billing">Billing</NavLink>
			<NavLink href="/billing/ar">Balance Dashboard</NavLink>
			<NavLink href="/billing/ar/payment">New Payment</NavLink>
			<NavLink href="/billing/ar/query">Invoice / Payment Query</NavLink>
			<NavLink href="/billing/ar/export">Payment Export</NavLink>
			<NavLink href="/billing/ar/credit">Customer Credit</NavLink>
			<NavLink href="/billing/setup">Billing Setup</NavLink>
		</div>
	</SideNavMenuItem>

	<!-- Billing/AR -->
	<SideNavMenuItem
		open={$navStore.isHaulerPayOpen}
		on:click={() => ($navStore.isHaulerPayOpen = !$navStore.isHaulerPayOpen)}
	>
		<span slot="title">Hauler Pay</span>
		<span slot="icon"><CashIcon /></span>
		<div slot="links">
			<NavLink href="/haulerpay">Statements</NavLink>
			<NavLink href="/haulerpay/adjustments">Truck Adjustments</NavLink>
			<NavLink href="/haulerpay/setup">Setup</NavLink>
		</div>
	</SideNavMenuItem>

	<!-- Reporting -->
	<SideNavMenuItem
		open={$navStore.isReportingOpen}
		on:click={() => ($navStore.isReportingOpen = !$navStore.isReportingOpen)}
	>
		<span slot="title">Reporting</span>
		<span slot="icon"><ChartSquareBarIcon /></span>
		<div slot="links">
			<NavLink href="/reports">Reports</NavLink>
			<NavLink href="/reports/scheduled">Scheduled Reports</NavLink>
			<NavLink href="/reports/analytics">Analytics</NavLink>
		</div>
	</SideNavMenuItem>

	<!-- Integrations -->
	<SideNavMenuItem
		open={$navStore.isIntegrationsOpen}
		on:click={() => ($navStore.isIntegrationsOpen = !$navStore.isIntegrationsOpen)}
	>
		<span slot="title">Integrations</span>
		<span slot="icon"><CodeIcon /></span>
		<div slot="links">
			<NavLink href="/integrations/apikeys">API Keys</NavLink>
			<NavLink href="/integrations/webhooks">Webhooks</NavLink>
		</div>
	</SideNavMenuItem>
</div>
