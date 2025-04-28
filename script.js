
   
      let email = "alananeridev@gmail.com";
      let idade = "32 anos";
      let endereco = "Travessa do Brejinho, nº 11 E, Ilha Amarela, Salvador-BA";
      let contato = "(71) 98258-8652  | (71) 99130-8969"


    let dadosVisiveis = false;

    function alternarResultados(){
        if(dadosVisiveis){
            esconderResultado(); // Esconde os dados
        } else {
            mostrarResultado(); // Mostra os dados
        }
        dadosVisiveis = !dadosVisiveis; // Alterna o estado
    }

      function mostrarResultado(){
          document.getElementById("info").innerHTML = 
            
          `Endereço: ${endereco} <br> Contato: ${contato} 
          <br> e-mail: ${email}` 
      }

      function esconderResultado(){
        document.getElementById("info").innerHTML = ""; // Limpa o conteúdo
      }
   
   
