import * as React from 'react';
import { View } from 'react-native';
import { CategoryList, ProfessionalList } from './components';
import { HomeScreenProps } from '../../models/navigation';
import { useHomeScreen } from './HomeScreen.hook';

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const {
    categories,
    filteredProfessionals,
    handleCategoryPress,
    handleProfessionalPress,
  } = useHomeScreen({ navigation });
  return (
    <>
      <View>
        <CategoryList categories={categories} onPress={handleCategoryPress} />
      </View>
      <ProfessionalList professionals={filteredProfessionals} onPress={handleProfessionalPress} />
    </>
  );
};

export default HomeScreen;