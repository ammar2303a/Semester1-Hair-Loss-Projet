            function fomrvalidation()
        {
            let username = document.getElementById("username").val;
            let useremail = document.getElementById("useremail");
            let usersubject = document.getElementById("usersubject").val;
            let userphone = document.getElementById("userphone").val;
            let usermessage = document.getElementById("usermessage").val;
            // let pass = document.getElementById("pass").val;
            // let cpass = document.getElementById("cpass").val;

            let namevaluecheck = /^[A-Za-z]{3,20}$/;
            let emailvaluecheck = /^[A-Za-z_]{3,}[0-9_]*@[A-Za-z]{5,}[.]{1}[A-Za-z.]{2,6}$/;
            let subjectvaluecheck = /^[A-Za-z]{3,50}$/;
            let phonevaluecheck = /^\d{11}$/;
            let messagevaluecheck = /^[A-Za-z]{3,100}$/;
            // let passvaluecheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
        
            if(namevaluecheck.test(username))
            {
                document.getElementById("uname").innerHTML=""
            }
            else 
            {
                document.getElementById("uname").innerHTML="username is invalid";
                
            }

            if(emailvaluecheck.test(useremail))
            {
                document.getElementById("uemail").innerHTML=" "
            }
            else
            {
                document.getElementById("uemail").innerHTML="Email is invalid";
                
            }
            
            if(subjectvaluecheck.test(usersubject))
            {
                document.getElementById("usubject").innerHTML=" "
            }
            else
            {
                document.getElementById("usubject").innerHTML="Subject is invalid";
                
            }
            
            if(phonevaluecheck.test(userphone))
            {
                document.getElementById("uphone").innerHTML=" "
            }
            else
            {
                document.getElementById("uphone").innerHTML="Phone Number Is Invalid";
                
            }
            
            if(messagevaluecheck.test(usermessage))
            {
                document.getElementById("umessage").innerHTML=" "
            }
            else
            {
                document.getElementById("umessage").innerHTML="Please Enter Message";
                
            }
        }

        