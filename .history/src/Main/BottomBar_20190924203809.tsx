import React from "react";
import { Layout } from "react-native-ui-kitten";
import { observer } from "mobx-react-lite";

export default observer(() => {
  return (
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
    </BottomNavigation>;
});
  