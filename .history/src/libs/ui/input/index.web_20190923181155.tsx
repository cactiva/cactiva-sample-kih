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
      style={{
        padding: 4
      }}
      {...props}
    />
  );
};
