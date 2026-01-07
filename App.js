import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

/**
 * Bat Signal App
 * 
 * Aplicação de Bat-Sinal desenvolvida com React Native
 * Permite acionar e visualizar o famoso sinal do Batman de forma interativa
 */

const App = () => {
  const [isSignalActive, setIsSignalActive] = useState(false);
  const animationValue = new Animated.Value(0);

  // Função para acionar o sinal
  const toggleSignal = () => {
    setIsSignalActive(!isSignalActive);
    
    if (!isSignalActive) {
      // Animar o sinal
      Animated.sequence([
        Animated.timing(animationValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(animationValue, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
      ]).start();
    }
  };

  const animatedOpacity = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 1],
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🦇 Bat Sinal</Text>
        <Text style={styles.subtitle}>Desafio DIO</Text>
      </View>

      <View style={styles.signalContainer}>
        <Animated.View
          style={[
            styles.signal,
            { opacity: isSignalActive ? animatedOpacity : 0.3 },
          ]}
        >
          <Text style={styles.signalText}>🦇</Text>
        </Animated.View>
      </View>

      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>
          Status: {isSignalActive ? 'ATIVADO ✓' : 'DESATIVADO'}
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isSignalActive ? '#dc143c' : '#1a1a1a' },
        ]}
        onPress={toggleSignal}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>
          {isSignalActive ? 'DESATIVAR SINAL' : 'ATIVAR SINAL'}
        </Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>React Native - DIO Challenge</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0e27',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#ffd700',
  },
  signalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
  },
  signal: {
    fontSize: 120,
    textAlign: 'center',
  },
  signalText: {
    fontSize: 120,
    textShadowColor: '#ffd700',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  statusContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    borderWidth: 2,
    borderColor: '#ffd700',
  },
  statusText: {
    fontSize: 16,
    color: '#ffd700',
    fontWeight: 'bold',
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: '#ffd700',
  },
  buttonText: {
    color: '#ffd700',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    color: '#888',
    fontSize: 12,
  },
});

export default App;
