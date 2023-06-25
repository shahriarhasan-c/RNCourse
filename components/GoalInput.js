import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal,Image } from 'react-native'

function GoalInput(props) {
  const [enteredGoalText, setEnteredText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredText(enteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredText('');
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/pin.jpg')}/>
        <TextInput style={styles.textInput} placeholder='Your course goal'
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>
          <View style={styles.Button}>
            <Button title="Cancel" onPress={props.onCancel} color= "#f31282"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding:16,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor:'#e4d0ff',
    backgroundColor:'#e4d0ff',
    color:'#120438',
    borderRadius:6,
    borderColor: '#cccccc',
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  button: {
    width: 100,
    marginHorizontal: 8
  },
  image:{
    width: 100,
    height: 100,
    margin:20
  }
});