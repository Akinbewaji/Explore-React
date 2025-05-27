import "./CarCards.css"
import CarPic from "./CarPic"
import CusButton from "./CusButton"

const CarCards = ({pictures}) => {

  const buyNow = () =>{
    alert("You have bought the car successfully")
  }

  return (
    <div className='card'>
        <CarPic pictures={pictures}/>
        <p className="firstText">{carText}</p>
        <p className="secondText">{carText2}</p>
        <CusButton btnAction={buyNow} btnBg="blue" btnW="100%">Buy Now</CusButton>
    </div>
  )
}

export default CarCards