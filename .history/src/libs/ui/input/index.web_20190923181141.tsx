import React from 'react';
import { Input, InputProps } from 'react-native-ui-kitten';

export default (props: InputProps) => {
  return (
    <Input
      textStyle={
        {
          minHeight: 32,
          outline: 'none'
        } as any
      }
      labelStyle={{}}
      captionTextStyle={{
        paddingTop: 5,
        paddingBottom: 5
      }}
      style={{
        padding: 4
      }}
      {...props}
    />
  );
};
