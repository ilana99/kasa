import "./erreur.css"
import {Link} from "react-router-dom"

function Erreur() {
    return (
        <div className="erreur">
            <h2>404</h2>
            <h3>Oups! La page que vous demandez n'existe pas.</h3>
            <Link to="/" >Retourner sur la page d'acceuil</Link>
        </div>
    )
}

export default Erreur