import React from 'react'
import GeoLocation from './components/screens/GeoLocation'
import HorizontalList from './components/screens/HorizontalList'
import SnapCarousel from './components/screens/SnapCarousel'

const App = () => {
  return (
    // <View>
    //   <Text>App</Text>
    // </View>
    <>
    <SnapCarousel />
    <GeoLocation />
    <HorizontalList />
    </>
  )
}

export default App