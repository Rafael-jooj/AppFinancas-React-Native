import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Budget from '../screens/Budget'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

function TabBar(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    backgroundColor: 'black',
                    borderTopWidth: 0,
                    bottom: 14,
                    left: 14,
                    right: 14,
                    elevation: 0,
                    borderRadius: 15,
                    height: 60
                }
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({_, size, focused})=>{
                        if(focused){
                            return <Ionicons name='home' size={size} color={'#fff'}/>
                        }
                        return <Ionicons name='home-outline' size={size} color={'#fff'}/>
                    }
                }}
            />
            <Tab.Screen
                name='Budget'
                component={Budget}
                options={{
                    headerShown: false,
                    tabBarIcon: ({_, size, focused})=>{
                        if(focused){
                            return <Ionicons name='wallet' size={size} color={'#fff'}/>
                        }
                        return <Ionicons name='wallet-outline' size={size} color={'#fff'}/>
                    }
                }}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({_, size, focused})=>{
                        if(focused){
                            return <Ionicons name='person' size={size} color={'#fff'}/>
                        }
                        return <Ionicons name='person-outline' size={size} color={'#fff'}/>
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export  default TabBar;