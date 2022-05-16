import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

const MainDrawer = (props) =>{
  return (
    <Drawer.Navigator screenOptions={{}}>
      <Drawer.Screen name="Home" component={Home} options={{title:"helllo",}}/>
      <Drawer.Screen name="Home1" component={Home} />
      <Drawer.Screen name="Home2" component={Home} />
    </Drawer.Navigator>
  );
}

export default MainDrawer;