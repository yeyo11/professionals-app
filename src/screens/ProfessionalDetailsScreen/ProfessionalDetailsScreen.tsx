import React from 'react';
import { View } from 'react-native';
import {ProfessionalDetailsCard} from './components';
import { ProfessionalDetailsScreenProps } from '../../models/navigation';


const ProfessionalDetailsScreen = ({route}:ProfessionalDetailsScreenProps) => {
  const { professionalId } = route.params;

  return (
    <View>
      <ProfessionalDetailsCard professional={professionalId} />
    </View>
  );
};

export default ProfessionalDetailsScreen;
