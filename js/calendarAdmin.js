(function() {
    const access__hour1 = document.getElementById('access__hour1');
    const access__hour2 = document.getElementById('access__hour2');
    const agend__submit = document.querySelector('agend__submit');

    access__hour1.addEventListener('blur', function(e) {
        const hour__selected = '8:00 AM';
    });

    agend__submit.addEventListener('click', function(e) {
        alert(`Hora programada correctamente, su hora programada es ${hour__selected}`);
    });
})();