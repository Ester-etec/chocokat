import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './home';
import Branco from './chocobranco';
import Leite from './chocoleite';
import Amargo from './chocoamargo';

const Stack = createStackNavigator();

export default function Rotas(){

    return(

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Branco' component={Branco}/>
                <Stack.Screen name='Leite' component={Leite}/>
                <Stack.Screen name='Amargo' component={Amargo}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}