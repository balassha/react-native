import React,{useState} from 'react';
import { StyleSheet, TouchableOpacity, View,FlatList } from 'react-native';
import Header from './components/header';
import ToDoItem from './components/todoItems';

export default function App() {
  const [data,setData] = useState([
    {text:'Be Awesome',key:'1'},
    {text:'Be Nice',key:'2'},
    {text:'Be Attentive',key:'3'}
  ])
  const pressHandler=(key)=>{
    let d = data.filter(i=>{return i.key != key});
    setData(d);
  }
  return (
    <View style={styles.container}>
      <Header />
        <View>
            <FlatList 
                data={data}
                renderItem={({item})=>(
                  <TouchableOpacity>
                      <ToDoItem item={item} pressHandler={pressHandler} />
                  </TouchableOpacity>
                )}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
