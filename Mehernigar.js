import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  var [number,setNumber]= useState(0);
  return (
    <View style={styles.container}>
      <Text>Tution Days counter</Text>
      <View style={styles.view}>
      <Text style={styles.text}>Muradpur tution</Text>
      <Text style={styles.number}>{number}</Text>
      <StatusBar style="auto" />

      <View style={styles.fix}>
        <Button
      title='+'
      onPress={function buttonHandler(){setNumber(number+1)}}
      />
      </View>
      <View style={styles.fix}>
      <Button
      title='-'
      onPress={function buttonHandler(){setNumber(number-1)}}
      />
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    fontSize:20,
    margin:10,
    padding:5,
    //alignItems: 'center',
    //justifyContent: 'center',
    
  },
  view:
  {
    flexDirection:'row',
    borderWidth:1,
    margin:5,
    padding:5,
  },
  text:{
    padding:5,
  },
  number:{
    padding:5,
  },
  fix:{
    flexDirection:'row',
    padding:5,
  }
});
