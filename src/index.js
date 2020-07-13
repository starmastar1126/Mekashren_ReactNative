import React from 'react';
import { StatusBar, View } from 'react-native';
// import {Provider} from 'react-redux';

import AppContainer from './navigation';
// import configureStore from './store';
// const store = configureStore();

export default class App extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    translucent={true}
                    barStyle='light-content'
                    backgroundColor='transparent'
                />
                {/* <Provider store={store} > */}
                    <AppContainer />
                {/* </Provider> */}
            </View>
        );
    }
    
}
