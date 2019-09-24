import BottomBar from "@src/Main/BottomBar";
import { observer } from "mobx-react-lite";
import React from "react";
import { ImageBackground, View } from "react-native";
import { useDimensions } from "react-native-hooks";

export default observer(() => {
  const dim = useDimensions().window;
  return (
    <ImageBackground
      style={{ height: dim.height }}
      source={require("@src/assets/images/logo.png")}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexGrow: 1
        }}
      />
      <BottomBar />
    </ImageBackground>
  );
});
