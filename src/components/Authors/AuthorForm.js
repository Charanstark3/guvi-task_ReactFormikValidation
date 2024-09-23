import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    birthDate: Yup.date().required('Birth Date is required'),
    biography: Yup.string().required('Biography is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form-group">
            <label>Name</label>
            <Field name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label>Birth Date</label>
            <Field name="birthDate" type="date" className="form-control" />
            <ErrorMessage name="birthDate" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label>Biography</label>
            <Field name="biography" as="textarea" className="form-control" />
            <ErrorMessage name="biography" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary mt-3" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthorForm;
