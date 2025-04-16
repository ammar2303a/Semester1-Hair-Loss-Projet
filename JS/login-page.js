function fomrvalidation()
        {
            let username = document.getElementById("username").value;
            let useremail = document.getElementById("useremail").value;
            let pass = document.getElementById("pass").value;
            let cpass = document.getElementById("cpass").value;

            let namevaluecheck = /^[A-Za-z]{3,40}$/;
            let emailvaluecheck = /^[A-Za-z_]{3,}[0-9_]*@[A-Za-z]{5,}[.]{1}[A-Za-z.]{2,6}$/
            let passvaluecheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
        
            if(namevaluecheck.test(useremail))
            {
                document.getElementById("uemail").innerHTML=" "
            }
            else
            {
                document.getElementById("uemail").innerHTML="username is invalid";
                
            }

            if(emailvaluecheck.test(pass))
            {
                document.getElementById("upass").innerHTML=" "
            }
            else
            {
                document.getElementById("upass").innerHTML="Email is invalid";
                
            }
            
        }