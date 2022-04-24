export const playGame = ([team1,team2]) => {
    const goals1 = Math.floor(Math.random() * 6);
    const goals2 = Math.floor(Math.random() * 6);
    const points1  = goals1 > goals2 ? 3 : goals1 === goals2 ? 1 : 0;
    const points2 = goals2 > goals1 ? 3 : goals2 === goals1 ? 1 : 0;
    let results = {
        team1:{
            game:goals1,
          	name:team1.name,
            goods:team1.goods + goals1,
            bads:team1.bads + goals2,
            points:team1.points + points1 
        },
      	team2:{
          game:goals2,
          name:team2.name,
          goods:team2.goods + goals2,
          bads:team2.bads + goals1,
          points:team2.points + points2
        }
    }
    team1.left = results.team1.goods - results.team1.bads;
  	team2.left = results.team2.goods - results.team2.bads;
  	team1 = {...team1,...results.team1};
  	team2 = {...team2,...results.team2};
  	return [team1,team2];
}
