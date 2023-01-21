import * as React from 'react';
import { useEffect } from 'react';
import api from '../../services/api';
import { Category, Professional } from '../../models/professional';

interface HomeScreenHookParams {
  navigation: any;
}

export const useHomeScreen = ({ navigation }: HomeScreenHookParams) => {

  const [professionals, setProfessionals] = React.useState<Professional[]>([]);

  const [categories, setCategories] = React.useState<Category[]>([]);
  const [filterCategories, setfilterCategories] = React.useState<string[]>([]);

  useEffect(() => {
    fetchDataCategories();
    fetchDataProfessionals();
  }, []);

  const fetchDataCategories = async () => {
    const categories = await api.getCategories();
    setCategories(categories);
  };

  const fetchDataProfessionals = async () => {
    const professionals = await api.getProfessionals();
    setProfessionals(professionals);
  };

  const handleCategoryPress = (category: string) => {
    if (filterCategories.includes(category)) {
      setfilterCategories(filterCategories.filter((filterCategories) => filterCategories !== category));
      return;
    }
    setfilterCategories([...filterCategories, category]);
  };

  const handleProfessionalPress = (professional: Professional) => {
    navigation.navigate('Perfil', { professionalId: professional.id });
  };

  const filteredProfessionals = professionals.filter(professional => {
    if (filterCategories.length === 0) return true;
    return filterCategories.join(',').includes(professional.category);
  });

  return {
    categories,
    filteredProfessionals,
    handleCategoryPress,
    handleProfessionalPress,
  }
};