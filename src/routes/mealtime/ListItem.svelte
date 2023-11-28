<script lang="ts">
  import type { Resource } from "../../data/resources";
  import AvatarInitials from "./AvatarInitials.svelte";

  export let resource: Resource;
  const { title, description, url, imageUrl } = resource;
</script>

<a href={url} target="_blank" rel="noreferrer">
  <div
    class="border-mealtime-primary bg-mealtime-bg rounded-xl py-2 px-2 shadow-lg border border-b-8 flex "
  >
    <!-- <div class="flex-none mt-1">
      {#if imageUrl}
        <img
          src={imageUrl}
          class="h-12 w-12  md:h-20 md:w-20"
          alt={`${title} logo`}
        />
      {:else}
        <AvatarInitials {title} />
      {/if}
    </div> -->
    <div class="px-1 py-4 grow md:px-4 mt-1.5">
      {#if imageUrl}
        <img
          src={imageUrl}
          class="h-12 w-12 mx-auto md:h-20 md:w-20"
          alt={`${title} logo`}
        />
      {:else}
        <AvatarInitials {title} />
      {/if}
      <h1 class="text-xl md:text-xl text-center text-mealtime-primary pt-4 ">{title}</h1>
      <!-- <p class="text-xs md:text-lg text-gray-600">{description}</p> -->
    </div>
  </div>
</a>
