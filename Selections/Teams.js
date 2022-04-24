//Grupos
const tags = ['A','B','C','D','E','F','G','H']
//Equipos
const teams = [
    'Brazil','Inglaterra','Rusia','EEUU','Uruguay','Camerún','Japón','Chile',
    'Suiza','Italia','Francia','Colombia','Perú','Portugal','Ecuador',
    'Holanda','Alemania','Corea','México','Senegal','Argentina','Croacia',
    'Finlandia','Polonia','Rumania','Bélgica','Dinamarca','Serbia','Escocia',
    'Ukrania','Tunez','Marruecos'
].sort(()=> Math.random() - 0.5);


//Índice externo para clasificación por grupos
let i = 0;
//Clasificación por grupos
const selection = teams.map((name,index) => {
    let current = {id:index + 1,name,group:tags[i],goods:0,bads:0,points:0,left:0,game:0}
    i <= 6 ? i++ : i = 0;
    return current
});
//Grupos
export const groups = tags.map(tag => {
    return {
  	    name:`Grupo ${tag}`,
        teams:selection.filter(team => team.group === tag)
    }
});