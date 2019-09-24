import React from "react";
import { observer, useObservable } from "mobx-react-lite";
import { ImageBackground, View } from "react-native";
import Main from "@src/Main/Main";
import Appointment from "@src/Main/Appointment";
import Prescription from "@src/Main/Prescription";
import Report from "@src/Main/Report";
import { BottomNavigation, BottomNavigationTab } from "react-native-ui-kitten";
import { Icon } from "@src/libs";
import { useDimensions } from "react-native-hooks";
import { useNavigation } from "react-navigation-hooks";

export default observer(() => {
  const dim = useDimensions().window;
  const meta = useObservable({
    page: 0
  });
  const nav = useNavigation();
  return (
    <ImageBackground
      style={{ height: dim.height }}
      source={require("@src/assets/images/17760185_638614599670474_3499843240122106843_n.jpg")}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "flex-start",
          flexGrow: 1
        }}
      >
        {
          ({
            0: <Main />,
            1: <Appointment />,
            2: <Prescription />,
            3: <Report />
          } as any)[meta.page]
        }
      </View>
      <BottomNavigation
        style={{
          marginTop: -16,
          opacity: 1,
          backgroundColor: "#ffffff",
          height: 75
        }}
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
                name={"linechart"}
                size={20}
                color={"#3466FF"}
              />
            );
          }}
        />
      </BottomNavigation>
    </ImageBackground>
  );
});
