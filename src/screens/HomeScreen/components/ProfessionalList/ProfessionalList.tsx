import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Professional } from '../../../../models/professional';
import { ProfessionalCard } from './components';

interface ProfessionalListProps {
  professionals: Professional[];
  onPress: (professional: Professional) => void;
}

export const ProfessionalList = ({ professionals, onPress }: ProfessionalListProps) => {
  return (
    <FlatList
      data={professionals}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPress(item)}>
          <ProfessionalCard professional={item} />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};