import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

// Seance qui permet de gérer l'affichage de toute les séances 
export default function Seance({data})
{
    console.log("Seance :" +  data + " Fin");
    // Traitement des données
    const [idseance, SetSeanceId] = useState([]);
   
    useEffect(() => {
        
    }, [data])

    return(
        <ScrollView horizontal={true}>
           
        </ScrollView>
    )
}

// Le style de L'application
const styles = StyleSheet.create({
    Seance : {
        height: 150,
        width: 150,
        borderColor: "#C8B0B0",
        borderWidth: 2,
        borderRadius: 20,
        marginLeft: 20,
        marginTop: 20,
        display: 'flex',
    }
})
