import React, { Component, Fragment } from "react";
import Spinner from "../UI/Spinner/Spinner";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import axios from "axios";
class Form extends Component {
  state = {
    loading: false,
    error: false,
    requestSent: false,
    form: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "First Name"
        },
        value: "",
        validation: {
          required: true,
          minLength: 3
        },
        valid: false,
        touched: false
      },
      lastName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Last Name"
        },
        value: "",
        validation: {
          required: true,
          minLength: 3
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "E-Mail"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      message: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "How can I help You?"
        },
        value: "",
        validation: {
          required: true,
          minLength: 10
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
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
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.form
    };
    const updatedFormElement = {
      ...updatedForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedForm) {
      formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ form: updatedForm, formIsValid: formIsValid });
  };

  submitDataHandler = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const data = {
      firstName: this.state.form.name.value,
      lastName: this.state.form.lastName.value,
      email: this.state.form.email.value,
      message: this.state.form.message.value
    };
    axios
      .post("https://igor-izviekov.firebaseio.com/feedback.json", data)
      .then(response => {
        this.setState({ loading: false, requestSent: true });
      })
      .catch(error => this.setState({ error: true }));
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.form) {
      formElementsArray.push({
        id: key,
        config: this.state.form[key]
      });
    }
    let button = (
      <Button
        disabled={!this.state.formIsValid}
        clicked={this.submitDataHandler}
      >
        SUBMIT
      </Button>
    );
    if (this.state.loading) {
      button = <Spinner />;
    }
    if (this.state.error) {
      button = (
        <div>
          <h2>Something went wrong</h2>
          <p>Please try again later</p>
        </div>
      );
    }
    let title = (
      <div>
        <h1>Fill the form</h1>
        <h2>It`s easy</h2>
      </div>
    );
    if (this.state.requestSent) {
      title = (
        <div>
          <h2>Thank you, {this.state.form.name.value}</h2>
          <p>I will reply you soon</p>
        </div>
      );
    }
    return (
      <Fragment>
        {title}
        <form className="Form">
          {formElementsArray.map(formElement => (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              changed={event => this.inputChangedHandler(event, formElement.id)}
            />
          ))}
          <br />
          {button}
        </form>
      </Fragment>
    );
  }
}

export default Form;
