import "./toggle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useRef } from "react";


function Toggle({ content, section }) {
    const arrow = <FontAwesomeIcon icon={faChevronDown} />
   
    const arrowRef = useRef(null)

    const [hidden, setVisibility] = useState(false);

    const handleClick = () => {
        setVisibility(!hidden)

        if (arrowRef.current) {
            arrowRef.current.style.transform = hidden ? "rotate(0deg)" : "rotate(180deg)";
        };
    };

    return (
        <div className="toggle" onClick={() => handleClick()}>
            <div className="toggleName">
                <h3> {section} </h3>
                <div ref={arrowRef}>{arrow}</div>
            </div>
            {hidden ? (
                <div className="showing">{content}</div>
            ) : (
                <div>{content}</div>
            )}
        </div>
    )
}

export default Toggle