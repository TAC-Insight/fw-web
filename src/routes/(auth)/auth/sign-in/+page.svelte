<script lang="ts">
	import { sessionStore } from '$lib/stores/sessionStore';
	import { goto } from '$app/navigation';
	import Logo from '$lib/assets/logo.png';
	import Input from '$lib/components/Input.svelte';
	import { createToast } from '$lib/stores/toastStore';
	import { http } from '$lib/http';
	import type { LoginResponse } from '$lib/apiClient';

	let userID = '';
	let code = '';
	let session: LoginResponse;
	let isCodeSent = false;
	let isLoading = false;

	const handleSendCode = async () => {
		try {
			isLoading = true;
			session = await http.auth.login({ requestBody: { userID } });
			if (session.success) {
				isCodeSent = true;
				isLoading = false;
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
					'Check the userID field and try again. If the error persists please contact support.',
				type: 'danger',
				timeout: 8000
			});
		}
	};
	const handleSignInWithCode = async () => {
		try {
			isLoading = true;
			console.log(session);
			console.log(code);
			const signInWithCode = await http.auth.verifyLoginCode({
				requestBody: { sessionID: session.sessionID, code }
			});
			if (signInWithCode.success) {
				// set the session store
				$sessionStore = session;
				isLoading = false;
				await goto('/');
			} else {
				isLoading = false;
				console.error('Login failed:');
				console.error(signInWithCode.failure);
				console.error(signInWithCode.message);
				isCodeSent = false;
				createToast({
					title: 'Authentication error',
					message: signInWithCode?.message ?? 'Unknown error',
					type: 'warning',
					timeout: 8000
				});
			}
		} catch (error: any) {
			isLoading = false;
			isCodeSent = false;
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
			<h1 class="text-2xl font-bold">Fast-Weigh / Sign in</h1>
		</section>
		<section class="flex flex-col">
			<p><span class="font-bold text-sm">Step 1:</span> Enter your User ID</p>
			<p><span class="font-bold text-sm">Step 2:</span> Check your email/phone for code</p>
			<p><span class="font-bold text-sm">Step 3:</span> Enter the code to sign in</p>
		</section>

		<section>
			{#if !isCodeSent}
				<form on:submit|preventDefault={handleSendCode}>
					<fieldset disabled={isLoading} class="flex flex-col space-y-2 disabled:opacity-40">
						<Input label="User ID:" type="text" bind:value={userID} required autofocus />

						<button
							type="submit"
							class="rounded bg-gradient-to-t from-blue-900 to-blue-500 p-2 font-semibold text-white hover:opacity-75  "
						>
							Send code
						</button>
					</fieldset>
				</form>
			{:else}
				<form on:submit|preventDefault={handleSignInWithCode}>
					<fieldset disabled={isLoading} class="flex flex-col space-y-2 disabled:opacity-40">
						<Input label="Code:" type="text" bind:value={code} required autofocus />

						<button
							type="submit"
							class="rounded bg-gradient-to-t from-blue-900 to-blue-500 p-2 font-semibold text-white hover:opacity-75  "
						>
							Sign in with code
						</button>
					</fieldset>
				</form>
			{/if}
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
