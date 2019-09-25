import React from 'react';
import { observer, useObservable } from 'mobx-react-lite';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import { Icon, Input, Select } from '@src/libs';
import { TopNavigation, Button } from 'react-native-ui-kitten';
import { useNavigation } from 'react-navigation-hooks';
import { useDimensions } from 'react-native-hooks';
import { Calendar } from 'react-native-calendars';

export default observer(() => {
  const nav = useNavigation();
  const state = useObservable({
    doctor: [
      { text: 'dr. Purnomo, Sp.S' },
      { text: 'dr. Santoso, Sp.S' },
      { text: 'dr. Yono, Sp.S' },
      { text: 'dr. Bambang, Sp.S' },
      { text: 'dr. Wijayanti, Sp.S' },
      { text: 'dr. Suminem, Sp.S' }
    ],
    poliklinik: [{ text: 'Umum' }, { text: 'Anak' }, { text: 'THT' }],
    service: [{ text: 'Poliklinik' }, { text: 'Cek Medis' }],
    checkup: [{ text: 'Tekanan Darah' }, { text: 'Medical Check Up' }],
    valdoctor: {},
    valservice: {},
    valpoliklinik: {},
    valcheckup: {}
  });
  const dim = useDimensions().window;
  return (
    <ImageBackground
      style={{
        flexBasis: 1,
        flexDirection: 'column',
        height: dim.height
      }}
      source={require('@src/assets/images/bg.png')}
    >
      <TopNavigation
        title={'Create Appointment'}
        leftControl={
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ffffff',
              padding: 10,
              borderRadius: 6
            }}
            onPress={() => nav.goBack()}
          >
            <Icon source={'AntDesign'} name={'arrowleft'} size={24} />
          </TouchableOpacity>
        }
      />

      <View
        style={{
          display: 'flex',
          flexGrow: 1,
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'space-between',
          paddingTop: 15,
          paddingRight: 15,
          paddingLeft: 15,
          paddingBottom: 15
        }}
      >
        <ScrollView
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Calendar
            current={'2019-09-25'}
            onDayPress={day => {
              console.log('selected day', day);
            }}
            onDayLongPress={day => {
              console.log('selected day', day);
            }}
            monthFormat={'dd MMM, yyyy'}
            onMonthChange={month => {
              console.log('month changed', month);
            }}
            hideArrows={true}
            renderArrow={direction => <Arrow />}
            disableMonthChange={true}
            firstDay={1}
            onPressArrowLeft={substractMonth => substractMonth()}
            onPressArrowRight={addMonth => addMonth()}
            style={{
              marginBottom: 10,
              backgroundColor: '#ffffff7a'
            }}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              dotColor: '#00adf5',
              selectedDotColor: '#ffffff',
              arrowColor: 'orange',
              monthTextColor: 'blue',
              indicatorColor: 'blue',
              textDayFontFamily: 'monospace',
              textMonthFontFamily: 'monospace',
              textDayHeaderFontFamily: 'monospace',
              textDayFontWeight: '300',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'stretch',
              justifyContent: 'space-between',
              flexGrow: 1,
              padding: 4
            }}
          >
            <Input
              placeholder={'Waktu Mulai'}
              type={'text'}
              style={{
                width: 150
              }}
            />
            <Input
              placeholder={'Waktu Berakhir'}
              type={'text'}
              style={{
                width: 150
              }}
            />
          </View>
          <Select
            placeholder={'Pilih Doctor'}
            data={state.doctor}
            onSelect={v => (state.valdoctor = v)}
          />
          <Select
            placeholder={'Pilih Layanan'}
            data={state.service}
            onSelect={(v: any) => (state.valservice = v)}
          />
          <Input placeholder={'Lokasi'} type={'text'} />
          <Input placeholder={'Komentar'} type={'textarea'} />
        </ScrollView>
        <Button children={'SIMPAN'} onPress={() => nav.goBack()} />
      </View>
    </ImageBackground>
  );
});
