import {StyleSheet, View} from 'react-native';
import {Card, RadioButton, Text} from 'react-native-paper';

type LicenseSectionProps = {
  value: boolean | null;
  onChange: (value: boolean) => void;
};

export function LicenseSection({value, onChange}: LicenseSectionProps) {
  return (
    <Card style={styles.section}>
      <Card.Content>
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Do you hold a{' TFL/PCO '}License?
        </Text>
        <View style={styles.radioGroup}>
          <RadioButton.Group
            onValueChange={inputValue => onChange(inputValue === 'yes')}
            value={value === null ? '' : value ? 'yes' : 'no'}>
            <View style={styles.radioItem}>
              <RadioButton value="yes" />
              <Text>Yes</Text>
            </View>
            <View style={styles.radioItem}>
              <RadioButton value="no" />
              <Text>No</Text>
            </View>
          </RadioButton.Group>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  section: {marginBottom: 16, borderRadius: 8},
  sectionTitle: {marginBottom: 16, fontWeight: '600'},
  radioGroup: {flexDirection: 'row', marginVertical: 8},
  radioItem: {flexDirection: 'row', alignItems: 'center', marginRight: 24},
});
