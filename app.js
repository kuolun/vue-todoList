var app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [
      {
        id: '345',
        name: 'dddd',
        completed: false
      }
    ],
    visibility: 'all'
  },
  methods: {
    addTodo() {
      var value = this.newTodo.trim();
      if (!value) {
        return;
      }
      var timestamp = Math.floor(Date.now());
      var newItem = {
        id: timestamp,
        name: value,
        completed: false
      };
      this.todos.push(newItem);
      this.newTodo = '';
    },
    removeTodo(idx) {
      console.log(idx);
      this.todos.splice(idx, 1);
    }
  }
});