const bookingForm = document.querySelector('#book form');
const registerForm = document.querySelector('#register form');

function handlePrototypeSubmit(event, successMessage) {
  event.preventDefault();
  const form = event.currentTarget;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  window.alert(successMessage);
  form.reset();
}

if (bookingForm) {
  bookingForm.addEventListener('submit', (event) =>
    handlePrototypeSubmit(event, 'Booking request captured in prototype mode. No real appointment was created.')
  );
}

if (registerForm) {
  registerForm.addEventListener('submit', (event) =>
    handlePrototypeSubmit(event, 'Registration captured in prototype mode. No real account was created.')
  );
}
