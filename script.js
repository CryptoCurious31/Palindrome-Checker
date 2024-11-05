const input = document.getElementById('palindrome-checker');
const submitButton = document.getElementById('check-palindrome');
const answer = document.getElementById('answer');
const form = document.getElementById('form');

const checkInput = (event) => {

    event.preventDefault();

    let normalizedValue = input.value.toLowerCase().replace(/[^a-z0-9]/g, '');
    

    if (normalizedValue === '') {
        alert("Please Input a value");
    } else if(normalizedValue === normalizedValue.split('').reverse().join('')){
        answer.classList.remove('non-active');
        answer.classList.add('active');
        answer.textContent = `${input.value} is a palindrome.`;
    } else {
        answer.classList.remove('non-active');
        answer.classList.add('active');
        answer.textContent = `${input.value} is not a palindrom`;
    }
    
}

form.addEventListener('submit', checkInput);