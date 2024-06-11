import { Formik, Form, Field } from "formik";
import css from "../SearchBar/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  return (
    <>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values, actions) => {
          onSearch(values.search);
          actions.resetForm();
        }}
      >
        <Form>
          <Field type="text" name="search" className={css.input}></Field>
          <button type="submit" className={css.button}>
            Search
          </button>
        </Form>
      </Formik>
    </>
  );
}
