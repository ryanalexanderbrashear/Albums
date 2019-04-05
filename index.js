//Import a library to help create a component
import React from 'react';
//import ReactNative from 'react-native';
import { AppRegistry } from 'react-native'; //Destructuring the React Native import to only pull what we need from it
import Header from './src/components/header'; //Import the Header component by using the file path to Header.js

//Create a component
const App = () => { //App is the name of our component here, ONLY MAKE ONE COMPONENT PER FILE
    return (
        <Header headerText={'Albums'} /> //JSX -> Extension of JS used to create React components. Also, header is self-closing tag so we don't need a closing </Header> and can use the self closing tag syntax.
        //This is also an example of passing in a props object to a component.
    );
};

//Render that component
AppRegistry.registerComponent('albums', () => App); //First argument matches with the project name, second argument is a fat arrow function returning the component to be rendered. Only the root component uses AppRegistry


