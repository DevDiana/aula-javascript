// if .. else

//switch .. case

//se a hora estiver entre 6:00 ate 12:00 : Bom dia;
//se estiver entre 12:00 ate 18:00 : Boa tarde
// caso contrario: Boa noite

let hora = 10;

if(hora > 6 && hora < 12){
    console.log("bom dia");
}
else if(hora > 12 && hora < 18){
    console.log("boa tarde");
}
else{
    console.log("boa noite");
}

//switch case

let permissao; // comum, gerente, diretor

switch(permissao){
    case 'comum':
        console.log("usuario comum");

        break;
        case 'gerente':
        console.log("usuario gerente");

        break;
        case 'diretor':
        console.log("usuario diretor");

        break;

        default:
            console.log("usuario  nao reconhecido")
}