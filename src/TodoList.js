import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Modal } from 'react-native';
import axios from 'axios';

import styles from './styles';
import CompletedTasks from './completedtasks';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [editModalVisible, setEditModalVisible] = useState(false);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://192.168.0.10:3000/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    try {
      await axios.post('http://192.168.0.10:3000/tasks', { task: task });
      fetchTasks();
      setTask('');
    } catch (error) {
      console.error(error);
    }
  };

  const removeTask = async (id) => {
    try {
      await axios.delete(`http://192.168.0.10:3000/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const completeTask = (task) => {
    setCompletedTasks([...completedTasks, task]);
    removeTask(task._id);
  };

  const undoTask = (task) => {
    setTasks([...tasks, task]);
    setCompletedTasks(completedTasks.filter((completedTask) => completedTask._id !== task._id));
  };

  const openEditModal = (task) => {
    setEditingTask(task);
    setEditModalVisible(true);
  };

  const closeEditModal = () => {
    setEditingTask(null);
    setEditModalVisible(false);
  };

  const editTask = async (id, newTask) => {
    try {
      await axios.put(`http://192.168.0.10:3000/tasks/${id}`, { task: newTask });
      fetchTasks();
      closeEditModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <TextInput
        placeholder="Digite uma tarefa"
        value={task}
        onChangeText={setTask}
        style={styles.input}
      />
      <TouchableOpacity onPress={addTask} style={styles.addButton}>
        <Text style={styles.buttonText}>Adicionar Tarefa</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item.task}</Text>
            <TouchableOpacity onPress={() => removeTask(item._id)} style={styles.removeButton}>
              <Text style={styles.buttonText}>Remover</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openEditModal(item)} style={styles.editButton}>
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => completeTask(item)} style={styles.completeButton}>
              <Text style={styles.buttonText}>Concluir Tarefa</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.listContentContainer}
      />
      <Modal visible={editModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Editar Tarefa</Text>
          <TextInput
            placeholder="Digite uma nova tarefa"
            value={editingTask?.task}
            onChangeText={(newTask) => setEditingTask({ ...editingTask, task: newTask })}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => editTask(editingTask?._id, editingTask?.task)} style={styles.saveButton}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={closeEditModal} style={styles.cancelButton}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <CompletedTasks completedTasks={completedTasks} undoTask={undoTask} />
    </View>
  );
};

export default TodoList;
