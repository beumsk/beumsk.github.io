export default function Codepen(props) {
  return (
    <div class="codepen-container">
      <p class="codepen" data-height="400" data-default-tab="result" data-slug-hash={props.pen} data-user="beumsk">
        <span>See the Pen <a href={"https://codepen.io/beumsk/pen/" + props.pen}>
        Memory</a> by Rémy Beumier (<a href="https://codepen.io/beumsk">@beumsk</a>)
        on <a href="https://codepen.io">CodePen</a>.</span>
      </p>
      <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
    </div>
  )
}