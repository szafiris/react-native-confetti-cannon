// @flow strict

import * as React from "react";

import { Animated, StyleSheet } from "react-native";

import { randomValue } from "../utils";

type Props = {|
  left: Animated.Interpolation,
  bottom: Animated.Interpolation,
  transform: Array<{ [key: string]: Animated.Interpolation }>,
  color: string,
  opacity: Animated.Interpolation,
|};

class Confetti extends React.PureComponent<Props> {
  props: Props;
  width: number = 12;
  height: number = 12;
  isRounded: boolean = true;
  backgroundColor: string = this.props.color;

  render() {
    const { left, bottom, transform, opacity } = this.props;
    const { width, height, isRounded, backgroundColor } = this;
    const style = {
      left,
      bottom,
      width,
      height,
      backgroundColor,
      transform,
      opacity,
    };

    return (
      <Animated.View
        style={[styles.confetti, isRounded && styles.rounded, style]}
      />
    );
  }
}

const styles = StyleSheet.create({
  confetti: {
    position: "absolute",
  },
  rounded: {
    borderRadius: 100,
  },
});

export default Confetti;
