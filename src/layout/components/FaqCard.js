import { useState } from "react"
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
function FaqCard({question , answer }) {

    const [state, setstate] = useState(false);

    return (
        <div className="Faq__main__faqCard">
            <div className="faqCard__question">
                <p>{question}</p>
                <button onClick={ ()=> setstate(!state) } > { state ? <FaCaretUp/> : <FaCaretDown/> } </button>
            </div>
            <div className="faqCard__answer">
               { state &&  <p>{answer}</p>}
            </div>
        </div>
    )
}

export default FaqCard
