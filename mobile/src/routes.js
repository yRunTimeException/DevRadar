import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator({
    Main:{
      screen: Main,
      navigationOptions: {
        title: 'DevRadar'
      },

    },
    Profile:{
      screen: Profile,
      navigationOptions: {
        title: 'Perfil no Github'
      },

    },
  },
  // Série de configurações da tela
  {
    defaultNavigationOptions:{
      headerTintColor: '#FFF',
      headerBackTitleVisible: false,
      headerStyle:{
        backgroundColor: '#000000',

      },
    },
  })
);

export default Routes;