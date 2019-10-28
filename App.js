import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    Platform,
    KeyboardAvoidingView,
    ImageBackground,
    View
} from 'react-native';

import getImageForWeather from "./utils/getImageForWeather";
import SearchInput from "./components/SearchInput";

const App = () => {
    const [location, setLocation] = useState("San Francisco");

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <ImageBackground
                source={getImageForWeather('Clear')}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >
                <View style={styles.detailsContainer}>
                    <Text style={[styles.largeText, styles.textStyle]}>
                        {location}
                    </Text>
                    <Text style={[styles.smallText, styles.textStyle]}>
                        Light Cloud
                    </Text>
                    <Text style={[styles.largeText, styles.textStyle]}>
                        24º
                    </Text>
                    <SearchInput location={location} setLocation={setLocation}/>
                </View>
            </ImageBackground>
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
    imageContainer: {
        flex: 1
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "cover"
    },
    detailsContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.2)",
        paddingHorizontal: 20
    },
    textStyle: {
        textAlign: "center",
        fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
        color: "white"
    },
    largeText: {
        fontSize: 24
    },
    smallText: {
        fontSize: 18
    },

});

export default App;

