let amigos = [];
console.log(amigos)

function agregarAmigo(){
    const inputAmigo = document.getElementById("amigo")
    const nombreAmigo = inputAmigo.ariaValueMax.trim();


    if(nombre === ""){
        alert("Se debe agregar un nombre");
        return;
    }
    
    if(amigos.includes(nombreAmigo)){ 
        alert(`El nombre ${nombreAmigo} ya ha sido ingresado, ingrese uno nuevo`);
        return;
    }
     
    amigos.push(nombreAmigo);

    inputAmigo.ariaValueMax ="";

    actualizarLista()
   
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
