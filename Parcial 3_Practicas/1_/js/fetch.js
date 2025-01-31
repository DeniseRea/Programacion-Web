//permite hacer solicitudes a un servidor y obtener datos de un ser servidor
// se usa atraves del metodo get

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())  //obtiene los datos en formato json
.then(data => console.log(data)) //imprime en consola los datos obtenidos del servidor
.catch(error => console.log(error)) //si hay un error lo imprime en consola


//todos los eventos posibles

//fetch post

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Titulo',
        body: 'Cuerpo del post',
        userId: 1
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))


//metodo async await

async function ObtenerDatoa() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
        console.log('Error en la peticion');
    }
}

let datos = ObtenerDatoa();
console.log(datos);

//cuando usamos fetch 
//1. cuano se hace una peticion a un servidor, se obtiene una promesa
//2. Para el consumo de informacion atraves de datos creados de forma no estructurada
//3. un uso moderno del consumo de informacion de manera asincrona

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const lista = document.getElementById('usuarios');
        users.forEach(user => {
            const li = document.createElement('li');
            li.innerHTML = user.name;
            lista.appendChild(li);
        });
    })
    .catch(error => console.error(error));