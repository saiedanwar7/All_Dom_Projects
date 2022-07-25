document.getElementById('login-submit').addEventListener('click', function () {

    // get user Email

    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    // get user password 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);


    // Simple Auth Varification
    // email r password thik hole new page niye jabe seta korbo
    // window.location.href = 'link'

    if (userEmail == 'saiedanwar850@gmail.com' && userPassword == 'cr7') {
        window.location.href = 'banking.html'
    }
})