import { useState } from 'react';
import WifiLogo from '../../assets/img/wifi.jpg';
import { Link } from 'react-router-dom';
import { BiCaretLeft, BiShareAlt } from 'react-icons/bi';
import '../pages.css'

// Datos de ejemplo
const accordionItems = [
    {
        id: 'item1',
        title: (<div>Wifi</div>),
        content: (
            <>
                <div className="text-center mb-4">
                    <img src={WifiLogo} alt="Wi-Fi" className="img-fluid rounded" />
                </div>
                <p>Para su comodidad, le ofrecemos acceso a internet vía Wi-Fi. A continuación, encontrará los detalles para conectarse:</p>
                <ul>
                    <li><strong>Nombre de la red:</strong> MOVISTAR_17BF</li>
                    <li><strong>Nombre de la red (alternativa):</strong> MOVISTAR_PLUS_17BF</li>
                    <li><strong>Contraseña:</strong> gGUnzVsFwiNaCJ4Mfr23</li>
                </ul>
                <p>Puede conectarse a cualquiera de nuestras redes Wi-Fi. Ambas redes utilizan la misma contraseña, por lo que puede elegir la opción que mejor se adapte a sus necesidades. Si desea probar la otra red, simplemente conéctese a la alternativa disponible.</p>
                <p>Estamos aquí para ayudarle. ¡Disfrute de su estancia!</p>
            </>
        )
    }
];

const Wifi = () => {
    const [openItems, setOpenItems] = useState([]);

    const handleToggle = (id) => {
        setOpenItems((prevOpenItems) =>
            prevOpenItems.includes(id)
                ? prevOpenItems.filter(itemId => itemId !== id)
                : [...prevOpenItems, id]
        );
    };

    return (
        <>
            <div className='header container-app'>
                <div className='container'>
                    <Link to="/home">
                        <BiCaretLeft />
                        Menu
                    </Link>
                    <div className='share-icon'>
                        <BiShareAlt />
                    </div>
                </div>
            </div>

            <div className='container mt-title-accordion'>
            </div>

            <div className="container mb-5">
                <div className="accordion" id="accordionExample">
                    {accordionItems.map((item, index) => (
                        <div className="accordion-item" key={item.id}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className={`accordion-button ${openItems.includes(item.id) ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => handleToggle(item.id)}
                                    aria-expanded={openItems.includes(item.id)}
                                    aria-controls={`collapse${index}`}
                                >
                                    <div className='title-accordion'>
                                        {item.title}
                                        <div className='underline'></div>
                                    </div>
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className={`accordion-collapse collapse ${openItems.includes(item.id) ? 'show' : ''}`}
                                aria-labelledby={`heading${index}`}
                            >
                                <div className="accordion-body">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Wifi;
