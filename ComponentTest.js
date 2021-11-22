import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  useQuery,
  gql, HttpLink
} from "@apollo/client";
import { StyleSheet, Text, View } from 'react-native';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://192.168.1.8:3301/api',
}),
  cache: new InMemoryCache()
  });

const DisplaySeances = props => {
    function GetAllSeances() {
      const styles = StyleSheet.create({
        container: {
          flexDirection: "row",
          height: 200
        },
        TextSeance: {
          textAlign: 'center',
          color: "white"
        }
      });
      //const [tmp, SetTmp] = useState([]);
      const ALL_SEANCES = gql`
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


        const {loading, error, data} = useQuery(ALL_SEANCES ,{client: client});
      
        if (loading) {
          //console.log(loading);
          //console.log("Loading...")
          return (
            <View>
              <Text>
                Chargement : {loading}
              </Text>
            </View>
          );
        } 
        if (error) {
          //console.log(error);
          //console.log("Error :(");
          return (
            <View>
              <Text>
                Erreur : {error}
              </Text>
            </View>
          );
        }
        //console.log(data);
        tmp = data.getAllSeancesOrderByEtat;

        return (
          <View  style={styles.container}>
        <View style={{ backgroundColor: "grey", flex:0, width: 210}}>
          <Text style={styles.TextSeance}>
            Séance : {" N ° " + tmp[0].id + " \n Lieu : " + tmp[0].lieu
   + "\n Classe : " + tmp[0].classeEcole + "\n Date : " + 
   tmp[0].date + "\n Etat : " + tmp[0].etat }
          </Text>
        </View>
          <View style={{ backgroundColor: "black", flex:0, width: 210}}>
          <Text  style={styles.TextSeance}>
              Séance : {" N ° " + tmp[1].id + " \n Lieu : " + tmp[1].lieu
   + "\n Classe : " + tmp[1].classeEcole + "\n Date : " + 
   tmp[1].date + "\n Etat : " + tmp[1].etat}
            </Text>
          </View>
        </View>
        );
      }

      return GetAllSeances();
}

const displaySeances = () => {
    return DisplaySeances();
}



export default displaySeances;