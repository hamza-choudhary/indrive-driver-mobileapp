import {gs} from '@styles';
import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Button, Card, Text, TextInput, useTheme} from 'react-native-paper';

interface FormState {
  email: string;
  password: string;
  showPassword: boolean;
  isSubmitting: boolean;
}

export function Login() {
  const {colors, roundness} = useTheme();
  const [formState, setFormState] = useState<FormState>({
    email: '',
    password: '',
    showPassword: false,
    isSubmitting: false,
  });

  const handleInputChange = (field: keyof FormState, value: string) => {
    setFormState(prev => ({...prev, [field]: value}));
  };

  const togglePasswordVisibility = () => {
    setFormState(prev => ({...prev, showPassword: !prev.showPassword}));
  };

  const handleLogin = async () => {
    if (!formState.email || !formState.password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setFormState(prev => ({...prev, isSubmitting: true}));

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      Alert.alert('Success', 'Logged in successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to login. Please try again.');
    } finally {
      setFormState(prev => ({...prev, isSubmitting: false}));
    }
  };

  const isValidForm = formState.email && formState.password;

  return (
    <SafeAreaView style={[gs.flex1, {backgroundColor: colors.background}]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={gs.flex1}>
        <ScrollView
          contentContainerStyle={[gs.flexGrow, gs.justifyCenter, gs.p5]}
          keyboardShouldPersistTaps="handled">
          <Card
            mode="elevated"
            style={[{borderRadius: roundness, backgroundColor: colors.white}]}>
            <Card.Content style={[style.cardContent]}>
              <Text variant="headlineMedium" style={[gs.textCenter, gs.mb4]}>
                Sign In
              </Text>

              {/* Email Input */}
              <TextInput
                label="Email or Username"
                mode="outlined"
                left={<TextInput.Icon icon="email-outline" />}
                style={[gs.mb4]}
                keyboardType="email-address"
                autoCapitalize="none"
                value={formState.email}
                onChangeText={value => handleInputChange('email', value)}
                // accessibilityLabel="Email or Username input"
              />

              {/* Password Input */}
              <TextInput
                label="Password"
                mode="outlined"
                left={<TextInput.Icon icon="lock-outline" />}
                right={
                  <TextInput.Icon
                    icon={formState.showPassword ? 'eye-off' : 'eye'}
                    onPress={togglePasswordVisibility}
                    accessibilityLabel="Toggle password visibility"
                  />
                }
                style={[gs.mb4]}
                secureTextEntry={!formState.showPassword}
                value={formState.password}
                onChangeText={value => handleInputChange('password', value)}
                accessibilityLabel="Password input"
              />

              {/* Forgot Password */}
              {/* <Button
                mode="text"
                onPress={() =>
                  Alert.alert('Forgot Password', 'Feature coming soon!')
                }
                style={[gs.selfEnd, gs.mt2]}
                labelStyle={{color: '#007AFF'}}>
                Forgot Password?
              </Button> */}

              {/* Login Button */}
              <Button
                mode="contained"
                onPress={handleLogin}
                disabled={!isValidForm || formState.isSubmitting}
                style={[gs.mt4, {borderRadius: roundness}]}
                loading={formState.isSubmitting}
                accessibilityRole="button">
                {formState.isSubmitting ? 'Signing In...' : 'Sign In'}
              </Button>

              {/* Sign Up Link */}
              <View style={[gs.flexRow, gs.justifyCenter, gs.mt5]}>
                <Text
                  variant="bodyMedium"
                  style={{color: colors.textSecondary}}>
                  {"Don't "}have an account?{' '}
                </Text>
                <Button
                  mode="text"
                  onPress={() => Alert.alert('Sign Up', 'Feature coming soon!')}
                  labelStyle={{color: '#007AFF'}}
                  accessibilityRole="link">
                  Sign Up
                </Button>
              </View>
            </Card.Content>
          </Card>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  cardContent: {paddingVertical: '20%'},
});
