<script lang="ts">
	import { sessionStore } from '$lib/stores/sessionStore';
	import { goto } from '$app/navigation';
	import Logo from '$lib/assets/logo.png';
	import Input from '$lib/components/Input.svelte';
	import Link from '$lib/components/Link.svelte';
	import { createToast } from '$lib/stores/toastStore';
	import { http } from '$lib/http';

	let userID = '';
	let password = '';
	let isLoading = false;

	const handleSignIn = async () => {
		try {
			isLoading = true;
			const session = await http.auth.login({ requestBody: { userID, password } });
			if (session.success) {
				// set the session store
				$sessionStore = session;
				isLoading = false;
				await goto('/');
			} else {
				isLoading = false;
				console.error('Login failed:', session.message);
				createToast({
					title: 'Authentication error',
					message: session?.message ?? 'Unknown error',
					type: 'warning',
					timeout: 8000
				});
			}
		} catch (error: any) {
			isLoading = false;
			console.log('Unknown error:', error);
			createToast({
				title: 'Authentication error',
				message:
					'Check the user/password fields and try again. If the error persists please contact support.',
				type: 'danger',
				timeout: 8000
			});
		}
	};
</script>

<div class="grid h-screen place-items-center">
	<div
		class="flex flex-col space-y-4 rounded bg-gradient-to-t from-slate-300 to-gray-300 p-8 shadow-2xl"
	>
		<section class="flex place-items-center space-x-2">
			<img src={Logo} class="wiggle h-8 w-8" alt="FW Road Logo" />
			<h1 class="text-2xl font-bold">Fast-Weigh / Log in</h1>
		</section>

		<section>
			<form on:submit|preventDefault={handleSignIn}>
				<fieldset disabled={isLoading} class="flex flex-col space-y-2 disabled:opacity-40">
					<Input label="User ID:" type="text" bind:value={userID} required autofocus />
					<Input label="Password:" type="password" bind:value={password} required />

					<button
						type="submit"
						class="rounded bg-gradient-to-t from-blue-900 to-blue-500 p-2 font-semibold text-white hover:opacity-75  "
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

<style>
	@keyframes wiggle {
		0% {
			transform: rotate(0deg);
		}
		80% {
			transform: rotate(0deg);
		}
		85% {
			transform: rotate(14deg);
		}
		95% {
			transform: rotate(-14deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	.wiggle {
		animation: wiggle 2.5s infinite;
	}
</style>
