

   function _(id){
       return document.getElementById(id);
   }
    

function submitfrm(){

  
    _("feedback").innerHTML ='please wait...'
    var formdata = new FormData();
        //values

        formdata.append("name", _("name").value);
        formdata.append("email", _("email").value);
        formdata.append("subject", _("subject").value);
        formdata.append("msg", _("msg").value);

        var ajax = new XMLHttpRequest();
        ajax.open("POST" , "mail.php");

        ajax.onreadystatechange = function(){
            if(ajax.readyState == 4 && ajax.status == 200){
               // console.log(ajax.responseText);
                 _("feedback").innerHTML =ajax.responseText;
                //if(ajax.responseText == "success"){
                    
                   // _("feedback").innerHTML = 'there is problem with the email';
                //}else{
                   
                    
                    document.getElementById("contact").reset();
                //}
        }
    }

    ajax.send(formdata);
 
}
       