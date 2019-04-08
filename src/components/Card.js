import React from 'react';
import { View } from 'react-native';
import { declaredPredicate } from '@babel/types';

const Card = () => {
    return (
        <View style={styles.containerStyle}>
            
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#DDD',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation, 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10 
    }
};

export default Card;