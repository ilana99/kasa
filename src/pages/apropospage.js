import Banner from "../components/banner/banner"
import Toggle from "../components/toggle/toggle"
import img from "../assets/photobanner.png";

function Apropospage() {
    return (
        <>
            <Banner photo={img} />
            <Toggle content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." section="Fiabilité" initialVisibility={false} />
            <Toggle content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." section="Respect" initialVisibility={false} />
            <Toggle content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." section="Service" initialVisibility={false} />
            <Toggle content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." section="Sécurité" initialVisibility={false} />
        </>
    )
}

export default Apropospage
