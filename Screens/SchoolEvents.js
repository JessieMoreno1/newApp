import React, { Component } from 'react';
import {StyleSheet,View, Text, FlatList, ActivityIndicator, TouchableOpacity, Image, StatusBar} from 'react-native'

export default class SchoolEvents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataSource: []
        }
    }
    
    // checks if json loaded
    componentDidMount() {
        fetch('https://apps.pasadena.edu/wp-content/uploads/all-events-feed.json?ver=32')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false, 
                dataSource: responseJson
            })
        })
    }

    // this is the alert itself, to change the alert prompt change the alert function
    _renderItem = ({item, index}) => {
        return (
            <TouchableOpacity onPress={() => alert( "\n" +item.title + "\n" + "\n" +  item.event_excerpt + "\n" + "\n" + item.start)}>
                <View style={styles.item}>
                    <Image 
                        source={{uri: item.featured_image}}
                        style={{height: 200, width: '100%'}}

                    />
                    <Text style={styles.eventTitle} >{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    // this renders the app, if not loading , its a loading animation 
    render() {
        let {container} = styles
        let {dataSource, isLoading} = this.state
        if (isLoading) {
            return (
                <View style={container}>
                    <ActivityIndicator size="large" animating/>
                </View>  
            )
        }
        // loads the list 
        else {
            return (
                <View style={styles.mainView}>
                    <View style={styles.TopView}>
                        <Image style={styles.ImageStyle} source={require('../assets/images/HorizontalLogoblack.png')}/>
                    </View>
                    <View style={container}>
                        <FlatList
                            data = {dataSource}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </View>
            )
        } 
    }
}

// styles the page
const styles = StyleSheet.create({
    mainView: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A8003B'
    },
    TopView: {
        width: '100%',
        height: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A8003B'
    },
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 10,
        paddingTop: 20,
        backgroundColor: '#A8003B'

    },
    item: {
        padding: 5, 
        paddingBottom: 10,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        marginVertical: 10,
        borderRadius: 10,
        
    },
    ImageStyle : {
        width: '50%',
        resizeMode: 'contain',
    },
    eventTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

// export default SchoolEvents