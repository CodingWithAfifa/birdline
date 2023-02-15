import React from 'react'
import img1 from "../image/fletcher-pride-nH7PzHMnte8-unsplash.jpg"
import img2 from "../image/fletcher-pride-nH7PzHMnte8-unsplash.jpg"
import img3 from "../image/fletcher-pride-nH7PzHMnte8-unsplash.jpg"
import "../styles/tab.css"
const Tab = () => {
  return (
    <div className="tab-section">
     <div className="container">
     <h1>LATEST BIRDS</h1>
     <div className="tabs">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
     </div>
     </div>
    </div>
  )
}

export default Tab
