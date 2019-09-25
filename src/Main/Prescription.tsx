import React from "react";
import { observer, useObservable } from "mobx-react-lite";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Text, List } from "react-native-ui-kitten";
import { Icon } from "@src/libs";
import { useNavigation } from "react-navigation-hooks";

export default observer(() => {
  const meta = useObservable({
    data: [
      {
        date: "05 June 2019",
        desc: "Baclofen Oral 350 mg"
      },
      {
        date: "27 Mei 2019",
        desc: "Baclofen Oral 350 mg"
      },
      {
        date: "14 Mei 2019",
        desc: "Baclofen Oral 350 mg"
      }
    ]
  });
  const nav = useNavigation();
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
        onPress={() => {
          nav.navigate("Main/PrescriptionDetail");
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
            borderColor: "#71bdff",
            marginBottom: 12
          }}
        >
          <Text
            children={"20 September 2019"}
            style={{
              color: "#37A2FF",
              fontWeight: "500",
              paddingBottom: 5,
              fontSize: 18
            }}
          />
          <Text
            children={"Dr. Amarjeet Bhatia , MBBS, MSc"}
            style={{ color: "#37A2FF", fontWeight: "500", fontSize: 14 }}
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
              color: "#37A2FF",
              fontWeight: "500",
              paddingTop: 5,
              paddingBottom: 5
            }}
            children={"• Baclofen Oral 350 mg "}
          />
          <Text
            style={{ color: "#37A2FF", fontWeight: "400", paddingLeft: 15 }}
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
              color: "#37A2FF",
              fontWeight: "500",
              paddingTop: 5,
              paddingBottom: 5
            }}
            children={"• Tab Nurokind-LC 100 mg"}
          />
          <Text
            style={{ color: "#37A2FF", fontWeight: "400", paddingLeft: 15 }}
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
              color: "#37A2FF",
              fontWeight: "500",
              paddingTop: 5,
              paddingBottom: 5
            }}
            children={"• Tab Aceclofenac 150 mg"}
          />
          <Text
            style={{ color: "#37A2FF", fontWeight: "400", paddingLeft: 15 }}
            children={"3 x daily after meal"}
          />
        </View>
      </TouchableOpacity>
      <List
        style={{ opacity: 1, backgroundColor: "rgba(255, 255, 255, 0)" }}
        data={meta.data}
        renderItem={({ item }: any) => {
          return (
            <>
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
                onPress={() => {
                  nav.navigate("Main/PrescriptionDetail");
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
                    style={{
                      color: "#37A2FF",
                      fontWeight: "500",
                      paddingBottom: 5,
                      fontSize: 14
                    }}
                    children={item.date}
                  />
                  <Text
                    style={{
                      color: "#37A2FF",
                      fontWeight: "400",
                      paddingBottom: 5,
                      fontSize: 14
                    }}
                    children={"• " + item.desc}
                  />
                </View>
                <Icon
                  source={"AntDesign"}
                  name={"right"}
                  size={28}
                  color={"#70bbfd"}
                />
              </TouchableOpacity>
            </>
          );
        }}
      />
    </ScrollView>
  );
});
