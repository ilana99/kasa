import logements from "../../logements.json";
import "./location.css";
import { Link } from 'react-router-dom';


function Location() {
    return (
        <div className="locationliste">
            {logements.map((location) => (
                <Link to={`location/${location.title}`} key={location.title} className="linkto">
                    <img src={location.cover} alt="appartement" />
                    <h3>{location.title}</h3>
                </Link>
            ))}
        </div>
    );
}

export default Location;
