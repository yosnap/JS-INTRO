export const playOffsGames = (teams,block) => {
    const players = teams.map(team => ({team:team.name ? team.name : team.team,goal:Math.floor(Math.random() * 6),block}));
    
    if(players[0].goal > players[1].goal){
        players[0].win = true;
        players[1].win = false;
    }else if(players[0].goal < players[1].goal){
        players[1].win = true;
        players[0].win = false;
    }
    if(players[0].goal != players[1].goal){
        return players;   
    }else {
        return playOffsGames(teams,block);
    }
}

