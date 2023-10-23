import Fichelogement from "../components/fichelogement/fichelogement"
import Toggle from "../components/toggle/toggle"
import Carousel from "../components/carousel/carousel"
import logements from "../logements.json";
import { Navigate, useParams } from "react-router-dom";


function Locationpage() {

    const { id } = useParams(); // récupère l'id de l'url
    const logement = logements.find((location) => location.id === id); //trouve le logement correspondant au titre

    return (
        <section>
             {logement ? (
            <> 
            <Carousel />
            <Fichelogement />
            <div className="details">
                <Toggle content={logement.description} section="Description" />

                <Toggle content={ //
                    <ul>
                        {logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                } section="Equipements" />
            </div>
            </>
        ) : (
            <Navigate to="*" />
        )}  
        </section>
    )
}

export default Locationpage