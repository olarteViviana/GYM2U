(function() {
    const access__hour1 = document.getElementById('access__hour1');
    const access__hour2 = document.getElementById('access__hour2');
    const agend__submit = document.getElementById('agend__submit');

    access__hour1.addEventListener('click', function(e) {
        alert('hora a agendar 8:00 AM');
    });

    access__hour2.addEventListener('click', function(e) {
        alert('hora a agendar 10:00 AM');
    });

    agend__submit.addEventListener('click', function(e) {
        alert('Hora programada correctamente');
    });
})();