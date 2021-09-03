const profileElement = document.querySelector('.profile');
const profileName = profileElement.querySelector('.profile__name');
const profileProfession = profileElement.querySelector('.profile__profession');
const buttonEditProfileInfo = profileElement.querySelector('.profile__button-edit-info');

const popup = document.querySelector('.popup');
const inputName = popup.querySelector('.popup__input_type_name');
const inputProfession = popup.querySelector('.popup__input_type_profession');
const buttonSavePopupInfo = popup.querySelector('.popup__button-save')
const buttonClosePopup = popup.querySelector('.popup__button-close');

function editInfo() {
  popup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  closePopup();
}

buttonEditProfileInfo.addEventListener('click', editInfo);
buttonSavePopupInfo.addEventListener('click', formSubmitHandler);
buttonClosePopup.addEventListener('click', closePopup);