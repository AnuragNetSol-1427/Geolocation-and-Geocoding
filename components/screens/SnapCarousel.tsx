import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'

const SnapCarousel = () => {
    const gymImage1 = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUnAa_BU4QA1_WcvhAjtkeVIjCmTb_HBEXrg&usqp=CAU`;
    const gymImage2 = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZ4GQ7a7wwzaHiLN2eUzXU1ff_P0coJELEQ&usqp=CAU`;
    const gymImage3 = `https://www.muscleandfitness.com/wp-content/uploads/2019/01/lifting-weights-with-headphones-615883260.jpg?w=1109&quality=86&strip=all`;
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Welcome to FitClub(SnapCarousel)</Text>
      </View>
      <Swiper style={styles.wrapper} showsButtons={true} autoplay>
        <View style={styles.slide1}>
          {/* <Text style={styles.text}>Hello Swiper</Text> */}
          <Image source={{uri: gymImage1}} style={{height: '100%', width: '100%'}} />
        </View>
        <View style={styles.slide2}>
          {/* <Text style={styles.text}>Beautiful</Text> */}
          <Image source={{uri: gymImage2}} style={{height: '100%', width: '100%'}} />
        </View>
        <View style={styles.slide3}>
          {/* <Text style={styles.text}>And simple</Text> */}
          <Image source={{uri: gymImage3}} style={{height: '100%', width: '100%'}} />
        </View>
      </Swiper>
    </View>
  )
}

export default SnapCarousel

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headingContainer: {
        alignItems: 'center',
        padding: 5,
    },
    heading: {
        fontSize: 20,
    },

    wrapper: {},
    slide1: {
    //   flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    //   backgroundColor: '#9DD6EB'
    },
    slide2: {
    //   flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    //   backgroundColor: '#97CAE5'
    },
    slide3: {
    //   flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    //   backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
})