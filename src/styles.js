import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E6E6FA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    marginTop: 40,
    color: '#8A2BE2',
  },
  input: {
    borderWidth: 2,
    borderColor: '#8A2BE2',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 18,
    color: '#333333',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  addButton: {
    backgroundColor: '#9370DB',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 4,
    elevation: 2,
  },
  taskText: {
    flex: 1,
    color: '#333',
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: '#FF1493',
    padding: 4,
    borderRadius: 4,
  },
  editButton: {
    backgroundColor: '#32CD32',
    padding: 4,
    borderRadius: 4,
    marginLeft: 8,
  },
  completeButton: {
    backgroundColor: '#008000',
    padding: 4,
    borderRadius: 4,
    marginLeft: 8,
  },
  modalContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E6E6FA',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#8A2BE2',
  },
  saveButton: {
    backgroundColor: '#9370DB',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  cancelButton: {
    marginTop: 16,
  },
  listContentContainer: {
    paddingTop: 10,
    flexGrow: 1,
  },
  completedTasksContainer: {
    marginTop: 16,
  },
  completedTasksTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#8A2BE2',
    textAlign: 'center'
  },
  completedTaskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 4,
    elevation: 2,
  },
  completedTaskText: {
    flex: 1,
    color: '#333',
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
  undoButton: {
    backgroundColor: '#FF1493',
    padding: 4,
    borderRadius: 4,
  },
  completedTasksListContentContainer: {
    flexGrow: 1,
  },
  completedButton: {
    backgroundColor: '#32CD32',
    padding: 4,
    borderRadius: 4,
  },
});

export default styles;
