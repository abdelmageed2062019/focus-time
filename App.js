import React, {useState} from 'react';
import {  View,SafeAreaView, StyleSheet , Platform, StatusBar} from 'react-native';
import Constants from 'expo-constants';
import {colors} from './src/utils/color';
import {fontSizes} from './src/utils/sizes';
import {Focus } from './src/features/focus';
import {Timer} from './src/features/Timer';
import {FocusHistory} from './src/features/FocusHistory';



export default function App() {
  const [currSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState(['temp feature focus']);
  return (
    <SafeAreaView style={styles.container}>
    {!currSubject ?
    <>
     <Focus addSubject={setCurrentSubject} />
     <FocusHistory history={history}/>
     </>
      :
    <Timer focusSubject={currSubject} onTimerEnd={(subject) => {setHistory([...history, subject])}} clearSubject={() => {setCurrentSubject(null)}}/>
     }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.purple,
  },
});
