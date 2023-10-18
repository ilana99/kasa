import logements from "../../logements.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./fichelogement.css"



function Fichelogement() {
    const arrowRight = <FontAwesomeIcon icon={faChevronRight} />
    const arrowLeft = <FontAwesomeIcon icon={faChevronLeft} />
    const star = <FontAwesomeIcon icon={faStar} />

    const { title } = useParams();
    const logement = logements.find((location) => location.title === title); //trouve le logement correspondant au titre

  
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

        </section>
    )
}

export default Fichelogement;
