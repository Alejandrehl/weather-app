import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={[styles.largeText, styles.textStyle]}>
              San Francisco
            </Text>
            <Text style={[styles.smallText, styles.textStyle]}>
              Light Cloud
            </Text>
          <Text style={[styles.largeText, styles.textStyle]}>
            24º
          </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        textAlign: "center",
        fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto'
    },
    largeText: {
        fontSize: 24
    },
    smallText: {
        fontSize: 18
    }
});

export default App;

