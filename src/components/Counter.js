import { h } from 'hyperapp';
import Description from './Decsription';

export default ({ num }, { add, sub }) => (
  <div class="counter">
    <Description />
    <section>
      <button class="sub" onclick={sub} disabled={num < 1}>
        -
      </button>
      <h1 class="count">{num}</h1>
      <button class="add" onclick={add}>
        +
      </button>
    </section>
  </div>
);
