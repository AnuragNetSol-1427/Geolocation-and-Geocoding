import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet, PermissionsAndroid } from 'react-native'
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoder';

const GeoLocation = () => {
      // All the states are here
  const [location, setLocation] = useState(false);
  const [address, setAddress] = useState(false);

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

  const getAddress = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        // let NY = {
        //   lat: 40.7809261,
        //   lng: -73.9637594
        // };
        
        // Geocoder.geocodePosition(NY).then(res => {
        Geocoder.geocodePosition({lat: location.coords.latitude, lng: location.coords.longitude}).then(res => {
          // res is an Array of geocoding object (see below)
          console.log(res)
          setAddress(res)
      })
      .catch(err => console.log(err))
      }
    });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.containerHeadingText}>Get location of gym near you!</Text>
      <View
        style={styles.getLocationButtonContainer}>
        <Pressable onPress={getLocation} style={styles.getLocationButton}>
            <Text>Get Location</Text>    
        </Pressable> 
      </View>
      <View style={styles.latitudeAndLongitudeContainer}>
        <Text>Latitude: {location ? location.coords.latitude : null} </Text>
        <Text>Longitude: {location ? location.coords.longitude : null} </Text>
      </View>
      <View
        style={styles.getLocationButtonContainer}>
        <Pressable onPress={getAddress} style={styles.getLocationButton}>
            <Text>Get Address</Text>    
        </Pressable> 
      </View>
      <View style={styles.latitudeAndLongitudeContainer}>
        <Text>adminArea: {address ? address[0].adminArea : null} </Text>
      </View>
    </View>
  )
}

export default GeoLocation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    containerHeadingText: {
      fontSize: 17,
    },
    getLocationButtonContainer: {
      backgroundColor: 'skyblue', 
      marginTop: 9, 
      padding: 7, 
      borderWidth: 1, 
      // borderRadius: 10, 
      width: '60%',
    },
    getLocationButton: {
        borderColor: 'black',
        // borderWidth: 1,
        alignItems: 'center',
    },
    latitudeAndLongitudeContainer: {
      marginHorizontal: 20,
      marginVertical: 10,
      flexDirection: 'row',
    },
})