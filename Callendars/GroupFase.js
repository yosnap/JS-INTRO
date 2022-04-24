export const MakeGroupCallendar = (group) => {
    const [team1,team2,team3,team4] = group.teams;

    return [
        {
            title:'Jornada 1',
            game1:`${team1.name} vs ${team4.name}`,
            game2:`${team2.name} vs ${team3.name}` 
        },
        {
            title:'Jornada 2',
            game1:`${team4.name} vs ${team2.name}`,
            game2:`${team3.name} vs ${team1.name}`
        },
        {
            title:'Jornada 3',
            game1:`${team3.name} vs ${team4.name}`,
            game2:`${team1.name} vs ${team2.name}`
        }
    ]

}