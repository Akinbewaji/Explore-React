import React from 'react'

const CusButton = ({btnAction, btnBg, btnW, boRad, children}) => {
 
  const styles = {
    btn: {
      backgroundColor: btnBg || "gray",
      color: "black",
      padding: "3px 6px",
      margin:"6px",
      borderRadius: boRad || "6px",
      border: "none",
      width: btnW || "90%",
      justifyContent: "center",
    }
  }

  return (
    <button onClick={btnAction} style={styles.btn}>{children}</button>
    )
}

export default CusButton