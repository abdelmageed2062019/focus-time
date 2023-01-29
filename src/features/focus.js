import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {fontSizes, paddingSizes} from '../utils/sizes';
import {RoundedButton} from '../components/RoundedButton';
 
export const Focus = ({addSubject}) => {
  const [subject , setSubject] = useState(null);

  return(
<View style={styles.container}>
<View style={styles.inputContainer}>
  <TextInput style={styles.textInput} onChangeText={setSubject} label="Focus in what....?"  />
  <View style={styles.button}>
   <RoundedButton  title="+" size={fontSizes.xxl} onPress={() => addSubject(subject)}/>
   </View>
  </View>
</View>
)
}
const styles = StyleSheet.create({
  container: { 
     flex: 0.2,
     },
     button: {
       justifyContent: 'center'
     },
     inputContainer: {
       padding: paddingSizes.lg,
       justifyContent: 'top',
       flexDirection: 'row'
     },
     textInput: {
       flex: 1,
       marginRight: paddingSizes.sm
     }
})