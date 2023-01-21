import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Perfil: { professionalId: number };
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
export type ProfessionalDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Perfil'
>;
