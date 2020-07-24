import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BlogContext from '../context/BlogContext';
import { FlatList } from 'react-native-gesture-handler';



const IndexScreen = () => {
    const {data, addBlogPost} = useContext(BlogContext);
    return (
        <View style={styles.container}>
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList data={data} keyExtractor={blogPost=> blogPost.title} renderItem={({item})=> <Text>Blog #{item.title}</Text>}/>
            <Text>Open up App.tsx to start working on your app ${data.length}!</Text>
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