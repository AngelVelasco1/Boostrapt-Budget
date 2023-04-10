export default {
    showGrafic() {
        let recharge = document.querySelector("#recharge");

        recharge.addEventListener("click", () => {
            location.reload();
        });

        let income = parseInt(localStorage.getItem('income')) || 0;
        let outgoing = parseInt(localStorage.getItem('outgoing')) || 0;

        var dom = document.getElementById('container');
        var myChart = echarts.init(dom, null, {
            renderer: 'canvas',
            useDirtyRect: true
        });


        var option;
        option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 12,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        name: "hi",
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 40,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: outgoing, name: 'Outgoing', itemStyle: { color: "rgb(236, 65, 102)" } },
                        { value: income, name: 'Income', itemStyle: { color: "rgb(0,182,260)" } },

                    ]
                }
            ]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }

        window.addEventListener('resize', myChart.resize);

    }
}



