import { useState } from "react"
import "../Sass/App.scss";
import "../Sass/FAQ.scss"
import data from "../data/Faq"
import FaqCard from "./components/FaqCard";

function FAQ() {

    const [show, setShow] = useState(false);

    return (
        <div className="Faq" id="FAQ">
            <div className="Faq__head">
                <h1>Frequently Asked Questions</h1>
                <p>Here are some of our FAQs. if you have any other questions you</p>
            </div>
            <div className="Faq__main">
                {
                    show
                        ? data.map(faq => <FaqCard key={faq.id} {...faq} />)
                        : data.slice(0, data.length - 2).map(faq => <FaqCard key={faq.id} {...faq} />)
                }
                <div className="showMore" >
                    <button className="btn btn--softBlue"  onClick={() => setShow(!show)}>
                        {show ? `showLess` : `showMore`}
                    </button>  
                </div>
            </div>
        </div>
    )
}

export default FAQ