function checkUserName(username,errusername){

    var username=document.getElementById("username").value;
    var errusername=document.getElementById("errorUserName");
    var regexusername=/^[A-Za-z0-9-_.]+$/
    if(username==''||username==null){
        errusername.innerHTML='<h4>Không được để trống user name<h4/>';
    }
    else if(!regexusername.test(username)){
        errusername.innerHTML='<h4>user name không hợp lệ<h4/>';
    }else{
        errusername.innerHTML='';  
        return true; 
    }
    
}

function checkPass(pass,errpass){
    var pass=document.getElementById("pass").value;
    var errpass=document.getElementById("errorPass");
    var regexpass=/^[A-Za-z0-9-_.]{8,}$/
    if(pass==''||pass==null){
        errpass.innerHTML='<h4>Không được để trống password]<h4/>';
    }
    else if(!regexpass.test(pass)){
        errpass.innerHTML='<h4>pass gồm ít nhất 8 kí tự<h4/>';
    }else{
        errpass.innerHTML='';  
        return true;  
    }
}

function checkrePass(repass,pass){
    var repass=document.getElementById("passw").value;
    var pass=document.getElementById("pass").value;
    var errpass=document.getElementById("errorConPass");
    var regexpass=/^[A-Za-z0-9-_.]{8,}$/
    if(repass==''||repass==null){
        errpass.innerHTML='<h4>Không được để trống password<h4/>';
    }
    else if(repass!==pass){
        errpass.innerHTML='<h4>pass gồm ít nhất 8 kí tự!<h4/>';
    }else{
        errpass.innerHTML=''; 
        return true;   
    }
}

function checkName(nem,errnem){
    var nem=document.getElementById("name").value;
    var errnem=document.getElementById("errorName");
    var regexpass=/^[A-Za-z ]+$/;
    if(nem==''||nem==null){
        errnem.innerHTML='<h4>Không được để trống họ tên<h4/>';
    }
    else if(!regexpass.test(nem)){
        errnem.innerHTML='<h4>Họ tên không bắt đầu bằng chữ thường<h4/>';
    }else{
        errnem.innerHTML='';   
        return true; 
    }
}
function checkPhone(phone,errphone){
    var phone=document.getElementById("phone").value;
    var errphone=document.getElementById("erorPhone");
    var regexpass=/^0[0-9]{9}$/;
    if(phone==''||phone==null){
        errphone.innerHTML='<h4>Không được để trống SDT<h4/>';
    }
    else if(!regexpass.test(phone)){
        errphone.innerHTML='<h4>SDT khôn hợp lệ(gồm 10 số ..)<h4/>';
    }else{
        errphone.innerHTML='';   
        return true; 
    }
}
function checkEmail(email,erremail){
    var email=document.getElementById("email").value;
    var erremail=document.getElementById("erorEmail");
    var regexpass=/^[A-Za-z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}$/;
    if(email==''||email==null){
        erremail.innerHTML='<h4>Không được để trống Email<h4/>';
    }
    else if(!regexpass.test(email)){
        erremail.innerHTML='<h4>Email không hợp lệ<h4/>';
    }else{
        erremail.innerHTML='';   
        return true; 
    }
}
function FormValidate(){
    var username=document.getElementById("username").value;
    var errusername=document.getElementById("errorUserName");
    var pass=document.getElementById("pass").value;
    var errpass=document.getElementById("errorPass"); 
    var repass=document.getElementById("passw").value;
    var errpass=document.getElementById("errorConPass");
    var nem=document.getElementById("name").value;
    var errnem=document.getElementById("errorName");

    var phone=document.getElementById("phone").value;
    var errphone=document.getElementById("erorPhone");

    var email=document.getElementById("email").value;
    var erremail=document.getElementById("erorEmail");
    if(checkUserName(username,errusername) && checkPass(pass,errpass)&&checkrePass(repass,pass)&&checkName(nem,errnem)&&checkPhone(phone,errphone)&&checkEmail(email,erremail)){
        alert("đăng ký thành công");
        location.href="https://www.facebook.com/voooquochuy/";
        // return true;
    }else{
        checkUserName(username,errusername) ;
        checkPass(pass,errpass);
        checkrePass(repass,pass);
        checkName(nem,errnem);
        checkPhone(phone,errphone);
        checkEmail(email,erremail);
    }
    return false;
}
