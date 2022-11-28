import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


import { WebView } from 'react-native-webview';
import { useWindowDimensions } from 'react-native';
// import RenderHtml from 'react-native-render-html';





export default function App() {

  return (
    <View style={{ flex: 1 }} >
      <StatusBar backgroundColor='#2A6472' />
      <WebView
      useWebView2={true}
        source={{ uri: 'https://scelester.github.io/Fin-Land-Fontend/' }}
        style={styles.container}
        setBuiltInZoomControls={false}
        setDisplayZoomControls={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
