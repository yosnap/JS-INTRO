import { playGame } from '../Games/GroupFase.js';
import { playOffsGames } from '../Games/Playoffs.js'
import { blockPrint, playOffPrint } from './blocks.js';

export const Journey1 = (teams,name) => {
    console.log(`${name} - Jornada 1:`);
    console.log('---------------------------------');
    const [team1,team2,team3,team4] = teams;

    const [rt1,rt4] = playGame([team1,team4]);
    const [rt2,rt3] = playGame([team2,team3]);

    blockPrint(rt1,rt4);
    blockPrint(rt2,rt3);
    
    console.log('\n');
    let results = [rt1,rt2,rt3,rt4];
    const datagame = results.map(team => {
        return {
            Equipo:team.name,
            Puntos:team.points,
            'Goles a favor':team.goods,
            'Goles en contra':team.bads,
            'Diferencia goles':team.left
        }
    })
    .sort((a,b) => a.Equipo < b.Equipo ? - 1 : a.Equipo > b.Equipo ? 1 : 0)
    .sort((a,b) => b['Diferencia goles'] - a['Diferencia goles'])
    .sort((a,b) => b.Puntos - a.Puntos)
    
    console.table(datagame);
    console.log('\n');
    return results;
}

export const Journey2 = (teams,name) => {
    console.log(`${name} - Jornada 2:`);
    console.log('---------------------------------');
    const [team1,team2,team3,team4] = teams;

    const [rt4,rt2] = playGame([team4,team2]);
    const [rt3,rt1] = playGame([team3,team1]);

    blockPrint(rt4,rt2);
    blockPrint(rt3,rt1);

    console.log('\n');
    let results = [rt1,rt2,rt3,rt4];
    const datagame = results.map(team => {
        return {
            Equipo:team.name,
            Puntos:team.points,
            'Goles a favor':team.goods,
            'Goles en contra':team.bads,
            'Diferencia goles':team.left
        }
    })
    .sort((a,b) => a.Equipo < b.Equipo ? - 1 : a.Equipo > b.Equipo ? 1 : 0)
    .sort((a,b) => b['Diferencia goles'] - a['Diferencia goles'])
    .sort((a,b) => b.Puntos - a.Puntos)

    console.table(datagame);
    console.log('\n');
    return results;
}

export const Journey3 = (teams,name) => {
    console.log(`${name} - Jornada 3:`);
    console.log('---------------------------------');
    const [team1,team2,team3,team4] = teams;

    const [rt3,rt4] = playGame([team3,team4]);
    const [rt1,rt2] = playGame([team1,team2]);

    blockPrint(rt3,rt4);
    blockPrint(rt1,rt2);

    console.log('\n');
    let results = [rt1,rt2,rt3,rt4];
    const datagame = results.map(team => {
        return {
            Equipo:team.name,
            Puntos:team.points,
            'Goles a favor':team.goods,
            'Goles en contra':team.bads,
            'Diferencia goles':team.left
        }
    })
    .sort((a,b) => a.Equipo < b.Equipo ? - 1 : a.Equipo > b.Equipo ? 1 : 0)
    .sort((a,b) => b['Diferencia goles'] - a['Diferencia goles'])
    .sort((a,b) => b.Puntos - a.Puntos)

    console.table(datagame);
    console.log('\n');
    const sorted = results
    .sort((a,b) => b.left - a.left)
    .sort((a,b) => b.points - a.points)
    return sorted;
}

const octavos = (pair1,pair2,pair3,pair4) => {
    console.log('\n');
    console.log('==== OCTAVOS DE FINAL ====');
    console.log('\n');
    const game1 = playOffsGames([pair1[0],pair1[2]],1);
    playOffPrint(game1[0],game1[1]);
    const game2 = playOffsGames([pair2[0],pair2[2]],1);
    playOffPrint(game2[0],game2[1]);
    const game3 = playOffsGames([pair3[0],pair3[2]],1);
    playOffPrint(game3[0],game3[1]);
    const game4 = playOffsGames([pair4[0],pair4[2]],1);
    playOffPrint(game4[0],game4[1]);
    const game5 = playOffsGames([pair1[1],pair1[3]],2);
    playOffPrint(game5[0],game5[1]);
    const game6 = playOffsGames([pair2[1],pair2[3]],2);
    playOffPrint(game6[0],game6[1]);
    const game7 = playOffsGames([pair3[1],pair3[3]],2);
    playOffPrint(game7[0],game7[1]);
    const game8 = playOffsGames([pair4[1],pair4[3]],2);
    playOffPrint(game8[0],game8[1]);
    return [...game1,...game2,...game3,...game4,...game5,...game6,...game7,...game8];
}

const cuartos = (block1,block2) => {
    console.log('\n');
    console.log('==== CUARTOS DE FINAL ====');
    console.log('\n');
    const game1 = playOffsGames([block1[0],block1[1]],1);
    playOffPrint(game1[0],game1[1]);
    const game2 = playOffsGames([block1[2],block1[3]],1);
    playOffPrint(game2[0],game2[1]);
    const game3 = playOffsGames([block2[0],block2[1]],2);
    playOffPrint(game3[0],game3[1]);
    const game4 = playOffsGames([block2[2],block2[3]],2);
    playOffPrint(game4[0],game4[1]);
    return [...game1,...game2,...game3,...game4];
}

const semi = (block1,block2) => {
    console.log('\n');
    console.log('==== SEMIFINALES ====');
    console.log('\n');
    const game1 = playOffsGames([block1[0],block1[1]],1);
    playOffPrint(game1[0],game1[1]);
    const game2 = playOffsGames([block2[0],block2[1]],2);
    playOffPrint(game2[0],game2[1]);
    return [...game1,...game2];
}

const Final = (winners,losers) => {
    console.log('\n');
    console.log('==== TERCER Y CUARTO PUESTO ====');
    console.log('\n');
    const game1 = playOffsGames([losers[0],losers[1]]);
    playOffPrint(game1[0],game1[1]);
    console.log('\n');
    console.log('==== FINAL ====');
    console.log('\n');
    const final = playOffsGames([winners[0],winners[1]]);
    playOffPrint(final[0],final[1]);
    return final;
}

export const Playoffs = (groups) => {
    let pair1 = [...groups[0],...groups[1]];
    let pair2 = [...groups[2],...groups[3]];
    let pair3 = [...groups[4],...groups[5]];
    let pair4 = [...groups[6],...groups[7]];
    const games = octavos(pair1,pair2,pair3,pair4);
    console.log('\n');
    const block1Teams = games.filter(team => team.block === 1).filter(team => team.win === true);
    const block2Teams = games.filter(team => team.block === 2).filter(team => team.win === true);
    const games2 = cuartos(block1Teams,block2Teams);
    const cuarters1 = games2.filter(team => team.win === true).filter(team => team.block === 1);
    const cuarters2 = games2.filter(team => team.win === true).filter(team => team.block === 2);
    const semiTeams = semi(cuarters1,cuarters2);
    const winners = semiTeams.filter(team => team.win === true);
    const losers = semiTeams.filter(team => team.win === false);
    const winner = Final(winners,losers);
    const champeon = winner.filter(team => team.win === true);
    return champeon[0];
}
