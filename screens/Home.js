import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Home = (props) => {
    return(
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Home;