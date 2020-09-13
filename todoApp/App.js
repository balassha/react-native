import React,{useState} from 'react';
import { StyleSheet, TouchableOpacity, View,FlatList } from 'react-native';
import Header from './components/header';
import ToDoItem from './components/todoItems';
import AddToDo from './components/addTodo';

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
  const buttonPressHandler=(text)=>{
    let newKey = Number(data[data.length-1].key)+1+'';
    let d = [...data,{text:text,key:newKey}]
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
              <AddToDo buttonPressHandler={buttonPressHandler} />
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
