var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type:'doughnut',
    data:{
        labels:['Agendamientos','Horas','progreso'],
        datasets:[{
            label: 'Num datos',
            data:[10, 9, 15],
            backgroundColor:[
                '#B2DF8A',
                '#A6CEE3',
                '#B41F4C'
            ]
        }]
    }
});

var ctx2 = document.getElementById('myStatistics').getContext('2d');
var myStatistics = new Chart(ctx2, {
    type:'bar',
    data:{
        labels:['Agendamientos','Horas','progreso'],
        datasets:[{
            label: 'Num datos',
            data:[10, 9, 15],
            backgroundColor:[
                '#AEA6E3',
                '#707070',
                '#B41F4C'
            ]
        }]
    }
});