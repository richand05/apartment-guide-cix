import { useState } from 'react';
import RulesIng from '../../assets/img/rules.png';
import { Link } from 'react-router-dom';
import { BiCaretLeft, BiShareAlt } from 'react-icons/bi';
import '../pages.css';

// Datos de ejemplo
const accordionItems = [
    {
        id: 'item1',
        title: (<div>Reglas del Alojamiento</div>),
        content: (
            <>
                <div className="text-center mb-4">
                    <img src={RulesIng} alt="Home" className="img-fluid rounded" />
                </div>
                <p>Para su comodidad y tranquilidad, por favor tenga en cuenta estas reglas durante su estancia:</p>
                <ul>
                    <li>
                        Para mantener un ambiente sereno y relajante, le agradecemos que evite realizar fiestas o reuniones ruidosas en el departamento.
                    </li>
                    <li>
                        Le pedimos que evite fumar dentro del departamento.
                    </li>
                    <li>
                        Amamos a las mascotas tanto como usted, pero lamentablemente nuestro espacio no está preparado para recibirlas adecuadamente. Agradecemos su comprensión.
                    </li>
                    <li>
                        Si decide disfrutar de una bebida, le pedimos que lo haga con moderación y respeto por el espacio, para asegurar una estancia placentera para todos.
                    </li>
                </ul>
                <p>Gracias por su comprensión y cooperación. Si tiene alguna duda o necesita asistencia, no dude en contactarnos.</p>
            </>
        )
    }
];

const Rules = () => {
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

export default Rules;
