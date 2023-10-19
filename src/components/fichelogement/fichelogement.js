import logements from "../../logements.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';
import "./fichelogement.css"

function Fichelogement() {
   
    const star = <FontAwesomeIcon icon={faStar} />

    const { title } = useParams();
    const logement = logements.find((location) => location.title === title); //trouve le logement correspondant au titre

    const rating = logement.rating;

    const couleur = {
        red: { color: "#FF6060" }, // filled star
        grey: { color: "#E3E3E3" } // unfilled s tar
    };

    return (
            <div className="info">
                <div>
                    <h2>{title}</h2>
                    <h3>{logement.location}</h3>
                    <div className="tags">
                        {logement.tags.map((tag, index) => (
                            <p key={index}>{tag}</p>
                        ))}

                    </div>
                </div>
                <div className="host">
                    <div className="hostinfo">
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt="host" />
                    </div>
                    <div className="stars">
                        {[1, 2, 3, 4, 5].map((index) => (
                            <span key={index} style={index <= rating ? couleur.red : couleur.grey}> {star} </span>
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default Fichelogement;
