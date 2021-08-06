import logo from "../assets/logo.png";
import '../styles/components/Welcome.css';

const Welcome = () => {
    return (
       <div className="Welcome-body">
           <div className="Welcome-title">
                <h1>PRUEBA TECNICA PARA WHALE & JAGUAR</h1>
           </div>
           <div className="Welcome-text">
                <p>Acontinuación encontrarán una app web que les permitira observar los paises de cada continente, además de información especifica de cada uno si pulsan sobre el botón more Info</p>
                <p>En el interior del proyecto podrán encontrar una arquitectura que facilitará el crecimiento de la aplicación si es necesario, ademas de exprimir al máximo las bondades de ReactJs</p>
                <p>Se hizo uso de Custom Hooks, React Router y hooks. Adicionalmente, usé useContext para tener un estado global.</p>
                <p>Los llamados de la api estan controlados por un useEffect y por un callBack en el modal para evitar consumos innecesarios o cargas lentas</p>
           </div>
            <div className="Welcome-footer">
                <h4>PARA MI SERIA UN HONOR SER PARTE DE LA MANADA.</h4>
            </div>
            <div className="Welcome-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="Welcome-sign">
                Andres Julian Bustos
            </div>
       </div>
    );
}
 
export default Welcome;