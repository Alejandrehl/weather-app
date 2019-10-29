import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    Platform,
    KeyboardAvoidingView,
    ImageBackground,
    View,
    ActivityIndicator,
    StatusBar
} from 'react-native';

import {fetchLocationId, fetchWeather} from "./utils/api";
import getImageForWeather from "./utils/getImageForWeather";
import SearchInput from "./components/SearchInput";

const App = () => {
    const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [temperature, setTemperature] = useState(0);
    const [weather, setWeather] = useState('');

    const handleUpdateLocation = async (city) => {
        if (!city) return;
        try {
            setLoading(true);
            const locationId = await fetchLocationId(city);
            const {location, weather, temperature} = await fetchWeather(locationId);

            setLoading(false);
            setError(false);
            setLocation(location);
            setWeather(weather);
            setTemperature(temperature);
        } catch (e) {
            setLoading(false);
            setError(true);
        }
    };

    useEffect(() => {
        handleUpdateLocation("San Francisco");
    }, []);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <StatusBar barStyle="light-content"/>
            <ImageBackground
                source={getImageForWeather('Clear')}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >
                <View style={styles.detailsContainer}>
                    <ActivityIndicator
                        animating={loading}
                        color="white"
                        size="large"
                    />
                    {!loading && (
                        <View>
                            {error && (
                                <Text style={[styles.smallText, styles.textStyle]}>
                                    Could not load weather, please try a different city
                                </Text>
                            )}

                            {!error && (
                                <View>
                                    <Text style={[styles.largeText, styles.textStyle]}>
                                        {location}
                                    </Text>
                                    <Text style={[styles.smallText, styles.textStyle]}>
                                        {weather}
                                    </Text>
                                    <Text style={[styles.largeText, styles.textStyle]}>
                                        {`${Math.round(temperature)}º`}
                                    </Text>
                                </View>
                            )}
                        </View>
                    )}
                    <SearchInput location={location} onSubmit={handleUpdateLocation}/>
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

