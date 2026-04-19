import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addWorkout, deleteWorkout } from '../store/workoutSlice';

const TYPES = ['Run', 'Cycle', 'Swim', 'Weights', 'Yoga', 'HIIT'];

export default function WorkoutScreen() {
  const workouts = useSelector(s => s.workouts.list);
  const dispatch = useDispatch();
  const [form, setForm] = useState({ type: 'Run', duration: '', notes: '' });

  const save = () => {
    if (!form.duration) { Alert.alert('Duration required'); return; }
    dispatch(addWorkout({ id: Date.now().toString(), ...form, date: new Date().toISOString() }));
    setForm({ type: 'Run', duration: '', notes: '' });
  };

  return (
    <View style={s.container}>
      <Text style={s.title}>Workouts</Text>
      <View style={s.form}>
        <View style={s.typeRow}>
          {TYPES.map(t => (
            <TouchableOpacity key={t} onPress={() => setForm({...form, type:t})}
              style={[s.typeBtn, form.type===t && s.typeActive]}>
              <Text style={{color: form.type===t ? '#0f172a':'#94a3b8', fontSize:12}}>{t}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TextInput style={s.input} placeholder="Duration (mins)" placeholderTextColor="#64748b"
          keyboardType="numeric" value={form.duration}
          onChangeText={v => setForm({...form, duration:v})} />
        <TouchableOpacity style={s.btn} onPress={save}>
          <Text style={s.btnText}>Log Workout</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={workouts} keyExtractor={i=>i.id}
        renderItem={({item}) => (
          <View style={s.item}>
            <Text style={{color:'#e2e8f0', fontWeight:'700'}}>{item.type}</Text>
            <Text style={{color:'#94a3b8'}}>{item.duration} min</Text>
          </View>
        )} />
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex:1, backgroundColor:'#0f172a', padding:20 },
  title:     { color:'#e2e8f0', fontSize:22, fontWeight:'700', marginBottom:16, marginTop:50 },
  form:      { backgroundColor:'#1e293b', borderRadius:12, padding:16, marginBottom:16 },
  typeRow:   { flexDirection:'row', flexWrap:'wrap', gap:8, marginBottom:12 },
  typeBtn:   { paddingHorizontal:12, paddingVertical:6, borderRadius:20, backgroundColor:'#334155' },
  typeActive:{ backgroundColor:'#60a5fa' },
  input:     { backgroundColor:'#0f172a', color:'#e2e8f0', borderRadius:8, padding:10, marginBottom:10 },
  btn:       { backgroundColor:'#4f46e5', borderRadius:8, padding:12, alignItems:'center' },
  btnText:   { color:'white', fontWeight:'700' },
  item:      { backgroundColor:'#1e293b', borderRadius:8, padding:12, marginBottom:8, flexDirection:'row', justifyContent:'space-between' },
});
