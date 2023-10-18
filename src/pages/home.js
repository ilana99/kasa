import Banner from "../components/banner/banner";
import Location from "../components/location/location"
import img from "../assets/img.png"

function Home() {
return (
    <div>
        <Banner photo={img} content="Chez vous, partout et ailleurs" />
        <Location />
    </div>
)
}

export default Home