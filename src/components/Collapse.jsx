import { useState } from 'react'
import '../styles/collapse.scss'
import { IoChevronUp } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";

function Collapse ({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <div className="collapseHeader" onClick={toggleCollapse}>
                <h2 className="collapseHeader__title">{title}</h2>
                <span className="collapseHeader__chevron">{isOpen ? <IoChevronDown /> : <IoChevronUp />}</span>
            </div>
            {isOpen && <div className="collapseHeader__content">{children}</div>}
        </div>
    );
}

//<span>{isOpen ? '▲' : '▼'}</span>

export default Collapse;
