import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Report = () => {
  const currentBalance = 2064.35;

  const entriesGrouped = [
    {key: '1', description: 'Alimentação', amount: 200},
    {key: '2', description: 'Combustível', amount: 12},
    {key: '3', description: 'Aluguel', amount: 120},
    {key: '4', description: 'Lazer', amount: 250},
    {key: '5', description: 'Outros', amount: 1200},
  ];

  const entries = [
    {key: '1', description: 'Padaria Asa Branca', amount: 10},
    {key: '2', description: 'Supermercado Isadora', amount: 190},
    {key: '3', description: 'Posto Ipiranga', amount: 290},
  ];

  const [categoriries, setCategories] = useState(['Débito', 'Crédito']);
  
  return (
    <View>
      <BalanceLabel currentBalance={currentBalance}/>
      <View>
        <Picker
          selectedValue={categoriries}
          onValueChange={(itemValue, itemIndex) =>
            setCategories(itemValue)
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      {/* <Picker
        selectedValue={categoriries}
        onValueChange={(itemValue, itemIndex) =>
          setCategories(itemValue)}>
          <Picker.Item label="Todas Categorias" value={categories}/>
        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias" />
        </Picker> */}
      </View>
      <EntrySummary entriesGrouped={entriesGrouped}/>
      <EntryList entries={entries}/>
      <View>
        <Button title="Salvar" />
        <Button title="Fechar" />
      </View>
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    // flex: 1
  },
});
