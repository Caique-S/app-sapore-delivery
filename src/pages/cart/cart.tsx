import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { styles } from "../../components/styles/styles";
import { RadioButton } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { EndCard } from "../../components/cards/cart_cards/enderecoCard";

export default function Cart({ route, navigation }) {
  const [checked, setChecked] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "#D6D6D6", alignItems: "center" }}>
      <View style={styles.top_bar}>
        <Text style={styles.title_logo_cart}>Carrinho
        
      <View 
          style={styles.cartCash}>
          <Ionicons size={30} color={'#FFF'} name='logo-usd'/>
      </View>
        </Text>
      </View>
            <EndCard/>
      <View style={styles.pedidoTrue}>
        <Text style={styles.item1}>Pedido -</Text>
        <Text style={styles.item2}>Forma de Pagamento:</Text>
        <Text>Itens:</Text>
        <Text>Nome:</Text>
        <Text>CPF:</Text>
        <Text>Telefone:</Text>
        <Text>Endereço -</Text>
        <Text>Bairro</Text>
        <Text>CEP</Text>
        <Text>Rua</Text>
        <Text>Numero</Text>
        <Text>Complemento</Text>
      </View>
      <View style={styles.radioOptions}>
        <View style={styles.radioEntrega}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#999999" }}>
            Entrega
          </Text>
          <RadioButton
            value="Entrega"
            status={checked === "Entrega" ? "checked" : "unchecked"} //if the value of checked is Apple, then select this button
            onPress={() => setChecked("Entrega")} //when pressed, set the value of the checked Hook to 'Apple'
          />
        </View>
        <View style={styles.radioRetirada}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#999999" }}>
            Retirada
          </Text>
          <RadioButton
            value="Retirada"
            status={checked === "Retirada" ? "checked" : "unchecked"}
            onPress={() => setChecked("Retirada")}
          />
        </View>
      </View>
      <Button
        title="Finalizar pedido"
        onPress={() => {
          console.log(route.params?.size);
        }}
      />
    </View>
  );
}
