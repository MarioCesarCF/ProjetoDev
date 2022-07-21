// -----------------------------------HEADER-----------------------------------
const estados = [
    'Ceará - CE',
    'Espírito Santo - ES',
    'Minas Gerais - MG',
    'Pará - PA',
    'Pernambuco - PE',
    'Rio de Janeiro - RJ',
    'São Paulo - SP',
    'Santa Catarina - SC'
];
const estadosNome = [];
const estadosSigla = [];

  

function insertHeader(){
  
      var codeBlock1 = 
      '<div class="container">' + 
        '<img class="logo" src="./assets/logo1.png" alt="logo página">' + 
        '<div class="menu-section">' + 
          '<div class="container-menu">' + 
            '<input type="checkbox" id="checkbox-menu" />' + 
            '<label class="menu-button-container" for="checkbox-menu">' + 
                '<span></span>' + 
                '<span></span>' + 
                '<span></span>' + 
            '</label>' + 
            '<nav>' + 
                '<ul class="menu">' +
                    '<li>' + 
                      '<a href="index.html">Home</a>' + 
                    '</li>' + 
                    '<li>' + 
                      '<a href="#">Locais</a>' + 
                      '<ul class="submenu-locais">' + 
                      '<li id="ptTurism"><a href="#cards">Pontos Turísticos</a></li>' + 
                      '</ul>' + 
                    '<li>' + 
                      '<a href="./team.html">Equipe</a>' + 
                    '</li>' + 
                    '<li>' + 
                      '<a href="#footer-content">Contato</a>' + 
                    '</li>' + 

               '</ul>' + 
              '</nav>' + 
          '</div>' + 
      '</div>' + 
  '</div>';
    document.querySelector("#header").innerHTML += codeBlock1;
    

     //insere submenu - criado para permitir escalabilidade
    for (i=0; i< estados.length; i++){
      estadosNome[i] = estados[i].slice(0, -5);
      estadosSigla[i] = estados[i].split(' ').pop();       
      var codeBlock2 =  `<li><a href="./${estadosSigla[i]}.html">${estadosNome[i]}</a></li>`;
      document.querySelector(".submenu-locais").innerHTML += codeBlock2;
  }
    
  };
  
  insertHeader();