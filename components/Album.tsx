import * as React from "react";
import { View, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import {
  Album, MIN_HEADER_HEIGHT, HEADER_DELTA, MAX_HEADER_HEIGHT,
} from "./Model";
import Header from "./Header";
import Content from "./Content";
import Cover from "./Cover";
import ShufflePlay, { BUTTON_HEIGHT } from "./ShufflePlay";

interface AlbumProps {
  album: Album;
}
const { Value, multiply, min } = Animated;
export default ({ album }: AlbumProps) => {
  const { artist } = album;
  const y = new Value(0);
  const translateY = multiply(min(y, HEADER_DELTA), -1);

  return (
    <View style={styles.container}>
      <Cover {...{ y, album }} />
      <Content {...{ y, album }} />
      <Header {...{ y, artist }} />
      <Animated.View
        style={{
          position: "absolute",
          top: MAX_HEADER_HEIGHT - BUTTON_HEIGHT / 2,
          left: 0,
          right: 0,
          transform: [{ translateY }],
        }}
      >
        <ShufflePlay />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
