function validacionForm() {
    // alert('hello world');
    var email=document.getElementById('email').value;
    var password=document.getElementById('psswd').value;   
    var msg=document.getElementById('message');
    if (email=='' && password=='') {
        msg.innerHTML='<p style="color:red"> Los dos campos estan vacios </p>';
        document.getElementById('email').style.borderColor= "red";
        document.getElementById('psswd').style.borderColor= "red";
        return false;
    }else if (email=='' && password != '') {
        msg.innerHTML='<p style="color:red"> El campo email está vacio </p>';
        document.getElementById('psswd').style.borderColor= "#ccc";
        document.getElementById('email').style.borderColor= "red";
        return false;
    }else if (password=='' && email != ''){
        msg.innerHTML='<p style="color:red"> El campo contraseña está vacio </p>';
        document.getElementById('email').style.borderColor= "#ccc";
        document.getElementById('psswd').style.borderColor= "red";
        return false;
    }else {
        return true;
    }
}