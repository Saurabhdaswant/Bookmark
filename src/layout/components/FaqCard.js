import { useState } from "react"
function FaqCard({question , answer }) {

    const [state, setstate] = useState(false);

    const handleClick = () => {
      setstate(!state);
    };


    return (
        <div className="Faq__main__faqCard">
            <div className="faqCard__question">
                <p>{question}</p>
                <button onClick={ ()=> handleClick() } >v</button>
            </div>
            <div className="faqCard__answer">
               { state &&  <p>{answer}</p>}
            </div>
        </div>
    )
}

export default FaqCard
