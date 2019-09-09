<script context="module">
  export async function preload(ctx) {
    let incr = bindAction(counterIncr)

    incr()

    await new Promise(r => setTimeout(f => f(), 100, r))

    await store.completeSaga()

    return { state: store.getState() }
  }
</script>

<script>
  import { bindAction, store } from '../store'
  import { counterIncr } from '../ducks/counter'

  export let segment, state
</script>

<main>
  <slot />
</main>
