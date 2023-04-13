import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const HorizontalList = () => {

    const apiData = [
        {
          id: 1,
          title: "The Simpsons",
          year: 1989,
          // image: require("./simpson.jpg"), 
        },
        {
          id: 2,
          title: "SpongeBob SquarePants ",
          year: 1999,
          // image: require("./spongebob.jpg"),
        },
      ];
      
      const renderItem = ({ item, index }) => (
        <View>
          <Text style={styles.title}>{item.title} </Text>
          <Text> {item.year}</Text>
          <Image
            style={{ height: 300, width: 300}}
            source={item.image}
            // source={{uri: item.image}}
            resizeMode="contain"
          />
          
        </View>
      );
      return (
        <View style={styles.container}>
          <FlatList
            data={apiData}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        </View>
      );
}

export default HorizontalList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
    },
    title: {
        fontSize: 25,
    },
})