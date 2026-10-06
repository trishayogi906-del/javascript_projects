const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if (height === ' ' || isNaN(height) || height < 0) {
        result.innerHTML = `Please enter a vaild height ${height}`
    }
    else if (weight === ' ' || isNaN(weight) || weight < 0) {
        result.innerHTML = `Please enter a vaild height ${weight}`
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    if (bmi < 18.6) {
        result.innerHTML = `<span>${bmi}</span> <br> (Underweight: Less than 18.6)`
    }
    else if (bmi >= 18.6 && bmi <= 24.9) {
        result.innerHTML = `<span>${bmi}</span> <br> (Normal Range: 18.6 to 24.9)`
    }
    else {
        result.innerHTML = `<span>${bmi}</span> <br> (Greater than: 18.6)`
    }
})