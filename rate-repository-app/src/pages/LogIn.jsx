import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Formik, useField } from 'formik';
import StyledTextInput from '../components/StyledTextInput.jsx';
import StyledText from '../components/StyledText.jsx';
import { loginValidationSchema } from '../validationSchemas/login.js';

const initialValues = {
  email: '',
  password: '',
};

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5,
  },
});

const FormikInputValue = ({ fieldInput, ...props }) => {
  const [field, meta, helpers] = useField(fieldInput); // formik hook
  return (
    <>
      <StyledTextInput
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        error={meta.error}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};

/* // Validate without yup:
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  }
  return errors;
}; */

const LogInPage = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
      // validate={validate}  validation without yup
      validationSchema={loginValidationSchema}
    >
      {(
        { handleSubmit } // Formik props
      ) => {
        return (
          <View style={styles.form}>
            <FormikInputValue placeholder='E-mail' fieldInput='email' />
            <FormikInputValue
              placeholder='Password'
              fieldInput='password'
              secureTextEntry
            />
            <Button title='Log In' onPress={handleSubmit} />
          </View>
        );
      }}
    </Formik>
  );
};

export default LogInPage;
