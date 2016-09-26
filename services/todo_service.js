todo.factory('todoService' , function() {
  var stub = {};

  var _newItem = {};

  var _items = [
  {
    text: "Get groceries from store",
    dueDate: new Date(),
    completed: false
  },
  {
    text: "Mow the lawn",
    dueDate: new Date(),
    completed: false
  },
  {
    text: "Wash the dishes",
    dueDate: new Date(),
    completed: false
  },
  {
    text: "Scrub the floor",
    dueDate: new Date(),
    completed: false
  },
  ];

  stub.getNewItem = function () {
    return _newItem;
  }

  stub.getItems = function() {
    return _items;
  }

  stub.create = function(newItem) {
    var newerItem = {};
    newerItem.text = _newItem.text;
    newerItem.dueDate = _newItem.dueDate || new Date();
    newerItem.completed = false;

    console.log("text: " + _newItem.text);
    console.log("Due Date: " + _newItem.dueDate);

    _items.push(newerItem);

    _newItem = {};
  };

  stub.delete = function(item) {
    var index = _items.indexOf(item);
    _items.splice(index, 1);
  };

  stub.clearCompleted = function() {
    for (var i = _items.length - 1; i >= 0; i--) {
      if (_items[i].completed){
        _items.splice(i, 1);
      }
    }
  };


  return stub;
});