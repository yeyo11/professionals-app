import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface StarRatingComponentProps {
  rating: number;
}

export const StarRatingComponent = ({ rating }:StarRatingComponentProps) => {
  const stars = new Array(10).fill(0);
  const [wholeStars, halfStar] = rating.toFixed(1).split(".");
  return (
    <View style={styles.container}>
      {stars.map((_, index) => {
        if (index < Number(wholeStars)) {
          return (
            <MaterialIcons
              key={index}
              name="star"
              size={24}
              color="#FDB813"
            />
          );
        }
        else if(index === Number(wholeStars) && halfStar === '5'){
          return (
            <MaterialIcons
              key={index}
              name="star-half"
              size={24}
              color="#FDB813"
            />
          );
        }
        else{
          return (
            <MaterialIcons
              key={index}
              name="star-border"
              size={24}
              color="#000"
            />
          );
        }
      })}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
