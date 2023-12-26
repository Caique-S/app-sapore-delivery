import React from 'react';
import { Text, View , TouchableOpacity} from 'react-native';
import  { styles }  from '../../components/styles/styles'

export default function Size() {
    return (
      <View style={{flex:1, backgroundColor:"#D6D6D6", alignItems:"center"}}>
        <View style={styles.top_bar2}>
          <Text style={styles.title_logo}>Tamanhos</Text>
        </View>
      </View>
    );
  }