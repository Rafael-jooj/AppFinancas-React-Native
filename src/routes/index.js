import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";
import Cadastro from "../screens/Cadastro";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options = {{headerShown: false}}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options = {{headerShown: false}}
            />
            <Stack.Screen
                name="SingUp"
                component={Cadastro}
                options = {{headerShown: false}}
            />
            <Stack.Screen
                name="Home"
                component={Home}
            />
        </Stack.Navigator>
    )
}