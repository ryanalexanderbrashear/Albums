//Import a library to help create a component
import React from 'react';
//import ReactNative from 'react-native';
import { Text, AppRegistry } from 'react-native'; //Destructuring the React Native import to only pull what we need from it

//Create a component
const App = () => { //App is the name of our component here
    return (
        <Text>Some Text</Text> //JSX -> Extension of JS used to create React components
    );
};

//Render that component
AppRegistry.registerComponent('albums', () => App); //First argument matches with the project name, second argument is a fat arrow function returning the component to be rendered


