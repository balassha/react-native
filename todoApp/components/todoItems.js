import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ToDoItem({item,pressHandler}){
    return (
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <Text style={styles.toDoItem}>{item.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    toDoItem:{
        borderStyle:'dashed',
        borderWidth:1,
        borderRadius:10,
        padding:10,
        margin:10,
        width:200
    }
});