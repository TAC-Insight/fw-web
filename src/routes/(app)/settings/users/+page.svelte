<script lang="ts">
	import { IdentityService, type UserModel } from '$lib/apiClient';

	import Input from '$lib/components/Input.svelte';
	import Select from '$lib/components/Select.svelte';
	import { http } from '$lib/http';
	import type { PageData } from './$types';
	const users = http.identity.getUsers();
</script>

<h1 class="text-2xl font-bold mb-4">Users</h1>

<div class="flex justify-between w-full place-items-center mb-4">
	<div class="flex space-x-2">
		<Input type="text" label="Search" />
	</div>
	<a
		href="/settings/users/new"
		class="p-2 rounded bg-gradient-to-t from-teal-600 to-teal-500 text-white font-bold h-fit"
		>+ New User</a
	>
</div>
{#await users}
	<div>waiting</div>
{:then data}
	<pre>{JSON.stringify(data, null, 2)}</pre>
{/await}
