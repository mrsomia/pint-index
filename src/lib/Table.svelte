<script lang="ts">
  import { type Pub } from "./pubs";
  let { pubs, beer }: { pubs: Pub[]; beer: string } = $props();
</script>

<div class="w-full flex justify-center">
  <div class="rounded-lg">
    <h2 class="text-xl py-8">How much does a {beer} cost?</h2>
    <table class="w-full mx-4 rounded-lg">
      <thead>
        <tr class="bg-slate-700">
          <th
            class="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
          >
            Pub
          </th>
          <th
            class="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
          >
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        {#each pubs as pub, idx}
          <tr class={idx % 2 == 0 ? "bg-gray-800" : "bg-gray-700"}>
            <td class="px-6 py-4">
              <div class="flex items-center space-x-3">
                {#if pub.url}
                  <a
                    href={pub.url ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-orange-400 hover:text-orange-300 font-medium transition-colors"
                  >
                    {pub.name}
                  </a>
                {:else}
                  <span class="text-gray-100 font-medium">
                    {pub.name}
                  </span>
                {/if}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=123%20High%20Street%2C%20London"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center"
                  title="View 123 High Street, London on map"
                  aria-label={`${pub.name} on Google Maps`}
                >
                  <svg
                    class="w-4 h-4 text-red-500 hover:text-red-400 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                </a>
              </div>
            </td>

            <td class="px-6 py-4 text-sm text-gray-100 font-medium">
              €{pub.price.toFixed(2)}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
