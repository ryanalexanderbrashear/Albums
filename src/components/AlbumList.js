import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';
//Importing Axios to carry out HTTP calls
import Axios from 'axios';

class AlbumList extends Component { //Class-based components extend component to have access to the base class information. States can only be used with class-based components

    //Adding a default (empty) state
    state = { albums: [] };
    
    //Life Cycle Methods
    componentWillMount() { //Executed when the component is about to be rendered to the screen
        console.log('Component will mount in AlbumList');

        //Use promises to execute code when an asynch call is complete
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data })); //Updating the state object with the response data. setState causes the render method to be called again


        //debugger; You can use debugger statements to stop execution for debugging
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        ); //Map will return an array by going over each element that is being mapped. When rendering an array, each element must have a key value to use for updating/rerendering. Each key must be unique, so it's recommended to use an ID or something like that so that they will be unique
    }
    
    render() {
        console.log(this.state);

        return (
            //To be able to interact with Javascript objects within JSX, they must be enclosed within curly braces
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList; //Export the component so it can be used throughout the application
