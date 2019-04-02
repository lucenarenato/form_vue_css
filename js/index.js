new Vue({
  el: "#men",

  data:{
      nome: "",
      telefone: "",
      email: "",
      log: ""
  },
  computed: {
          isValid: function () {
            return this.name != '' && this.email != ''
          }
        },
  
  methods: {
      
      sub: function(event){
          
          if(this.nome == "" || this.email == ""){
            
            this.log = "Preencha o campo para nome.";
            event.preventDefault();
          }else{

            this.log = "Gravado";
            window.location.href = 'ok.html';

            
        }   
      },
      handleSubmit() {
      // Send data to the server or update your stores and such.
    }
     
  }

  
});

// grab the things we need
var signupForm = document.getElementById('signup-form');
var nameInput = signupForm.querySelector('input[name=name]');
var telefoneInput = signupForm.querySelector('input[name=telefone]');
var emailInput = signupForm.querySelector('input[name=email]');

// listen for the submit event
signupForm.addEventListener('submit', processSignupForm);

function processSignupForm(e) {
    e.preventDefault();
    var name = nameInput.value;
    var telefone = telefoneInput.value;
    var email = emailInput.value;
    console.log({ name: name, telefone: telefone, email: email });  
                        
    alert('Processing!');
    return;
    
}