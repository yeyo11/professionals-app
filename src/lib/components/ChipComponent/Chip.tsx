
import React from 'react';
import { View } from 'react-native';
import { Chip } from 'react-native-paper';

interface ChipComponentProps {
    chipInfo: string;
    onPress: (chipInfo: string) => void;
}

export const ChipComponent = ({ chipInfo, onPress }: ChipComponentProps) => {
    const [selectedChips, setSelectedChips] = React.useState<string[]>([]);
    const handlePress = () => {
        if (selectedChips.includes(chipInfo)) {
            setSelectedChips(selectedChips.filter((chip) => chip !== chipInfo));
            onPress(chipInfo);
            return;
        }
        setSelectedChips([...selectedChips, chipInfo]);
        onPress(chipInfo);
    };
    return (
        <View>
            <Chip
                selected={selectedChips.includes(chipInfo)}
                style={{ margin: 5 }}
                onPress={handlePress}>
                {chipInfo}
            </Chip>
        </View>
    );
};
