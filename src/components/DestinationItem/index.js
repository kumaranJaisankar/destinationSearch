import './index.css'

const DestinationItem = props => {
  const {destinaionDetails} = props
  const {name, imgUrl} = destinaionDetails
  console.log('imgUrl')
  return (
    <li>
      <img src={imgUrl} className="img-size" alt={name} />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
