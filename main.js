ddocument.addEventListener("DOMContentLoaded", function () {
    const apiUrl = 'https://rickandmortyapi.com/api/character';

    fetch(apiUrl)
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error("Error en la solicitud: " + respuesta.statusText);
            }
            return respuesta.json();
        })
        .then(data => {
            const listaUsuario = document.getElementById('listaUsuario'); // Asegúrate de que este ID exista en el HTML
            data.results.forEach(personaje => {
                const tarjeta = document.createElement('div');
                tarjeta.classList.add('col-md-3', 'mb-4');
                tarjeta.innerHTML = `
                    <div class="card">
                        <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
                        <div class="card-body">
                            <h5 class="card-title">${personaje.name}</h5>
                            <p class="card-text">Especie: ${personaje.species}</p>
                            <p class="card-text">Estado: ${personaje.status}</p>
                        </div>
                    </div>
                `;
                listaUsuario.appendChild(tarjeta);
            });
        })
        .catch(error => {
            console.error("Error al cargar los personajes:", error);
        });
});
