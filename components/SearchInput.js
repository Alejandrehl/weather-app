import React from "react";
import {StyleSheet, TextInput} from "react-native";

const SearchInput = ({setLocation}) => {
    const handleChangeText = (newLocation) => {
        setLocation(newLocation);
    };

    return (
        <TextInput
            autoCorrect={false}
            placeholder="Search Any City"
            placeholderTextColor="white"
            style={styles.textInput}
            clearButtonMode="always"
            underlineColorAndroid="transparent"
            onChangeText={handleChangeText}
        />
    )
};

const styles = StyleSheet.create({
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

export default SearchInput;