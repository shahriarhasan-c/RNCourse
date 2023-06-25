import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,
   Text, 
   View,
    Button, 
    TextInput, 
    ScrollView, 
    FlatList, 
    Image 
  } from 'react-native';
import GoalItem from './components/GoalItems';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible,setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }
    ]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    console.log(id);
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goals) => goals.id !== id);
    })
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal'
       color="#5e0acc"
       onPress={startAddGoalHandler}
       />
     <GoalInput visible={modalIsVisible}
      onAddGoal={addGoalHandler}
      onCancel={endAddGoalHandler}
       />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDelete={deleteGoalHandler}

            />;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor:'#1e085a'
  },

  goalsContainer: {
    flex: 4,

  },

});
