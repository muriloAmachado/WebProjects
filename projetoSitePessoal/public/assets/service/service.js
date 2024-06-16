const url = 'https://api.github.com/users/MuriloAmachado'
const repoUrl = 'https://api.github.com/users/MuriloAmachado/repos'

export const getGitHub = async () =>{
    const response = await fetch(url);
    if (!response.ok){
        console.log("Erro ao carregar os dados.")
    }
    else{
        console.log(response);
    }
    const data = await response.json();
    return data;
}

export const getRepoGitHub = async () =>{
    const response = await fetch(repoUrl);
    if (!response.ok){
        console.log("Erro ao carregar os dados.")
    }
    else{
        console.log(response);
    }
    const data = await response.json();
    return data;
}

export const getDbJson = async (e) => {
    const endpoint = `http://localhost:3000/${e}`
    const response = await fetch(endpoint);
    if (!response.ok){
        console.log("Erro ao carregar os dados.")
    }
    else{
        console.log(response);
    }
    const data = await response.json();
    return data
}

window.onload = getDbJson();





