import { useState } from 'react';
import Kitchen from '../../assets/img/kitchen.jpeg';
import { Link } from 'react-router-dom';
import { BiCaretLeft, BiShareAlt } from 'react-icons/bi';
import '../pages.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que Bootstrap esté importado

// Datos de ejemplo
const accordionItems = [
    {
        id: 'item1',
        title: 'Sala de entretenimiento',
        content: (
            <>
                <div className='mb-3'>
                    <strong>A continuación, encontrará los elementos destinados a su entretenimiento durante la estadía:</strong>
                </div>
                <ul>
                    <li>Una televisión inteligente con acceso a canales nacionales e internacionales, además de conexión a Internet.</li>
                    <li>Un sofá cómodo para su relajación mientras disfruta de la televisión.</li>
                    <li>Una mesa de comedor con 4 asientos para disfrutar de sus comidas.</li>
                </ul>
            </>
        )
    },
    {
        id: 'item2',
        title: 'Cocina equipada',
        content: (
            <>
                <div className='mb-3'>
                    <strong>La cocina está totalmente equipada para su comodidad:</strong>
                </div>
                <ul>
                    <li>Una refrigeradora para mantener los alimentos frescos.</li>
                    <li className='mb-3'>
                        Cocina con horno eléctrico: La cocina está lista para su uso tradicional. Para utilizar el horno eléctrico, siga estos pasos:
                        <ul>
                            <li>Ubique el cable del horno en el compartimento del gabinete, situado en el lado izquierdo e inferior de la cocina.</li>
                            <li>Conecte el cable al enchufe correspondiente para encender el horno.</li>
                        </ul>
                        <div className="mb-3 mt-4">
                            <img src={Kitchen} alt="Horno eléctrico" className='img-fluid rounded' />
                        </div>
                        <p>Para una correcta utilización, consulte las instrucciones del siguiente video:</p>
                        <div className="video-container">
                            <iframe
                                src="https://www.youtube.com/embed/zanPeHvgkz0?si=7VYdnockYj21dqFL"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </li>
                    <li>Olla arrocera para preparar arroz de manera fácil.</li>
                    <li>Licuadora.</li>
                    <li>Hervidor de agua.</li>
                    <li>Horno microondas.</li>
                    <li>Utensilios de cocina (ollas, sartén, platos, cubiertos, etc.).</li>
                    <li>Utensilios pequeños para niños (platos, cucharas, etc.).</li>
                    <li>Implementos básicos de cocina (sal, aceite, etc.).</li>
                </ul>
            </>
        )
    },
    {
        id: 'item3',
        title: 'Lavandería',
        content: (
            <>
                <div className='mb-3'>
                    <strong>En la lavandería encontrará:</strong>
                </div>
                <ul>
                    <li>
                        Lavadora: Después de programar la lavadora y presionar el botón de inicio, ésta comenzará su ciclo inicial sin llenar agua de inmediato. Esto es normal, ya que realiza ajustes y comprobaciones previas antes de añadir agua.
                    </li>
                    <li>Tendedero para secar la ropa.</li>
                    <li>Escoba y recogedor.</li>
                    <li>Planchador y plancha de ropa.</li>
                </ul>
            </>
        )
    },
    {
        id: 'item4',
        title: 'Dormitorios',
        content: (
            <>
                <div className='mb-3'>
                    <strong>Para asegurar un descanso cómodo, disponemos de los siguientes dormitorios:</strong>
                </div>
                <ul>
                    <li>Una habitación con cama de plaza y media, ropero y mesa de estudio.</li>
                    <li>Una habitación con cama de dos plazas y ropero.</li>
                </ul>
            </>
        )
    }
];

const Apartment = () => {
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
                    <Link to="/home" className="btn btn-outline-primary">
                        <BiCaretLeft /> Menú
                    </Link>
                    <div className='share-icon'>
                        <BiShareAlt />
                    </div>
                </div>
            </div>

            <div className='container mt-title-accordion'>
                <p>
                    Bienvenido a nuestro apartamento. A continuación, encontrará información sobre las comodidades y características disponibles para su estadía.
                </p>
            </div>

            <div className='container'>
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

            <div className='container mt-4 mb-5'>
                <p>
                    Además, contamos con un ventilador portátil para su comodidad. En la cocina, encontrará botellas de agua y chocolates/dulces como cortesía.
                </p>
                <p>
                    Esperamos que disfrute de su estancia y se sienta como en casa.
                </p>
            </div>
        </>
    );
}

export default Apartment;
