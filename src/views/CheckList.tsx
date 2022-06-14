import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {
  BarcodeData,
  handleExportFile,
  handleGetSavedData,
  handleSaveData,
} from '../auth';
import {TextField} from 'react-native-ui-lib/src/incubator';
import {Button, Colors, Text, View} from 'react-native-ui-lib';
import {useIsFocused} from '@react-navigation/native';

const CheckList = ({route, navigation}) => {
  const {code} = route.params;
  const isFocused = useIsFocused();

  const [dataToEdit, setDataToEdit] = useState<BarcodeData>();

  const handleChange = (field: string, newValue: string) => {
    const newData = dataToEdit;

    switch (field) {
      case 'S':
        newData.sizeS = newValue !== '' ? newValue : '0';
        break;
      case 'M':
        newData.sizeM = newValue !== '' ? newValue : '0';
        break;
      case 'L':
        newData.sizeL = newValue !== '' ? newValue : '0';
        break;
      case 'XL':
        newData.sizeXL = newValue !== '' ? newValue : '0';
        break;
      case 'XXL':
        newData.sizeXXL = newValue !== '' ? newValue : '0';
        break;
      case 'XXXL':
        newData.sizeXXXL = newValue !== '' ? newValue : '0';
        break;
    }

    setDataToEdit(newData);
  };

  useEffect(() => {
    handleGetSavedData(code, setDataToEdit);
  }, [code, isFocused]);

  return (
    <View flex useSafeArea>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20}}>
        <Text h1 marginB-20>
          Sửa số lượng theo cỡ cho: {code}
        </Text>
        <TextField
          text70
          marginB-10
          textAlign="right"
          placeholder={'Cỡ S'}
          floatingPlaceholder
          onChangeText={newValue => handleChange('S', newValue)}
          keyboardType={'number-pad'}
          defaultValue={dataToEdit ? dataToEdit.sizeS : '0'}
        />
        <TextField
          text70
          marginB-10
          textAlign="right"
          placeholder={'Cỡ M'}
          floatingPlaceholder
          onChangeText={newValue => handleChange('M', newValue)}
          keyboardType={'number-pad'}
          defaultValue={dataToEdit ? dataToEdit.sizeM : '0'}
        />
        <TextField
          text70
          marginB-10
          textAlign="right"
          placeholder={'Cỡ L'}
          floatingPlaceholder
          onChangeText={newValue => handleChange('L', newValue)}
          keyboardType={'number-pad'}
          defaultValue={dataToEdit ? dataToEdit.sizeL : '0'}
        />
        <TextField
          text70
          marginB-10
          textAlign="right"
          placeholder={'Cỡ XL'}
          floatingPlaceholder
          onChangeText={newValue => handleChange('XL', newValue)}
          keyboardType={'number-pad'}
          defaultValue={dataToEdit ? dataToEdit.sizeXL : '0'}
        />
        <TextField
          text70
          marginB-10
          textAlign="right"
          placeholder={'Cỡ XXL'}
          floatingPlaceholder
          onChangeText={newValue => handleChange('XXL', newValue)}
          keyboardType={'number-pad'}
          defaultValue={dataToEdit ? dataToEdit.sizeXXL : '0'}
        />
        <TextField
          text70
          marginB-20
          textAlign="right"
          placeholder={'Cỡ XXXL'}
          floatingPlaceholder
          onChangeText={newValue => handleChange('XXXL', newValue)}
          keyboardType={'number-pad'}
          defaultValue={dataToEdit ? dataToEdit.sizeXXXL : '0'}
        />
        <Button
          label={'Lưu'}
          size={Button.sizes.medium}
          backgroundColor={Colors.blue20}
          onPress={() => handleSaveData(code, dataToEdit)}
          marginB-10
          marginT-20
        />
        <Button
          label={'Xem danh sách'}
          size={Button.sizes.medium}
          backgroundColor={Colors.black}
          onPress={() => navigation.navigate('ListView')}
          marginB-10
        />
        <Button
          label={'Xuất excel'}
          size={Button.sizes.medium}
          backgroundColor={Colors.green30}
          onPress={handleExportFile}
          marginB-10
        />
      </ScrollView>
    </View>
  );
};
export default CheckList;
