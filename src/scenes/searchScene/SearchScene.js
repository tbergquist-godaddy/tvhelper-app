// @flow strict

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from '@tbergq/tvhelper-components';

type Props = {||};

type State = {|
  query: string,
  input: string,
|};
export default class SearchScene extends React.Component<Props, State> {
  state = {
    input: '',
    query: '',
  };

  onChange = (input: string) => this.setState({ input });

  search = () => this.setState((state: State) => ({ query: state.input }));

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Search tv show"
          value={this.state.input}
          onChangeText={this.onChange}
        />
        <View style={styles.row}>
          <View style={styles.item} />
          <Button text="Search" onPress={this.search} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
  },
  item: {
    flex: 1,
  },
});
