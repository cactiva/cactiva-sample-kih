import React from "react";
import { observer } from "mobx-react-lite";
import { ImageBackground, View } from "react-native";
import { BottomNavigation, BottomNavigationTab } from "react-native-ui-kitten";
import { Icon } from "@src/libs";
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
      <BottomNavigation style={{ height: 91 }}>
        <BottomNavigationTab
          selected={false}
          title={"Home"}
          titleStyle={{
            color: "red"
          }}
          icon={() => {
            return (
              <Icon
                source={"AntDesign"}
                name={"star"}
                size={20}
                color={"red"}
              />
            );
          }}
        />
        <BottomNavigationTab
          icon={() => {
            return <Icon source={"AntDesign"} name={"rightcircle"} size={20} />;
          }}
        />
        <BottomNavigationTab
          icon={() => {
            return <Icon source={"AntDesign"} name={"forward"} size={20} />;
          }}
        />
        <BottomNavigationTab
          icon={() => {
            return <Icon source={"AntDesign"} name={"up-square-o"} size={20} />;
          }}
        />
      </BottomNavigation>
    </ImageBackground>
  );
});
