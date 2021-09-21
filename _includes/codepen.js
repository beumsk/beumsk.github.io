export default function Codepen(props) {
  return (
    <div class="codepen-container">
      <p class="codepen" data-height="400" data-default-tab="result" data-slug-hash={props.pen} data-user="beumsk">
        <span>See the Pen <a href={"https://codepen.io/beumsk/pen/" + props.pen}>
        Memory</a> by <a href="https://codepen.io/beumsk">Rémy Beumier</a>.</span>
      </p>
      <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
    </div>
  )
}