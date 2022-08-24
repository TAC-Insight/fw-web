<script lang="ts">
	import { sessionStore } from '$lib/stores/sessionStore';
	import { goto } from '$app/navigation';
	import Logo from '$lib/assets/logo.png';
	import Input from '$lib/components/Input.svelte';
	import Link from '$lib/components/Link.svelte';
	import getApiClient from '$lib/getApiClient';

	let userID = '';
	let password = '';
	let isLoading = false;

	const handleSignIn = async () => {
		try {
			isLoading = true;
			const api = await getApiClient();
			const session = await api.auth.login({ requestBody: { userID, password } });
			if (session.success) {
				// set the session store
				$sessionStore = session;
				isLoading = false;
				await goto('/');
			} else {
				isLoading = false;
				console.error('Login failed:', session.message);
				alert(session?.message ?? 'Login failed');
			}
		} catch (error: any) {
			console.log('Unknown error:', error);
			alert('Unknown error...');
		}
	};
</script>

<div class="grid h-screen place-items-center">
	<div
		class="flex-flex-col space-y-4 rounded bg-gradient-to-t from-slate-300 to-gray-300 p-8 shadow-2xl"
	>
		<section class="flex space-x-2">
			<img src={Logo} height={32} width={32} alt="FW Road Logo" />
			<h1 class="text-2xl font-bold">Fast-Weigh / Log in</h1>
		</section>

		<section>
			<form on:submit|preventDefault={handleSignIn}>
				<fieldset disabled={isLoading} class="flex flex-col space-y-2 disabled:opacity-40">
					<Input label="User ID:" type="text" bind:value={userID} required autoFocus />
					<Input label="Password:" type="password" bind:value={password} required />

					<button
						type="submit"
						class="rounded bg-gradient-to-tr from-blue-500 to-emerald-500 p-2 font-semibold text-white hover:opacity-75  "
					>
						Log in
					</button>
				</fieldset>
			</form>
		</section>

		<section class="text-center text-sm font-semibold">
			<Link href="/auth/forgot-password">Forgot password?</Link>
		</section>
	</div>
</div>
