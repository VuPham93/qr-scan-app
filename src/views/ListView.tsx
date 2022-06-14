import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {BarcodeData, getSaveData} from '../auth';
import {ListItem, Text, View} from 'react-native-ui-lib';
import {useIsFocused} from '@react-navigation/native';
import {DataTable} from 'react-native-paper';

const CheckList = () => {
  const [saveData, setSaveData] = useState<BarcodeData[]>(undefined);
  const isFocused = useIsFocused();

  useEffect(() => {
    getSaveData().then(r => {
      if (r) {
        setSaveData(JSON.parse(r));
      }
    });
  }, [isFocused]);

  return (
    <View flex useSafeArea>
      <FlatList
        data={saveData}
        renderItem={({item, index}) => (
          <ListItem key={index} marginT-40 marginB-50>
            <ListItem.Part column>
              <ListItem.Part>
                <Text text70 marginL-10 color="black">
                  {item.code}:{' '}
                </Text>
              </ListItem.Part>
              <ListItem.Part>
                <DataTable>
                  <DataTable.Header>
                    <DataTable.Title>S</DataTable.Title>
                    <DataTable.Title>M</DataTable.Title>
                    <DataTable.Title>L</DataTable.Title>
                    <DataTable.Title>XL</DataTable.Title>
                    <DataTable.Title>XXL</DataTable.Title>
                    <DataTable.Title>XXXL</DataTable.Title>
                  </DataTable.Header>
                  <DataTable.Row>
                    <DataTable.Cell>{item.sizeS}</DataTable.Cell>
                    <DataTable.Cell>{item.sizeM}</DataTable.Cell>
                    <DataTable.Cell>{item.sizeL}</DataTable.Cell>
                    <DataTable.Cell>{item.sizeXL}</DataTable.Cell>
                    <DataTable.Cell>{item.sizeXXL}</DataTable.Cell>
                    <DataTable.Cell>{item.sizeXXXL}</DataTable.Cell>
                  </DataTable.Row>
                </DataTable>
              </ListItem.Part>
            </ListItem.Part>
          </ListItem>
        )}
      />
    </View>
  );
};
export default CheckList;
