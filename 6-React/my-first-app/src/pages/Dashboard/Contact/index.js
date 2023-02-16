import React from 'react';
import { useFormik } from 'formik';
import validations from './validations';
import './styles.css';
function Contact() {
  const { handleSubmit, handleChange, values, isSubmitting, errors, touched, handleBlur } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000));
      console.log(values, bag);
      if (values.email === 'test@test.com') {
        return bag.setErrors({ email: 'Email already in use' });
      }
      bag.resetForm();
    },
    validationSchema: validations,
  });

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="Jane"
            onBlur={handleBlur('firstName')}
            value={values.firstName}
            disabled={isSubmitting}
            onChange={handleChange('firstName')}
          />
          {errors.firstName && touched.firstName && <div className="error">{errors.firstName}</div>}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            onBlur={handleBlur('lastName')}
            placeholder="Doe"
            value={values.lastName}
            disabled={isSubmitting}
            onChange={handleChange('lastName')}
          />

          {errors.lastName && touched.lastName && <div className="error">{errors.lastName}</div>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="jane@acme.com"
            disabled={isSubmitting}
            type="email"
            onChange={handleChange('email')}
          />
          {errors.email && touched.email && <div className="error">{errors.email}</div>}
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            onBlur={handleBlur('message')}
            value={values.message}
            placeholder="
           Your message..."
            disabled={isSubmitting}
            onChange={handleChange('message')}
          />
          {errors.message && touched.message && <div className="error">{errors.message}</div>}
        </div>

        <button disabled={isSubmitting} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
