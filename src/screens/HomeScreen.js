import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

/**
 * HomeScreen - Tela principal de perfil do usuario
 * 
 * Exibe informacoes do perfil, foto, nome, bio e botoes de contato
 */
const HomeScreen = () => {
  const [profileData] = useState({
    name: 'Seu Nome',
    title: 'Desenvolvedor Mobile React Native',
    bio: 'Apaixonado por criar aplicacoes mobile inovadoras e responsivas.',
    avatar: null, // usar require('./assets/avatar.png')
    contacts: [
      {
        type: 'email',
        label: 'Email',
        value: 'seu-email@example.com',
        icon: '✉️',
      },
      {
        type: 'linkedin',
        label: 'LinkedIn',
        value: 'https://linkedin.com/in/seu-perfil',
        icon: '💼',
      },
      {
        type: 'github',
        label: 'GitHub',
        value: 'https://github.com/seu-usuario',
        icon: '🐙',
      },
      {
        type: 'whatsapp',
        label: 'WhatsApp',
        value: '+55 11 9999-9999',
        icon: '💬',
      },
    ],
  });

  const handleContactPress = (contact) => {
    try {
      if (contact.type === 'email') {
        Linking.openURL(`mailto:${contact.value}`);
      } else if (contact.type === 'linkedin' || contact.type === 'github') {
        Linking.openURL(contact.value);
      } else if (contact.type === 'whatsapp') {
        Linking.openURL(`https://wa.me/${contact.value.replace(/\D/g, '')}`);
      }
    } catch (error) {
      Alert.alert('Erro', 'Nao foi possivel abrir o link');
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header/Avatar Section */}
      <View style={styles.headerSection}>
        <View style={styles.avatarContainer}>
          {profileData.avatar ? (
            <Image source={profileData.avatar} style={styles.avatar} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarText}>👤</Text>
            </View>
          )}
        </View>
      </View>

      {/* Profile Info Section */}
      <View style={styles.profileSection}>
        <Text style={styles.nameText}>{profileData.name}</Text>
        <Text style={styles.titleText}>{profileData.title}</Text>
        <Text style={styles.bioText}>{profileData.bio}</Text>
      </View>

      {/* Contacts Section */}
      <View style={styles.contactsSection}>
        <Text style={styles.sectionTitle}>Conecte-se comigo</Text>
        <View style={styles.contactsGrid}>
          {profileData.contacts.map((contact, index) => (
            <TouchableOpacity
              key={index}
              style={styles.contactButton}
              onPress={() => handleContactPress(contact)}
              activeOpacity={0.7}
            >
              <Text style={styles.contactIcon}>{contact.icon}</Text>
              <Text style={styles.contactLabel}>{contact.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Quick Stats Section */}
      <View style={styles.statsSection}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>10+</Text>
          <Text style={styles.statLabel}>Projetos</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>5+</Text>
          <Text style={styles.statLabel}>Anos</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>50+</Text>
          <Text style={styles.statLabel}>Clientes</Text>
        </View>
      </View>

      {/* CTA Button */}
      <TouchableOpacity
        style={styles.ctaButton}
        onPress={() => Alert.alert('Sucesso', 'Obrigado pelo interesse!')}
      >
        <Text style={styles.ctaButtonText}>Entre em Contato</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footerSection}>
        <Text style={styles.footerText}>
          © 2026 - Desenvolvido com ❤️ para DIO
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  headerSection: {
    paddingVertical: 30,
    alignItems: 'center',
    backgroundColor: '#1F6FEB',
  },
  avatarContainer: {
    marginTop: 10,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff',
  },
  avatarText: {
    fontSize: 50,
  },
  profileSection: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 5,
  },
  titleText: {
    fontSize: 16,
    color: '#1F6FEB',
    fontWeight: '600',
    marginBottom: 10,
  },
  bioText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  contactsSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 15,
  },
  contactsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  contactButton: {
    width: '48%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DEE2E6',
  },
  contactIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  contactLabel: {
    fontSize: 12,
    color: '#212529',
    fontWeight: '600',
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F6FEB',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  ctaButton: {
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#1F6FEB',
    alignItems: 'center',
    marginVertical: 20,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footerSection: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#999',
    fontSize: 12,
  },
});

export default HomeScreen;
