import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {
  BarcodeData,
  handleExportFile,
  handleGetSavedData,
  handleSaveData,
} from '../auth';
import {
  Text,
  Button,
  Colors,
  RadioButton,
  RadioGroup,
  View,
} from 'react-native-ui-lib';
import {useIsFocused} from '@react-navigation/native';

const CheckListSelect = ({route, navigation}) => {
  const {code} = route.params;
  const isFocused = useIsFocused();

  const [dataToEdit, setDataToEdit] = useState<BarcodeData>();
  const [fieldToEdit, setFieldToEdit] = useState('');

  const handleUpdateData = () => {
    const newData = dataToEdit;

    if (fieldToEdit === 'S') {
      newData.sizeS = (Number.parseInt(newData.sizeS, 10) + 1).toString();
    } else if (fieldToEdit === 'M') {
      newData.sizeM = (Number.parseInt(newData.sizeM, 10) + 1).toString();
    } else if (fieldToEdit === 'L') {
      newData.sizeL = (Number.parseInt(newData.sizeL, 10) + 1).toString();
    } else if (fieldToEdit === 'XL') {
      newData.sizeXL = (Number.parseInt(newData.sizeXL, 10) + 1).toString();
    } else if (fieldToEdit === 'XXL') {
      newData.sizeXXL = (Number.parseInt(newData.sizeXXL, 10) + 1).toString();
    } else if (fieldToEdit === 'XXXL') {
      newData.sizeXXXL = (Number.parseInt(newData.sizeXXXL, 10) + 1).toString();
    }

    setDataToEdit(newData);
    handleSaveData(code, newData);
  };

  useEffect(() => {
    handleGetSavedData(code, setDataToEdit);
  }, [code, isFocused]);

  return (
    <View flex useSafeArea>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20}}>
        <Text h1 marginB-30>
          Chọn cỡ cho: {code}
        </Text>
        <RadioGroup initialValue={''} onValueChange={setFieldToEdit}>
          <View row centerV marginB-20>
            <RadioButton value={'S'} label={'Cỡ S'} />
          </View>
          <View row centerV marginB-20>
            <RadioButton value={'M'} label={'Cỡ M'} />
          </View>
          <View row centerV marginB-20>
            <RadioButton value={'L'} label={'Cỡ L'} />
          </View>
          <View row centerV marginB-20>
            <RadioButton value={'XL'} label={'Cỡ XL'} />
          </View>
          <View row centerV marginB-20>
            <RadioButton value={'XXL'} label={'Cỡ XXL'} />
          </View>
          <View row centerV marginB-20>
            <RadioButton value={'XXXL'} label={'Cỡ XXXL'} />
          </View>
        </RadioGroup>
        <Button
          label={'Lưu'}
          size={Button.sizes.medium}
          backgroundColor={Colors.blue20}
          onPress={handleUpdateData}
          marginB-10
          marginT-20
        />
        <Button
          label={'Sửa nhiều cỡ'}
          size={Button.sizes.medium}
          backgroundColor={Colors.red50}
          onPress={() =>
            navigation.navigate('CheckList', {
              code: code,
            })
          }
          marginB-10
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
        />
      </ScrollView>
    </View>
  );
};
export default CheckListSelect;
