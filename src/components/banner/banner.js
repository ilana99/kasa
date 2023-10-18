import "./banner.css";


function Banner({photo, content}) {
    return (
        <div className="banner">
            <img src={photo} alt="bannière"></img>
            <h2>{content}</h2>
        </div>
    )
}
export default Banner