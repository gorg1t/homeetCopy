const uploadBtn = document.querySelector('.upload-button');
const continueBtn = document.querySelector('.button-continue');
const nameInput = document.querySelector('.name-input');
const maleInput = document.querySelector('.male-input');
const aboutInput = document.querySelector('.about-input');
const dateInput = document.querySelector('.date-input');
const tgInput = document.querySelector('.tg-input');
const numberInput = document.querySelector('.number-input');

const profileName = document.querySelector('.profile-card-name');
const profileGender = document.querySelector('.profile-card-shortInfo-gen');
const profileAge = document.querySelector('.profile-card-shortInfo-age');
const profileAbout = document.querySelector('.profile-card-about-text');
const profileImage = document.querySelector('.user-img');

const radioError = document.querySelector('.radio-error')

const registrationForm = document.querySelector('#registrationForm')


registrationForm.addEventListener('submit', (event) => {
    
    event.preventDefault();
    
    
    nameInput.setAttribute("required", true);
    aboutInput.setAttribute("required", true);
    dateInput.setAttribute("required", true);
    tgInput.setAttribute("required", true);
    numberInput.setAttribute("required", true);
    maleInput.setAttribute("required", true);
    if (!maleInput.validity.valid) {
        radioError.style.display = "inline";
    }
    if (nameInput.validity.valid && aboutInput.validity.valid && dateInput.validity.valid && tgInput.validity.valid && numberInput.validity.valid && maleInput.validity.valid) {
        alert("Типо отправил форму");
        let registrationFormElements = registrationForm.querySelectorAll('div');
        for(let i = 0; i<registrationFormElements.length; i++)
        {
            registrationFormElements[i].remove();
        }
        let p = document.createElement('p');
        p.textContent = 'тут будет новая форма...';
        
        registrationForm.appendChild(p);
        

    }
});

uploadBtn.addEventListener('click', () => {

    const input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => {

        const file = e.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = readerEvent => {
            profileImage.style.backgroundImage = `url(${readerEvent.target.result})`;
            profileImage.style.height = "140px";
        }

    }

    input.click();

});

nameInput.addEventListener('input', () => {
    profileName.textContent = nameInput.value;
});

function setGender() {
    radioError.style.display = 'none';
    var el = document.getElementsByName("gender");
    if (el[0].checked) {
        profileGender.textContent = el[0].value;
    }
    else {
        profileGender.textContent = el[1].value;
    }
}

aboutInput.addEventListener('input', () => {
    let length = aboutInput.value.length;
    if (length >= 63) {
        profileAbout.textContent = aboutInput.value.slice(0, 66) + "...";
    }
    else {
        profileAbout.textContent = aboutInput.value;
    }
});

dateInput.addEventListener('input', () => {
    const birthDate = document.getElementById('dateInput').valueAsDate;
    const age = ~~((Date.now() - birthDate) / (31557600000));
    profileAge.textContent = `${age} лет`;
});




