

import React from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App= () => {
  

  return (
    <>
      <ScrollView>
        <View style={s.bannerContainer}>
          <Image
            style={s.banner}
            source={require("./src/img/bg.jpg")}
          />
        </View>

        <View style={s.container}>
          <Text style={s.title}>Que hacer en Paris?</Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={s.cityImages}
                source={require("./src/img/actividad1.jpg")}
              />
            </View>

            <View>
              <Image
                style={s.cityImages}
                source={require("./src/img/actividad2.jpg")}
              />
            </View>

            <View>
              <Image
                style={s.cityImages}
                source={require("./src/img/actividad3.jpg")}
              />
            </View>

            <View>
              <Image
                style={s.cityImages}
                source={require("./src/img/actividad4.jpg")}
              />
            </View>

            <View>
              <Image
                style={s.cityImages}
                source={require("./src/img/actividad5.jpg")}
              />
            </View>
          </ScrollView>

          <Text style={s.title}>Los mejores alojamientos</Text>
          <View>
            <View>
              <Image
                  style={s.bestDestinations}
                  source={require("./src/img/mejores1.jpg")}
              />
            </View>

            <View>
              <Image
                  style={s.bestDestinations}
                  source={require("./src/img/mejores2.jpg")}
              />
            </View>

            <View>
              <Image
                  style={s.bestDestinations}
                  source={require("./src/img/mejores3.jpg")}
              />
            </View>

          </View>

          <Text style={s.title}>Que hacer en Los Angeles?</Text>
          <View style={s.list}>
            <View style={s.listItem}>
              <Image
                  style={s.bestDestinations}
                  source={require("./src/img/hospedaje1.jpg")}
              />
            </View>

            <View style={s.listItem}>
              <Image
                  style={s.bestDestinations}
                  source={require("./src/img/hospedaje2.jpg")}
              />
            </View>

            <View style={s.listItem}>
              <Image
                  style={s.bestDestinations}
                  source={require("./src/img/hospedaje3.jpg")}
              />
            </View>

            <View style={s.listItem}>
              <Image
                  style={s.bestDestinations}
                  source={require("./src/img/hospedaje4.jpg")}
              />
            </View>

          </View>
        </View>
      </ScrollView>
    </>
  );
};

const s = StyleSheet.create({
  bannerContainer: {
    flexDirection: "row" //si usamos row lo pondra de manera horizontal
  },
  banner: {
    height: 200,
    flex: 1 //como tenemos row como contenedor, si usamos flex 1, ocupara toda la pantalla de izquierda a derecha
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "black",
    marginVertical: 15,
    
  },
  container: {
    marginHorizontal: 10
  },
  cityImages: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  bestDestinations: 
  {
    // si queremos ocupar todo espacio en pantalla 
    //horizontalmente podemos hacerlo con porcentaje 
    //en vez de hacer row el padre y flex 1
    width: "100%", 
    height: 200,
    marginVertical: 5
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap", //sirve para lo que sale de la pantalla ponerlo abajo
    justifyContent: "space-between"
  },
  listItem: {
    flexBasis: "49%" //sirve como un width cuando usas row
  }
});

export default App;
