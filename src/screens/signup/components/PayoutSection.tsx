import {StyleSheet} from 'react-native';
import {Card, Text, TextInput} from 'react-native-paper';

type PayoutSectionProps = {
  value: {
    accountName: string;
    accountNumber: string;
    sortCode: string;
  };
  onChange: (field: string, value: string) => void;
};

export function PayoutSection({value, onChange}: PayoutSectionProps) {
  return (
    <Card style={styles.section}>
      <Card.Content>
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Payout Information
        </Text>
        <TextInput
          label="Account Name"
          mode="outlined"
          value={value.accountName}
          onChangeText={text => onChange('accountName', text)}
          style={styles.input}
        />
        <TextInput
          label="Account Number"
          mode="outlined"
          value={value.accountNumber}
          onChangeText={text => onChange('accountNumber', text)}
          style={styles.input}
        />
        <TextInput
          label="Sort Code"
          mode="outlined"
          value={value.sortCode}
          onChangeText={text => onChange('sortCode', text)}
          style={styles.input}
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
