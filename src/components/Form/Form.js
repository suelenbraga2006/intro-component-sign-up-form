import React from 'react';

import './style.scss';

import errorIcon from '../../assets/images/icon-error.svg';

function Form() {
  return (
    <div className="container-form">
      <div className="tryout">
        <a href="/try">
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </a>
      </div>
      <form>
        <label htmlFor="firstname">
          <input type="text" name="firstname" placeholder="First Name" />
          <img src={errorIcon} alt="Error" className="error-icon" />
        </label>
        <small>Error Message</small>
        <label htmlFor="lastname">
          <input type="text" name="lastname" placeholder="Last Name" />
          <img src={errorIcon} alt="Error" className="error-icon" />
        </label>
        <small>Error Message</small>
        <label htmlFor="email">
          <input type="email" name="email" placeholder="Email Address" />
          <img src={errorIcon} alt="Error" className="error-icon" />
        </label>
        <small>Error Message</small>
        <label htmlFor="password">
          <input type="password" name="password" placeholder="Password" />
          <img src={errorIcon} alt="Error" className="error-icon" />
        </label>
        <small>Error Message</small>
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
