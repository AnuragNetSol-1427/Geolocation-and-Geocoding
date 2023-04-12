import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet, PermissionsAndroid } from 'react-native'
import Geolocation from 'react-native-geolocation-service';

const GeoLocation = () => {
      // All the states are here
  const [location, setLocation] = useState(false);

    // Function to get permission for location
const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  // Function to check permissions and get Location
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            setLocation(position);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
    console.log(location);
  };


  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <View
        style={{backgroundColor: 'skyblue', marginTop: 10, padding: 10, borderWidth: 1, borderRadius: 10, width: '40%'}}>
        <Pressable onPress={getLocation} style={styles.getLocationButton}>
            <Text>Get Location</Text>    
        </Pressable> 
      </View>
      <Text>Latitude: {location ? location.coords.latitude : null} </Text>
      <Text>Longitude: {location ? location.coords.longitude : null} </Text>
    </View>
  )
}

export default GeoLocation

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    getLocationButton: {
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
    },
})