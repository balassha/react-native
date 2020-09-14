import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function ToDoItem({item,pressHandler}){
    return (
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <View style={styles.view}>
                <Text style={styles.toDoItem}>{item.text}</Text>
                <MaterialIcons style={styles.icon} name='delete' size={18} color='red' />
            </View>
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
        width:200,
        marginLeft:25
    },
    view:{
        flexDirection:'row'
    },
    icon:{
        marginTop:20
    }
});