import React, { useState } from 'react';

import './style.scss';

function Form() {
  const [formFields, setFormFields] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmited, setIsSubmited] = useState(false);

  const validate = (values, target) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstname) {
      errors.firstname = 'First Name cannot be empty';
    }

    if (!values.lastname) {
      errors.lastname = 'Last Name cannot be empty';
    }

    if (!values.email) {
      errors.email = 'Email cannot be empty';
    } else if (!regex.test(values.email)) {
      errors.email = 'Looks like this is not an email';
    }

    if (!values.password) {
      errors.password = 'Password cannot be empty';
    }

    return errors;
  };

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmited(true);
    setFormErrors(validate(formFields));
  };

  const handleFocus = (e) => {
    setFormErrors({ ...formErrors, [e.target.name]: '' });
  };

  const handleBlur = (e) => {
    if (isSubmited) {
      setFormErrors(validate(formFields));
    }
  };

  return (
    <div className="container-form">
      <div className="tryout">
        <a href="/try">
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </a>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            className={formErrors.firstname ? 'error' : ''}
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formFields.firstname}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <small>{formErrors.firstname}</small>
        </div>

        <div className="input-group">
          <input
            className={formErrors.lastname ? 'error' : ''}
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formFields.lastname}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <small>{formErrors.lastname}</small>
        </div>
        <div className="input-group">
          <input
            className={formErrors.email ? 'error' : ''}
            type="text"
            name="email"
            placeholder="Email"
            value={formFields.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <small>{formErrors.email}</small>
        </div>
        <div className="input-group">
          <input
            className={formErrors.password ? 'error' : ''}
            type="password"
            name="password"
            placeholder="Password"
            value={formFields.password}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <small>{formErrors.password}</small>
        </div>
        <input type="submit" className="submit" value="CLAIM YOUR FREE TRIAL" />
        <div className="terms">
          By clicking the button, you are agreeing to our{' '}
          <a href="/terms">Terms and Services</a>
        </div>
      </form>
    </div>
  );
}

export default Form;
