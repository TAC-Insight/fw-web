<script lang="ts">
	import { sessionStore } from '$lib/stores/sessionStore';
</script>

<h1>Home</h1>
<pre>
	{JSON.stringify($sessionStore, null, 2)}
</pre>
