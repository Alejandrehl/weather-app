import React from 'react';
import {
    StyleSheet,
    Text,
    Platform,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';

const App = () => {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <Text style={[styles.largeText, styles.textStyle]}>
                San Francisco
            </Text>
            <Text style={[styles.smallText, styles.textStyle]}>
                Light Cloud
            </Text>
            <Text style={[styles.largeText, styles.textStyle]}>
                24º
            </Text>
            <TextInput
                autoCorrect={false}
                placeholder="Search Any City"
                placeholderTextColor="white"
                style={styles.textInput}
                clearButtonMode="always"
            />
        </KeyboardAvoidingView>
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
    },
    textInput: {
        backgroundColor: "#666",
        color: "white",
        height: 40,
        width: 300,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        alignSelf: "center"
    }
});

export default App;

