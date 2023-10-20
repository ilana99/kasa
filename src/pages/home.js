import Banner from "../components/banner/banner";
import Card from "../components/card/card"
import img from "../assets/img.png"

function Home() {
return (
    <div>
        <Banner photo={img} content="Chez vous, partout et ailleurs" />
        <Card />
    </div>
)
}

export default Home