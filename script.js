const btn = document.querySelector('button')
const d = new Date()

btn.addEventListener('click', function () {
  let amount = document.getElementById('principal').value
  let interestInput = document.getElementById('interestInput').value
  let years = document.getElementById('years').value
  let result = amount * (interestInput / 100) * years
  let updatedyears = d.getFullYear() + Number(years)
  const container1 = document.getElementById('container1')
  document.getElementById('principal_output').innerHTML = amount
  document.getElementById('interest_output').innerHTML = interestInput
  document.getElementById('amount_output').innerHTML = result
  document.getElementById('year_output').innerHTML = updatedyears
  container1.classList.remove('hidden')
})
