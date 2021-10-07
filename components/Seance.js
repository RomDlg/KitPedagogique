import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


export default function Seance({data})
{

    const [idseance, SetSeanceId] = useState([]);
    console.log("Seance :" +  data);
    useEffect(() => {
        SetSeanceId(data);
    }, [data])


    return(
        <SafeAreaView>
            <Text style={{textAlign: 'center'}}>
                {data}
            </Text>
        </SafeAreaView>
    )
}