import React from "react";
import { observer } from "mobx-react-lite";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-ui-kitten";
import { Icon } from "@src/libs";

export default observer(() => {
  return (
    <ScrollView
      style={{
        paddingTop: 4,
        paddingRight: 14,
        paddingLeft: 17,
        paddingBottom: 20,
        flexGrow: 1
      }}
    >
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "rgba(244, 250, 255, 0.74)",
          padding: 10,
          borderRadius: 16,
          opacity: 1,
          borderWidth: 1,
          borderColor: "#559cfa",
          marginTop: 37
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: 10,
            borderBottomWidth: 1,
            borderRadius: 0,
            width: "100%",
            backgroundColor: "",
            paddingBottom: 15,
            borderStyle: "solid",
            borderColor: "rgb(184, 224, 255)",
            marginBottom: 12
          }}
        >
          <Text
            children={"20 September 2019"}
            style={{
              color: "#70aee1",
              fontWeight: "500",
              paddingBottom: 5,
              fontSize: 18
            }}
          />
          <Text
            children={"Dr. Amarjeet Bhatia , MBBS, MSc"}
            style={{ color: "#70aee1", fontWeight: "500", fontSize: 14 }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            paddingLeft: 24,
            paddingBottom: 21,
            width: "100%"
          }}
        >
          <Text
            style={{
              color: "#5caae9",
              fontWeight: "500",
              paddingTop: 5,
              paddingBottom: 5
            }}
            children={"• Baclofen Oral 350 mg "}
          />
          <Text
            style={{ color: "#5caae9", fontWeight: "400", paddingLeft: 15 }}
            children={"1 x daily after dinner"}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            paddingLeft: 24,
            paddingBottom: 21,
            width: "100%"
          }}
        >
          <Text
            style={{
              color: "#5caae9",
              fontWeight: "500",
              paddingTop: 5,
              paddingBottom: 5
            }}
            children={"• Tab Nurokind-LC 100 mg"}
          />
          <Text
            style={{ color: "#5caae9", fontWeight: "400", paddingLeft: 15 }}
            children={"3 x daily after meal"}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            paddingLeft: 24,
            paddingBottom: 21,
            width: "100%"
          }}
        >
          <Text
            style={{
              color: "#5caae9",
              fontWeight: "500",
              paddingTop: 5,
              paddingBottom: 5
            }}
            children={"• Tab Aclecofenac 150 mg"}
          />
          <Text
            style={{ color: "#5caae9", fontWeight: "400", paddingLeft: 15 }}
            children={"3 x daily after meal"}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "rgba(244, 250, 255, 0.74)",
          padding: 10,
          borderRadius: 16,
          opacity: 1,
          marginTop: 22,
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "#559cfa"
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: 10,
            borderWidth: 0,
            borderRadius: 0,
            backgroundColor: "#f9fcff"
          }}
        >
          <Text
            children={"05 June 2019"}
            style={{
              color: "#70aee1",
              fontWeight: "500",
              paddingBottom: 5,
              fontSize: 14
            }}
          />
          <Text
            children={"• Baclofen Oral 350 mg "}
            style={{
              color: "#70aee1",
              fontWeight: "400",
              paddingBottom: 5,
              fontSize: 14
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: 10,
            borderWidth: 0,
            borderRadius: 0,
            backgroundColor: "#f9fcff",
            paddingBottom: 24
          }}
        >
          <Text
            style={{
              lineHeight: 0,
              color: "#4d9de2",
              fontWeight: "400",
              fontSize: 14,
              minWidth: 0
            }}
            children={"Detail"}
          />
          <Icon
            source={"AntDesign"}
            name={"right"}
            size={20}
            color={"#4d9de2"}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "rgba(244, 250, 255, 0.74)",
          padding: 10,
          borderRadius: 16,
          opacity: 1,
          marginTop: 22,
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "#559cfa"
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: 10,
            borderWidth: 0,
            borderRadius: 0,
            backgroundColor: "#f9fcff"
          }}
        >
          <Text
            children={"05 June 2019"}
            style={{
              color: "#70aee1",
              fontWeight: "500",
              paddingBottom: 5,
              fontSize: 14
            }}
          />
          <Text
            children={"• Baclofen Oral 350 mg "}
            style={{
              color: "#70aee1",
              fontWeight: "400",
              paddingBottom: 5,
              fontSize: 14
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: 10,
            borderWidth: 0,
            borderRadius: 0,
            backgroundColor: "#f9fcff",
            paddingBottom: 24
          }}
        >
          <Text
            style={{
              lineHeight: 0,
              color: "#4d9de2",
              fontWeight: "400",
              fontSize: 14,
              minWidth: 0
            }}
            children={"Detail"}
          />
          <Icon
            source={"AntDesign"}
            name={"right"}
            size={20}
            color={"#4d9de2"}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "rgba(244, 250, 255, 0.74)",
          padding: 10,
          borderRadius: 16,
          opacity: 1,
          marginTop: 22,
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "#559cfa"
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: 10,
            borderWidth: 0,
            borderRadius: 0,
            backgroundColor: "#f9fcff"
          }}
        >
          <Text
            children={"05 June 2019"}
            style={{
              color: "#70aee1",
              fontWeight: "500",
              paddingBottom: 5,
              fontSize: 14
            }}
          />
          <Text
            children={"• Baclofen Oral 350 mg "}
            style={{
              color: "#70aee1",
              fontWeight: "400",
              paddingBottom: 5,
              fontSize: 14
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: 10,
            borderWidth: 0,
            borderRadius: 0,
            backgroundColor: "#f9fcff",
            paddingBottom: 24
          }}
        >
          <Text
            style={{
              lineHeight: 0,
              color: "#4d9de2",
              fontWeight: "400",
              fontSize: 14,
              minWidth: 0
            }}
            children={"Detail"}
          />
          <Icon
            source={"AntDesign"}
            name={"right"}
            size={20}
            color={"#4d9de2"}
          />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
});
