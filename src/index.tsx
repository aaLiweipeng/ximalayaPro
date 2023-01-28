import React from 'react';
import {Text, View} from 'react-native';
import {viewportWidth, viewportHeight} from '@/utils/index';

export default class extends React.Component {
  render() {
    return (
      <View>
        <Text>
          {'viewportWidth --- ' +
            viewportWidth +
            '\nviewportHeight --- ' +
            viewportHeight}
        </Text>
      </View>
    );
  }
}
