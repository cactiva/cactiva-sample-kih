import React from 'react';
import { observer } from 'mobx-react-lite';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-ui-kitten';
import { Icon } from '@src/libs';
import { useNavigation } from 'react-navigation-hooks';

export default observer(({ meta }: any) => {
  const nav = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexGrow: 1
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginTop: 42,
          marginBottom: 14,
          paddingLeft: 25
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start'
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontFamily: 'regular',
              paddingLeft: 0,
              color: '#73a6e0',
              paddingBottom: 13
            }}
            children={'Good Morning'}
          />
          <Text
            style={{ fontSize: 39, fontFamily: 'light', color: '#4182c4' }}
            children={'John Doe'}
          />
        </View>
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: '',
            padding: 10,
            borderRadius: 6,
            marginTop: -10
          }}
        >
          <Icon
            source={'EvilIcons'}
            name={'user'}
            size={40}
            color={'#0062ff'}
          />
          <Text
            style={{
              fontFamily: 'semibold',
              fontSize: 16,
              paddingTop: 4,
              color: '#0062ff'
            }}
            children={'Profile'}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
          backgroundColor: 'rgba(244, 250, 255, 0.71)',
          padding: 10,
          borderRadius: 6,
          marginTop: 13,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 5
        }}
      >
        <Text
          style={{
            fontFamily: 'semibold',
            fontSize: 16,
            color: '#37A2FF',
            opacity: 0.7
          }}
          children={'Medication reminders'}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            marginTop: 14,
            marginBottom: 10,
            marginLeft: 28
          }}
        >
          <Text
            style={{
              fontFamily: 'semibold',
              fontSize: 23,
              color: '#37A2FF',
              paddingBottom: 17
            }}
            children={'In the next 3 hours...'}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              marginTop: -5,
              marginBottom: 3,
              marginLeft: 15
            }}
          >
            <Text
              style={{ fontFamily: "semibold", fontSize: 16, color: "#37A2FF" }}
              children={"• Tab Nurokind-LC (1 tablet)"}
            />
            <Text
              style={{ fontFamily: "semibold", fontSize: 16, color: "#37A2FF" }}
              children={"• Tab Aceclofenac (1 tablet)"}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          padding: 10,
          borderRadius: 6,
          marginTop: 13,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 5,
          borderStyle: 'solid',
          borderColor: 'rgba(82, 188, 80, 0.69)',
          borderWidth: 3
        }}
        onPress={() => (meta.page = 1)}
      >
        <Text
          style={{
            fontFamily: 'semibold',
            fontSize: 16,
            color: '#46cb43',
            opacity: 0.8
          }}
          children={'Next Appointment'}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            marginTop: 9,
            marginBottom: 10,
            marginLeft: 17
          }}
        >
          <Text
            style={{
              fontFamily: 'bold',
              fontSize: 18,
              color: '#52bc50',
              paddingBottom: 11
            }}
            children={'Friday, 26 Sep 2019 at 09.30'}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              marginTop: 0,
              marginBottom: 3,
              marginLeft: 0
            }}
          >
            <Text
              style={{ fontFamily: 'semibold', fontSize: 16, color: '#46cb43' }}
              children={'dr. ASTUTI, Sp.S  '}
            />
            <Text
              style={{
                fontFamily: 'semibold',
                fontSize: 16,
                color: '#46cb43',
                paddingTop: 2
              }}
              children={'Poliklinik Umum I'}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          padding: 10,
          borderRadius: 6,
          marginTop: 13,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 5,
          borderStyle: 'solid',
          borderColor: 'rgba(240, 142, 77, 0.69)',
          borderWidth: 3
        }}
      >
        <Text
          style={{
            fontFamily: 'semibold',
            fontSize: 16,
            color: '#f08e4d',
            opacity: 0.8
          }}
          children={'Latest Lab Report'}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            marginTop: 9,
            marginBottom: 10,
            marginLeft: 17
          }}
        >
          <Text
            style={{
              fontFamily: 'bold',
              fontSize: 18,
              color: '#f08e4d',
              paddingBottom: 10
            }}
            children={'Chest Roentgen'}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              marginTop: 0,
              marginBottom: 3,
              marginLeft: 0
            }}
          >
            <Text
              style={{ fontFamily: 'semibold', fontSize: 16, color: '#f08e4d' }}
              children={'22 Sep 2019 (two days ago)'}
            />
            <Text
              style={{
                fontFamily: 'semibold',
                fontSize: 16,
                color: '#f08e4d',
                paddingTop: 2
              }}
              children={'Status: Waiting Result'}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
});
