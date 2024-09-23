import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    ISBN: Yup.string().required('ISBN is required'),
    publicationDate: Yup.date().required('Publication Date is required'),
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
            <label>Title</label>
            <Field name="title" className="form-control" />
            <ErrorMessage name="title" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label>Author</label>
            <Field name="author" className="form-control" />
            <ErrorMessage name="author" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label>ISBN</label>
            <Field name="ISBN" className="form-control" />
            <ErrorMessage name="ISBN" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label>Publication Date</label>
            <Field name="publicationDate" type="date" className="form-control" />
            <ErrorMessage name="publicationDate" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary mt-3" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
