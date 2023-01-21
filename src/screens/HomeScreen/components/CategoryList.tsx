import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ChipComponent } from '../../../lib/components';
import { Category } from '../../../models/professional';

interface CategoryListProps {
  categories: Category[];
  onPress: (category: string) => void;
}

export const CategoryList = ({ categories, onPress }: CategoryListProps) => {

  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <ChipComponent key={item.id} chipInfo={item.name} onPress={onPress} />
      )}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
});