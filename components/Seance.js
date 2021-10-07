import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Seance({data})
{

    const [idseance, SetSeanceId] = useState([]);
    console.log("Seance :" +  data);
    useEffect(() => {
        SetSeanceId(data);
    }, [data])


    return(
        <View>
            <Text>
                {data}
            </Text>
        </View>
    )
}