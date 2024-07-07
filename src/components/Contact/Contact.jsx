import css from './Contact.module.css';
import clsx from "clsx";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Contact = ({contacts: {name, number}}) => {
    return (
        <div className={css.container}>
            <div className={css.Contact}>
                <span className={css.span}>
                    <FaUser />
                    <p>{name}</p>
                </span>
                <span className={css.span}>
                    <FaPhone />
                    <p>{number}</p>
                 </span>
            </div>
            <button className={css.btn}>Delete</button>
        </div>
    )
}

export default Contact;