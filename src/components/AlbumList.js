import React, { Component } from 'react';
import { View, Text } from 'react-native';
//Importing Axios to carry out HTTP calls
import Axios from 'axios';

class AlbumList extends Component { //Class-based components extend component to have access to the base class information
    
    //Life Cycle Methods
    componentWillMount() { //Executed when the component is about to be rendered to the screen
        console.log("Component will mount in AlbumList");

        //Use promises to execute code when an asynch call is complete
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => console.log(response));


        //debugger; You can use debugger statements to stop execution for debugging
    }
    
    render() {
        return (
            <View>
                <Text>Album List</Text>
            </View>
        );
    }
}

export default AlbumList;
