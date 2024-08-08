import MainButton from '../../components/MainButton/MainButton';
import { BiSolidBackpack, BiFace, BiDoorOpen, BiHome, BiWifi, BiBook, BiPhone, BiMap, BiArrowToRight, BiCaretLeft, BiShareAlt } from 'react-icons/bi';
import './MainPage.css';
import { Link } from 'react-router-dom';

const MainPage = () => {

    const buttons = [
        {
            "title": "Bienvenido",
            "icon": BiFace,
            "href": "/welcome"
        },
        {
            "title": "Antes de viajar",
            "icon": BiSolidBackpack,
            "href": "/before-travel"
        },
        {
            "title": "Al llegar",
            "icon": BiDoorOpen,
            "href": "/arriving"
        },
        {
            "title": "Sobre el apartamento",
            "icon": BiHome,
            "href": "/department"
        },
        {
            "title": "WiFi / Internet",
            "icon": BiWifi,
            "href": "/internet"
        },
        {
            "title": "Reglas",
            "icon": BiBook,
            "href": "/rules"
        },
        {
            "title": "Contacto",
            "icon": BiPhone,
            "href": "/contact"
        },
        {
            "title": "Sobre la ubicación",
            "icon": BiMap,
            "href": "/location"
        },
        {
            "title": "Sobre la salida",
            "icon": BiArrowToRight
        }
    ]
    return (
        <>
            <div className='header container-app'>
                <div className='container '>
                    <Link to="/">
                        <BiCaretLeft />
                        Hogar
                    </Link>
                    <div className='share-icon'>
                        <BiShareAlt />
                    </div>
                </div>
            </div>

            <div className="container mt-title-welcome">
                <div className="row">
                    {
                        buttons.map((button, index) => (
                            <div key={index} className="col-6 col-md-4 col-lg-3">
                                <MainButton text={button.title} icon={button.icon} href={button.href}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default MainPage;
