import { repositorios } from "./script.js";

const url = new URL (window.location.href);
const params = new URLSearchParams(url.search);
const id = params.get('id');

window.addEventListener('DOMContentLoaded', async () => {

    const repos = await repositorios();
    const filteredRepo = repos.filter(repo => repo.id == id)
    const repositorio = filteredRepo[0]

    const dataCriacao = new Date(repositorio.created_at);
    function formatDate(data){
        const day = data.getDate().toString().padStart(2, '0');
        const month = (data.getMonth()+1).toString().padStart(2, '0');
        const year = data.getFullYear();
        return `${day}/${month}/${year}`
    }
    document.getElementById('repoTitle').innerHTML = repositorio.name;
    document.getElementById('repoDescription').innerHTML = repositorio.description
    document.getElementById('proprietario').innerHTML = repositorio.owner.login;
    document.getElementById('proprietarioPicture').src = repositorio.owner.avatar_url;
    document.getElementById('createDate').innerHTML = (formatDate(dataCriacao))
    document.getElementById('stargazers').innerHTML = ` ${repositorio.stargazers_count}`
    document.getElementById('watchers').innerHTML = ` ${repositorio.watchers_count}`
    document.getElementById('linguages').innerHTML = repositorio.language
    document.getElementById('urlRepo').innerHTML = repositorio.html_url
    document.getElementById('urlRepo').href = repositorio.html_url
    let content = '';
    for(let i=0; i<repositorio.topics.length; i++){
        content+=
        `<button class="btn btn-primary me-3 mb-3" type="button" disabled>${repositorio.topics[i]}</button>`
    }
    document.getElementById("topics").innerHTML = content;
})


