$(function() {
    $(".change-eat").on("click", function(event) {
      var id = $(this).data("id");
      var newSleep = $(this).data("newburger");
  
      var newburger = {
        eat: newburger
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newburger
      }).then(
        function() {
          console.log("changed burger to", newburger);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newburger = {
        name: $("#bu").val().trim(),
        data: newburger
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newburger
      }).then(
        function() {
          console.log("created a new burger");
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burgers", id);
          location.reload();
        }
      );
    });
  });
  