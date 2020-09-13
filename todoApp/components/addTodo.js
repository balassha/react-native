import React,{useState} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({buttonPressHandler}){
    const [input,updateInput]=useState('');
    const inputHandler=(val)=>{
        updateInput(val);
    }
    return (
        <View>
            <TextInput 
                placeholder="Enter a new To Do Item"
                onChangeText={(val)=>inputHandler(val)}
                style={styles.addTodo}/>
            <View style={styles.button}>
                <Button  
                    onPress={()=>buttonPressHandler(input)} 
                    title="Add new Todo"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    addTodo:{
        borderStyle:'dashed',
        borderWidth:1,
        borderRadius:10,
        padding:10,
        margin:10,
        width:200
    },
    button:{
        width:200,
        borderRadius:10,
        marginLeft:12
    }
});