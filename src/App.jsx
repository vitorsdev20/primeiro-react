import Card from "./Components/Card";
import Header from "./Components/Header"
import Banner from "./Components/Banner";
import BannerCard from "./Components/bannerCard";
import Form from "./Components/form";
import "./app.css";

function App() {

  return (
    <>
    <Banner />
    <Header />
    <Card/>
    <BannerCard titulo="Titulo new" subtitulo="lorem "/>
    <Form/>
    </>
  )
}

export default App
