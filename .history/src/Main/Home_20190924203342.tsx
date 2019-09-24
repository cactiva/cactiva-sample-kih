import React from "react";
import { observer } from "mobx-react-lite";
import { ImageBackground, View } from "react-native";
import BottomBar from "@src/Main/BottomBar";
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
      <BottomBar />
      <BottomNavigation style={{ height: 80 }}>
        <BottomNavigationTab
          selected={false}
          title={"Home"}
          titleStyle={{ color: "#3466FF" }}
          icon={() => {
            return (
              <Icon
                source={"AntDesign"}
                name={"home"}
                size={20}
                color={"#3466FF"}
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
