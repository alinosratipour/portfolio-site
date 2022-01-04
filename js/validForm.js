$(document).ready(function(){
    //alert("hi");
   $("form").submit(function(event){
      event.preventDefault();
     
      var name = $("#user-name").val();
      var email = $("#user-email").val();
      var company = $("#user-company").val();
      var msg = $("#user-msg").val();
      var submit = $("#submitBtn").val();
      $(".form-msg").load("mail.php", {
         name : name,
         email : email,
         company : company,
         msg : msg,
         submit : submit
      });
   });


   
});