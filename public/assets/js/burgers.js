
$(function() {
    $(".change-eat").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = $(this).data("neweat");
  
      var newEatState = {
        eaten: newEat
      };
  
      //PUT request
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatState
      }).then(
        function() {
          console.log("changed eat", newEat);
       
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
    
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        eaten: $("[name=eaten]:checked").val().trim()
      };
  
      // Post request
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new Burger");
          location.reload();
        }
      );
    });
  });