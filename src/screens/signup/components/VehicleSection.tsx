import {StyleSheet} from 'react-native';
import {Card, Text, TextInput} from 'react-native-paper';

type VehicleSectionProps = {
  value: {
    model: string;
    year: string;
    numberPlate: string;
    seats: string;
  };
  onChange: (field: string, value: string) => void;
};

export function VehicleSection({value, onChange}: VehicleSectionProps) {
  return (
    <Card style={styles.section}>
      <Card.Content>
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Driver Vehicle
        </Text>
        <TextInput
          label="Model"
          mode="outlined"
          value={value.model}
          onChangeText={text => onChange('model', text)}
          style={styles.input}
        />
        <TextInput
          label="Year"
          mode="outlined"
          keyboardType="numeric"
          value={value.year}
          onChangeText={text => onChange('year', text)}
          style={styles.input}
          maxLength={4}
        />
        <TextInput
          label="Number Plate"
          mode="outlined"
          value={value.numberPlate}
          onChangeText={text => onChange('numberPlate', text)}
          style={styles.input}
        />
        <TextInput
          label="Seats"
          mode="outlined"
          keyboardType="numeric"
          value={value.seats}
          onChangeText={text => onChange('seats', text)}
          style={styles.input}
          maxLength={2}
        />
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  section: {marginBottom: 16, borderRadius: 8},
  sectionTitle: {marginBottom: 16, fontWeight: '600'},
  input: {marginBottom: 12},
});
