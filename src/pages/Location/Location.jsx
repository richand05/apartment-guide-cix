import { useState } from 'react';
import DoorThirdFloor from '../../assets/img/DoorThirdFloor.jpeg';
import { Link } from 'react-router-dom';
import { BiCaretLeft, BiShareAlt } from 'react-icons/bi';
import '../pages.css';

const accordionItems = [
    {
        id: 'location',
        title: (<div>Ubicación</div>),
        content: (
            <>
                <p>
                    El apartamento se encuentra en una ubicación estratégica que ofrece fácil acceso en automóvil a centros comerciales, el centro histórico de Chiclayo, y la salida hacia la playa de Pimentel y otras playas cercanas. Además, en los alrededores se pueden encontrar una variedad de negocios locales como restaurantes, panaderías, farmacias, cevicherías y bodegas, entre otros, lo que hará que la estancia sea más conveniente y agradable.
                </p>
                <div className='text-center mb-4'>
                    <iframe
                        className='img-fluid rounded'
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d247.61727600408983!2d-79.86364217641199!3d-6.784890677724521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDcnMDUuMyJTIDc5wrA1MSc0OC42Ilc!5e0!3m2!1sen!2spe!4v1723049063739!5m2!1sen!2spe"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </>
        )
    }
];

const Location = () => {
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
                        Menú
                    </Link>
                    <div className='share-icon'>
                        <BiShareAlt />
                    </div>
                </div>
            </div>

            <div className='container mt-title-accordion'>
                {/* Sección de ubicación dentro del acordeón */}
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

export default Location;
