import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Contact = () => {
  const handleSubmit = async (values, { setSubmitting, setErrors, resetForm }) => {
    try {
      const endpoint = 'https://api.airtable.com/v0/appS9FHPcSPN3aQHq/arman';
      const headers = {
        Authorization: 'Bearer patxAGGecID38tmhc.a37e99d75f4703e8121d91af7a9a83d69b56724b5471374412abd3a7ccd6158d',
        'Content-Type': 'application/json',
      };

      await axios.post(endpoint, {
        records: [
          {
            fields: values,
          },
        ],
      }, { headers });

      setSubmitting(false);
      resetForm();
    } catch (error) {
      console.error(error);
      setSubmitting(false);
      // Handle error
    }
  };

  return (
    <section id="contact" className="py-40 pb-10 bg-white">
      <div className="container mx-auto">
        <h2 className="h2 opacity-20 mb-10 px-5 text-center">Submit a Query</h2>
        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            message: '',
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            phone: Yup.string().required('Required'),
            message: Yup.string().required('Required'),
          })}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1">Name</label>
                <Field type="text" id="name" name="name" className="w-full border rounded py-2 px-3" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">Email</label>
                <Field type="email" id="email" name="email" className="w-full border rounded py-2 px-3" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-1">Phone</label>
                <Field type="tel" id="phone" name="phone" className="w-full border rounded py-2 px-3" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-1">Message</label>
                <Field as="textarea" id="message" name="message" rows="4" className="w-full border rounded py-2 px-3" />
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full" disabled={isSubmitting}>Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contact;
