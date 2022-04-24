export const blockPrint = (team1,team2) => {
    console.log(`${team1.name} ${team1.game} - ${team2.game} ${team2.name}`);
}

export const playOffPrint = (team0,team1) => {
    console.log(`${team0.team} ${team0.goal} - ${team1.goal} ${team1.team} => ${team0.win ? team0.team : team1.team}`);
}