import photo from "../../assets/photobanner.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import "./apropos.sass"
import { useState } from "react"
import { useRef } from "react";

function Apropos() {
    const arrow = <FontAwesomeIcon icon={faChevronDown} />


    const [hidden, setVisibility] = useState({
        flexibilite: false,
        respect: false,
        service: false,
        securite: false
    });

    const flexibiliteArrow = useRef(null);
    const respectArrow = useRef(null);
    const serviceArrow = useRef(null);
    const securiteArrow = useRef(null);

    const handleClick = (key) => {
        setVisibility((prevState) => ({
            ...prevState,
            [key]: !prevState[key]
        }));
        if (key === "flexibilite" && flexibiliteArrow.current) {
            flexibiliteArrow.current.style.transform = flexibiliteArrow.current.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
        };

        if (key === "respect" && respectArrow.current) {
            respectArrow.current.style.transform = respectArrow.current.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
        }
        if (key === "service" && serviceArrow.current) {
            serviceArrow.current.style.transform = serviceArrow.current.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
        };

        if (key === "securite" && securiteArrow.current) {
            securiteArrow.current.style.transform = securiteArrow.current.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
        }
    };


    return (
        <section id="collapse">
            <img src={photo} alt="Photo" />

            <div className="toggle">
                <div onClick={() => handleClick("flexibilite")}>
                    <h2 > Flexibilité </h2>
                    <div ref={flexibiliteArrow}> {arrow} </div>
                </div>
                {hidden.flexibilite ? <p className="showing">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
                    régulièrement vérifiées par nos équipes.</p> : <p>Texte</p>}
            </div>

            <div className="toggle">
                <div onClick={() => handleClick("respect")}>
                    <h2 > Respect  </h2>
                    <div ref={respectArrow}> {arrow} </div>
                </div >
                {hidden.respect ? <p className="showing">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                    perturbation du voisinage entraînera une exclusion de notre plateforme.</p> : <p>Texte</p>}
            </div>

            <div className="toggle" >
                <div onClick={() => handleClick("service")} > <h2 > Service </h2>
                    <div ref={serviceArrow}> {arrow} </div>
                </div>
                {hidden.service ? <p className="showing">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                    perturbation du voisinage entraînera une exclusion de notre plateforme.</p> : <p>Texte</p>}
            </div>

            <div className="toggle" >
                <div onClick={() => handleClick("securite")} > <h2 > Sécurité </h2>
                    <div ref={securiteArrow}> {arrow} </div>
                </div>
                {hidden.securite ? <p className="showing">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                    correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                    locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                    également des ateliers sur la sécurité domestique pour nos hôtes.</p> : <p>Texte</p>}
            </div>
        </section>
    )
}

export default Apropos