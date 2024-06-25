import { getGitHub } from "../service/service.js";
import { getRepoGitHub } from "../service/service.js";
import { getDbJson } from "../service/service.js";

const perfil = async () => {
    return await getGitHub();
}
export const repositorios = async () => {
    return await getRepoGitHub();
}
const getClassmates = async () => {
  return await getDbJson('colegas');
}
const getCarousel = async () => {
  return await getDbJson('conteudoSugerido');
}

window.onload = async () => {
    const data = await perfil();
    const repos = await repositorios();
    const classmates = await getClassmates();
    const caoruselContent = await getCarousel();

//--------------------Dados do perfil do Git-----------------------
    document.getElementById('personName').innerHTML = data.name;
    document.getElementById('nick').innerHTML = data.login;
    document.getElementById('bio').innerHTML = data.bio;
    document.getElementById('followers').innerHTML = ` ${data.followers}`;
    document.getElementById('linkSite').innerHTML = `${data.blog}`
    document.getElementById('linkSite').href = `${data.blog}`
    document.getElementById('linkGit').href = `${data.html_url}`
    document.getElementById('linkIn').href = `${data.blog}`
    document.getElementById('linkIg').href = `https://www.instagram.com/murilo.am/?hl=pt-br`

//------------------Cards dos repositórios---------------------
    function carregarCards(conteudo){
        let content = ''
        for(let i = 0; i < conteudo.length; i++){
            let repositorio = conteudo[i]
            content += 
            `<a href="repo.html?id=${repositorio.id}">
            <div class="col">
              <div class="card shadow">
                <div class="card-body" style="background-color: #f1f5f9">
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

//----------------Carousel conteúdo sugerido---------------
    const loadCarousel = (conteudoSugerido) => {
      let content = ''
      for(let i = 0; i < conteudoSugerido.length; i++){
          let conteudo = conteudoSugerido[i]
          if(i==0){
          content += 
            `<div class="carousel-item active">
            <a href="${conteudo.linkConteudo}">
            <img src="${conteudo.capa}" class="d-block w-100" style="opacity: 65%; max-height: 600px;" alt="s">
            <div class="carousel-caption d-none d-md-block">
            <h5>${conteudo.titulo}</h5>
            <p>${conteudo.descricao}</p>
            </div>
            </a>
            </div>`
          } else{
            content += 
            `<div class="carousel-item">
            <a href="${conteudo.linkConteudo}">
            <img src="${conteudo.capa}" class="d-block w-100" style="opacity: 65%; max-height: 600px;" alt="s">
            <div class="carousel-caption d-none d-md-block">
            <h5>${conteudo.titulo}</h5>
            <p>${conteudo.descricao}</p>
            </div>
            </a>
            </div>`
          }
      }
      document.getElementById('carousel').innerHTML = content;
    }

//---------------Cards com os colegas de curso-----------------
    const carregarColegas = (colegas) => {
      let content = ''
      for(let i = 0; i < colegas.length; i++){
          let colega = colegas[i]
          content += 
          `<a href="${colega.linkGithub}">
          <div style="background-color: #f1f5f9" class="shadow">
            <img src="${colega.foto}" alt="">
            <figcaption>${colega.nome}</figcaption>
          </div>
        </a>`
      }
      document.getElementById('classmatesSession').innerHTML = content;
  }
carregarCards(repos)
carregarColegas(classmates);
loadCarousel(caoruselContent);

}
