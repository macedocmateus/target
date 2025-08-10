
import {StyleSheet, Text, View } from 'react-native';

import {colors} from '@/theme/colors'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Oi, React Native
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
