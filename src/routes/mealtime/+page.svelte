<script>
  import Hero from "../Hero.svelte";
  import Listing from "../Listing.svelte";
</script>

<Hero />
<div class="p-4">
  <Listing />
</div>
<div class="text-center pb-8">
  <p class="mb-2">Follow us on: </p>
  <div class="flex justify-center ">
    <a href="https://instagram.com/sunnahway.kids" target="_blank" rel="noreferrer">
      <img
        src="/instagram.webp"
        class="h-8 w-8 mx-2"
        alt={`instagram logo`}
      />
    </a>
    <a href="https://tiktok.com/sunnahway.kids" target="_blank" rel="noreferrer">
      <img
        src="/tiktok.webp"
        class="h-8 w-8 mx-2"
        alt={`tiktok logo`}
      />
    </a>
  </div>
</div>
