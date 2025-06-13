import { useState } from "react";
import "./App.css";
import CarCards from "./Components/CarCards";
import CusButton from "./Components/CusButton";
import SmallCard from "./Components/SmallCard";

const App = () => {
  const handleLogin = () =>
    alert("You have logged in successfully");
  
  const handleSignUp = () =>
    alert("You have signed up successfully");

  // count state
  // const [getter, setter] = useState(default)
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }
  
  const handleDecrement = () => {
    setCount(count - 1);
  }



  return (
    <>
      {/* <div>
        <CusButton btnAction={handleLogin} btnBg="blue">Sign In</CusButton>
        <CusButton btnAction={handleSignUp} btnBg="orange" boRad="10px">Sign Up</CusButton>
      </div> */}

      <div>
        <h2>Count = {count}</h2>
        
        <button onClick={handleIncrement}>
          Increment
        </button>

        <button onClick={handleDecrement}>
          Decrement
        </button>

      </div>

     <div className="small-card">
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>

        </div>

      <div className="grid">
        <CarCards pictures="./images/BMW_Logo.png" carText2="BMW Logo" carText="Welcome to BMW"/>
        <CarCards pictures="./images/bmw_3_series.png" carText2="BMW 3 Series" carText="Welcome to BMW"/>
        <CarCards pictures="./images/bmw_X6_series.png" carText2="BMW X6 Series" carText="Welcome to BMW"/>
        <CarCards pictures="./images/New_BMW_Cars.png" carText2="Brand new BMW cars" carText="Welcome to BMW"/>
        <CarCards pictures="./images/The_BMW_M_Series.png" carText2="The BMW M Series" carText="Welcome to BMW"/>
        <CarCards pictures="./images/2025_BMW_7.jpg" carText2="Brand new BMW 7 Series" carText="Welcome to BMW"/>
        <CarCards pictures="./images/2025_BMW_i7.jpeg" carText2="Brand new BMW i7 Series" carText="Welcome to BMW"/>
        <CarCards pictures="./images/BMW_5_Series.jpg" carText2="BMW 5 Series" carText="Welcome to BMW"/>
        <CarCards pictures="./images/bmw_7_series.jpg" carText2="BMW 7 Series" carText="Welcome to BMW"/>
        <CarCards pictures="./images/BMW_Cars.jpeg" carText2="BMW Cars" carText="Welcome to BMW"/>
        <CarCards pictures="./images/BMW_Group.jpg" carText2="BMW Group car" carText="Welcome to BMW"/>
        <CarCards pictures="./images/BMW_Jeep.jpg" carText2="Brand new BMW Jeep" carText="Welcome to BMW"/>
        <CarCards pictures="./images/bmw_M_series.jpg" carText2="BMW M Series" carText="Welcome to BMW"/>
        <CarCards pictures="./images/New_BMW_Car.jpg" carText2="BMW New Cars" carText="Welcome to BMW"/>
        <CarCards pictures="./images/The_BMW_M_Series.png" carText2="Brand new BMW M Series" carText="Welcome to BMW"/>
        <CarCards pictures="./images/BMW_Jeep.jpg" carText2="BMW Jeep" carText="Welcome to BMW"/>
      </div>

    </>
  )
}

export default App