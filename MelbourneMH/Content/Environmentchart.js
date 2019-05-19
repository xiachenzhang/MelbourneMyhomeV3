// based ready dom, initialize echarts instance 
var chart = echarts.init(document.getElementById('main-5'));

option = {
    tooltip: {
        trigger: 'axis'
    },

 
   
   
    xAxis: [
        {

            type: 'category',
            data: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'CO2 net-emission',
            min: 100,
            max: 135,
            interval: 10,
            axisLabel: {
                // formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: 'CO2 net-emission',
            min: 100,
            max: 135,
            interval: 10,
            axisLabel: {
                // formatter: '{value} ml'
            }
        }
    ],
    series: [
       
        {
            name: 'CO2 net-emission',
            type: 'line',
            yAxisIndex: 1,
            data: [126.1, 130.7, 129, 126.8, 121.7, 112.9, 114.9, 118.1, 114]
        }
    ]
};

// Use just the specified configurations and data charts. 
chart.setOption(option);
