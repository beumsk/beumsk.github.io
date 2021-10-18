export default function Codepen(props) {
  return (
    <>
      <p className="codepen" data-default-tab="result" data-slug-hash={props.pen} data-user="beumsk">
        <span><a href={"https://codepen.io/beumsk/pen/" + props.pen}>See the Pen</a> by <a href="https://codepen.io/beumsk">Rémy Beumier</a>.</span>
      </p>
      <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
    </>
  )
}