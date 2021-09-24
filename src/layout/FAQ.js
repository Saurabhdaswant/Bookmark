import "../Sass/App.scss";
import "../Sass/FAQ.scss"
import data from "../data/Faq"
import FaqCard from "./components/FaqCard";

function FAQ() {
    return (
        <div className="Faq">
            <div className="Faq__head">
                <h1>Frequently Asked Questions</h1>
                <p>Here are some of our FAQs. if you have any other questions you</p>
            </div>
            <div className="Faq__main">
                {
                    data.map(faq => <FaqCard key={faq.id} {...faq}  />)
                }
            </div>
        </div>
    )
}

export default FAQ
