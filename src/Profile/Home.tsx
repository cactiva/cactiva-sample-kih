import React from "react";
import { observer } from "mobx-react-lite";
import { View, TouchableOpacity } from "react-native";
import { Icon } from "@src/libs";
import { Text } from "react-native-ui-kitten";
import { useNavigation } from "react-navigation-hooks";

export default observer(() => {
  const nav = useNavigation();
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "flex-start",
        flexGrow: 1
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          marginTop: 42,
          marginBottom: 14,
          paddingLeft: 25
        }}
      >
        <TouchableOpacity
          style={{ marginTop: 10, marginRight: 15 }}
          onPress={() => {
            nav.goBack();
          }}
        >
          <Icon
            source={"AntDesign"}
            name={"left"}
            size={40}
            color={"#98bfe3"}
          />
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start"
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontFamily: "regular",
              paddingLeft: 0,
              color: "#73a6e0",
              paddingBottom: 15
            }}
            children={"Profile"}
          />
          <Text
            style={{ fontSize: 39, fontFamily: "light", color: "#4182c4" }}
            children={"John Doe"}
          />
        </View>
      </View>
    </View>
  );
});
