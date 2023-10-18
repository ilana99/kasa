import "./toggle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useRef } from "react";


function Toggle({ content, initialVisibility, section }) {
    const arrow = <FontAwesomeIcon icon={faChevronDown} />
   
    const arrowRef = useRef(null)

    const [hidden, setVisibility] = useState(initialVisibility);

    const handleClick = (key) => {
        setVisibility((prevState) => ({
            ...prevState,
            [key]: !prevState[key]
        }));

        if (key === section && arrowRef.current) {
            arrowRef.current.style.transform = arrowRef.current.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
        };
    };

    return (
        <div className="toggle" onClick={() => handleClick(section)}>
            <div className="toggleName">
                <h3> {section} </h3>
                <div ref={arrowRef}>{arrow}</div>
            </div>
            {hidden[section] ? (
                <div className="showing">{content}</div>
            ) : (
                <div>{content}</div>
            )}
        </div>
    )
}

export default Toggle