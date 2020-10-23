function validacionForm() {
    // alert('hello world');
    var email=document.getElementById('email').value;
    var password=document.getElementById('psswd').value;   
    var submit=document.getElementById('submit');
    var msg=document.getElementById('message');
    if (email=='' && password=='') {
        msg.innerHTML='<p style="color:black"> Los dos campos estan vacios </p>';
        document.getElementById('email').style.borderColor= "red";
        document.getElementById('psswd').style.borderColor= "red";
        submit.style.backgroundColor = "#F0649D";
        submit.style.border="blue solid 2px";
        submit.style.color="red";
        msg.style.border="solid 1x";
        msg.style.backgroundColor = "#F0649D";
        msg.style.borderRadius="2px";
        return false;
    }else if (email=='' && password != '') {
        msg.innerHTML='<p style="color:black"> El campo email está vacio </p>';
        document.getElementById('psswd').style.borderColor= "#ccc";
        document.getElementById('email').style.borderColor= "red";
        submit.style.backgroundColor = "#F0649D";
        submit.style.border="blue solid 2px";
        submit.style.color="red";
        msg.style.border="solid 1x";
        msg.style.backgroundColor = "#F0649D";
        msg.style.borderRadius="2px";
        return false;
    }else if (password=='' && email != ''){
        msg.innerHTML='<p style="color:black"> El campo contraseña está vacio </p>';
        msg.style.backgroundColor = "#F0649D";
        document.getElementById('email').style.borderColor= "#ccc";
        document.getElementById('psswd').style.borderColor= "red";
        submit.style.backgroundColor = "#F0649D";
        submit.style.border="blue solid 2px";
        submit.style.color="red";
        msg.style.border="solid 1x";
        msg.style.backgroundColor = "#F0649D";
        msg.style.borderRadius="2px";
        return false;
    }else {
        return true;
    }
}