import { Link } from 'react-router-dom';
import './MainButton.css';

const MainButton = ({ text, icon: Icon, href }) => {
    return (
        <Link to={href} type="button" className="btn btn-menu-main w-100">
            <div className='mb-1 text-btn-main-menu'>{text}</div>
            {Icon && <Icon className="btn-main-icon mt-1"/>}
        </Link>
    );
}

export default MainButton;
