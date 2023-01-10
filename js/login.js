
(function(){
    const user__input = document.querySelector('.login__user__input');
    const passw__input = document.querySelector('.login__passw__input');
    const login__submit = document.querySelector('.login__submit');
    const form__user = document.querySelector('.user__input');
    const form__passw = document.querySelector('.passw__input');

    user__input.addEventListener('blur', function(e) {

        if(e.target.value.trim() === '') {
            const error = document.createElement('P');
            error.textContent = (`El campo ${e.target.id} es obligatorio`);
            error.classList.add('bg-red-600', 'text-white', 'p-1', 'text-center');
            alertExist();
            form__user.appendChild(error);
            return;
        }

        removeAlert(e.target.parentElement);
    });

    passw__input.addEventListener('blur', function(e) {
       
        if(e.target.value.trim() === '') {
            const error = document.createElement('P');
            error.textContent = (`El campo ${e.target.id} es obligatorio`);
            error.classList.add('bg-red-600', 'text-white', 'p-1', 'text-center');
            alertExist();
            form__passw.appendChild(error);
            return;
        }
        removeAlert(e.target.parentElement);
    });

    login__submit.addEventListener('click', function(e) {
        checkUser(e.target.parentElement);
    });

    function alertExist() {
        const alert = document.querySelector('.bg-red-600');
        if (alert) {
            console.log(alert);
            alert.remove();
        }
    }

    function removeAlert(reference) {
        const alert = reference.querySelector('.bg-red-600');
        if (alert) {
            console.log(alert);
            alert.remove();
        }
    }

    function checkUser(reference) {
        if(user__input.value === '1000305187' && passw__input.value === '123456') {
            alert('Usuario ha iniciado sesión con exito');
            login__submit.href = "./imc.html";
        } else if(user__input.value === 'administrador' && passw__input.value === '123456') {
            alert('Administrador ha iniciado sesión exito');
            login__submit.href = "./viewProfiles.html";
        } else {
            const error = document.createElement('P');
            error.textContent = ('Usuario o contraseña incorrectos');
            error.classList.add('bg-red-600', 'text-white', 'p-1', 'text-center');
            reference.appendChild(error);
        }
    }

})();