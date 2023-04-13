import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const HorizontalList = () => {

    const apiData = [
        {
          id: 1,
          title: "More Space",
          // year: 1989,
          // image: require("./simpson.jpg"), 
          image: `https://i0.wp.com/proultimategyms.in/wp-content/uploads/2022/04/Pro-ultimate-Gyms-Best-Gym-in-Panchkula-6.jpeg?fit=1024%2C682&ssl=1`, 
        },
        {
          id: 2,
          title: "More Equipment ",
          // year: 1999,
          // image: require("./spongebob.jpg"),
          image: `https://i0.wp.com/proultimategyms.in/wp-content/uploads/2022/04/Pro-ultimate-Gyms-Best-Gym-in-Panchkula-8.jpeg?fit=1024%2C682&ssl=1`,
        },
        {
          id: 3,
          title: "More Strength ",
          // year: 1999,
          // image: require("./spongebob.jpg"),
          // image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzlfgFcOFi1IcHyrcHxrPU_YLtm8SC_HIiMA&usqp=CAU`,
          // image: `https://media.istockphoto.com/id/1132006407/photo/empty-gym.jpg?s=612x612&w=0&k=20&c=si73-OzIvdfuD7J82-WGJogpxgulXHVxmzldCjopuno=`,
          image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxdYPiLxh_QQT-WM8at7U9xjYGvIfYS8QQkA&usqp=CAU`,
        },
      ];
      
      const renderItem = ({ item }) => (
        <View>
          <Text style={styles.title}>{item.title} </Text>
          {/* <Text> {item.year}</Text> */}
          <Image
            style={{ height: '100%', width: 300}}
            source={{uri: item.image}}
            // source={{uri: item.image}}
            resizeMode="contain"
          />
          
        </View>
      );
      return (
        <View style={styles.container}>
          <Text style={styles.featuresHeading}>Features</Text>
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
        marginBottom: 15,
        // backgroundColor: 'grey',
    },
    featuresHeading: {
      fontSize: 25,
      textAlign: 'center',
    },
    title: {
        fontSize: 25,
    },
})