import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Context, Provider} from '../context/BlogContext';
import { FlatList } from 'react-native-gesture-handler';



const IndexScreen = () => {
    const {state, addBlogPost} = useContext(Context);
    return (
        <View style={styles.container}>
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList data={state} keyExtractor={blogPost=> blogPost.title} renderItem={({item})=> <Text>Blog #{item.title}</Text>}/>
            <Text>Open up App.tsx to start working on your app ${state.length}!</Text>
            <StatusBar style="auto" />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default IndexScreen;