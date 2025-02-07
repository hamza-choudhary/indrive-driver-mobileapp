import {pick} from '@react-native-documents/picker';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Text} from 'react-native-paper';

type File = {
  type: string;
  uri: string;
  name: string;
};

type Document = {
  title: string;
  name: string;
};

type DocumentListProps = {
  data: Document[];
  value: Record<string, File | null>;
  onChange: (key: string, value: File | null) => void;
  onSubmit: () => void;
};

export function DocumentList({
  data,
  value,
  onChange,
  onSubmit,
}: DocumentListProps) {
  return (
    <Card style={styles.section}>
      <Card.Content>
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Payout Information
        </Text>
        {data.map(({title, name}, idx) => (
          <FileUpload
            key={`${idx} ${name}`}
            title={title}
            value={value[name]}
            name={name}
            onChange={onChange}
          />
        ))}
        <Button mode="contained" style={styles.submitButton} onPress={onSubmit}>
          Submit
        </Button>
      </Card.Content>
    </Card>
  );
}

type FileUploadProps = {
  title: string;
  name: string;
  value: File | null;
  onChange: (key: string, value: File | null) => void;
};

function FileUpload({title, name, value, onChange}: FileUploadProps) {
  async function handleUpload() {
    try {
      const [result] = await pick({mode: 'open'});
      onChange(name, result as File);
    } catch (err) {
      onChange(name, null);
      console.error('Error picking document:', err);
    }
  }

  return (
    <View style={styles.uploadSection}>
      <Text variant="bodyMedium" style={styles.uploadTitle}>
        {title}
      </Text>
      <Button
        mode="outlined"
        icon="upload"
        onPress={handleUpload}
        style={styles.uploadButton}>
        upload
      </Button>
      {value?.name && (
        <View style={styles.uploadInfo}>
          <Text variant="bodySmall" style={styles.uploadText}>
            {value.name}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  uploadSection: {marginVertical: 8},
  uploadTitle: {marginBottom: 4},
  uploadButton: {marginVertical: 4},
  uploadInfo: {marginTop: 4},
  uploadText: {color: '#666'},
  submitButton: {marginTop: 16, marginHorizontal: 8},
  section: {marginBottom: 16, borderRadius: 8},
  sectionTitle: {marginBottom: 16, fontWeight: '600'},
  input: {marginBottom: 12},
});
