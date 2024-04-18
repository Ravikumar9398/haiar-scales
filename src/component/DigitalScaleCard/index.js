import './index.css'

const DigitalScalesCard = props => {
   const {itemDetails, onClickPart} = props 
   const { imageUrl, name} = itemDetails 

   const onClickImg = () => {
    onClickPart(imageUrl)
  }
   return (
    <li className='spares-item'>
    <img src={imageUrl} alt={name} className='spare-image' onClick={onClickImg} />
    
    <h1 className='spares-title m-2'>{name}</h1>
    </li>
   )
}

export default DigitalScalesCard