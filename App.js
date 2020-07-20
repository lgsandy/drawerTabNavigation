/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Page</Text>
    </View>
  );
};
const Profile = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile Page</Text>
    </View>
  );
};

const DrawerStack = createStackNavigator();

const DeawerStackScreen = ({navigation}) => {
  return (
    <DrawerStack.Navigator initialRouteName="Home">
      <DrawerStack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <Icon
              name="align-justify"
              color="#900"
              size={30}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
      <DrawerStack.Screen
        name="Profile"
        component={Profile}
        options={{headerTitle: 'Profile', headerTitleAlign: 'center'}}
      />
    </DrawerStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const BottomTab = ({navigation}) => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={DeawerStackScreen} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);
const Drawer = createDrawerNavigator();
const NestedDrawerTab = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={BottomTab} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  </NavigationContainer>
);
export default NestedDrawerTab;
