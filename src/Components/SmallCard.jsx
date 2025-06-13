import './SmallCard.css'

const SmallCard = ({pictures,  carText2}) => {
  return (
    <div className='smallCard'>
       <p className="secondText">{carText2}</p>
    </div>
  )
}

export default SmallCard