//Import libraries for making a component
import React from 'react';
import { Text } from 'react-native';

//Make a component
const Header = () => { //Compnents should be named the same as the file they are in
    const { textStyle } = styles;

    return <Text style={textStyle}>Albums!</Text>; //Using the style prop to set the styles
};

const styles = { //Styling for components goes within the component file
    textStyle: {
        fontSize: 20
    }
};

//Make the component available to other parts of the app
export default Header; //Make other files be able to make use of this component
