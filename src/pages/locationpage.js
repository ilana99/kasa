import Fichelogement from "../components/fichelogement/fichelogement"
import Toggle from "../components/toggle/toggle"
import Carousel from "../components/carousel/carousel"
import logements from "../logements.json";
import { useParams } from "react-router-dom";

function Locationpage() {
   
    const { title } = useParams();
    const logement = logements.find((location) => location.title === title); //trouve le logement correspondant au titre

    return (
        <section>
            <Carousel />
            <Fichelogement />
            <div className="details">
                <Toggle content={logement.description} initialVisibility={false} section="Description"  />

                <Toggle content={
                     <ul>
                     {logement.equipments.map((equipment, equipement) => (
                         <li key={equipement}>{equipment}</li>
                     ))}
                 </ul>
                } initialVisibility={false} section="Equipements"  />
            </div>
        </section>
    )
}

export default Locationpage