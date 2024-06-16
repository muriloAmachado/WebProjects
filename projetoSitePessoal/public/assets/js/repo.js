import { getRepoGitHub } from "../service/service.js";

const repositorios = async () => {
      return await getRepoGitHub();
}

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
        const year = data.getYear();
        return `${day}/${month}/${year}`
    }
   
    document.getElementById('repoTitle').innerHTML = repositorio.name;
    document.getElementById('repoDescription').innerHTML = repositorio.description
    document.getElementById('createDate').innerHTML = (formatDate(dataCriacao))
    document.getElementById('stargazers').innerHTML = ` ${repositorio.stargazers_count}`
    document.getElementById('watchers').innerHTML = ` ${repositorio.watchers_count}`
    document.getElementById('linguages').innerHTML = repositorio.language
    document.getElementById('urlRepo').innerHTML = repositorio.html_url
    document.getElementById('urlRepo').href = repositorio.html_url


})


