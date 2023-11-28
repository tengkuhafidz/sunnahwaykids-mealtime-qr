<script>
  import { resources } from "../data/resources";
  import ListItem from "./ListItem.svelte";
</script>

<div
  class="grid grid-cols-2 gap-6 lg:gap-6 py-4 max-w-xl mx-auto"
>
  {#each resources as resource}
    <ListItem {resource} />
  {/each}
</div>
