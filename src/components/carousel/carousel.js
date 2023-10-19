import logements from "../../logements.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./carousel.css"

function Carousel() {
    const arrowRight = <FontAwesomeIcon icon={faChevronRight} />
    const arrowLeft = <FontAwesomeIcon icon={faChevronLeft} />
    const { title } = useParams();
    const logement = logements.find((location) => location.title === title); //trouve le logement correspondant au titre

    const [currentIndex, setCurrentIndex] = useState(0);
    let pictures = logement.pictures;

    const clickCarouselRight = () => {
        const nextIndex = (currentIndex + 1);
        if (nextIndex >= logement.pictures.length) {
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
    return (
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
    )
}

export default Carousel