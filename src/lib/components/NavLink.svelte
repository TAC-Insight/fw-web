<script lang="ts">
	export let href: string = '#';
</script>

<a
	{href}
	class="flex place-items-center rounded p-1 text-sm font-semibold text-blue-800 hover:bg-slate-200/50"
>
	<slot />
</a>
