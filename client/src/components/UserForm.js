import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UserForm = ({ values, errors, touched, isSubmitting, status }) => {
  const [users, setUsers] = useState([]);
  console.log("this is the value", values);
  useEffect(() => {
    if (status) {
      console.log("post users status: ", status);
      setUsers([...users, status]);
    }
  }, [status]);
  return (
    <Form>
      <h2 className="heading">Welcome back. Can you give us some info?</h2>
      {touched.username && errors.username && <p>{errors.username}</p>}
      <div className="ui fluid input">
        <Field type="username" name="username" placeholder="User Name" />
      </div>
      <div className="ui fluid input">
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field
          type="password"
          name="password"
          placeholder="Password"
          className="ui fluid input"
        />
      </div>
      <button disabled={isSubmitting} type="submit" className="ui button">
        Submit
      </button>
    </Form>
  );
};

const FormikApp = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string()
      .min(9, "password must be 9 char or longer")
      .required("A password is required")
  }),

  handleSubmit(values, { setErrors, resetForm, setSubmitting, setStatus }) {
    console.log("values right before axios", values);
    axios
      .post("http://localhost:5000/api/register", values)
      .then(response => {
        console.log(response);
        setStatus(response.data);
      })
      .catch(err => {
        console.log("this is an error:", err);
      });
    console.log(values);
    setTimeout(() => {
      if (values.username === "yummySandwich") {
        setErrors({ username: "That username is taken" });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  }
})(UserForm);

export default FormikApp;
