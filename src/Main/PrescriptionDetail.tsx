import React from "react";
import { observer, useObservable } from "mobx-react-lite";
import { ImageBackground, ScrollView, View } from "react-native";
import {
  Text,
  List,
  TopNavigationAction,
  TopNavigation
} from "react-native-ui-kitten";
import { useDimensions } from "react-native-hooks";
import { useNavigation } from "react-navigation-hooks";
import { Icon } from "@src/libs";

export default observer(() => {
  const dim = useDimensions().window;
  const meta = useObservable({
    prescriptions: [
      {
        item: "Baclofen Oral 150 mg",
        desc: "1 x daily after dinner"
      },
      {
        item: "Tab Nurokind-LC 100 mg",
        desc: "1 x daily after meal"
      },
      {
        item: "Tab Aclecofenac 150 mg",
        desc: "1 x daily after meal"
      }
    ]
  });
  const nav = useNavigation();
  return (
    <ImageBackground
      style={{ height: dim.height }}
      source={require("@src/assets/images/bg.png")}
    >
      <TopNavigation
        title={"Detail Prescription"}
        leftControl={
          <TopNavigationAction
            icon={() => {
              return <Icon source={"AntDesign"} name={"arrowleft"} size={24} />;
            }}
            onPress={() => {
              nav.goBack();
            }}
          />
        }
      />

      <ScrollView
        style={{
          editable: "",
          paddingTop: 0,
          paddingRight: 10,
          paddingLeft: 10,
          paddingBottom: 10
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            minWidth: 0,
            minHeight: 0,
            editable: "",
            marginTop: 10,
            marginBottom: 10,
            borderStyle: "solid",
            borderBottomWidth: 2,
            borderColor: "#6da4fb",
            borderRadius: 0
          }}
        >
          <Text
            style={{
              fontWeight: "800",
              fontSize: 18,
              color: "#37A2FF",
              editable: "",
              paddingBottom: 0,
              paddingLeft: 10,
              paddingTop: 10
            }}
            children={"Prescription"}
          />
          <Text
            style={{
              fontWeight: "300",
              fontSize: 14,
              color: "#37A2FF",
              editable: "",
              paddingBottom: 15,
              paddingLeft: 10,
              paddingTop: 3
            }}
            children={"Dr. Amarjeet Bhatia , MBBS, MSc"}
          />
          <List
            style={{ backgroundColor: "rgba(255, 255, 255, 0)", flexGrow: 1 }}
            data={meta.prescriptions}
            renderItem={({ item }: any) => {
              return (
                <>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      editable: "",
                      paddingLeft: 15,
                      paddingBottom: 15
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "500",
                        fontSize: 14,
                        color: "#37A2FF"
                      }}
                      children={"• " + item.item}
                    />
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: 14,
                        color: "#37A2FF",
                        editable: "",
                        paddingLeft: 10
                      }}
                      children={item.desc}
                    />
                  </View>
                </>
              );
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            minWidth: 0,
            minHeight: 0,
            editable: "",
            marginTop: 10,
            marginBottom: 10,
            borderStyle: "solid",
            borderBottomWidth: 2,
            borderColor: "#f08e4d",
            borderRadius: 0
          }}
        >
          <Text
            style={{
              fontWeight: "800",
              fontSize: 18,
              color: "#f08e4d",
              editable: "",
              paddingBottom: 10,
              paddingLeft: 10,
              paddingTop: 10
            }}
            children={"Diagnose"}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              editable: "",
              paddingLeft: 25,
              paddingBottom: 15
            }}
          >
            <Text
              style={{ fontWeight: "400", fontSize: 14, color: "#f08e4d" }}
              children={"Stress (Work related)"}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              editable: "",
              paddingLeft: 25,
              paddingBottom: 15
            }}
          >
            <Text
              style={{ fontWeight: "600", fontSize: 14, color: "#f08e4d" }}
              children={"Recommended Action"}
            />
            <Text
              style={{
                fontWeight: "400",
                fontSize: 14,
                color: "#f08e4d",
                editable: "",
                paddingBottom: 5
              }}
              children={"• Drink salt water twice a day"}
            />
            <Text
              style={{
                fontWeight: "400",
                fontSize: 14,
                color: "#f08e4d",
                editable: "",
                paddingBottom: 5
              }}
              children={
                "• Steam Inhalation. Apply vicks vaporub over nose and throat"
              }
            />
            <Text
              style={{
                fontWeight: "400",
                fontSize: 14,
                color: "#f08e4d",
                editable: "",
                paddingBottom: 5
              }}
              children={"• Avoid cold exposure for few days"}
            />
            <Text
              style={{
                fontWeight: "400",
                fontSize: 14,
                color: "#f08e4d",
                editable: "",
                paddingBottom: 5
              }}
              children={"• Apply a hot pack to your throat and chest"}
            />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            minWidth: 0,
            minHeight: 0,
            editable: "",
            marginTop: 10,
            marginBottom: 10,
            borderStyle: "solid",
            borderBottomWidth: 2,
            borderColor: "#f05e5e",
            borderRadius: 0,
            flexGrow: 0
          }}
        >
          <Text
            style={{
              fontWeight: "800",
              fontSize: 18,
              color: "#f05e5e",
              editable: "",
              paddingBottom: 10,
              paddingLeft: 10,
              paddingTop: 10
            }}
            children={"Receipt"}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              editable: "",
              paddingLeft: 0,
              paddingBottom: 15,
              flexGrow: 1,
              width: "100%",
              paddingRight: 15
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                editable: "",
                paddingLeft: 25,
                paddingBottom: 15
              }}
            >
              <Text
                style={{ fontWeight: "400", fontSize: 14, color: "#f05e5e" }}
                children={"Biaya Administrasi Poliklinik"}
              />
              <Text
                style={{ fontWeight: "400", fontSize: 14, color: "#f05e5e" }}
                children={"Biaya Pemeriksaan"}
              />
              <Text
                style={{ fontWeight: "400", fontSize: 14, color: "#f05e5e" }}
                children={"Biaya Obat"}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                editable: "",
                paddingLeft: null,
                paddingBottom: 15,
                paddingRight: 15
              }}
            >
              <Text
                style={{ fontWeight: "400", fontSize: 14, color: "#f05e5e" }}
                children={"40.000"}
              />
              <Text
                style={{ fontWeight: "400", fontSize: 14, color: "#f05e5e" }}
                children={"175.000"}
              />
              <Text
                style={{ fontWeight: "400", fontSize: 14, color: "#f05e5e" }}
                children={"445.000"}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            minWidth: 0,
            minHeight: 0,
            editable: "",
            marginTop: 10,
            marginBottom: 10,
            borderStyle: "solid",
            borderBottomWidth: 2,
            borderColor: "#52bc50",
            borderRadius: 0
          }}
        >
          <Text
            style={{
              fontWeight: "800",
              fontSize: 18,
              color: "#52bc50",
              editable: "",
              paddingBottom: 10,
              paddingLeft: 10,
              paddingTop: 10
            }}
            children={"Next Appointment"}
          />
          <Text
            style={{
              fontSize: 14,
              color: "#52bc50",
              editable: "",
              paddingLeft: 25,
              paddingBottom: 5
            }}
            children={"Friday, 27 Sep 2019 at 09.30"}
          />
          <Text
            style={{
              fontSize: 16,
              color: "#52bc50",
              editable: "",
              paddingLeft: 25,
              paddingBottom: 5,
              fontWeight: "500"
            }}
            children={"dr. ASTUTI, Sp.S"}
          />
          <Text
            style={{
              fontSize: 14,
              color: "#52bc50",
              editable: "",
              paddingLeft: 25,
              paddingBottom: 15
            }}
            children={"Poliklinik Umum I"}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
});
