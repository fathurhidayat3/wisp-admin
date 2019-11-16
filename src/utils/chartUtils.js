import moment from "moment";

const graphInitialData = {
  labels: [],
  datasets: [
    {
      label: "Data",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    }
  ]
};

const graphOptions = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    enabled: false
  },
  scales: {
    xAxes: [
      {
        ticks: {
          fontSize: 12,
          maxRotation: 0,
          minRotation: 0
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontSize: 12
        }
      }
    ]
  }
};

const getGraphData = (data, oldObj) => {
  let { labels, datasets } = oldObj;
  let chartDatasets = datasets[0];
  let { data: chartLoggerData } = chartDatasets;

  let currentTime = moment(new Date().getTime()).format("HH:mm:ss");

  const newLabels = [...labels, currentTime];
  const newData = [...chartLoggerData, data];

  return {
    labels: newLabels.length > 5 ? newLabels.slice(1, 6) : newLabels,
    datasets: [
      {
        ...chartDatasets,
        data: newData.length > 5 ? newData.slice(1, 6) : newData
      }
    ]
  };
};

export { graphInitialData, graphOptions, getGraphData };
