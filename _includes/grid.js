import Link from 'next/link'

export default function Grid(props) {
  const items = props.data.map((x) => {
    return (
      <Link href={x.link}>
        <a>
          <h2>{x.title}</h2>
          <img src={x.img} />
        </a>
      </Link>
    )
  });

  return (
    <div className="grid">
      {items}
    </div>
  )
}