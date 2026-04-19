import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { initHealthKit, getStepsToday, getCaloriesToday } from '../services/healthService';

export default function DashboardScreen() {
  const profile = useSelector(s => s.profile);
  const [steps, setSteps]   = useState(0);
  const [cals,  setCals]    = useState(0);
  const [hkReady, setHkReady] = useState(false);

  useEffect(() => {
    initHealthKit()
      .then(() => { setHkReady(true); return getStepsToday(); })
      .then(s  => setSteps(Math.round(s)))
      .catch(e => console.warn('HealthKit init failed:', e.message));

    if (hkReady) {
      getCaloriesToday().then(c => setCals(Math.round(c)));
    }
  }, [hkReady]);

  const pct = Math.min((steps / profile.goal) * 100, 100).toFixed(0);

  return (
    <View style={s.container}>
      <Text style={s.title}>Today's Activity</Text>
      <View style={s.card}>
        <Text style={s.label}>Steps</Text>
        <Text style={s.big}>{steps.toLocaleString()}</Text>
        <Text style={s.sub}>Goal: {profile.goal.toLocaleString()} — {pct}%</Text>
      </View>
      <View style={s.card}>
        <Text style={s.label}>Calories Burned</Text>
        <Text style={s.big}>{cals}</Text>
        <Text style={s.sub}>kcal</Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex:1, backgroundColor:'#0f172a', padding:20 },
  title:     { color:'#e2e8f0', fontSize:22, fontWeight:'700', marginBottom:20, marginTop:50 },
  card:      { backgroundColor:'#1e293b', borderRadius:12, padding:20, marginBottom:16 },
  label:     { color:'#94a3b8', fontSize:13, marginBottom:4 },
  big:       { color:'#f1f5f9', fontSize:38, fontWeight:'800' },
  sub:       { color:'#64748b', fontSize:12, marginTop:4 },
});
