import { writable } from 'svelte/store';

interface Toast {
	title: string;
	message: string;
	type: 'info' | 'success' | 'danger' | 'warning';
	timeout?: number;
}

export const toastStore = writable<Toast | null>(null);

/**
 * Create a toast notification. Timeout defaults to 3 seconds
 */
export const createToast = (toast: Toast) => {
	if (!toast.timeout) toast.timeout = 3000;
	toastStore.update(() => toast);
	setTimeout(() => toastStore.set(null), toast.timeout);
};
