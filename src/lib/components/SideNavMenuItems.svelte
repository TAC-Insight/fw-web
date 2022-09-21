<script lang="ts">
	import { hasEntityPermission, hasTenantPermission, isAdminOrSuperUser } from '$lib/auth';

	import { navFavoritesStore, navStore } from '$lib/stores/navStore';
	import CashIcon from './icons/CashIcon.svelte';
	import ChartSquareBarIcon from './icons/ChartSquareBarIcon.svelte';
	import ClipboardIcon from './icons/ClipboardIcon.svelte';
	import ClipboardListIcon from './icons/ClipboardListIcon.svelte';
	import CodeIcon from './icons/CodeIcon.svelte';
	import Cog6Tooth from './icons/Cog6Tooth.svelte';
	import CollectionIcon from './icons/CollectionIcon.svelte';
	import CurrencyDollarIcon from './icons/CurrencyDollarIcon.svelte';
	import HomeIcon from './icons/HomeIcon.svelte';
	import LocationMarkerIcon from './icons/LocationMarkerIcon.svelte';
	import ShieldCheckIcon from './icons/ShieldCheckIcon.svelte';
	import Star from './icons/Star.svelte';
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

	<!-- Favorites -->
	<SideNavMenuItem
		open={$navStore.isFavoritesOpen}
		on:click={() => ($navStore.isFavoritesOpen = !$navStore.isFavoritesOpen)}
	>
		<span slot="title">Favorites</span>
		<span slot="icon"><Star class="text-yellow-300" fill="currentColor" /></span>
		<div slot="links">
			{#each $navFavoritesStore as fav}
				<NavLink href={fav.href}>{fav.title}</NavLink>
			{/each}
		</div>
	</SideNavMenuItem>

	<!-- Resources -->
	<SideNavMenuItem
		open={$navStore.isResourcesOpen}
		on:click={() => ($navStore.isResourcesOpen = !$navStore.isResourcesOpen)}
	>
		<span slot="title">Resources</span>
		<span slot="icon"><CollectionIcon /></span>
		<div slot="links">
			<NavLink disabled={!hasEntityPermission('Customer')} href="/resources/customers"
				>Customers</NavLink
			>
			<NavLink disabled={!hasEntityPermission('Product')} href="/resources/products"
				>Products</NavLink
			>
			<NavLink disabled={!hasEntityPermission('TaxCode')} href="/resources/taxcodes"
				>Tax Codes</NavLink
			>
			<NavLink disabled={!hasTenantPermission('Inventory')} href="/resources/inventory"
				>Inventory</NavLink
			>
			<NavLink disabled={!hasEntityPermission('Region')} href="/resources/regions"
				>Company Locations</NavLink
			>
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
			<NavLink disabled={!hasEntityPermission('Truck')} href="/trucks">Trucks</NavLink>
			<NavLink disabled={!hasEntityPermission('Hauler')} href="/trucks/haulers">Haulers</NavLink>
			<NavLink disabled={!hasEntityPermission('Truck')} href="/trucks/types">Truck Types</NavLink>
		</div>
	</SideNavMenuItem>

	<!-- Quotes -->
	{#if hasTenantPermission('Quote System')}
		<SideNavMenuItem
			open={$navStore.isQuotesOpen}
			on:click={() => ($navStore.isQuotesOpen = !$navStore.isQuotesOpen)}
		>
			<span slot="title">Quotes</span>
			<span slot="icon"><ClipboardIcon /></span>
			<div slot="links">
				<NavLink disabled={!hasEntityPermission('Quote')} href="/quotes/dashboard"
					>Dashboard</NavLink
				>
				<NavLink disabled={!hasEntityPermission('Quote')} href="/quotes">Quotes</NavLink>
				<NavLink disabled={!hasEntityPermission('Quote')} href="/quotes/projects">Projects</NavLink>
			</div>
		</SideNavMenuItem>
	{/if}

	<!-- Orders -->
	<SideNavMenuItem
		open={$navStore.isOrdersOpen}
		on:click={() => ($navStore.isOrdersOpen = !$navStore.isOrdersOpen)}
	>
		<span slot="title">Orders</span>
		<span slot="icon"><ClipboardListIcon /></span>
		<div slot="links">
			<NavLink disabled={!hasEntityPermission('Order')} href="/orders">Orders</NavLink>
			<NavLink disabled={!hasEntityPermission('Order')} href="/orders/status">Status Update</NavLink
			>
			<NavLink disabled={!hasEntityPermission('Order')} href="/orders/jobs">Jobs/Phases</NavLink>
			<NavLink disabled={!hasEntityPermission('Order')} href="/orders/haulzones">Haul Zones</NavLink
			>
		</div>
	</SideNavMenuItem>

	<!-- Dispatch -->
	{#if hasTenantPermission('Requests')}
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
	{/if}

	<!-- In Yard -->
	{#if hasTenantPermission('Fast Load')}
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
	{/if}

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
	{#if hasTenantPermission('Billing')}
		<SideNavMenuItem
			open={$navStore.isBillingOpen}
			on:click={() => ($navStore.isBillingOpen = !$navStore.isBillingOpen)}
		>
			<span slot="title">Billing/AR</span>
			<span slot="icon"><CurrencyDollarIcon /></span>
			<div slot="links">
				<NavLink href="/billing">Billing</NavLink>
				<NavLink disabled={!hasTenantPermission('Accounts Receivable')} href="/billing/ar"
					>Balance Dashboard</NavLink
				>
				<NavLink disabled={!hasTenantPermission('Accounts Receivable')} href="/billing/ar/payment"
					>New Payment</NavLink
				>
				<NavLink disabled={!hasTenantPermission('Accounts Receivable')} href="/billing/ar/query"
					>Invoice / Payment Query</NavLink
				>
				<NavLink disabled={!hasTenantPermission('Accounts Receivable')} href="/billing/ar/export"
					>Payment Export</NavLink
				>
				<NavLink disabled={!hasTenantPermission('Accounts Receivable')} href="/billing/ar/credit"
					>Customer Credit</NavLink
				>
				<NavLink href="/billing/setup">Billing Setup</NavLink>
			</div>
		</SideNavMenuItem>
	{/if}

	<!-- Hauler Pay -->
	{#if hasTenantPermission('Hauler Pay')}
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
	{/if}

	<!-- Reporting -->
	<SideNavMenuItem
		open={$navStore.isReportingOpen}
		on:click={() => ($navStore.isReportingOpen = !$navStore.isReportingOpen)}
	>
		<span slot="title">Reporting</span>
		<span slot="icon"><ChartSquareBarIcon /></span>
		<div slot="links">
			<NavLink href="/reports">Reports</NavLink>
			<NavLink disabled={!hasTenantPermission('Scheduled Reports')} href="/reports/scheduled">
				Scheduled Reports
			</NavLink>
			<NavLink disabled={!hasTenantPermission('Analytics')} href="/reports/analytics">
				Analytics
			</NavLink>
		</div>
	</SideNavMenuItem>

	<!-- Integrations -->
	{#if hasTenantPermission('API')}
		<SideNavMenuItem
			open={$navStore.isIntegrationsOpen}
			on:click={() => ($navStore.isIntegrationsOpen = !$navStore.isIntegrationsOpen)}
		>
			<span slot="title">Integrations</span>
			<span slot="icon"><CodeIcon /></span>
			<div slot="links">
				<NavLink href="/integrations/apikeys">API Keys</NavLink>
				<NavLink disabled={!hasTenantPermission('Webhooks')} href="/integrations/webhooks">
					Webhooks
				</NavLink>
			</div>
		</SideNavMenuItem>
	{/if}

	<!-- Setup / Config -->
	<SideNavMenuItem
		open={$navStore.isSetupOpen}
		on:click={() => ($navStore.isSetupOpen = !$navStore.isSetupOpen)}
	>
		<span slot="title">Setup</span>
		<span slot="icon"><Cog6Tooth /></span>
		<div slot="links">
			<NavLink href="/settings/user">User settings</NavLink>
			<NavLink disabled={!isAdminOrSuperUser()} href="/settings/company">Company settings</NavLink>
			<NavLink disabled={!isAdminOrSuperUser()} href="/settings/users">Company users</NavLink>
			<NavLink disabled={!hasTenantPermission('Notifications')} href="/settings/notifications">
				Notifications
			</NavLink>
		</div>
	</SideNavMenuItem>
</div>
