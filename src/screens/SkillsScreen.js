import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';

const SkillsScreen = () => {
  const [skills] = useState([
    { id: '1', name: 'React Native', level: 4.5, icon: '⚛️' },
    { id: '2', name: 'JavaScript', level: 5, icon: '📜' },
    { id: '3', name: 'UI/UX Design', level: 4, icon: '🎨' },
    { id: '4', name: 'Node.js', level: 4, icon: '🟢' },
    { id: '5', name: 'Firebase', level: 4.5, icon: '🔥' },
    { id: '6', name: 'Git/GitHub', level: 5, icon: '🐙' },
    { id: '7', name: 'REST API', level: 4.5, icon: '🌐' },
    { id: '8', name: 'Agile/Scrum', level: 4, icon: '📄' },
  ]);

  const renderSkillCard = ({ item }) => (
    <View style={styles.skillCard}>
      <View style={styles.skillHeader}>
        <Text style={styles.skillIcon}>{item.icon}</Text>
        <Text style={styles.skillName}>{item.name}</Text>
      </View>
      <View style={styles.skillLevel}>
        <View style={[styles.levelBar, { width: `${(item.level / 5) * 100}%` }]} />
      </View>
      <Text style={styles.levelText}>{item.level.toFixed(1)}/5.0</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🏆 Muas Habilidades</Text>
        <Text style={styles.headerSubtitle}>Tecnologias e competencias</Text>
      </View>
      <FlatList
        scrollEnabled={false}
        data={skills}
        renderItem={renderSkillCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2026 - Projeto DIO</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  header: { paddingVertical: 30, paddingHorizontal: 20, backgroundColor: '#1F6FEB' },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 5 },
  headerSubtitle: { fontSize: 14, color: 'rgba(255,255,255,0.7)' },
  listContainer: { padding: 20 },
  skillCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#1F6FEB',
  },
  skillHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  skillIcon: { fontSize: 24, marginRight: 10 },
  skillName: { fontSize: 16, fontWeight: '600', color: '#212529', flex: 1 },
  skillLevel: { height: 8, backgroundColor: '#DEE2E6', borderRadius: 4, overflow: 'hidden', marginBottom: 8 },
  levelBar: { height: '100%', backgroundColor: '#1F6FEB', borderRadius: 4 },
  levelText: { fontSize: 12, color: '#666' },
  footer: { paddingVertical: 20, alignItems: 'center' },
  footerText: { color: '#999', fontSize: 12 },
});

export default SkillsScreen;
