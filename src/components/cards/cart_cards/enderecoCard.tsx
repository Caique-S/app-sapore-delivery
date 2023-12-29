import React from "react";
import { View, TextInput } from "react-native";
import { styles } from "../../styles/styles";

export function EndCard(){
  return (
    <View style={styles.formEndereco}>
      <TextInput
        style={styles.inputObservation}
        placeholder="Alguma Observação ?"
        multiline
        editable={true}
      />
      <TextInput
        style={styles.inputCep}
        placeholder="Qual seu CEP ?"
        keyboardType="numeric"
        editable={true}
      />
      <TextInput
        style={styles.inputBairro}
        placeholder="Bairro"
        editable={true}
      />
      <TextInput
        style={styles.inputEndereco}
        placeholder="Rua"
        autoCapitalize="words"
        editable={true}
      />
      <TextInput
        style={styles.inputNumero}
        placeholder="Nº"
        keyboardType="numeric"
      />
      <TextInput style={styles.inputComplemento} placeholder="Complemento" />
    </View>
  );
}
