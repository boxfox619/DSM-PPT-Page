google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data1 = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['1학년', 61],
        ['2학년', 50],
    ]);

    var options1 = {
        title: '설문참여 인원',
        titleTextStyle: {
            color: "white",
            fontName: "font-test",
            fontSize: 30
        },
        legend: {textStyle: {color: '#ffffff'}},
        pieSliceText: 'value',
        backgroundColor: { fill:'transparent' }
    };
    var data2 = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['만족', 24],
        ['불만족', 87],
    ]);

    var options2 = {
        title: '아침운동 만족도',
        titleTextStyle: {
            color: "white",
            fontName: "font-test",
            fontSize: 30
        },
        legend: {textStyle: {color: '#ffffff'}},
        pieSliceText: 'value',
        backgroundColor: { fill:'transparent' }
    };

    var data3 = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['학습에 도움이 된다.', 2],
        ['학습에 지장이 있다.', 97],
        ['상관없다.', 12],
    ]);

    var options3 = {
        title: '아침운동 학습에 끼치는 영향',
        titleTextStyle: {
            color: "white",
            fontName: "font-test",
            fontSize: 30
        },
        legend: {textStyle: {color: '#ffffff'}},
        pieSliceText: 'value',
        backgroundColor: { fill:'transparent' }
    };

    var data4 = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['1-2회', 36],
        ['5회 이상', 30],
        ['3-4회', 39],
        ['상관없음', 6],
    ]);

    var options4 = {
        title: '하룻동안 수업시간에 조는 횟수',
        titleTextStyle: {
            color: "white",
            fontName: "font-test",
            fontSize: 30
        },
        legend: {textStyle: {color: '#ffffff'}},
        pieSliceText: 'value',
        backgroundColor: { fill:'transparent' }
    };

    var data5 = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['체력이 증진되었다.', 22],
        ['체력이 저하되었다.', 30],
        ['이전과 비슷하다.', 59],
    ]);

    var options5 = {
        title: '아침운동 시행 후 체력 변화',
        titleTextStyle: {
            color: "#ffffff",
            fontName: "font-test",
            fontSize: 30
        },
        legend: {textStyle: {color: '#ffffff'}},
        pieSliceText: 'value',
        backgroundColor: { fill:'transparent' }
    };

    var chart1 = new google.visualization.PieChart(document.getElementById('piechart1'));
    chart1.draw(data1, options1);

    var chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));
    chart2.draw(data2, options2);

    var chart3 = new google.visualization.PieChart(document.getElementById('piechart3'));
    chart3.draw(data3, options3);

    var chart4 = new google.visualization.PieChart(document.getElementById('piechart4'));
    chart4.draw(data4, options4);

    var chart5 = new google.visualization.PieChart(document.getElementById('piechart5'));
    chart5.draw(data5, options5);
}
