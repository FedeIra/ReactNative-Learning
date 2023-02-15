import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Formik, useField } from 'formik';
import StyledTextInput from '../components/StyledTextInput.jsx';

const initialValues = {
  email: '',
  password: '',
};

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
});

const FormikInputValue = ({ fieldInput, ...props }) => {
  const [field, meta, helpers] = useField(fieldInput); // formik hook
  return (
    <StyledTextInput
      value={field.value}
      onChangeText={(value) => helpers.setValue(value)}
      {...props}
    />
  );
};

const LogInPage = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
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
