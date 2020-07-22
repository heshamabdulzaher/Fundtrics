// Handle the Multible select
const select_btn = document.querySelector('.select-btn');
const select_optionsCard = document.querySelector('.select-options-card');
const select_options = select_optionsCard.querySelectorAll(
  'input[type="checkbox"]'
);
const selected_optionsCounter = document.querySelector(
  '.options-selected-counter'
);
let selectedOptionsNumber = 0;
select_options.forEach(option =>
  option.addEventListener('change', e => {
    if (e.target.checked) {
      selectedOptionsNumber += 1;
    } else {
      selectedOptionsNumber -= 1;
    }
    selected_optionsCounter.innerHTML = selectedOptionsNumber;
    if (selectedOptionsNumber > 0) {
      selected_optionsCounter.classList.remove('empty');
    } else {
      selected_optionsCounter.classList.add('empty');
    }
  })
);

select_optionsCard.classList.add('hide');
selected_optionsCounter.classList.add('empty');

// Toggle Options Card
document.addEventListener('click', e => {
  if (
    e.target.closest('.select-btn') ||
    (!e.target.closest('.select-options-card') &&
      select_optionsCard.classList.contains('show'))
  ) {
    select_optionsCard.classList.toggle('show');
    select_optionsCard.classList.toggle('hide');
  }
});

// Charts
var chart1 = document.getElementById('chart1').getContext('2d');
var chart2 = document.getElementById('chart2').getContext('2d');
var chart3 = document.getElementById('chart3').getContext('2d');
createChart(chart1, [40, 20]);
createChart(chart2, [20, 27]);
createChart(chart3, [10, 12]);

function createChart(chartEl, data) {
  let chart = new Chart(chartEl, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: ['January', 'February'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: ['#3498db', '#e67e22'],
          data,
          pointRadius: 3,
          showLine: false,
          fill: false,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      aspectRatio: 2,
    },
  });
  chart.canvas.parentNode.style.width = '30%';
  return chart;
}
