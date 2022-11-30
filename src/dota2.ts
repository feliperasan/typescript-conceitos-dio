type skill = {
    readonly description: string;
    ability: string;
    imunitySpell: boolean;
    disposabel: boolean;
    durability: number;
    damage: number;
    radius: number;
    coowdown: number;
    cost: number;
};

type character = {
    cName: string,
    cSkill1: skill
}



const reflection: skill = {
    description: "Summons an invulnerable dark reflection of all enemy heroes in the target area. Affected enemy heroes will be slowed and attacked by reflection.",
    ability: "Target Point",
    imunitySpell: false,
    disposabel: true,
    durability: 5.0,
    damage: (55.0 / 100),
    radius: 500.0,
    coowdown: 28.0,
    cost: 35
}

const terroblade = {
    cName: "Terror Blade",
    cSkill1: reflection

}

console.log(terroblade);

