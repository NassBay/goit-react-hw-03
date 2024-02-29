
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from './Contact.module.css';

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={css.box}>
      <div className={css.container}>
        <p>
          <FaUser
            className={css.icon}
          />
          {name}
        </p>
        <p>
          <FaPhone
            className={css.icon}
          />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default Contact;