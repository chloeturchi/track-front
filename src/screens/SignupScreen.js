import React, { useContext } from 'react';
import { 
  View, 
  StyleSheet, 
  KeyboardAvoidingView, 
  ScrollView 
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.container}>
          <NavigationEvents onWillFocus={clearErrorMessage} />
          <AuthForm 
            headerText="Sign Up for Tracker"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            onSubmit={signup}
          />
          <NavLink 
            routeName="Signin"
            text="Already have an account? Sign in instead!" 
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>

  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  },
  contentContainerStyle: {
    paddingVertical: 100,
  }
});

export default SignupScreen;