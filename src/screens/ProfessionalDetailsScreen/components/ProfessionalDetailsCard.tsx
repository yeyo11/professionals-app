import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';
import { ActivityIndicator, Button } from 'react-native-paper';
import { StarRatingComponent } from '../../../lib/components';
import { Professional } from '../../../models/professional';
import api from '../../../services/api';

interface ProfessionalDetailsCardProps {
  professional: number;
}

export const ProfessionalDetailsCard = ({ professional: id }: ProfessionalDetailsCardProps) => {
  const [professional, setProfessional] = React.useState<Professional>();
  const navigation = useNavigation();


  React.useEffect(() => {
    fetchDataProfessional();
  }, []);

  const AsyncAlert = () => {
    return new Promise((resolve) => {
      Alert.alert(
        'Contactar',
        '¿Desea contactar con este profesional?',
        [
          { text: 'Si', onPress: () => resolve(true) },
          { text: 'No', onPress: () => resolve(false) }
        ],
      )
    })
  }

  const fetchDataProfessional = async () => {
    const professional = await api.getProfessionalById(id);
    setProfessional(professional);
  };

  const handlePhoneCall = async () => {
    const userResponse = await AsyncAlert()
    const phoneNumber = professional?.phone;
    if (phoneNumber && userResponse) {
      Linking.openURL(`tel:${phoneNumber}`);
    }
  };

  const handleButton = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {professional ? (
        <View>
          <TouchableOpacity onPress={handlePhoneCall}>
            <View style={styles.card}>
              <View>
                <Image source={{ uri: professional.image }} style={styles.image} />
              </View>
              <View>
                <Text>{`Nombre: ${professional.name}`}</Text>
                <Text>{`Categoria: ${professional.category}`}</Text>
                <Text>{`Email: ${professional.email}`}</Text>
                <Text>{`Tlfn: ${professional.phone}`}</Text>
                <StarRatingComponent rating={professional.rate} />
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.containerButton}>
            <Button style={styles.button} onPress={handleButton}>
              <Text>Volver</Text>
            </Button>
          </View>
        </View>
      ) : (
        <ActivityIndicator size="large" color="#e8def8" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 1,
    elevation: 5,
  },
  image: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    marginTop: 10,
    width: 100,
    height: 50,
    backgroundColor: '#e8def8',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
