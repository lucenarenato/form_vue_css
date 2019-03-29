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
            this.log = "Go";
          }   
      }
  }
  
});