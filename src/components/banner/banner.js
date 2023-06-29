import "./banner.css";
import photo from "../../assets/img.png"

function Banner() {
    return (
        <div className="banner">
            <img src={photo}></img>
            <h2>Chez vous, partout et ailleurs</h2>
        </div>
    )
}
export default Banner