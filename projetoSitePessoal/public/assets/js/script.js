import { getGitHub } from "../service/service.js";
import { getRepoGitHub } from "../service/service.js";

const perfil = async () => {
    return await getGitHub();
}
const repositorios = async () => {
    return await getRepoGitHub();
}

window.onload = async () => {
    const data = await perfil();
    const repos = await repositorios();

    //Dados do perfil do Git
    document.getElementById('personName').innerHTML = data.name;
    document.getElementById('nick').innerHTML = data.login;
    document.getElementById('bio').innerHTML = data.bio;
    document.getElementById('followers').innerHTML = ` ${data.followers}`;
    document.getElementById('linkSite').innerHTML = `${data.blog}`
    document.getElementById('linkSite').href = `${data.blog}`
    document.getElementById('linkGit').href = `${data.html_url}`
    document.getElementById('linkIn').href = `${data.blog}`
    document.getElementById('linkIg').href = `https://www.instagram.com/murilo.am/?hl=pt-br`

    // Cards dos repo
    function carregarCards(conteudo){
        let content = ''
        for(let i = 0; i < conteudo.length; i++){
            let repositorio = conteudo[i]
            content += 
            `<a href="webProjects.html">
            <div class="col">
              <div class="card shadow">
                <div class="card-body" style="background-color: lightgrey">
                  <h5 class="card-title">${repositorio.name}</h5>
                  <hr>
                  <p class="card-text">${repositorio.description}</p>
                  <div class="icons">
                    <i class="fa-solid fa-star"> ${repositorio.stargazers_count}</i>
                    <i class="fa-solid fa-user"> ${repositorio.watchers_count}</i>
                  </div>
                </div>
              </div>
            </div>
          </a>`
        }
        document.getElementById('repoSession').innerHTML = content;
    }
    carregarCards(repos)

    
}
