import {Navigation} from '@navigation';
import {themeConfig} from '@utils';
import 'react-native-gesture-handler';
import {PaperProvider} from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider theme={themeConfig}>
      <Navigation />
    </PaperProvider>
  );
}
