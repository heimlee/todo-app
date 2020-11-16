$(function(){
  $(".add-task > button").click(function() {
    $(this).click(function() {
      if($(".input-text").val() != "") {
        var task = $("<div class='task'></div>").text($(".input-text").val());

        var del = $("<span class='ui-icon ui-icon-trash'></span>").click(function() {
          var p = $(this).parent();
          p.fadeOut(function() {
            p.remove();
          });
        });

        var check = $("<span class='ui-icon ui-icon-check'></span>").click(function() {
          var p = $(this).parent();
          p.fadeOut(function() {
            $(".completed").append(p);
            p.fadeIn();
          });
          $(this).remove();
        });

        task.append(del, check);

        $(".incompleted").append(task);

        $(".input-text").val("");

        var delBtn = $(".delete-btn").click(function(){
          task.fadeOut(function() {
            task.remove();
          })
        });
      }
    });
  });
})
