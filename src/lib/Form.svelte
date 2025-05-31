<script lang="ts">
</script>

<div class="w-full px-4 md:px-0 py-6 flex justify-center space-y-2">
  <div class="w-full flex flex-col justify-center">
    <h2 class="py-4 text-lg">Got an updated price, let us know</h2>
    <form name="contact" class="w-11/12 flex flex-col gap-2" netlify>
      <p class="py-2 w-full">
        <label class="w-full flex justify-between items-center">
          <span class="text-md w-1/5 font-semibold">Pub</span>
          <input
            type="text"
            name="pub"
            class="text-black bg-gray-100 w-4/5 p-2 px-4"
          />
        </label>
      </p>
      <p class="hidden py-2 w-full">
        <label class="w-full flex justify-between items-center">
          <span class="text-md w-1/5 font-semibold">Beer</span>
          <input
            type="text"
            name="beer"
            value="Beamish"
            class="text-black bg-gray-100 w-4/5 p-2 px-4"
          />
        </label>
      </p>
      <p class="py-2 w-full">
        <label class="w-full flex justify-between items-center">
          <span class="text-md w-1/5 font-semibold">Price</span>
          <input
            type="text"
            name="price"
            class="text-black bg-gray-100 w-4/5 p-2 px-4"
          />
        </label>
      </p>

      <p class="flex justify-center my-4">
        <button
          type="submit"
          class="rounded-lg py-2 px-6 bg-orange-600 hover:bg-orange-800 transition-colors"
          >Send</button
        >
      </p>
    </form>
  </div>
</div>
