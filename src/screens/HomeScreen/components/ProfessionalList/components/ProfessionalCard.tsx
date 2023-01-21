import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Professional } from '../../../../../models/professional';

interface ProfessionalCardProps {
  professional: Professional;
}

export const ProfessionalCard = ({ professional }: ProfessionalCardProps) => {
  return (    
      <View style={styles.container}>        
          <View>
            <Image source={{ uri: professional.image }} style={styles.image} />
          </View>
          <View style={styles.contentText}>
            <Text>{`Nombre : ${professional.name}`}</Text>
            <Text>{`Sector : ${professional.category}`}</Text>
            <Text>{`Tlfn: ${professional.phone}`}</Text>
          </View>        
      </View>    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,     
    borderRadius: 75,     
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 75,
  },  
  contentText: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
});
