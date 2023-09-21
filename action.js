
function validate(){
   // var val=document.myform.email.value;

       alert("Enter email id");
       return false
}

const myElement = document.querySelector('.button1');


myElement.addEventListener('mouseover', function() {
    myElement.style.backgroundColor = 'transparent';
  });

  myElement.addEventListener('mouseout', function() {
    myElement.style.backgroundColor = 'white';
   
  });


  const button1=document.querySelector('.butn1');
  button1.addEventListener('click', function() {
    button1.style.backgroundColor = 'transparent';
  });
  button1.addEventListener('mouseout', function() {
    button1.style.backgroundColor = 'red';
  });

  const accord=document.querySelector('.content-container');
  for(i=0;i<accord.length;i++)
  {
    accord[i].addEventListener('click',function(){
     this.classList.toggle('active');
    });
  };