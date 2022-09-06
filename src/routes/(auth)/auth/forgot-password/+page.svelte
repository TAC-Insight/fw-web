<script lang="ts">
	import { goto } from '$app/navigation';
	import Logo from '$lib/assets/logo.png';
	import Input from '$lib/components/Input.svelte';
	import Link from '$lib/components/Link.svelte';
	import { http } from '$lib/http';

	let userID = '';
	let code = '';
	let password1 = '';
	let password2 = '';
	let isCodeSent = false;
	let isLoading = false;

	const handleSendCode = async () => {
		try {
			isCodeSent = true;
		} catch (error: any) {
			console.log('Unknown error:', error);
			alert('Unknown error...');
		}
	};
	const handleSubmitCodeAndNewPassword = async () => {
		try {
			isLoading = true;
			goto('/auth/sign-in');
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
			<h1 class="text-2xl font-bold">Fast-Weigh / Forgot PW</h1>
		</section>

		<section>
			{#if !isCodeSent}
				<form on:submit|preventDefault={handleSendCode}>
					<fieldset disabled={isLoading} class="flex flex-col space-y-2 disabled:opacity-40">
						<Input label="User ID:" type="text" bind:value={userID} required autoFocus />

						<button
							type="submit"
							class="rounded bg-gradient-to-t from-blue-800 to-blue-500 p-2 font-semibold text-white hover:opacity-75  "
						>
							Send reset code to my email
						</button>
					</fieldset>
				</form>
			{:else}
				<form on:submit|preventDefault={handleSubmitCodeAndNewPassword}>
					<fieldset disabled={isLoading} class="flex flex-col space-y-2 disabled:opacity-40">
						<Input label="Code:" type="text" bind:value={code} required />
						<Input label="New Password:" type="password" bind:value={password1} required />
						<Input label="Confirm New Password:" type="password" bind:value={password2} required />

						<button
							type="submit"
							class="rounded bg-gradient-to-t from-blue-800 to-blue-500 p-2 font-semibold text-white hover:opacity-75  "
						>
							Reset my password
						</button>
					</fieldset>
				</form>
			{/if}
		</section>
		<section class="text-center text-sm font-semibold">
			<Link href="/auth/sign-in">Know your password? Sign in!</Link>
		</section>
	</div>
</div>
