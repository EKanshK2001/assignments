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






                  // SO THE ANSWER BELOW GETS ALL THE TEST CASES RIGHT               ---> 0.339s / 0.245s
            // the problem is with it is that, the indexing is never maintained. The testcases dont use the original indices to remove or get a todo.
            // this makes the problem easier (as in to never maintain a separate index instead use the array's relative index) but not ideal IMO.
            // Hence, we made another solution below this one. 


class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    } else {
      console.log("Index out of range.");
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    } else {
      console.log("Index out of range.");
    }
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      console.log("Index out of range.");
      return null;
    }
  }

  clear() {
    this.todos = [];
  }
}




                  // SO THE ANSWER BELOW DOES NOT GET 1 INSTANCE OF REMOVE CASE RIGHT (6/7)             ---> 0.346s / 0.245s
            // this is because the problem has test cases that use array's relative index to remove or get, but we have maintained a separate index (as in an object like {index, todo} inside todoList array).
            // now with this solution, we can get a todo with its original addition index which is more real world/ideal like IMO.
            // I don't really know this but I'm assuming that the todo id or index is maintained this way. Hence this solution.


// class Todo {
//   todoList = [];

//   add(todo) {
//     let idx = this.todoList.length;
//     let todoObject = { INDEX: idx, TODO: todo };
//     this.todoList.push(todoObject);
//   }

//   remove(index) {
//     for (let i = 0; i < this.todoList.length; i++) {
//       if (this.todoList[i].INDEX === index) {
//         this.todoList.splice(i, 1);
//         return;
//       }
//     }
//   }

//   update(index, updatedTodo) {
//     for (let i = 0; i < this.todoList.length; i++) {
//       if (this.todoList[i].INDEX === index) {
//         this.todoList[i].TODO = updatedTodo;
//         return;
//       }
//     }
//   }

//   getAll() {
//     this.todoListShow = [];

//     this.todoList.forEach((todo) => {
//       let { TODO } = todo;
//       this.todoListShow.push(TODO);
//     });

//     return this.todoListShow;
//   }

//   get(index) {
//     for (let i = 0; i < this.todoList.length; i++) {
//       if (this.todoList[i]["INDEX"]=== index) {
//         console.log(this.todoList[i].TODO);
//         return this.todoList[i].TODO;
//       }
//     }

//     return null;
//   }

//   clear() {
//     this.todoList = [];
//   }
// }



module.exports = Todo;
