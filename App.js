import React, {useState, useEffect} from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import auth from '@react-native-firebase/auth'

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';
import Home from './src/screens/Home';

export default function App() {

  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(()=>{
      const unsubscrib = auth().onAuthStateChanged((_user)=>{
          setUser(_user);
          if(initializing){
            setInitializing(false);
          }
      });

      return unsubscrib;
  }, [])

  if(initializing){
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} color={'blueviolet'} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#4658ED" barStyle="dark-content"
      />
      {user ? <Home/> : <Routes/>}
    </NavigationContainer>
  );
}
