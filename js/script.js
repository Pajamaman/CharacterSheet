(function () {
    var character = {
        'name': null,
        'player': null,
        'class': null,
        'level': null,
        'race': null,
        'alignment': null,
        'deity': null,
        'size': null,
        'age': null,
        'gender': null,
        'height': null,
        'weight': null,
        'eyes': null,
        'hair': null,
        'skin': null,
        'abilities': {
            'strength': { 'score': null, 'mod': null, 'tempScore': null, 'tempMod': null },
            'dexterity': { 'score': null, 'mod': null, 'tempScore': null, 'tempMod': null },
            'constitution': { 'score': null, 'mod': null, 'tempScore': null, 'tempMod': null },
            'intelligence': { 'score': null, 'mod': null, 'tempScore': null, 'tempMod': null },
            'wisdom': { 'score': null, 'mod': null, 'tempScore': null, 'tempMod': null },
            'charisma': { 'score': null, 'mod': null, 'tempScore': null, 'tempMod': null }
        },
        'hitPoints': { 'max': null, 'current': null, 'nonlethalDamage': null },
        'speed': null,
        'damageReduction': null,
        'armorClass': {
            'total': 10,
            'baseArmor': 10,
            'armorBonus': null,
            'shieldBonus': null,
            'sizeMod': null,
            'naturalArmor': null,
            'deflectionMod': null,
            'miscMod': null,
            'touch': 10,
            'flatFooted': 10 },
        'initiative': { 'total': null, 'miscMod': null },
        'savingThrows': {
            'fortitude': { 'total': null, 'baseSave': null, 'magicMod': null, 'miscMod': null, 'tempMod': null },
            'reflex': { 'total': null, 'baseSave': null, 'magicMod': null, 'miscMod': null, 'tempMod': null },
            'will': { 'total': null, 'baseSave': null, 'magicMod': null, 'miscMod': null, 'tempMod': null }
        },
        'baseAttackBonus': null,
        'spellResistance': null,
        'grapple': { 'total': null, 'sizeMod': null, 'miscMod': null },
        'attacks': [
            { 'name': null, 'bonus': null, 'damage': null, 'critical': null, 'range': null, 'type': null, 'ammunition': null, 'notes': null },
            { 'name': null, 'bonus': null, 'damage': null, 'critical': null, 'range': null, 'type': null, 'ammunition': null, 'notes': null },
            { 'name': null, 'bonus': null, 'damage': null, 'critical': null, 'range': null, 'type': null, 'ammunition': null, 'notes': null },
            { 'name': null, 'bonus': null, 'damage': null, 'critical': null, 'range': null, 'type': null, 'ammunition': null, 'notes': null },
            { 'name': null, 'bonus': null, 'damage': null, 'critical': null, 'range': null, 'type': null, 'ammunition': null, 'notes': null }
        ],
        'gear': [
            { 'name': null, 'type': null, 'armorClassBonus': null, 'maxDexterity': null, 'checkPenalty': null, 'spellFailure': null, 'speed': null, 'weight': null, 'specialProperties': null },
            { 'name': null, 'armorClassBonus': null, 'weight': null, 'checkPenalty': null, 'spellFailure': null, 'specialProperties': null },
            { 'name': null, 'armorClassBonus': null, 'weight': null, 'specialProperties': null },
            { 'name': null, 'armorClassBonus': null, 'weight': null, 'specialProperties': null }
        ],
        'otherPossessions': [
            { 'name': null, 'page': null, 'weight': null },
            { 'name': null, 'page': null, 'weight': null },
            { 'name': null, 'page': null, 'weight': null },
            { 'name': null, 'page': null, 'weight': null },
            { 'name': null, 'page': null, 'weight': null },
            { 'name': null, 'page': null, 'weight': null },
            { 'name': null, 'page': null, 'weight': null },
            { 'name': null, 'page': null, 'weight': null },
            { 'name': null, 'page': null, 'weight': null },
            { 'name': null, 'page': null, 'weight': null },
            { 'name': null, 'page': null, 'weight': null },
            { 'name': null, 'page': null, 'weight': null },
            { 'name': null, 'page': null, 'weight': null },
            { 'name': null, 'page': null, 'weight': null },
            { 'name': null, 'page': null, 'weight': null },
            { 'name': null, 'page': null, 'weight': null },
            { 'name': null, 'page': null, 'weight': null },
            { 'name': null, 'page': null, 'weight': null },
            { 'name': null, 'page': null, 'weight': null },
            { 'name': null, 'page': null, 'weight': null }
        ],
        'totalWeight': null,
        'feats': [
            { 'name': null, 'page': null },
            { 'name': null, 'page': null },
            { 'name': null, 'page': null },
            { 'name': null, 'page': null },
            { 'name': null, 'page': null },
            { 'name': null, 'page': null },
            { 'name': null, 'page': null },
            { 'name': null, 'page': null },
            { 'name': null, 'page': null },
            { 'name': null, 'page': null }
        ],
        'specialAbilities': [
            { 'name': null, 'page': null },
            { 'name': null, 'page': null },
            { 'name': null, 'page': null },
            { 'name': null, 'page': null },
            { 'name': null, 'page': null },
            { 'name': null, 'page': null },
            { 'name': null, 'page': null },
            { 'name': null, 'page': null },
            { 'name': null, 'page': null },
            { 'name': null, 'page': null }
        ],
        'skills': [
            { 'name': 'Appraise',                                'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'INT', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Balance',                                 'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': true,  'keyAbility': 'DEX', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Bluff',                                   'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'CHA', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Climb',                                   'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': true,  'keyAbility': 'STR', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Concentration',                           'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'CON', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Craft',              'description': null, 'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'INT', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Craft',              'description': null, 'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'INT', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Craft',              'description': null, 'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'INT', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Decipher Script',                         'classSkill': null, 'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'INT', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Diplomacy',                               'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'CHA', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Disable Device',                          'classSkill': null, 'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'INT', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Disguise',                                'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'CHA', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Escape Artist',                           'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': true,  'keyAbility': 'DEX', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Forgery',                                 'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'INT', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Gather Information',                      'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'CHA', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Handle Animal',                           'classSkill': null, 'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'CHA', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Heal',                                    'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'WIS', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Hide',                                    'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': true,  'keyAbility': 'DEX', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Intimidate',                              'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'CHA', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Jump',                                    'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': true,  'keyAbility': 'STR', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Knowledge',          'description': null, 'classSkill': null, 'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'INT', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Knowledge',          'description': null, 'classSkill': null, 'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'INT', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Knowledge',          'description': null, 'classSkill': null, 'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'INT', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Knowledge',          'description': null, 'classSkill': null, 'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'INT', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Knowledge',          'description': null, 'classSkill': null, 'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'INT', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Listen',                                  'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'WIS', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Move Silently',                           'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': true,  'keyAbility': 'DEX', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Open Lock',                               'classSkill': null, 'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'DEX', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Perform',            'description': null, 'classSkill': null, 'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'CHA', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Perform',            'description': null, 'classSkill': null, 'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'CHA', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Perform',            'description': null, 'classSkill': null, 'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'CHA', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Profession',         'description': null, 'classSkill': null, 'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'WIS', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Profession',         'description': null, 'classSkill': null, 'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'WIS', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Ride',                                    'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'DEX', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Search',                                  'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'INT', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Sense Motive',                            'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'WIS', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Sleight of Hand',                         'classSkill': null, 'useUntrained': false, 'armorCheckPenalty': true,  'keyAbility': 'DEX', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Spellcraft',                              'classSkill': null, 'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'INT', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Spot',                                    'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'WIS', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Survival',                                'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'WIS', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Swim',                                    'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': true,  'keyAbility': 'STR', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Tumble',                                  'classSkill': null, 'useUntrained': false, 'armorCheckPenalty': true,  'keyAbility': 'DEX', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Use Magic Device',                        'classSkill': null, 'useUntrained': false, 'armorCheckPenalty': false, 'keyAbility': 'CHA', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null },
            { 'name': 'Use Rope',                                'classSkill': null, 'useUntrained': true,  'armorCheckPenalty': false, 'keyAbility': 'DEX', 'skillMod': null, 'abilityMod': null, 'ranks': null, 'miscMod': null }
        ],
        'maxRanks': null,
        'totalRanks': null,
        'carryingCapacity': {
            'lightLoad': null,
            'mediumLoad': null,
            'heavyLoad': null,
            'liftOverHead': null,
            'liftOffGround': null,
            'pushOrDrag': null
        },
        'money': {
            'copper': null,
            'silver': null,
            'gold': null,
            'platinum': null
        },
        'spells': [
            { 'name': null, 'level': null, 'page': null },
            { 'name': null, 'level': null, 'page': null },
            { 'name': null, 'level': null, 'page': null },
            { 'name': null, 'level': null, 'page': null },
            { 'name': null, 'level': null, 'page': null },
            { 'name': null, 'level': null, 'page': null },
            { 'name': null, 'level': null, 'page': null },
            { 'name': null, 'level': null, 'page': null },
            { 'name': null, 'level': null, 'page': null },
            { 'name': null, 'level': null, 'page': null }
        ],
        'spellSaveDifficultyClass': null
    };
    
    function getAbilityMod(score) {
        return Math.floor((score - 10) / 2);
    }
    
    (function createOtherPossessionsTable() {
        var tbody = document.getElementById('other-possessions').appendChild(document.createElement('tbody'));
        
        for (var i = 0; i < character.otherPossessions.length; i++) {
            var newRow = tbody.insertRow();
            
            newRow.innerHTML = '<td><input data-mapping="otherPossessions.' + i + '.name" type="text" /></td>' +
                               '<td><input data-mapping="otherPossessions.' + i + '.page" type="text" /></td>' +
                               '<td><input data-mapping="otherPossessions.' + i + '.weight" type="text" /></td>';
            
            i++;
            
            newRow.innerHTML += '<td><input data-mapping="otherPossessions.' + i + '.name" type="text" /></td>' +
                                '<td><input data-mapping="otherPossessions.' + i + '.page" type="text" /></td>' +
                                '<td><input data-mapping="otherPossessions.' + i + '.weight" type="text" /></td>';
        }
    }());
    
    (function createFeatsTable() {
        var table = document.getElementById('feats');
        
        for (var i = 0; i < character.feats.length; i++) {
            var newRow = table.insertRow();
            
            newRow.innerHTML = '<td><input data-mapping="feats.' + i + '.name" type="text" /></td>' +
                               '<td><input data-mapping="feats.' + i + '.page" type="text" /></td>';
        }
    }());
    
    (function createSpecialAbilitiesTable() {
        var table = document.getElementById('special-abilities');
        
        for (var i = 0; i < character.specialAbilities.length; i++) {
            var newRow = table.insertRow();
            
            newRow.innerHTML = '<td><input data-mapping="specialAbilities.' + i + '.name" type="text" /></td>' +
                               '<td><input data-mapping="specialAbilities.' + i + '.page" type="text" /></td>';
        }
    }());
    
    (function createSkillsTable() {
        var tbody = document.getElementById('skills').appendChild(document.createElement('tbody'));
        
        for (var i = 0; i < character.skills.length; i++) {
            var newRow = tbody.insertRow();
            
            newRow.innerHTML = '<td><input data-mapping="skills.' + i + '.classSkill" type="checkbox" /></td>' +
                               '<td class="skill-name">' +
                                   character.skills[i].name +
                                   (character.skills[i].description !== undefined ? ' <input data-mapping="skills.' + i + '.description" type="text" />' : '') +
                                   (character.skills[i].useUntrained ? ' ■' : '') +
                                   (character.skills[i].armorCheckPenalty ? ' *' : '') +
                               '</td>' +
                               '<td>' + character.skills[i].keyAbility + '</td>' +
                               '<td><input data-mapping="skills.' + i + '.skillMod" type="text" readonly="readonly" /></td>' +
                               '<td><input data-mapping="skills.' + i + '.abilityMod" type="text" readonly="readonly" /></td>' +
                               '<td><input data-mapping="skills.' + i + '.ranks" type="text" /></td>' +
                               '<td><input data-mapping="skills.' + i + '.miscMod" type="text" /></td>';
        }
    }());
    
    (function createSpellsTable() {
        var table = document.getElementById('spells');
        
        for (var i = 0; i < character.spells.length; i++) {
            var newRow = table.insertRow();
            
            newRow.innerHTML = '<td><input data-mapping="spells.' + i + '.name" type="text" /></td>' +
                               '<td><input data-mapping="spells.' + i + '.level" type="text" /></td>' +
                               '<td><input data-mapping="spells.' + i + '.page" type="text" /></td>';
        }
    }());
    
    KO.bind(character);
    
    KO.listen('abilities.strength.score', function (event) {
        character.abilities.strength.mod = getAbilityMod(event.detail.newValue);
    });
    
    KO.listen('abilities.dexterity.score', function (event) {
        character.abilities.dexterity.mod = getAbilityMod(event.detail.newValue);
    });
    
    KO.listen('abilities.constitution.score', function (event) {
        character.abilities.constitution.mod = getAbilityMod(event.detail.newValue);
    });
    
    KO.listen('abilities.intelligence.score', function (event) {
        character.abilities.intelligence.mod = getAbilityMod(event.detail.newValue);
    });
    
    KO.listen('abilities.wisdom.score', function (event) {
        character.abilities.wisdom.mod = getAbilityMod(event.detail.newValue);
    });
    
    KO.listen('abilities.charisma.score', function (event) {
        character.abilities.charisma.mod = getAbilityMod(event.detail.newValue);
    });
    
    KO.listen('abilities.strength.tempScore', function (event) {
        character.abilities.strength.tempMod = getAbilityMod(event.detail.newValue);
    });
    
    KO.listen('abilities.dexterity.tempScore', function (event) {
        character.abilities.dexterity.tempMod = getAbilityMod(event.detail.newValue);
    });
    
    KO.listen('abilities.constitution.tempScore', function (event) {
        character.abilities.constitution.tempMod = getAbilityMod(event.detail.newValue);
    });
    
    KO.listen('abilities.intelligence.tempScore', function (event) {
        character.abilities.intelligence.tempMod = getAbilityMod(event.detail.newValue);
    });
    
    KO.listen('abilities.wisdom.tempScore', function (event) {
        character.abilities.wisdom.tempMod = getAbilityMod(event.detail.newValue);
    });
    
    KO.listen('abilities.charisma.tempScore', function (event) {
        character.abilities.charisma.tempMod = getAbilityMod(event.detail.newValue);
    });
    
    KO.listen(['armorClass.armorBonus', 'armorClass.shieldBonus', 'abilities.dexterity.mod', 'armorClass.sizeMod', 'armorClass.naturalArmor', 'armorClass.deflectionMod', 'armorClass.miscMod'], function (event) {
        character.armorClass.total = character.armorClass.total - event.detail.oldValue + event.detail.newValue;
    });
    
    KO.listen('armorClass.total', function (event) {
        character.armorClass.touch = character.armorClass.total - character.armorClass.armorBonus - character.armorClass.shieldBonus - character.armorClass.naturalArmor;
    });
    
    KO.listen('armorClass.total', function (event) {
        character.armorClass.flatFooted = character.armorClass.total;
        
        if (character.abilities.dexterity.mod > 0) {
            character.armorClass.flatFooted -= character.abilities.dexterity.mod;
        }
    });
    
    KO.listen(['abilities.dexterity.mod', 'initiative.miscMod'], function (event) {
        character.initiative.total = character.initiative.total - event.detail.oldValue + event.detail.newValue;
    });
    
    KO.listen(['savingThrows.fortitude.baseSave', 'abilities.constitution.mod', 'savingThrows.fortitude.magicMod', 'savingThrows.fortitude.miscMod', 'savingThrows.fortitude.tempMod'], function (event) {
        character.savingThrows.fortitude.total = character.savingThrows.fortitude.total - event.detail.oldValue + event.detail.newValue;
    });
    
    KO.listen(['savingThrows.reflex.baseSave', 'abilities.dexterity.mod', 'savingThrows.reflex.magicMod', 'savingThrows.reflex.miscMod', 'savingThrows.reflex.tempMod'], function (event) {
        character.savingThrows.reflex.total = character.savingThrows.reflex.total - event.detail.oldValue + event.detail.newValue;
    });
    
    KO.listen(['savingThrows.will.baseSave', 'abilities.wisdom.mod', 'savingThrows.will.magicMod', 'savingThrows.will.miscMod', 'savingThrows.will.tempMod'], function (event) {
        character.savingThrows.will.total = character.savingThrows.will.total - event.detail.oldValue + event.detail.newValue;
    });
    
    KO.listen(['baseAttackBonus', 'abilities.strength.mod', 'grapple.sizeMod', 'grapple.miscMod'], function (event) {
        character.grapple.total = character.grapple.total - event.detail.oldValue + event.detail.newValue;
    });
    
    KO.listen(/(?:gear|otherPossessions)\.\d\.weight/, function (event, match) {
        character.totalWeight = character.totalWeight - event.detail.oldValue + event.detail.newValue;
    });
    
    KO.listen(/skills\.(.*)\.(abilityMod|ranks|miscMod)/, function (event, match) {
        var skill = match[1],
            prop = match[2];
        
        character.skills[skill].skillMod = character.skills[skill].skillMod - event.detail.oldValue + event.detail.newValue;
        
        if (prop === 'ranks') {
            character.totalRanks = character.totalRanks - event.detail.oldValue + event.detail.newValue;
        }
    });
    
    KO.listen(/abilities\.(.*)\.mod/, function (event, match) {
        var ability = match[1];
        
        Object.keys(character.skills).forEach(function (skill) {
            if (ability.toUpperCase().indexOf(character.skills[skill].keyAbility) === 0) {
                character.skills[skill].abilityMod = event.detail.newValue;
            }
        });
    });
    
    window.addEventListener('click', function (event) {
        var saveFile;
        
        if (event.target.id === 'save') {
            saveFile = document.getElementById('save-file');
            saveFile.download = 'character.json';
            saveFile.href = 'data:text/json,' + JSON.stringify(character);
            saveFile.click();
            
            return;
        }
        
        if (event.target.id === 'load') {
            document.getElementById('load-file').click();
            
            return;
        }
    });
    
    window.addEventListener('change', function (event) {
        var file, fileReader;
        
        if (event.target.id === 'load-file') {
            file = document.getElementById('load-file').files[0];
            
            fileReader = new FileReader();
            
            fileReader.onerror = function () {
                // handle error
            };
            
            fileReader.onload = function () {
                try {
                    character = JSON.parse(this.result);
                    
                    // make sure character is a character
                    KO.bind(character);
                } catch (exception) {
                    // handle error
                }
            };
            
            fileReader.readAsText(file);
            
            return;
        }
    });
}());