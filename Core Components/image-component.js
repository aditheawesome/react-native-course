import React from 'react';
import { Image, View } from 'react-native';
const App = () => (
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <Image source = {require('./react-native.jpg')} style = {{ width: 100, height: 100}}>
    </Image>
  </View>
);

export default App;