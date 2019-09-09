<script context="module">
  export async function preload(ctx) {
    let incr = bindAction(counterIncr)

    incr()
  }
</script>

<script>
  import { store, bindAction } from '../store'
  import {
    counterIncr,
    counterDecr,
    counterSelector,
    clicksSelector
  } from '../ducks/counter'

  const incr = bindAction(counterIncr)
  const decr = bindAction(counterDecr)

  $: clicks = clicksSelector($store)
  $: counter = counterSelector($store)
</script>

<svelte:head>
  <title>index</title>
</svelte:head>

<section class="hello">
  {counter}
  <button on:click={incr}>Count +</button>
  <button on:click={decr}>Count -</button>
</section>

<div>Total clicks: {clicks}</div>

<a rel="prefetch" href="/about">about</a>
