import React from 'react';
import { View, Image, StyleSheet, ScrollView, Text, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SvgUri from 'react-native-svg-uri'; 

import TopicButton from '../components/TopicButton';

import Tela1 from '../pages/Tela1.jsx';
import Tela2 from '../pages/Tela2.jsx';
import Tela3 from '../pages/Tela3.jsx';
import Tela4 from '../pages/Tela4.jsx';
import Tela5 from '../pages/Tela5.jsx';

const Tab = createBottomTabNavigator();

// Custom TabBarIcon component
const TabBarIcon = ({ icon, text, focused, iconSize }) => (
  <View style={styles.tabBarIconContainer}>
    <SvgUri width={iconSize} height={iconSize} source={icon} />
    <Text style={[styles.tabBarText, { color: focused ? 'tomato' : 'gray' }]}>{text}</Text>
  </View>
);

const HomeScreen = () => {
  const screenWidth = Dimensions.get('window').width;
  const iconSize = screenWidth * 0.06; 

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/top.jpg')}
        style={styles.topImage}
      />
      <ScrollView>
        <View style={styles.topicContainer}>
          <Text style={styles.topicTitle}>Topics</Text>
          <TopicButton />
        </View>
      </ScrollView>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            let iconText;
            if (route.name === 'Tela1') {
              iconName = focused ? require('../images/icons/a11.svg') : require('../images/icons/a11.svg');
              iconText = 'Tela 1';
            } else if (route.name === 'Tela2') {
              iconName = focused ? require('../images/icons/a222.svg') : require('../images/icons/a222.svg');
              iconText = 'Tela 2';
            } else if (route.name === 'Tela3') {
              iconName = focused ? require('../images/icons/a333.svg') : require('../images/icons/a333.svg');
              iconText = 'Tela 3';
            } else if (route.name === 'Tela4') {
              iconName = focused ? require('../images/icons/a4.svg') : require('../images/icons/a4.svg');
              iconText = 'Tela 4';
            } else if (route.name === 'Tela5') {
              iconName = focused ? require('../images/icons/a5.svg') : require('../images/icons/a5.svg');
              iconText = 'Tela 5';
            }
            return <TabBarIcon icon={iconName} text={iconText} focused={focused} iconSize={iconSize} />;
          },
        })}
        tabBarOptions={{
          showLabel: false,
          style: styles.tabBar,
        }}
      >
        <Tab.Screen name="Tela1" component={Tela1} />
        <Tab.Screen name="Tela2" component={Tela2} />
        <Tab.Screen name="Tela3" component={Tela3} />
        <Tab.Screen name="Tela4" component={Tela4} />
        <Tab.Screen name="Tela5" component={Tela5} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topImage: {
    height: 180,
    resizeMode: 'cover',
  },
  topicContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  topicTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tabBar: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    height: 80, // Adjust the height of the tab bar
  },
  tabBarIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, // Ensure each item takes up equal space
  },
  tabBarText: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default HomeScreen;
