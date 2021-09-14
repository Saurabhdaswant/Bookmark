import "./Sass/App.scss"
import Home from "./layout/Home"
import Extension from "./layout/Extension"
import Faq from "./layout/FAQ"
import  Features from "./layout/Features"
import Footer from "./layout/Footer"

function App() {
  return (
    <div className="App">
      <Home/>
      <Extension/>
      <Faq/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default App;
