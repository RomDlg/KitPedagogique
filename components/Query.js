import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { ApolloClient, HttpLink, InMemoryCache, useQuery, gql} from '@apollo/client';
import Seance from './Seance';


const client = new ApolloClient({
    link: new HttpLink({
      uri: 'http://192.168.1.8:3301/api',
    }),
    cache: new InMemoryCache()
    });
  
 
function Donne(datas)
{
  Aretourner = "";
   datas.getAllSeancesOrderByEtat.array.forEach(element => {
     console.log("element : " + element);
     Aretourner = "Seance";
     Aretourner += element.id;
     Aretourner += element.classeEcole;
     Aretourner += element.date;
     Aretourner += element.etat;
     Aretourner ;
   });
   console.log(Aretourner);
   return Aretourner;
}


export default function Query() {

const [donne, SetData] = useState("");

const QuerySeance = gql`
query{
  getAllSeancesOrderByEtat{
      id
      date
      lieu
      naomark
      classeEcole
      etat
  }
}`;


  const GetData = async () => {
    const {loading, error, data} = await useQuery(QuerySeance ,{client: client});
    console.log(data);
    const d = Donne(data.getAllSeancesOrderByEtat);
    console.log(d)
    SetData(d); 
}

GetData();

  if(donne != null)
  return(  
      <Seance data={donne} />
  )

}