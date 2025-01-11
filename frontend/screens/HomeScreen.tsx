import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Navigation */}
      <View style={styles.topNav}>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>👤</Text> {/* Profile icon placeholder */}
        </TouchableOpacity>
        <Text style={styles.snapText}>Snapchat</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>💬</Text> {/* Chat icon placeholder */}
        </TouchableOpacity>
      </View>

      {/* Main Camera View */}
      <View style={styles.cameraView}>
        <Text style={styles.cameraText}>Camera View</Text>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>🗺️</Text> {/* Map icon placeholder */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.snapButton}>
          <View style={styles.snapCircle} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>📚</Text> {/* Stories icon placeholder */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background for camera view
  },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black for navigation background
  },
  iconButton: {
    padding: 10,
  },
  iconText: {
    fontSize: 20,
    color: '#fff', // White icons
  },
  snapText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cameraView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333', // Placeholder color for camera
  },
  cameraText: {
    color: '#fff',
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  snapButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  snapCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff', // White snap button
  },
});

export default HomeScreen;
