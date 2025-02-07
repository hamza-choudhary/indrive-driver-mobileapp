import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import {DocumentSection} from './components/DocumentSection';
import {LicenseSection} from './components/LicenseSection';
import {PayoutSection} from './components/PayoutSection';
import {ProfileSection} from './components/ProfileSection';
import {VehicleSection} from './components/VehicleSection';

interface FormState {
  tflLicense: boolean | null;
  profile: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dob: Date;
  };
  vehicle: {
    model: string;
    year: string;
    numberPlate: string;
    seats: string;
  };
  payout: {
    accountName: string;
    accountNumber: string;
    sortCode: string;
  };
}

const INITIAL_FORM_STATE: FormState = {
  tflLicense: null,
  profile: {firstName: '', lastName: '', email: '', phone: '', dob: new Date()},
  vehicle: {model: '', year: '', numberPlate: '', seats: ''},
  payout: {accountName: '', accountNumber: '', sortCode: ''},
};

export function Signup() {
  const theme = useTheme();
  const [formState, setFormState] = useState<FormState>(INITIAL_FORM_STATE);

  const validateForm = () => {
    // Add form validation logic here
    const {profile, vehicle} = formState;
    return (
      profile.firstName &&
      profile.lastName &&
      profile.email &&
      profile.phone &&
      profile.dob &&
      vehicle.model &&
      vehicle.year &&
      vehicle.numberPlate &&
      vehicle.seats
    );
  };

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <LicenseSection
        value={formState.tflLicense}
        onChange={value => setFormState(p => ({...p, tflLicense: value}))}
      />
      <ProfileSection
        value={formState.profile}
        onChange={(key, value) =>
          setFormState(p => ({...p, profile: {...p.profile, [key]: value}}))
        }
      />
      <VehicleSection
        value={formState.vehicle}
        onChange={(key, value) =>
          setFormState(p => ({...p, vehicle: {...p.vehicle, [key]: value}}))
        }
      />
      <PayoutSection
        value={formState.payout}
        onChange={(key, value) =>
          setFormState(p => ({...p, payout: {...p.payout, [key]: value}}))
        }
      />
      <DocumentSection />
      {/* Submit Button */}
      <Button
        mode="contained"
        onPress={() => console.log('Submit', formState)}
        style={styles.submitButton}
        disabled={!validateForm()}>
        Complete Registration
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  submitButton: {marginVertical: 24, borderRadius: 8, paddingVertical: 8},
});
