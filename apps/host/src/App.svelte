<script lang="ts">
  import DynamicComponent from "./lib/DynamicComponent.svelte";

  let componentImport = import("remote/remote-app");
</script>

<h1>HOST</h1>
<DynamicComponent {componentImport} />
