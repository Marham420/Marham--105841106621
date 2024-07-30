import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Singup from './Components/SignUp';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import SignUp from './Components/SignUp';

const App = () => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
       <ForgotPassword/>
    </ScrollView>
  );

};

const styles = StyleSheet.create({
  container: {flex: 1,
    
  },


});




export default App;
