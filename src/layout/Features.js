import "../Sass/App.scss";
import "../Sass/Features.scss"
import data from "../data/FeaturesData"
import { useState } from "react";

function Features() {

    const [state, setstate] = useState("Simple Bookmarking")

    const handleClick = (e) => {
        const featureTitle = e.target.innerHTML
        setstate(featureTitle);
    }

    return (
        <div className="features" id="Features" >
            <div className="features__about">
                <h1>Features</h1>
                <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            </div>
            <div className="features__main">
                <div className="features__main__theFeature">
                    {
                        data.map(item => <div > <p  className={ item.title === state && `active`}  onClick={(e) => handleClick(e)} >{item.title}</p> </div>)
                    }
                </div>                                    
                {data.filter(feature => feature.title === state)
                    .map(({ id, info, img, title }) => <div key={id} className="features__main__details">
                        <div className="features__main__details__img">
                        <img src={img} alt={title} />
                            <div className="rounded rounded--right"></div>
                        </div>
                        <div className="features__main__details__about">
                            <h1>{title}</h1>
                            <p>{info}</p>
                            <button className="btn btn--softBlue" >Show More</button>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default Features


//!     Understand the Problem 💯
//      a filter fucntionality which you created for menu list 
//      onclick it should change the state and when state changes 
//      it should change the content

// todo Divide and Conquer 🏆
//   1. Get all data together like : feature title , img , info
//   2. Map through it 
//   3. Conditional rendering
//   4. Alert component

//*     Research as much as you can 🔍
//   1. JS Validation For Empty Fields : https://www.w3schools.com/howto/howto_js_validation_empty_input.asp
//   2. How to validate an email in ReactJS ? : https://www.geeksforgeeks.org/how-to-validate-an-email-in-reactjs/

//?     Write Pseudo code ✅
//      first handle submission of the form
//      control input using state hooks
//      if state value is empty after submiting form then render the Alert Component
//      Alert C : z-index : -10 , Change Absolute Position , Animation : 0.5s