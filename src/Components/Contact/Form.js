import React, { useState, Fragment } from 'react';
import { getAPI } from '../../helpers';
import Spinner from '../UI/Spinner/Spinner';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import ErrorMessage from '../UI/ErrorMessage';
import axios from 'axios';

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [requestSent, setRequest] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [form, setForm] = useState({
    name: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'First Name'
      },
      value: '',
      validation: {
        required: true,
        minLength: 3
      },
      valid: false,
      touched: false
    },
    lastName: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Last Name'
      },
      value: '',
      validation: {
        required: true,
        minLength: 3
      },
      valid: false,
      touched: false
    },
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'E-mail'
      },
      value: '',
      validation: {
        required: true,
        isEmail: true
      },
      valid: false,
      touched: false
    },
    message: {
      elementType: 'textarea',
      elementConfig: {
        type: 'text',
        placeholder: 'How can I help You?'
      },
      value: '',
      validation: {
        required: true,
        minLength: 4
      },
      valid: false,
      touched: false
    }
  });

  const checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }
    return isValid;
  };

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...form
    };
    const updatedFormElement = {
      ...updatedForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedForm) {
      formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
    }
    setForm(updatedForm);
    setFormIsValid(formIsValid);
  };

  const submitDataHandler = e => {
    e.preventDefault();
    setLoading(true);
    const graphqlQuery = {
      query: `
        mutation {
          submitFeedback(userInput: {
            firstName: "${form.name.value}",
            lastName: "${form.lastName.value}",
            email: "${form.email.value}",
            message: "${form.message.value}"
          }) { message }
        }`
    };
    axios
      .post(getAPI(), graphqlQuery)
      .then(response => {
        if (response.data.errors) {
          return setError(true);
        }
        setLoading(false);
        setRequest(true);
      })
      .catch(error => setError(true));
  };

  const formElementsArray = [];
  for (let key in form) {
    formElementsArray.push({
      id: key,
      config: form[key]
    });
  }

  let button = (
    <Button disabled={!formIsValid} clicked={submitDataHandler}>
      SUBMIT
    </Button>
  );
  if (loading) {
    button = <Spinner />;
  }

  let userForm = formElementsArray.map(formElement => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      changed={event => inputChangedHandler(event, formElement.id)}
    />
  ));
  if (requestSent) {
    userForm = (
      <div>
        <h2>Thank you, {form.name.value}</h2>
        <p>I will reply you soon.</p>
      </div>
    );
    button = null;
  }
  if (error) {
    userForm = <ErrorMessage />;
  }
  return (
    <Fragment>
      <h1>Drop me a line</h1>
      <form className="Form">
        {userForm}
        <br />
        {button}
      </form>
    </Fragment>
  );
};

export default Form;
