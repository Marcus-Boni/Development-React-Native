import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { DataTable, Text } from 'react-native-paper';

interface TableComponentProps {
  headers: string[];
  data: Array<Array<string | number>>;
}

const TableComponent: React.FC<TableComponentProps> = ({ headers, data }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <DataTable>
          <DataTable.Header>
            {headers.map((header, index) => (
              <DataTable.Title key={index}>
                <Text style={styles.headerText}>{header}</Text>
              </DataTable.Title>
            ))}
          </DataTable.Header>

          {data.map((row, rowIndex) => (
            <DataTable.Row key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <DataTable.Cell key={cellIndex}>
                  <Text style={styles.cellText}>{cell}</Text>
                </DataTable.Cell>
              ))}
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  headerText: {
    fontWeight: 'bold'
  },
  cellText: {
    fontSize: 14
  }
});

export default TableComponent;
