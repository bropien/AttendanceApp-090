import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.topcontainer}>
        <View style={styles.redbox} />
        <View style={styles.bluebox} />
        <View style={styles.greenbox} />
        <View style={styles.orangebox} />
      </View>

      <View style={styles.bottomcontainer} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  topcontainer: {
    height: 200,
    backgroundColor: '#e6f0f0',
  },

  redbox: {
    position: 'absolute',
    width: 50,
    height: 30,
    backgroundColor: 'red',
    top: 0,
    left: 0,
  },

  bluebox: {
    position: 'absolute',
    width: 150,
    height: 60,
    backgroundColor: 'blue',
    top: 0,
    left: 50,
  },

  greenbox: {
    position: 'absolute',
    width: 100,
    height: 80,
    backgroundColor: 'green',
    top: 0,
    left: 200,
  },

  orangebox: {
    position: 'absolute',
    width: 100,
    height: 150,
    backgroundColor: 'orange',
    top: 0,
    right: 0,
  },

  bottomcontainer: {
    flex: 1,
    backgroundColor: 'grey',
  },
});