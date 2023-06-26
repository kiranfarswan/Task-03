function message(){
    var email = document.getElementById('email');
    const success = document.getElementById('success');
    const failed = document.getElementById('failed');
    const btn2 = document.getElementById('btn2');

    if(email.value === ''){
        failed.style.display = 'block';
        btn2.style.display = 'block';
    }
    else{
        success.style.display = 'block';
        btn2.style.display = 'block';
    }
}
