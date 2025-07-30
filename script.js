document.querySelector('.newsletter button').addEventListener('click', () => {
  const email = document.querySelector('.newsletter input').value;
  if(email) {
    alert(`Thank you for subscribing with: ${email}`);
  } else {
    alert("Please enter a valid email!");
  }
});