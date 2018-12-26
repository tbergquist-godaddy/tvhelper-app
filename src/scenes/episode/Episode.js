// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/tvhelper-relay';
import { Text } from '@tbergq/tvhelper-components';
import { StyleSheet, View } from 'react-native';

import type { Episode as EpisodeType } from './__generated__/Episode.graphql';
import Image from '../../components/TvHelperImage';
import ToggleWatched from './ToggleWatched';

type Props = {|
  +data: EpisodeType,
|};

const Episode = (props: Props) => (
  <View style={styles.container}>
    <Image data={props.data.image} style={styles.image} />
    <Text style={styles.title} bold={true}>
      {props.data.name}
    </Text>
    <View style={styles.content}>
      <Text>TODO: content</Text>
    </View>
    <View style={styles.toggleContainer}>
      <ToggleWatched data={props.data} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toggleContainer: {
    position: 'absolute',
    bottom: 0,
    end: 0,
    start: 0,
  },
  image: {
    width: '100%',
    height: 180,
  },
  title: {
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 8,
  },
  content: {
    paddingHorizontal: 10,
  },
});

export default createFragmentContainer(
  Episode,
  graphql`
    fragment Episode on Episode {
      name
      image {
        ...TvHelperImage
      }
      ...ToggleWatched
    }
  `,
);
