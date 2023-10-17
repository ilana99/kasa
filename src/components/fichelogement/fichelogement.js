import logements from "../../logements.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRef } from "react";
import "./fichelogement.css"



function Fichelogement() {

    const arrow = <FontAwesomeIcon icon={faChevronDown} />
    const arrowRight = <FontAwesomeIcon icon={faChevronRight} />
    const arrowLeft = <FontAwesomeIcon icon={faChevronLeft} />
    const star = <FontAwesomeIcon icon={faStar} />

    const { title } = useParams();
    const logement = logements.find((location) => location.title === title); //trouve le logement correspondant au titre

    const [hidden, setVisibility] = useState({
        description: false,
        equipements: false,

    });
    const descriptionArrow = useRef(null);
    const equipementsArrow = useRef(null);

    const handleClick = (key) => {
        setVisibility((prevState) => ({ // updater function
            [key]: !prevState[key]
        }));
        if (key === "description" && descriptionArrow.current) {
            descriptionArrow.current.style.transform = descriptionArrow.current.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
        };

        if (key === "equipements" && equipementsArrow.current) {
            equipementsArrow.current.style.transform = equipementsArrow.current.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
        }
    };



    const [currentIndex, setCurrentIndex] = useState(0);
    let pictures = logement.pictures;

    const clickCarouselRight = () => {
        const nextIndex = (currentIndex + 1);
        if (nextIndex > logement.pictures.length) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(nextIndex);
        }

    }
    const clickCarouselLeft = () => {
        const nextIndex = (currentIndex - 1);
        if (nextIndex < 0) {
            setCurrentIndex(logement.pictures.length - 1);
        } else {
            setCurrentIndex(nextIndex);
        }

    }

    const rating = logement.rating;

    const couleur = {
        red: { color: "#FF6060" }, // filled star
        grey: { color: "#E3E3E3" } // unfilled s tar
    };

    return (
        <section className="fichelogement">
            <div className="carousel">
                {pictures.length > 1 ? (
                    <>
                        <span className="arrowleft" onClick={clickCarouselLeft}>{arrowLeft}</span>
                        <img src={pictures[currentIndex]} alt="appartement" className="logementphoto" />
                        <p>{currentIndex + 1}/{pictures.length}</p>
                        <span className="arrowright" onClick={clickCarouselRight}>{arrowRight}</span>
                    </>
                ) : (
                    <img src={pictures[currentIndex]} alt="appartement" className="logementphoto" />
                )}
            </div>
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

            <div className="details">
                <div className="toggle">
                    <div className="toggleName" onClick={() => handleClick("description")}>
                        <h3 > Description </h3>
                        <div ref={descriptionArrow}>{arrow}</div>
                    </div>
                    {hidden.description ? <p className="showing"> {logement.description} </p> : <p> {logement.description}</p>}
                </div>
                <div className="toggle" onClick={() => handleClick("equipements")}>
                    <div className="toggleName"> <h3 > Équipements </h3>
                        <div ref={equipementsArrow}>{arrow}</div>
                    </div>
                    {hidden.equipements ? (
                        <ul className="showing">
                            {logement.equipments.map((equipment, equipement) => (
                                <li key={equipement}>{equipment}</li>
                            ))}
                        </ul>
                    ) : (
                        <ul>
                            {logement.equipments.map((equipment, equipement) => (
                                <li key={equipement}>{equipment}</li>
                            ))}
                        </ul>
                    )}


                </div>
            </div>
        </section>
    )
}

export default Fichelogement;
