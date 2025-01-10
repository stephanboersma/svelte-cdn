<script lang="ts">
    export let componentImport;
</script>

{#await componentImport}
    <div>Loading...</div>
{:then Component}
    <Component.default />
{:catch error}
    <div>Error loading component: {error.message}</div>
{/await}
