import React from 'react';
import { View, Text } from 'react-native';
import { tsPropertySignature } from '@babel/types';

const AlbumDetail = (props) => {
    return (
        <View>
            <Text>{props.album.title}</Text>
        </View>
    );
};

export default AlbumDetail;
