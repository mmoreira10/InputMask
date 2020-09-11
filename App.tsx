import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Input from './src/components/Input';

export default function App() {

  const [cep, setCep] = useState("");
  const [phone, setPhone] = useState("");
  const [currency, setCurrency] = useState("");

  // function handleCustom(value: string) {
  //   setCep(value);
  // }

  function handleSubmit() {
    console.log(
      cep,
      phone,
      currency
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Input
        value={cep}
        mask="cep"
        maxLength={9}
        placeholderTextColor="#000"
        placeholder="Digite o CEP"
        inputMaskChange={(text: string) => setCep(text)} />

      <Input
        value={phone}
        mask="phone"
        maxLength={15}
        placeholderTextColor="#000"
        placeholder="Digite o celular"
        inputMaskChange={(text: string) => setPhone(text)} />

      <Input
        value={currency}
        mask="currency"
        placeholderTextColor="#000"
        placeholder="Digite o valor"
        inputMaskChange={(text: string) => setCurrency(text)} />

      <Button title="Cadastrar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#719',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
