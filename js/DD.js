var DD = (function () {
    var skills = [
        { 'name': 'Appraise',           'description': false, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'intelligence' },
        { 'name': 'Balance',            'description': false, 'useUntrained': true,  'armorCheckPenalty': true,  'keyAbility': 'dexterity' },
        { 'name': 'Bluff',              'description': false, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'charisma' },
        { 'name': 'Climb',              'description': false, 'useUntrained': true,  'armorCheckPenalty': true,  'keyAbility': 'strength' },
        { 'name': 'Concentration',      'description': false, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'constitution' },
        { 'name': 'Craft',              'description': true,  'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'intelligence' },
        { 'name': 'Craft',              'description': true,  'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'intelligence' },
        { 'name': 'Craft',              'description': true,  'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'intelligence' },
        { 'name': 'Decipher Script',    'description': false, 'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'intelligence' },
        { 'name': 'Diplomacy',          'description': false, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'charisma' },
        { 'name': 'Disable Device',     'description': false, 'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'intelligence' },
        { 'name': 'Disguise',           'description': false, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'charisma' },
        { 'name': 'Escape Artist',      'description': false, 'useUntrained': true,  'armorCheckPenalty': true,  'keyAbility': 'dexterity' },
        { 'name': 'Forgery',            'description': false, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'intelligence' },
        { 'name': 'Gather Information', 'description': false, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'charisma' },
        { 'name': 'Handle Animal',      'description': false, 'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'charisma' },
        { 'name': 'Heal',               'description': false, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'wisdom' },
        { 'name': 'Hide',               'description': false, 'useUntrained': true,  'armorCheckPenalty': true,  'keyAbility': 'dexterity' },
        { 'name': 'Intimidate',         'description': false, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'charisma' },
        { 'name': 'Jump',               'description': false, 'useUntrained': true,  'armorCheckPenalty': true,  'keyAbility': 'strength' },
        { 'name': 'Knowledge',          'description': true,  'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'intelligence' },
        { 'name': 'Knowledge',          'description': true,  'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'intelligence' },
        { 'name': 'Knowledge',          'description': true,  'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'intelligence' },
        { 'name': 'Knowledge',          'description': true,  'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'intelligence' },
        { 'name': 'Knowledge',          'description': true,  'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'intelligence' },
        { 'name': 'Listen',             'description': false, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'wisdom' },
        { 'name': 'Move Silently',      'description': false, 'useUntrained': true,  'armorCheckPenalty': true,  'keyAbility': 'dexterity' },
        { 'name': 'Open Lock',          'description': false, 'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'dexterity' },
        { 'name': 'Perform',            'description': true,  'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'charisma' },
        { 'name': 'Perform',            'description': true,  'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'charisma' },
        { 'name': 'Perform',            'description': true,  'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'charisma' },
        { 'name': 'Profession',         'description': true,  'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'wisdom' },
        { 'name': 'Profession',         'description': true,  'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'wisdom' },
        { 'name': 'Ride',               'description': false, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'dexterity' },
        { 'name': 'Search',             'description': false, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'intelligence' },
        { 'name': 'Sense Motive',       'description': false, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'wisdom' },
        { 'name': 'Sleight of Hand',    'description': false, 'useUntrained': false, 'armorCheckPenalty': true,  'keyAbility': 'dexterity' },
        { 'name': 'Spellcraft',         'description': false, 'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'intelligence' },
        { 'name': 'Spot',               'description': false, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'wisdom' },
        { 'name': 'Survival',           'description': false, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'wisdom' },
        { 'name': 'Swim',               'description': false, 'useUntrained': true,  'armorCheckPenalty': true,  'keyAbility': 'strength' },
        { 'name': 'Tumble',             'description': false, 'useUntrained': false, 'armorCheckPenalty': true,  'keyAbility': 'dexterity' },
        { 'name': 'Use Magic Device',   'description': false, 'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'charisma' },
        { 'name': 'Use Rope',           'description': false, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'dexterity' }
    ];
    
    function Ability(params) {
        params = params || {};
        
        this.score = params.score || null;
        this.mod = params.mod || null;
        this.tempScore = params.tempScore || null;
        this.tempMod = params.tempMod || null;
    }
    
    Ability.prototype.computeMod = function () {
        this.mod = Math.floor((this.score - 10) / 2);
    };
    
    Ability.prototype.computeTempMod = function () {
        this.tempMod = Math.floor((this.tempScore - 10) / 2);
    };
    
    function ArmorClass(params) {
        params = params || {};
        
        this.total = params.total || null;
        this.baseArmor = params.baseArmor || null;
        this.armorBonus = params.armorBonus || null;
        this.shieldBonus = params.shieldBonus || null;
        this.sizeMod = params.sizeMod || null;
        this.naturalArmor = params.naturalArmor || null;
        this.deflectionMod = params.deflectionMod || null;
        this.miscMod = params.miscMod || null;
        this.touch = params.touch || null;
        this.flatFooted = params.flatFooted || null;
    }
    
    function Attack(params) {
        params = params || {};
        
        this.name = params.name || null;
        this.bonus = params.bonus || null;
        this.damage = params.damage || null;
        this.critical = params.critical || null;
        this.range = params.range || null;
        this.type = params.type || null;
        this.ammunition = params.ammunition || null;
        this.notes = params.notes || null;
    }
    
    function CarryingCapacity(params) {
        params = params || {};
        
        this.lightLoad = params.lightLoad || null;
        this.mediumLoad = params.mediumLoad || null;
        this.heavyLoad = params.heavyLoad || null;
        this.liftOverHead = params.liftOverHead || null;
        this.liftOffGround = params.liftOffGround || null;
        this.pushOrDrag = params.pushOrDrag || null;
    }
    
    function Character(params) {
        var i;
        
        params = params || {};
        params.abilities = params.abilities || {};
        params.savingThrows = params.savingThrows || {};
        params.attacks = params.attacks || {};
        params.gear = params.gear || {};
        params.skills = params.skills || {};
        params.otherPossessions = params.otherPossessions || {};
        params.feats = params.feats || {};
        params.specialAbilities = params.specialAbilities || {};
        params.spellLevels = params.spellLevels || {};
        
        this.name = params.name || null;
        this.player = params.player || null;
        this.class = params.class || null;
        this.level = params.level || null;
        this.race = params.race || null;
        this.alignment = params.alignment || null;
        this.deity = params.deity || null;
        this.size = params.size || null;
        this.age = params.age || null;
        this.gender = params.gender || null;
        this.height = params.height || null;
        this.weight = params.weight || null;
        this.eyes = params.eyes || null;
        this.hair = params.hair || null;
        this.skin = params.skin || null;
        this.speed = params.speed || null;
        this.damageReduction = params.damageReduction || null;
        this.baseAttackBonus = params.baseAttackBonus || null;
        this.spellResistance = params.spellResistance || null;
        this.maxRanks = params.maxRanks || null;
        this.totalRanks = params.totalRanks || null;
        this.totalWeight = params.totalWeight || null;
        this.money = params.money || null;
        this.languages = params.languages || null;
        this.spellSaveDifficultyClass = params.spellSaveDifficultyClass || null;
        this.arcaneSpellFailureChance = params.arcaneSpellFailureChance || null;
        
        this.abilities = {
            'strength': params.abilities.strength instanceof Ability ? params.abilities.strength : new Ability(params.abilities.strength),
            'dexterity': params.abilities.dexterity instanceof Ability ? params.abilities.dexterity : new Ability(params.abilities.dexterity),
            'constitution': params.abilities.constitution instanceof Ability ? params.abilities.constitution : new Ability(params.abilities.constitution),
            'intelligence': params.abilities.intelligence instanceof Ability ? params.abilities.intelligence : new Ability(params.abilities.intelligence),
            'wisdom': params.abilities.wisdom instanceof Ability ? params.abilities.wisdom : new Ability(params.abilities.wisdom),
            'charisma': params.abilities.charisma instanceof Ability ? params.abilities.charisma : new Ability(params.abilities.charisma)
        };
        
        this.savingThrows = {
            'fortitude': params.savingThrows.fortitude instanceof SavingThrow ? params.savingThrows.fortitude : new SavingThrow(params.savingThrows.fortitude),
            'reflex': params.savingThrows.reflex instanceof SavingThrow ? params.savingThrows.reflex : new SavingThrow(params.savingThrows.reflex),
            'will': params.savingThrows.will instanceof SavingThrow ? params.savingThrows.will : new SavingThrow(params.savingThrows.will)
        };
        
        this.hitPoints = params.hitPoints instanceof HitPoints ? params.hitPoints : new HitPoints(params.hitPoints);
        this.armorClass = params.armorClass instanceof ArmorClass ? params.armorClass : new ArmorClass(params.armorClass);
        this.initiative = params.initiative instanceof InitiativeModifier ? params.initiative : new InitiativeModifier(params.initiative);
        this.grapple = params.grapple instanceof GrappleModifier ? params.grapple : new GrappleModifier(params.grapple);
        this.carryingCapacity = params.carryingCapacity instanceof CarryingCapacity ? params.carryingCapacity : new CarryingCapacity(params.carryingCapacity);
        
        this.attacks = [
            params.attacks[0] instanceof Attack ? params.attacks[0] : new Attack(params.attacks[0]),
            params.attacks[1] instanceof Attack ? params.attacks[1] : new Attack(params.attacks[1]),
            params.attacks[2] instanceof Attack ? params.attacks[2] : new Attack(params.attacks[2]),
            params.attacks[3] instanceof Attack ? params.attacks[3] : new Attack(params.attacks[3]),
            params.attacks[4] instanceof Attack ? params.attacks[4] : new Attack(params.attacks[4])
        ];
        
        this.gear = [
            params.gear[0] instanceof Gear ? params.gear[0] : new Gear(params.gear[0]),
            params.gear[1] instanceof Gear ? params.gear[1] : new Gear(params.gear[1]),
            params.gear[2] instanceof Gear ? params.gear[2] : new Gear(params.gear[2]),
            params.gear[3] instanceof Gear ? params.gear[3] : new Gear(params.gear[3])
        ];
        
        this.skills = [];
        for (i = 0; i < skills.length; i++) {
            this.skills.push(params.skills[i] instanceof Skill ? params.skills[i] : new Skill(params.skills[i]));
        }
        
        this.otherPossessions = [];
        for (i = 0; i < 30; i++) {
            this.otherPossessions.push(params.otherPossessions[i] instanceof OtherPossession ? params.otherPossessions[i] : new OtherPossession(params.otherPossessions[i]));
        }
        
        this.feats = [];
        for (i = 0; i < 10; i++) {
            this.feats.push(params.feats[i] instanceof Feat ? params.feats[i] : new Feat(params.feats[i]));
        }
        
        this.specialAbilities = [];
        for (i = 0; i < 10; i++) {
            this.specialAbilities.push(params.specialAbilities[i] instanceof SpecialAbility ? params.specialAbilities[i] : new SpecialAbility(params.specialAbilities[i]));
        }
        
        this.spellLevels = [];
        for (i = 0; i < 10; i++) {
            this.spellLevels.push(params.spellLevels[i] instanceof SpellLevel ? params.spellLevels[i] : new SpellLevel(params.spellLevels[i]));
        }
    }
    
    function Feat(params) {
        params = params || {};
        
        this.name = params.name || null;
        this.page = params.page || null;
    }
    
    function Gear(params) {
        params = params || {};
        
        this.name = params.name || null;
        this.type = params.type || null;
        this.armorClassBonus = params.armorClassBonus || null;
        this.maxDexterity = params.maxDexterity || null;
        this.checkPenalty = params.checkPenalty || null;
        this.spellFailure = params.spellFailure || null;
        this.speed = params.speed || null;
        this.weight = params.weight || null;
        this.specialProperties = params.specialProperties || null;
    }
    
    function GrappleModifier(params) {
        params = params || {};
        
        this.total = params.total || null;
        this.sizeMod = params.sizeMod || null;
        this.miscMod = params.miscMod || null;
    }
    
    function HitPoints(params) {
        params = params || {};
        
        this.total = params.total || null;
        this.current = params.current || null;
        this.nonlethalDamage = params.nonlethalDamage || null;
    }
    
    function InitiativeModifier(params) {
        params = params || {};
        
        this.total = params.total || null;
        this.miscMod = params.miscMod || null;
    }
    
    function OtherPossession(params) {
        params = params || {};
        
        this.name = params.name || null;
        this.page = params.page || null;
        this.weight = params.weight || null;
    }
    
    function SavingThrow(params) {
        params = params || {};
        
        this.total = params.total || null;
        this.baseSave = params.baseSave || null;
        this.magicMod = params.magicMod || null;
        this.miscMod = params.miscMod || null;
        this.tempMod = params.tempMod || null;
        this.conditionalMods = params.conditionalMods || null;
    }
    
    function Skill(params) {
        params = params || {};
        
        this.classSkill = params.classSkill || null;
        this.description = params.description || null;
        this.skillMod = params.skillMod || null;
        this.ranks = params.ranks || null;
        this.miscMod = params.miscMod || null;
    }
    
    function SpecialAbility(params) {
        params = params || {};
        
        this.name = params.name || null;
        this.page = params.page || null;
    }
    
    function SpellLevel(params) {
        params = params || {};
        
        this.spellSaveDifficultyClass = params.spellSaveDifficultyClass || null;
        this.spellsPerDay = params.spellsPerDay || null;
        this.bonusSpellsPerDay = params.bonusSpellsPerDay || null;
        this.spellList = params.spellList || null;
    }
    
    return {
        'skills': skills,
        'Ability': Ability,
        'ArmorClass': ArmorClass,
        'Attack': Attack,
        'CarryingCapacity': CarryingCapacity,
        'Character': Character,
        'Feat': Feat,
        'Gear': Gear,
        'GrappleModifier': GrappleModifier,
        'HitPoints': HitPoints,
        'InitiativeModifier': InitiativeModifier,
        'OtherPossession': OtherPossession,
        'SavingThrow': SavingThrow,
        'Skill': Skill,
        'SpecialAbility': SpecialAbility,
        'SpellLevel': SpellLevel
    };
}());