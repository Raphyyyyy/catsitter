import { DBArea } from "../../DB/DB";

const Mapa = () => {
    return (
        <div>            
            <iframe
            src={DBArea.linkMaps}
            loading="lazy"
        ></iframe></div>
    )
}

export default Mapa