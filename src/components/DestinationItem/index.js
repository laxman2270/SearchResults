import './index.css'

const DestinationItem = props => {
  const {Data} = props
  const {name, imgUrl} = Data

  return (
    <li className="list">
      <img className="img-2" src={imgUrl} alt={name} />
      <p className="p">{name}</p>
    </li>
  )
}

export default DestinationItem
