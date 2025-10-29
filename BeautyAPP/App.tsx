import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';
import CustomInput from './src/components/CustomInput';
import { Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  return (
    <View style={styles.containerPrimary}>
      <View style={styles.containerSecondary}>
      <Text style= {styles.content}>Sign in</Text>
      <StatusBar style="auto" />
       //agregamos un view para que nuestro texto de "error" se aline con los input
        <View style={styles.inputWrapper}>
          <CustomInput type="email" placeholder="Correo" value={email} onChangeText={setEmail}/>
          <Text style={styles.sectext}>Correo invalido</Text>
        </View>
        
        //agregamos un view para que nuestro texto de "error" se aline con los input
        <View style={styles.inputWrapper}>
          <CustomInput type="password" placeholder="Contraseña" value={password} onChangeText={setPassword}/>
          <Text style={styles.sectext}>Este campo es obligatorio</Text>
        </View>
     <CustomButton title={"Login"} onPress= {()=> {} }  variant="primary"/>
     <CustomButton title={"Registrarse"} onPress= {()=> {} }  variant="tertiary"/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrimary: {
    flex: 1,
    backgroundColor: '#e6e6e6ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },
  containerSecondary: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffffff',
    padding: 25,
    borderRadius: 12,
    width: '90%',
    gap: 15,
    // Sombra para efecto 3D como card
    shadowColor: '#000000ff',
    shadowOffset: {
      width: 100,
      height: 40,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  content: {
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
    color: '#333',
    fontSize: 54,
    fontWeight: 'bold',
  },
  inputWrapper: {
    width: '100%',
    alignItems: 'flex-start',
  },
  //solamente para estilización de supuesto "error"
  sectext: {
    color: '#ff0000ff',
    fontSize: 12,
    marginTop: 3.4,
    marginLeft: 8,
  },
});
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
