import Contact from '../Contact/Contact';
import css from './ContactList.module.css'

const ContactList = ({data}) => {
    return (
        <ul>
            {data.map((contact) => (
                <li key={contact.id}>
                    <Contact contacts={contact} />
                </li>
            ))}
        </ul>

    );
}

export default ContactList;