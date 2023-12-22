(function () {
  const username = document.querySelector('.username');
  const password = document.querySelector('.password');
  const btn = document.querySelector('button');
  const popUpUsername = document.querySelector('.popUp.username');
  const popUpPassword = document.querySelector('.popUp.password');
  
  console.log(popUpUsername.firstChild, popUpPassword);
  
  function showPopUp(popUpElement, text) {
    popUpElement.firstElementChild.textContent = text;
    popUpElement.classList.add('show');
    setTimeout(() => {
      popUpElement.classList.remove('show');
    }, 2000);
  }
  
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if(username.value === '') {
      //alert('Completeaza ambele campuri!');
      showPopUp(popUpUsername, 'Introdu username!');
      return;
    }
    if(password.value === '') {
      //alert('Completeaza ambele campuri!');
      showPopUp(popUpPassword, 'Introdu parola!');
      return;
    }
    //aici manipulez username si password
    
    username.value = '';
    password.value = '';
  });
  
  username.addEventListener('blur', (e) => {
    if(username.value === '') {
      showPopUp(popUpUsername, 'Introdu username!');
    }
  });
  
  password.addEventListener('blur', (e) => {
    if(password.value === '') {
      showPopUp(popUpPassword, 'Introdu parola!');
    }
  });
})();

