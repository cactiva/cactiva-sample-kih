import React from 'react';
import { observer, useObservable } from 'mobx-react-lite';
import { View, TouchableOpacity } from 'react-native';
import { Text, List } from 'react-native-ui-kitten';
import { Icon } from '@src/libs';
import { useNavigation } from 'react-navigation-hooks';

export default observer(() => {
  const state = useObservable({
    list: [
      {
        date: 24,
        value: [
          {
            date: 'Friday, 24 Sep 2019 at 09.30',
            message: 'dr. Frenanda',
            submessage: 'Poliklinik Umum I'
          }
        ]
      },
      {
        date: 25,
        value: null
      },
      {
        date: 26,
        value: [
          {
            date: 'Friday, 26 Sep 2019 at 09.30',
            message: 'dr. Frenanda',
            submessage: 'Poliklinik Umum I'
          }
        ]
      },
      {
        date: 27,
        value: [
          {
            date: 'Friday, 27 Sep 2019 at 09.30',
            message: 'dr. Frenanda',
            submessage: 'Poliklinik Umum I'
          }
        ]
      },
      {
        date: 28,
        value: null
      },
      {
        date: 29,
        value: null
      },
      {
        date: 30,
        value: [
          {
            date: 'Friday, 30 Sep 2019 at 09.30',
            message: 'dr. Frenanda',
            submessage: 'Poliklinik Umum I'
          }
        ]
      }
    ]
  });
  const nav = useNavigation();
  return (
    <View
      style={{
        marginTop: 15,
        marginRight: 15,
        marginBottom: 15,
        marginLeft: 15,
        flexGrow: 1
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'center',
          backgroundColor: 'rgba(237, 247, 255, 0.58)',
          borderRadius: 6
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#ffffff',
            paddingLeft: 4,
            paddingRight: 12,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 6
          }}
        >
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(237, 247, 255, 0)',
              padding: 10,
              borderRadius: 6
            }}
          >
            <Text
              style={{ color: '#37A2FF', fontSize: 22, fontFamily: 'regular' }}
              children={'September'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(237, 247, 255, 0.58)',
              padding: 10,
              borderRadius: 2,
              paddingTop: 8,
              paddingRight: 8,
              paddingBottom: 8,
              paddingLeft: 8
            }}
            onPress={() => nav.navigate('Main/AppointmentCreate')}
          >
            <Icon
              style={{ marginRight: 0, paddingRight: 0 }}
              source={'AntDesign'}
              name={'edit'}
              size={20}
              color={'#37A2FF'}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(255, 255, 255, 0.37)',
            paddingTop: 5,
            paddingRight: 25,
            paddingBottom: 5,
            paddingLeft: 25
          }}
        >
          <Text
            style={{ backgroundColor: '', color: '#999999' }}
            children={'S'}
          />
          <Text style={{ color: '#999999' }} children={'M'} />
          <Text style={{ color: '#999999' }} children={'T'} />
          <Text style={{ color: '#999999' }} children={'W'} />
          <Text style={{ color: '#999999' }} children={'T'} />
          <Text style={{ color: '#999999' }} children={'F'} />
          <Text style={{ color: '#999999' }} children={'S'} />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 15,
            paddingBottom: 15,
            borderRadius: 6
          }}
        >
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(55, 162, 255, 0)',
              padding: 10,
              borderRadius: 35
            }}
          >
            <Text
              style={{
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                backgroundColor: '',
                borderRadius: 34,
                color: ''
              }}
              children={'22'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0)',
              padding: 10,
              borderRadius: 35
            }}
          >
            <Text
              style={{
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                backgroundColor: '',
                borderRadius: 34
              }}
              children={'23'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(55, 162, 255, 0.31)',
              padding: 10,
              borderRadius: 35
            }}
          >
            <Text
              style={{
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                backgroundColor: '',
                borderRadius: 34
              }}
              children={'24'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ffffff',
              padding: 10,
              borderRadius: 35
            }}
          >
            <Text
              style={{
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                backgroundColor: '',
                borderRadius: 34,
                color: '#37A2FF'
              }}
              children={'25'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(55, 162, 255, 0.31)',
              padding: 10,
              borderRadius: 35
            }}
          >
            <Text
              style={{
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderRadius: 34
              }}
              children={'26'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(55, 162, 255, 0.31)',
              padding: 10,
              borderRadius: 35
            }}
          >
            <Text
              style={{
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                backgroundColor: '',
                borderRadius: 34
              }}
              children={'27'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(55, 162, 255, 0)',
              padding: 10,
              borderRadius: 35
            }}
          >
            <Text
              style={{
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                backgroundColor: '',
                borderRadius: 34
              }}
              children={'28'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <List
        data={state.list}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0)',
          marginTop: 15,
          height: 0,
          flexGrow: 1
        }}
        renderItem={({ item }: any) => {
          return (
            <>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  height: 0,
                  marginTop: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingBottom: 0,
                  flexGrow: 1,
                  flexBasis: 0,
                  minHeight: 95,
                  paddingTop: null,
                  marginBottom: 10
                }}
              >
                <Text
                  style={{
                    fontSize: 34,
                    paddingTop: 5,
                    paddingRight: 15,
                    paddingLeft: 5,
                    paddingBottom: 5,
                    marginTop: 10,
                    fontFamily: 'regular',
                    flexBasis: 49,
                    color: '#a0a0a0'
                  }}
                  children={item.date}
                />
                {item.value && (
                  <>
                    <List
                      style={{
                        flexGrow: 1,
                        flexBasis: 1,
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        justifyContent: 'flex-start',
                        backgroundColor: 'rgba(255, 255, 255, 0)'
                      }}
                      data={item.value}
                      renderItem={({ item }: any) => {
                        return (
                          <>
                            <TouchableOpacity
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                backgroundColor: 'rgba(244, 250, 255, 0.71)',
                                padding: 10,
                                borderRadius: 6,
                                flexGrow: 1,
                                marginBottom: 5
                              }}
                              onPress={() =>
                                nav.navigate('Main/AppointmentDetail')
                              }
                            >
                              <Text
                                style={{ fontFamily: 'bold', fontSize: 16 }}
                                children={item.date}
                              />
                              <Text
                                style={{ fontSize: 14, fontFamily: 'regular' }}
                                children={item.message}
                              />
                              <Text
                                style={{ fontSize: 14, fontFamily: 'regular' }}
                                children={item.submessage}
                              />
                            </TouchableOpacity>
                          </>
                        );
                      }}
                    />
                  </>
                )}
              </View>
            </>
          );
        }}
      />
    </View>
  );
});
