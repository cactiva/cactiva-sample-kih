import React from "react";
import { observer, useObservable } from "mobx-react-lite";
import { BottomNavigation, BottomNavigationTab } from "react-native-ui-kitten";
import { Icon } from "@src/libs";
import { useNavigation } from "react-navigation-hooks";

export default observer(() => {
  const meta = useObservable({
    page: 0
  });
  const nav = useNavigation();
  return (
    <BottomNavigation
      style={{ height: 80 }}
      selectedIndex={meta.page}
      onSelect={e => {
        meta.page = e;
      }}
    >
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
        selected={false}
        title={"Appointment"}
        titleStyle={{ color: "#3466FF" }}
        icon={() => {
          return (
            <Icon
              source={"AntDesign"}
              name={"calendar"}
              size={20}
              color={"#3466FF"}
            />
          );
        }}
      />
      <BottomNavigationTab
        selected={false}
        titleStyle={{ color: "#3466FF" }}
        title={"Prescription"}
        icon={() => {
          return (
            <Icon
              source={"AntDesign"}
              name={"medicinebox"}
              size={20}
              color={"#3466FF"}
            />
          );
        }}
      />
      <BottomNavigationTab
        selected={false}
        title={"Report"}
        titleStyle={{ color: "#3466FF" }}
        icon={() => {
          return (
            <Icon
              source={"AntDesign"}
              name={"piechart"}
              size={20}
              color={"#3466FF"}
            />
          );
        }}
      />
    </BottomNavigation>
  );
});
