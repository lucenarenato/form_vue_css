new Vue({
  el: "#men",

  data:{
      nome: "",
      telefone: "",
      email: "",
      log: ""
  },
  
  methods: {
      
      sub: function(event){
          
          if(this.nome == "" || this.email == ""){
            
            this.log = "Preencha o campo para nome.";
            event.preventDefault();
          }else{
            this.log = "Gravado";
          }   
      }
  }

  
});

// grab the things we need
var signupForm = document.getElementById('signup-form');
var nameInput = signupForm.querySelector('input[name=name]');
var emailInput = signupForm.querySelector('input[name=email]');
// listen for the submit event
signupForm.addEventListener('submit', processSignupForm);
function processSignupForm(e) {
    e.preventDefault();
    var name = nameInput.value;
    var email = emailInput.value;
    console.log({ name: name, email: email });
    alert('Processing!');
}