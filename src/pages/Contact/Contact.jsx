import { useState } from 'react';
import Emergency from '../../assets/img/Emergency.jpg';
import { Link } from 'react-router-dom';
import { BiCaretLeft, BiShareAlt } from 'react-icons/bi';
import '../pages.css';

const cixEmergency = [
    { name: 'Comisaría PNP Del Norte - Chiclayo', number: '074 229697, 074 274004' },
    { name: 'Comisaría PNP José Leonardo Ortiz', number: '074 254836' },
    { name: 'Comisaría PNP La Victoria', number: '074 215922' },
    { name: 'Comisaría PNP Campodónico', number: '074 227351' },
    { name: 'Comisaría PNP El Porvenir', number: '074 228030' },
    { name: 'Comisaría PNP Atusparias', number: '074 257099' },
    { name: 'Seguridad Ciudadana', number: '074 229696' },
    { name: 'Comisaría PNP El Aeropuerto', number: '074 228042, 074 209207' },
    { name: 'Bomberos "Salvadora Chiclayo"', number: '074 452997' },
    { name: 'Hospital "Luis Heysen Incháustegui"', number: '074 208035' },
    { name: 'Servicio de Atención Médica de Urgencia (SAMU)', number: '979176400, 949603321' }
];


const othersEmergency = [
    { name: 'Comisaría PNP Ferreñafe', number: '074 286720' },
    { name: 'Comisaría PNP Pomalca', number: '074 416318' },
    { name: 'Comisaría PNP Tumán', number: '074 417163' },
    { name: 'Comisaría PNP Pucalá', number: '074 800066' },
    { name: 'Comisaría PNP Reque', number: '074 451207' },
    { name: 'Comisaría PNP Ciudad Eten', number: '074 414211' },
    { name: 'Comisaría PNP Puerto Eten', number: '074 414111' },
    { name: 'Comisaría PNP Monsefú', number: '074 411184' },
    { name: 'Comisaría PNP Santa Rosa', number: '074 418283' },
    { name: 'Comisaría PNP Pimentel', number: '074 452013' },
    { name: 'Comisaría PNP Zaña', number: '074 431077' },
    { name: 'Comisaría PNP Cayaltí', number: '074 421074' },
    { name: 'Comisaría PNP Oyotún', number: '074 200219' },
    { name: 'Comisaría PNP Mocupe', number: '074 800203' },
    { name: 'Comisaría PNP Pátapo', number: '074 428077' },
    { name: 'Escuadrón Verde', number: '074 325916' },
    { name: 'Policía Ecológica', number: '074 282184' },
    { name: 'Tránsito', number: '074 229721' },
    { name: 'Comisaría PNP Lambayeque', number: '074 282119' },
    { name: 'Comisaría PNP Cruz del Médano', number: '074 800060' },
    { name: 'Comisaría PNP Jayanca', number: '074 423052' },
    { name: 'Comisaría PNP Motupe', number: '074 426006' },
    { name: 'Comisaría PNP Olmos', number: '074 427003' },
    { name: 'Comisaría PNP Pampagrande', number: '074 800012' },
    { name: 'Comisaría PNP Túcume', number: '074 422664' },
    { name: 'Comisaría PNP Mochumí', number: '074 424381' }
];

const accordionItems = [
    {
        id: 'contacto',
        title: (<div>Contacto</div>),
        content: (
            <>
                <p>
                    Estamos aquí para asegurar que su estancia en <span> "Las Brisas de Cix" </span> sea lo más agradable posible. Si necesita asistencia o tiene alguna pregunta, no dude en contactarnos a través de los siguientes medios:
                </p>
                <ul>
                    <li><strong>Manuel:</strong> +51 943042322 </li>
                    <li><strong>Jackeline:</strong> +51 951435942</li>
                </ul>
                <p>
                    Su comodidad y satisfacción son nuestra prioridad.
                </p>
            </>
        )
    },
    {
        id: 'emergencias',
        title: (<div>Contacto para Emergencias</div>),
        content: (
            <>
                <div className="text-center mb-4">
                    <img src={Emergency} alt="Emergencias" className="img-fluid rounded" />
                </div>
                <p>
                    En caso de una emergencia, por favor, contacte a las autoridades competentes a través de los siguientes números:
                </p>
                <h5>Chiclayo</h5>
                <ul className="list-group mb-4">
                    {cixEmergency.map(contact => (
                        <li key={contact.name} className="list-group-item">
                            <strong>{contact.name}:</strong> {contact.number}
                        </li>
                    ))}
                </ul>
                <h5>Fuera de Chiclayo</h5>
                <ul className="list-group mb-4">
                    {othersEmergency.map(contact => (
                        <li key={contact.name} className="list-group-item">
                            <strong>{contact.name}:</strong> {contact.number}
                        </li>
                    ))}
                </ul>
                <p>
                    Para cualquier situación que requiera asistencia de emergencia, estos números estarán disponibles para ayudarle.
                </p>
            </>
        )
    }
];

const Contact = () => {
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
                <p>
                    Para cualquier necesidad o situación, estamos a su disposición. A continuación, encontrará la información de contacto y los números de emergencia:
                </p>
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

export default Contact;
