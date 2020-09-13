import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return (
        <View>
            <Text style={styles.headerText}>ToDo List</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerText:{
        backgroundColor:'coral',
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        padding:20
    }
});