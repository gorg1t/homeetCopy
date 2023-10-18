const uploadBtn = document.querySelector('.upload-button');
const nameInput = document.querySelector('.name-input');
const maleInput = document.querySelector('.male-input');
const aboutInput = document.querySelector('.about-input');
const dateInput = document.querySelector('.date-input');

const profileName = document.querySelector('.profile-card-name');
const profileGender = document.querySelector('.profile-card-shortInfo-gen');
const profileAge = document.querySelector('.profile-card-shortInfo-age');
const profileAbout = document.querySelector('.profile-card-about-text');
const profileImage = document.querySelector('.user-img');


uploadBtn.addEventListener('click', () => {

    const input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => {

        const file = e.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = readerEvent => {
            console.log(readerEvent.target.result);
            profileImage.style.backgroundImage = `url(${readerEvent.target.result})`;
            profileImage.style.height = "140px";
        }

    }

    input.click();

});

nameInput.addEventListener('input', () => {
    profileName.textContent = nameInput.value;
});

function check() {
    var el = document.getElementsByName("gender");
    if (el[0].checked) {
        profileGender.textContent = el[0].value;
    }
    else {
        profileGender.textContent = el[1].value;
    }
}

aboutInput.addEventListener('input', () => {
    let length = aboutInput.value.length
    if (length >= 63){
        profileAbout.textContent = aboutInput.value.slice(0, 66) + "...";
    }
    else
    {
        profileAbout.textContent = aboutInput.value;
    }
});

dateInput.addEventListener('input', () => {
    const birthDate = document.getElementById('dateInput').valueAsDate;
    const age = ~~((Date.now() - birthDate) / (31557600000));
    profileAge.textContent = `${age} лет`;
});