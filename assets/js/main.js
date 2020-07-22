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
var ctx = document.getElementById('chart1').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',
  // The data for our dataset
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: '#e23e57',
        borderColor: '#e23e57',
        data: [10, 15, 22, 27, 20, 12, 18],
        pointRadius: 3,
        fill: false,
        // borderDash: [15, 10],
      },
      {
        label: 'My First dataset',
        backgroundColor: '#3a414f',
        borderColor: '#3a414f',
        data: [20, 22, 14, 10, 16, 30, 24],
        pointRadius: 3,
        fill: false,
        // borderDash: [15, 10],
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
chart.canvas.parentNode.style.width = '500px';
