angular.module('todoApp')
  .controller('TodoController', TodoController)

function TodoController(){
  var self = this
  self.newTodo = {title: '', content: '', completed: false}
  self.todos = [
    {title: 'walk the dishes', content: 'do it', completed: false},
    {title: 'wash the laundry', content: 'just do it', completed: false},
    {title: 'brush the toilet', content: 'come on, do it already', completed: false}
  ]
  
}
