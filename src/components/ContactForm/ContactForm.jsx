import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from './ContactForm.module.css';

const validation = Yup.object({
  name: Yup.string()
    .min(3, "Too short!")
    .max(30, "Too long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(30, "Too long!")
    .required("Required"),
});

const ContactForm = ({ addContact }) => {
  const contactName = useId();
  const contactNumber = useId();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={validation}
      onSubmit={(values, actions) => {
        addContact(values);
        actions.resetForm();
      }}
    >
      <Form className={css.container}>
        <div className={css.inputContainer}>
          <label htmlFor={contactName}>Name</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={contactName}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.inputContainer}>
          <label htmlFor={contactNumber}>Number</label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id={contactNumber}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;