$(function() {

  var incomplete = $(".incomplete");
  var complete = $(".complete");

  var addBtn = $(".add-task > button");
  var delBtn = $(".delete-btn");

  addBtn.on("click", function() {

    var input = $(".input-text");
    var task = $("<div class='task'></div>").text(input.val());

    var del = $("<span class='ui-icon ui-icon-trash'></span>").on("click", function() {
      var p = $(this).parent();
      p.remove();
    });

    var check = $("<span class='ui-icon ui-icon-check'></span>").on("click", function() {
      var p = $(this).parent();
      complete.append(p);
      (this).remove();
    });

    if(input.val() != "") {
      task.append(del, check);
      incomplete.append(task);
      input.val("");
    }

    // Drag & Drop

    incomplete.sortable({
      connectWith: ".sortable"
    }).disableSelection();

    complete.sortable({
      connectWith: ".sortable"
    }).disableSelection();

    incomplete.draggable({
      containment: "document",
      revert: true
    });

    complete.droppable({
      accept: ".task",
      activeClass : "complete-active",
      drop: function(event, ui){
        ui.draggable.find($(".ui-icon-check")).remove();
      }
    });

    // Delete All Tasks

    delBtn.on("click", function() {
      task.remove();
    });
  });
});
