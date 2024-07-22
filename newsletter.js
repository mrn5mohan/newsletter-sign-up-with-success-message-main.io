
const form = document.getElementById('form-id');

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  const email =document.getElementById('email').value.trim();
  const alert =document.getElementById('success-message');
const error =document.getElementById('error');
const container = document.querySelector('.container');
  if(isvalidemail(email)){
    container.style.display = 'none';
    alert.style.display = 'block';
    form.reset();
}else{

  document.querySelector('#email').classList.add('error-state')
  error.style.display='block';
}
})

function isvalidemail(email){
  const c=/\S+@\S+\.\S+/;
  return c.test(email);
}