import './index.css'

const SparePartsCard =  props => {
    const {itemDetails, onClickPart} = props
    const { id, title, imageUrl} = itemDetails 

    const onClickImg = () => {
      onClickPart(id)
    }
    return (
        <li className='spares-item'>
        <img src={imageUrl} alt={title} className='spare-image' onClick={onClickImg} />
        
        <h1 className='spares-title'>{title}</h1>
        </li>
    )
}

export default SparePartsCard 