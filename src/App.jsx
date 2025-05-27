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
        <CarCards pictures="./images/BMW_Logo.png" carText="This is a BMW car" carText2="Welcome to BMW"/>
        <CarCards pictures="./images/bmw_3_series.png"/>
        <CarCards pictures="./images/bmw_X6_series.png"/>
        <CarCards pictures="./images/New_BMW_Cars.png"/>
        <CarCards pictures="./images/The_BMW_M_Series.png"/>
        <CarCards pictures="./images/2025_BMW_7.jpg"/>
        <CarCards pictures="./images/2025_BMW_i7.jpeg"/>
        <CarCards pictures="./images/BMW_5_Series.jpg"/>
        <CarCards pictures="./images/bmw_7_series.jpg"/>
        <CarCards pictures="./images/BMW_Cars.jpeg"/>
        <CarCards pictures="./images/BMW_Group.jpg"/>
        <CarCards pictures="./images/BMW_Jeep.jpg"/>
        <CarCards pictures="./images/bmw_M_series.jpg"/>
        <CarCards pictures="./images/New_BMW_Car.jpg"/>
        <CarCards pictures="./images/The_BMW_M_Series.png"/>
        <CarCards pictures="./images/BMW_Jeep.jpg"/>
      </div>

    </>
  )
}

export default App