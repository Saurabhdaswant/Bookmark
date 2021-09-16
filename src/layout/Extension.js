import "../Sass/Extension.scss"
import data from "../data/Extensions"
import Card from "./components/Card"

function Extension() {
    return (
        <div className="extension" >
            <div className="extension__head" >
                <h1>Download the extension</h1>
                <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to priotize.</p>
            </div>
            <div className="extension__main" >
                {
                    data.map(item => <Card item={item} key={item.id} />)
                }
            </div>
        </div>
    )
}

export default Extension
