/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  
  todoList = [];

  add(todo) {
    let idx = this.todoList.length;
    let todoObject = {"INDEX": idx, "TODO": todo};
    this.todoList.push(todoObject);
    return this.todoList;
  }

  remove(index) {
    let count = 0;
    this.todoList.forEach(todo => {
      let {INDEX} = todo;               //this is destructuring no??
      if (INDEX === index) {
        this.todoList.splice(count, 1);
        return;
      }
      count++;
    })
  }

  update(index, updatedTodo) {
    this.todoList.forEach(todo => {
      let {INDEX, TODO} = todo;               //this is destructuring no??
      if (INDEX === index) {
        TODO = updatedTodo;
        return;
      }
    })

    console.log("Invalid Task");
    return;
  }

  getAll() {
    this.todoList.forEach(todo => {
      let {TODO} = todo;
      console.log(TODO);
    });

    this.todoList.forEach(tasks => {
      
    })
  }

  get(index) {
    this.todoList.forEach(todo => {
      let {INDEX, TODO} = todo;               //this is destructuring no??
      if (INDEX === index) {
        console.log(TODO);
        return INDEX;
      }
    })

    return null;
  }

  clear() {
    let lengthOfTodo = this.todoList.length;
    for (let i = 0; i < lengthOfTodo; i++) {
      this.todoList.pop();
    }
    return this.todoList;
  }
}

module.exports = Todo;
