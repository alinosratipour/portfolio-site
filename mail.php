
<?php
//use PHPMailer\PHPMailer\PHPMailer;
if(isset($_POST['submit'])) {
 
  // EDIT THE 2 LINES BELOW AS REQUIRED
  $email_to = "ali008009@yahoo.com";
  $email_subject = "Ali Nosrati";
 

  $name = $_POST['name']; // required
  $email= $_POST['email']; // required
  $company = $_POST['company']; //  required
  $msg = $_POST['msg']; // required
  
  
  $errorEmpty = false;
  $errorEmail = false;

  $email_message = "Email details below.\n\n";
  function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
  }
  
  $email_message .= "name: ".clean_string($name)."\n";
  $email_message .= "email: ".clean_string($email)."\n";
  $email_message .= "company: ".clean_string($company)."\n";
  $email_message .= "Message: ".clean_string($msg)."\n";


    if(empty($name) || empty($email) || empty($company) || empty($msg) ){
    echo "<span class='form-error'>Fill in fields </span>";
    $errorEmpty = true;
    }

    elseif(!filter_var($email,FILTER_VALIDATE_EMAIL)){
    echo "<span class='form-error'>Email is not Valid </span>";
    $errorEmail = true;
    }


    elseif (strlen($msg) < 2) {
    echo "<span class='form-error'>Message is too short </span>";
    }

    else {
      'X-Mailer: PHP/' . phpversion();
      @mail($email_to, $email_subject, $email_message );
       echo "<span class='form-success'>Message sent </span>";

    }
}
else{
  echo "<span class='form-error>There was an error </span>"; 
}

?>

<script>

  $("#user-name, #user-email, #user-company, #user-msg").removeClass("input-error");
  var errorEmpty = "<?php echo $errorEmpty;?>";
  var errorEmail = "<?php echo $errorEmail;?>";

  if(errorEmpty == true){
    $("#user-name, #user-email, #user-company, #user-msg ").addClass("input-error");
  }
  if(errorEmail == true){
    $("#user-email").addClass("input-error");
  }
  if(errorEmpty == false  && errorEmail == false){
     $("#user-name, #user-email, #user-company, #user-msg ").val("");
  }
</script>