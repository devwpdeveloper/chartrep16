

    new Chart(document.getElementById("line-chart"), {
        type: "line",
        data: {
            labels: [0, 4, 8, 12, 16, 20, 24, 32],
            datasets: [
                {
                    data: [180, 179.1, 180.9, 179.1, 180.9, 179.1, 180.9, 179.1, 180.9],
                    label: "Do nothing",
                    borderColor: "#50EEDB",
                    backgroundColor: "#50EEDB",
                    tension: 0.1,
                        fill: false
                },
                {
                    data: [180, 178.2, 176.4, 175.5, 175.05, 174.6, 174.15, 173.7, 174.15],
                    label: "Control (based on wegovy paper)",
                    borderColor: "#42E0CD",
                    backgroundColor: "#42E0CD",
                    tension: 0.1,
                    fill: false
                },
                {
                    data: [180, 172.8, 171, 169.2, 169.02, 168.84, 168.66, 168.48, 168.3],
                    label: "Phentermine",
                    borderColor: "#3ACEBC",
                    backgroundColor: "#3ACEBC",
                    tension: 0.1,
                    fill: false
                },
                {
                    data: [180, 176.4, 170.1, 169.2, 165.6, 164.7, 164.25, 163.8, 162.9],
                    label: "Qsymia",
                    borderColor: "#28AE9E",
                    backgroundColor: "#28AE9E",
                    tension: 0.1,
                    fill: false
                },
                {
                    data: [180, 175.95, 172.8, 168.3, 165.6, 162, 156.6, 153, 147.6],
                    label: "Wegovy",
                    borderColor: "#30998C",
                    backgroundColor: "#30998C",
                    tension: 0.1,
                    fill: false
                },
                {
                    data: [180, 173.25, 169.2, 165.6, 160.2, 156.6, 153, 149.4, 145.8],
                    label: "Mounjaro",
                    borderColor: "#128476",
                    backgroundColor: "#128476",
                    tension: 0.1,
                    fill: false
                }
            ]
        },
        options: {
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 10
                }
            },
            label: {},
            legend: {
                display: true,
                position: "top",
                labels: {
                    boxWidth: 15,
                    fontSize: 14,
                    fontColor: "#3B3E40",
                    fontStyle: "normal",
                    fontFamily: 'Poppins',
                    padding: 20,
                }
            },
            tooltips: {
                mode: "point",
                backgroundColor: "rgba(0, 98, 90, 1)",
                yPadding: 10,
                xPadding: 50,
                titleAlign: "center",
                bodyAlign: "center",
                displayColors: false
            },
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display:false
                        },
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function (value, index, values) {
                                return "Week " + value;
                            },
                            fontSize: 13
                        }
                    }
                ],
                yAxes: [
                    {
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function (value, index, values) {
                                return value;
                            },
                            fontSize: 13
                        }
                    }
                ]
            }
        }
    });

