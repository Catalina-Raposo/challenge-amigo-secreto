let amigos =[];

function agregarAmigo(){
    const inputAmigo = document.getElementById("amigo");
    const nameAmigo = inputAmigo.value.trim();

    if(nameAmigo === ""){
        alert("Debes agregar un nombre para comenzar a jugar");
        return;
    }
    
    if(amigos.includes(nameAmigo)){ 
        alert(`El nombre ${nameAmigo} ya ha sido ingresado, ingrese uno nuevo`);
        return;
    }
    amigos.push(nameAmigo);

    inputAmigo.value = "";

    actualizarLista();
   
    }

function actualizarLista(){
    const listaAmigos = document.getElementById("listaAmigos")
    listaAmigos.innerHTML = "";
    //Recorrer el array
    for (let i = 0; i <amigos.length; i++){
        const li = document.createElement ("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
    }

function sortearAmigo(){
    if(amigos.length ===0){
        alert("No hay nombres ingresados. Escribe alguno.");
        return;
    }
    //Generar un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random()*amigos.length);

    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSecreto} `;
    }
