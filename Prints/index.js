import { groups } from '../Selections/Teams.js';
import { MakeGroupCallendar } from '../Callendars/GroupFase.js';
import { Journey1, Journey2, Journey3 , Playoffs} from './Games.js';

const teamNames = (teams) => {
    teams.map(team => console.log(team.name));
}

const banner1 = () => {
    console.log('==========================================');
    console.log('=========== COMIENZA EL MUNDIAL ==========');
    console.log('==========================================');
    console.log('\n');
}

const banner2 = () => {
    console.log('==============================================');
    console.log('==== COMIENZO DE LA FASE DE ELIMINATORIAS ====');
    console.log('==============================================');
    console.log('\n');
}

const banner3 = (champeon) => {
    console.log('\n');
    console.log('\n');
    console.log('===============================================')
    console.log(`¡${champeon.team} campeón del mundo!`);
    console.log('===============================================')
}

const printJourneys = (group) => {
    const journeys = MakeGroupCallendar(group);
    journeys.map(journey => {
        console.log(`${journey.title}:`);
        console.log(`- ${journey.game1}`)
        console.log(`- ${journey.game2}`)
        console.log('\n');
    })
}

const printTeams = (group) => {
    console.log(group.name);
    console.log('----------------------');
    teamNames(group.teams);
    console.log('\n');
    
}

export const printer = () => {
    console.log('\n');
    console.log('Grupos y equipos');
    console.log('======================');
    console.log('\n');
    groups.map(group => { 
        printTeams(group);
        printJourneys(group);
    });
    banner1();
    let j1Groups = groups.map(group => {
        const name = group.name; 
        const teams = Journey1(group.teams,group.name);
        return { teams , name}
    });
    let j2Groups = j1Groups.map(group => {
        const name = group.name; 
        const teams = Journey2(group.teams,group.name);
        return {teams,name}
    })
    let j3Groups = j2Groups.map(group => {
        const name = group.name;
        const teams = Journey3(group.teams,group.name);
        return {teams,name}
    });
    banner2();
    console.log('Equipos que van a participar en el playoff:');
    console.log('\n');
    const teamsToPlayoffs = j3Groups.map(group => ([group.teams[0],group.teams[1]]));
    let allTeams = []
    teamsToPlayoffs.forEach(element => {
        allTeams = [...allTeams,element[0],element[1]];
    });
    const names = allTeams.map(team => team.name);
    console.log(names.join(', '));
    let champeon = Playoffs(teamsToPlayoffs);
    banner3(champeon);
}