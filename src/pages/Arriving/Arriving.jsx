import { useState } from 'react';
import DoorThirdFloor from '../../assets/img/DoorThirdFloor.jpeg';
import { Link } from 'react-router-dom';
import { BiCaretLeft, BiShareAlt } from 'react-icons/bi';
import '../pages.css'

const accordionItems = [
    {
        id: 'item1',
        title: (<div>Instrucciones para ingresar</div>),
        content: (
            <>
                <div className="text-center mb-4">
                    <img src={DoorThirdFloor} alt="Door" className="img-fluid rounded" />
                </div>
                <p>
                    El apartamento está en el tercer piso del edificio.
                </p>
                <p>
                    Al llegar, comuníquese con nosotros por WhatsApp para coordinar su llegada y abrir la puerta principal. Le daremos un juego de dos llaves: una para la puerta de la reja principal y otra para la puerta del apartamento.
                </p>
                <p>
                    Una vez dentro de la reja principal, suba las escaleras a la izquierda. Estas lo llevarán al tercer piso, donde encontrará la puerta de madera que da acceso al apartamento.
                </p>
                <p>
                    No se preocupe por la iluminación de las escaleras por la noche. Los focos tienen sensores que se activan automáticamente para iluminar su camino. Las luces se apagan solas después de unos minutos.
                </p>
            </>
        )
    },
    {
        id: 'item2',
        title: (<div>Notas importantes</div>),
        content: (
            <>
                <div className='mb-3'>
                    <strong>A partir de medianoche:</strong>
                </div>
                <p>
                    A partir de medianoche, la puerta de la reja principal se cierra con llave, como una costumbre. Si llega después de esa hora y la reja está cerrada, simplemente use la llave proporcionada para abrirla. Inserte la llave en la cerradura y gírela hasta que la puerta se abra. Si la reja está cerrada sin llave al llegar, asegúrese de cerrarla correctamente al entrar. La zona es tranquila y muy comercial. Puede entrar y salir con su familia en cualquier momento; no hay restricciones horarias.
                </p>
            </>
        )
    },
];


const Arriving = () => {
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
                <p>
                    Aquí encontrará información para facilitar su llegada al apartamento:
                </p>
            </div>

            <div className="container">
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

export default Arriving;
