const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm['exampleInputEmail1'].value;
    const password = loginForm['exampleInputPassword1'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        window.location.href = 'http://localhost:3000/'
    });
});