import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles';

const CompletedTasks = ({ completedTasks, undoTask }) => {
  return (
    <View style={styles.completedTasksContainer}>
      <Text style={styles.completedTasksTitle}>Tarefas Completadas</Text>
      <FlatList
        data={completedTasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.completedTaskContainer}>
            <Text style={styles.completedTaskText}>{item.task}</Text>
            <TouchableOpacity
              style={styles.undoButton}
              onPress={() => undoTask(item)}
            >
              <Text style={styles.buttonText}>Desfazer</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.completedTasksListContentContainer}
      />
    </View>
  );
};

export default CompletedTasks;
