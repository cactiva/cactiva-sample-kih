import React from 'react';
import { observer, useObservable } from 'mobx-react-lite';
import { View } from 'react-native';
import { Text, List } from 'react-native-ui-kitten';
import { Icon } from '@src/libs';

export default observer(() => {
  const meta = useObservable({
    list: [
      {
        tgl: '22 Sep 2019',
        title: 'Chest Roentgen',
        status: 'Waiting',
        type: 'Radiology'
      },
      {
        tgl: '22 Sep 2019',
        title: 'Chest Roentgen',
        status: 'Waiting',
        type: 'Radiology'
      },
      {
        tgl: '22 Sep 2019',
        title: 'Chest Roentgen',
        status: 'Waiting',
        type: 'Radiology'
      },
      {
        tgl: '22 Sep 2019',
        title: 'Chest Roentgen',
        status: 'Waiting',
        type: 'Radiology'
      },
      {
        tgl: '22 Sep 2019',
        title: 'Chest Roentgen',
        status: 'Waiting',
        type: 'Radiology'
      },
      {
        tgl: '22 Sep 2019',
        title: 'Chest Roentgen',
        status: 'Waiting',
        type: 'Radiology'
      },
      {
        tgl: '22 Sep 2019',
        title: 'Chest Roentgen',
        status: 'Waiting',
        type: 'Radiology'
      },
      {
        tgl: '22 Sep 2019',
        title: 'Chest Roentgen',
        status: 'Waiting',
        type: 'Radiology'
      },
      {
        tgl: '22 Sep 2019',
        title: 'Chest Roentgen',
        status: 'Waiting',
        type: 'Radiology'
      },
      {
        tgl: '22 Sep 2019',
        title: 'Chest Roentgen',
        status: 'Waiting',
        type: 'Radiology'
      },
      {
        tgl: '22 Sep 2019',
        title: 'Chest Roentgen',
        status: 'Waiting',
        type: 'Radiology'
      },
      {
        tgl: '22 Sep 2019',
        title: 'Chest Roentgen',
        status: 'Waiting',
        type: 'Radiology'
      },
      {
        tgl: '22 Sep 2019',
        title: 'Chest Roentgen',
        status: 'Waiting',
        type: 'Radiology'
      },
      {
        tgl: '22 Sep 2019',
        title: 'Chest Roentgen',
        status: 'Waiting',
        type: 'Radiology'
      },
      {
        tgl: '22 Sep 2019',
        title: 'Chest Roentgen',
        status: 'Waiting',
        type: 'Radiology'
      },
      {
        tgl: '22 Sep 2019',
        title: 'Chest Roentgen',
        status: 'Waiting',
        type: 'Radiology'
      }
    ]
  });
  return (
    <List
      style={{
        backgroundColor: 'rgba(188, 22, 22, 0)',
        flexGrow: 1,
        height: 0
      }}
      data={meta.list}
      renderItem={({ item }: any) => {
        return (
          <>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                margin: 10,
                padding: 10,
                backgroundColor: 'rgba(179, 212, 255, 0.54)',
                borderRadius: 7
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
                <Text children={item.type} style={{ fontFamily: 'regular' }} />
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start'
                  }}
                >
                  <Icon
                    source={'AntDesign'}
                    size={20}
                    name={
                      item.status === 'Waiting'
                        ? 'clockcircleo'
                        : 'checkcircleo'
                    }
                  />
                  <Text
                    children={item.status}
                    style={{ fontFamily: 'regular' }}
                  />
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start'
                }}
              >
                <Text children={item.type} style={{ fontFamily: 'regular' }} />
              </View>
            </View>
          </>
        );
      }}
    />
  );
});
