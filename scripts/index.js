// Chart Instanzen erstellen und jeweils setup() ausführen
const charts = [
  null, // Intro slide hat kein Chart
  new Chart1(),
  new Chart2(),
  new Chart3()
];

charts.filter( chart => chart !== null)
  .forEach( chart => {
    chart.setup();
  });

// Scrollama setup
const scroller = scrollama();

scroller
  .setup({
    step: ".slide"
  })
  .onStepEnter(response => {
    if (charts[response.index]) {
      charts[response.index].reached();
    }
  })
  .onStepExit(response => {
    if (charts[response.index]) {
      charts[response.index].exited();
    }
  });

window.addEventListener("resize", scroller.resize);
