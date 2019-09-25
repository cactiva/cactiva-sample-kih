import React from "react";
import { observer } from "mobx-react-lite";
import TopBar from "@src/Profile/TopBar";
import { ImageBackground, View, Image, TouchableOpacity } from "react-native";
import { Text } from "react-native-ui-kitten";
import { Icon } from "@src/libs";
import { useDimensions } from "react-native-hooks";
import { useNavigation } from "react-navigation-hooks";

export default observer(() => {
  const dim = useDimensions().window;
  const nav = useNavigation();
  return (
    <>
      <TopBar title={"Profile"} />
      <ImageBackground
        style={{ height: dim.height, paddingLeft: 30, paddingRight: 30 }}
        source={require("@src/assets/images/bg2.png")}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            style={{
              height: 150,
              width: 150,
              marginRight: 21,
              borderWidth: 0,
              borderRadius: 9999,
              borderColor: "#ffffff"
            }}
            source={require("@src/assets/images/face.png")}
          />
          <Text
            style={{
              fontFamily: "regular",
              color: "#220a0a",
              fontSize: 39,
              marginTop: 22,
              marginBottom: 35
            }}
            children={"John Doe"}
          />
        </View>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            backgroundColor: "rgba(183, 192, 221, 0.2)",
            padding: 10,
            borderRadius: 15,
            marginTop: 5,
            marginBottom: 5,
            height: 133,
            paddingLeft: 20,
            paddingTop: 30,
            paddingBottom: 30,
            paddingRight: 20,
            opacity: 0.9,
            marginLeft: 0,
            marginRight: 0
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start"
            }}
          >
            <Text
              style={{ fontFamily: "regular", color: "#413f3f", fontSize: 20 }}
              children={"Classic Member"}
            />
            <Text
              style={{
                fontFamily: "regular",
                color: "#000000",
                fontSize: 18,
                marginTop: 23
              }}
              children={"123-4874893-1443"}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start"
            }}
          >
            <Image
              style={{
                height: 70,
                width: 70,
                borderStyle: "solid",
                borderWidth: 4,
                borderRadius: 6,
                borderColor: "#000000",
                marginTop: 0
              }}
              width={70}
              height={70}
              source={require("@src/assets/images/qr.png")}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#3366ff",
            padding: 10,
            borderRadius: 6,
            marginBottom: 10,
            marginTop: 21
          }}
        >
          <Icon
            style={{ marginRight: 5 }}
            source={"Entypo"}
            name={"briefcase"}
            size={20}
            color={"white"}
          />
          <Text
            style={{ fontFamily: "regular", color: "white" }}
            children={"Hospital transactions / spending"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#3366ff",
            padding: 10,
            borderRadius: 6
          }}
        >
          <Icon
            style={{ marginRight: 5 }}
            source={"Entypo"}
            name={"price-ribbon"}
            size={20}
            color={"white"}
          />
          <Text
            style={{ fontFamily: "regular", color: "white" }}
            children={"Point Redeem Report"}
          />
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
});
