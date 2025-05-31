<script lang="ts">
  import Form from "./lib/Form.svelte";
  import Table from "./lib/Table.svelte";
  import { pubs } from "./lib/pubs";
</script>

<main class="bg-slate-900 text-white h-screen w-screen">
  <div class="flex justify-center items-center">
    <h1 class="text-3xl px-2 py-12 uppercase">Cork Pint Index</h1>
  </div>
  <Table {pubs} beer={"Beamish"} />
  <Form />
</main>
