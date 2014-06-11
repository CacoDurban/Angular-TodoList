// Code goes here

var app = angular.module("todoApp",[]);

app.controller("todoController", function($scope, $filter){
  
  $scope.Todos = [];
  
  $scope.AddTask = function(task)
  {
   
   var newTodo = task.Name.trim();
   if (!newTodo.length) {
					return;
   }
   
    var newTask = angular.copy(task);
    newTask.Done = false;
    $scope.Todos.push(newTask);
    task.Name = "";
  };
  
  $scope.MarkDone = function(task)
  {
    task.Done = true;
  }
  
  $scope.MarkNotDone = function(task)
  {
    task.Done = false;
  }
  
  $scope.RemoveTask = function(task)
  {
    $scope.Todos.splice($scope.Todos.indexOf(task), 1);
  }
  
  
  
  $scope.ClearCompletedTask = function(Todos)
  {
    var completedTasks = $filter('filter')(Todos, {Done:true}, true);
    angular.forEach(completedTasks, function(completedTask){
      $scope.Todos.splice($scope.Todos.indexOf(completedTask), 1);
    });
  }

  $scope.$watch('Todos', function() {
             $scope.TaskRemaining = $filter('filter')($scope.Todos, {Done:false}).length;
             $scope.TaskCompleted = $filter('filter')($scope.Todos, {Done:true}).length;
  }, true);

});


