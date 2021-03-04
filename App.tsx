import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';



export default function App() {

  let userDefault = 'admin'
  let passwordDefault = '1234'

  const [userSubmit, setuUserSubmit] = useState('')
  const [passwordSubmit, setPasswordSubmit] = useState('')

  function clickedButton() {
    if (userDefault === userSubmit && passwordDefault === passwordSubmit) {
      Alert.alert(
        ":)",
        "Login feito com sucesso!"
      )
    } else {
      Alert.alert(
        ";-;",
        "Ops, usuário incorreto!"
      )
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.boxForm}>

        <Text style={styles.title}>LOGIN</Text>

        <Text style={styles.label}>Usuário:</Text>
        <TextInput
          style={styles.input}
          onChangeText={ text => {setuUserSubmit(text)}}
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          onChangeText={ text => {setPasswordSubmit(text)}}
        />

        <RectButton onPress={clickedButton} style={styles.button}>
          <Text style={styles.textButton}>Prosseguir</Text>
        </RectButton>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  boxForm: {
    alignItems: 'center'
  },

  title: {
    fontSize: 50,
    marginTop: 200,
    marginBottom: 50
  },

  label: {
    fontSize: 28,
    marginBottom: 8
  },

  input: {
    width: 200,
    backgroundColor: '#555',
    fontSize: 24,
    marginBottom: 40,
    textAlign: 'center',
    borderRadius: 8,
    padding: 2
  },

  button: {
    backgroundColor: '#8447FF',
    color: '#fff',
    width: 150,
    alignItems: 'center',
    padding: 4,
    justifyContent: 'center',
    borderRadius: 8
  },

  textButton: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});
