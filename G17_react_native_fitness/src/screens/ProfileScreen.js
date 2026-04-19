import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export default function ProfileScreen() {
  const profile = useSelector(s => s.profile);
  return (
    <View style={s.container}>
      <Text style={s.title}>Profile</Text>
      <View style={s.card}>
        <Text style={s.label}>Name</Text>
        <Text style={s.value}>{profile.name}</Text>
      </View>
      <View style={s.card}>
        <Text style={s.label}>Daily Step Goal</Text>
        <Text style={s.value}>{profile.goal.toLocaleString()} steps</Text>
      </View>
      <Text style={s.note}>Edit profile — not yet implemented.</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex:1, backgroundColor:'#0f172a', padding:20 },
  title:     { color:'#e2e8f0', fontSize:22, fontWeight:'700', marginBottom:20, marginTop:50 },
  card:      { backgroundColor:'#1e293b', borderRadius:10, padding:16, marginBottom:12 },
  label:     { color:'#94a3b8', fontSize:12, marginBottom:4 },
  value:     { color:'#f1f5f9', fontSize:18, fontWeight:'700' },
  note:      { color:'#64748b', fontSize:12, marginTop:8 },
});
