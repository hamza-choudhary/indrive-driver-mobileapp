import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Card, Text, TextInput} from 'react-native-paper';

type ProfileSectionProps = {
  value: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dob: Date;
  };
  onChange: (field: string, value: string | Date) => void;
};

export function ProfileSection({value, onChange}: ProfileSectionProps) {
  const [open, setOpen] = useState(false);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString();
  };

  return (
    <Card style={styles.section}>
      <Card.Content>
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Profile
        </Text>
        <TextInput
          label="First Name"
          mode="outlined"
          value={value.firstName}
          onChangeText={text => onChange('firstName', text)}
          style={styles.input}
        />
        <TextInput
          label="Last Name"
          mode="outlined"
          value={value.lastName}
          onChangeText={text => onChange('lastName', text)}
          style={styles.input}
        />
        <TextInput
          label="Email Address"
          mode="outlined"
          keyboardType="email-address"
          value={value.email}
          onChangeText={text => onChange('email', text)}
          style={styles.input}
        />
        <TextInput
          label="Phone Number"
          mode="outlined"
          keyboardType="phone-pad"
          value={value.phone}
          onChangeText={text => onChange('phone', text)}
          style={styles.input}
        />
        <TextInput
          label="Date of Birth"
          mode="outlined"
          value={formatDate(value.dob)}
          onPress={() => setOpen(true)}
          showSoftInputOnFocus={false}
          style={styles.input}
          right={<TextInput.Icon icon="calendar" />}
        />
        <DatePicker
          modal
          mode="date"
          open={open}
          date={value.dob}
          onConfirm={date => {
            setOpen(false);
            onChange('dob', date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
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
