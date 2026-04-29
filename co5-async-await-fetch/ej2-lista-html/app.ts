interface Usuario {
    id: number;
    name: string;
    email: string;
    phone: string;
}

const divCargando = document.getElementById('cargando') as HTMLDivElement;
const divError = document.getElementById('mensaje-error') as HTMLDivElement;
const ulUsuarios = document.getElementById('lista-usuarios') as HTMLUListElement;

async function cargarUsuariosDOM() {
    divCargando.classList.remove('oculto');
    divError.classList.add('oculto');
    ulUsuarios.innerHTML = '';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error(`Error en el servidor: ${response.status}`);
        }

        const usuarios: Usuario[] = await response.json();

        usuarios.forEach(usuario => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${usuario.name}</strong> - <em>${usuario.email}</em>`;
            ulUsuarios.appendChild(li);
        });

    } catch (error) {
        console.error(error);
        divError.textContent = "Hubo un problema al cargar los usuarios.";
        divError.classList.remove('oculto');
        
    } finally {
        divCargando.classList.add('oculto');
    }
}

cargarUsuariosDOM();