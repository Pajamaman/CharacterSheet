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
        'attacks': {
            'attack1': { 'name': null, 'attackBonus': null, 'damage': null, 'critical': null, 'range': null, 'type': null, 'ammunition': null, 'notes': null },
            'attack2': { 'name': null, 'attackBonus': null, 'damage': null, 'critical': null, 'range': null, 'type': null, 'ammunition': null, 'notes': null },
            'attack3': { 'name': null, 'attackBonus': null, 'damage': null, 'critical': null, 'range': null, 'type': null, 'ammunition': null, 'notes': null },
            'attack4': { 'name': null, 'attackBonus': null, 'damage': null, 'critical': null, 'range': null, 'type': null, 'ammunition': null, 'notes': null },
            'attack5': { 'name': null, 'attackBonus': null, 'damage': null, 'critical': null, 'range': null, 'type': null, 'ammunition': null, 'notes': null }
        },
        'skills': {
            'appraise': { 'classSkill': null, 'keyAbility': 'intelligence', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'balance': { 'classSkill': null, 'keyAbility': 'dexterity', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'bluff': { 'classSkill': null, 'keyAbility': 'charisma', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'climb': { 'classSkill': null, 'keyAbility': 'strength', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'concentration': { 'classSkill': null, 'keyAbility': 'constitution', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'craft1': { 'classSkill': null, 'item': null, 'keyAbility': 'intelligence', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'craft2': { 'classSkill': null, 'item': null, 'keyAbility': 'intelligence', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'craft3': { 'classSkill': null, 'item': null, 'keyAbility': 'intelligence', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'decipherScript': { 'classSkill': null, 'keyAbility': 'intelligence', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'diplomacy': { 'classSkill': null, 'keyAbility': 'charisma', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'disableDevice': { 'classSkill': null, 'keyAbility': 'intelligence', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'disguise': { 'classSkill': null, 'keyAbility': 'charisma', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'escapeArtist': { 'classSkill': null, 'keyAbility': 'dexterity', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'forgery': { 'classSkill': null, 'keyAbility': 'intelligence', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'gatherInformation': { 'classSkill': null, 'keyAbility': 'charisma', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'handleAnimal': { 'classSkill': null, 'keyAbility': 'charisma', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'heal': { 'classSkill': null, 'keyAbility': 'wisdom', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'hide': { 'classSkill': null, 'keyAbility': 'dexterity', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'intimidate': { 'classSkill': null, 'keyAbility': 'charisma', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'jump': { 'classSkill': null, 'keyAbility': 'strength', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'knowledge1': { 'classSkill': null, 'field': null, 'keyAbility': 'intelligence', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'knowledge2': { 'classSkill': null, 'field': null, 'keyAbility': 'intelligence', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'knowledge3': { 'classSkill': null, 'field': null, 'keyAbility': 'intelligence', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'knowledge4': { 'classSkill': null, 'field': null, 'keyAbility': 'intelligence', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'knowledge5': { 'classSkill': null, 'field': null, 'keyAbility': 'intelligence', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'listen': { 'classSkill': null, 'keyAbility': 'wisdom', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'moveSilently': { 'classSkill': null, 'keyAbility': 'dexterity', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'openLock': { 'classSkill': null, 'keyAbility': 'dexterity', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'perform1': { 'classSkill': null, 'talent': null, 'keyAbility': 'charisma', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'perform2': { 'classSkill': null, 'talent': null, 'keyAbility': 'charisma', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'perform3': { 'classSkill': null, 'talent': null, 'keyAbility': 'charisma', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'profession1': { 'classSkill': null, 'trade': null, 'keyAbility': 'wisdom', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'profession2': { 'classSkill': null, 'trade': null, 'keyAbility': 'wisdom', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'ride': { 'classSkill': null, 'keyAbility': 'dexterity', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'search': { 'classSkill': null, 'keyAbility': 'intelligence', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'senseMotive': { 'classSkill': null, 'keyAbility': 'wisdom', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'sleightOfHand': { 'classSkill': null, 'keyAbility': 'dexterity', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'spellcraft': { 'classSkill': null, 'keyAbility': 'intelligence', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'spot': { 'classSkill': null, 'keyAbility': 'wisdom', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'survival': { 'classSkill': null, 'keyAbility': 'wisdom', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'swim': { 'classSkill': null, 'keyAbility': 'strength', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'tumble': { 'classSkill': null, 'keyAbility': 'dexterity', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'useMagicDevice': { 'classSkill': null, 'keyAbility': 'charisma', 'skillMod': null, 'ranks': null, 'miscMod': null },
            'useRope': { 'classSkill': null, 'keyAbility': 'dexterity', 'skillMod': null, 'ranks': null, 'miscMod': null }
        }
    };
    
    function getAbilityMod(score) {
        return Math.floor((score - 10) / 2);
    }
    
    KO.bind(character);
    
    KO.listen(function (event) {
        character.abilities.strength.mod = getAbilityMod(event.detail.newValue);
    }, 'abilities.strength.score');
    
    KO.listen(function (event) {
        character.abilities.dexterity.mod = getAbilityMod(event.detail.newValue);
    }, 'abilities.dexterity.score');
    
    KO.listen(function (event) {
        character.abilities.constitution.mod = getAbilityMod(event.detail.newValue);
    }, 'abilities.constitution.score');
    
    KO.listen(function (event) {
        character.abilities.intelligence.mod = getAbilityMod(event.detail.newValue);
    }, 'abilities.intelligence.score');
    
    KO.listen(function (event) {
        character.abilities.wisdom.mod = getAbilityMod(event.detail.newValue);
    }, 'abilities.wisdom.score');
    
    KO.listen(function (event) {
        character.abilities.charisma.mod = getAbilityMod(event.detail.newValue);
    }, 'abilities.charisma.score');
    
    KO.listen(function (event) {
        character.abilities.strength.tempMod = getAbilityMod(event.detail.newValue);
    }, 'abilities.strength.tempScore');
    
    KO.listen(function (event) {
        character.abilities.dexterity.tempMod = getAbilityMod(event.detail.newValue);
    }, 'abilities.dexterity.tempScore');
    
    KO.listen(function (event) {
        character.abilities.constitution.tempMod = getAbilityMod(event.detail.newValue);
    }, 'abilities.constitution.tempScore');
    
    KO.listen(function (event) {
        character.abilities.intelligence.tempMod = getAbilityMod(event.detail.newValue);
    }, 'abilities.intelligence.tempScore');
    
    KO.listen(function (event) {
        character.abilities.wisdom.tempMod = getAbilityMod(event.detail.newValue);
    }, 'abilities.wisdom.tempScore');
    
    KO.listen(function (event) {
        character.abilities.charisma.tempMod = getAbilityMod(event.detail.newValue);
    }, 'abilities.charisma.tempScore');
    
    KO.listen(function (event) {
        character.armorClass.total = character.armorClass.total - event.detail.oldValue + event.detail.newValue;
    }, ['armorClass.armorBonus',
        'armorClass.shieldBonus',
        'abilities.dexterity.mod',
        'armorClass.sizeMod',
        'armorClass.naturalArmor',
        'armorClass.deflectionMod',
        'armorClass.miscMod']);
    
    KO.listen(function (event) {
        character.armorClass.touch = character.armorClass.total - character.armorClass.armorBonus - character.armorClass.shieldBonus - character.armorClass.naturalArmor;
    }, 'armorClass.total');
    
    KO.listen(function (event) {
        character.armorClass.flatFooted = character.armorClass.total;
        if (character.abilities.dexterity.mod > 0) {
            character.armorClass.flatFooted -= character.abilities.dexterity.mod;
        }
    }, 'armorClass.total');
    
    KO.listen(function (event) {
        character.initiative.total = character.initiative.total - event.detail.oldValue + event.detail.newValue;
    }, ['abilities.dexterity.mod',
        'initiative.miscMod']);
    
    KO.listen(function (event) {
        character.savingThrows.fortitude.total = character.savingThrows.fortitude.total - event.detail.oldValue + event.detail.newValue;
    }, ['savingThrows.fortitude.baseSave',
        'abilities.constitution.mod',
        'savingThrows.fortitude.magicMod',
        'savingThrows.fortitude.miscMod',
        'savingThrows.fortitude.tempMod']);
    
    KO.listen(function (event) {
        character.savingThrows.reflex.total = character.savingThrows.reflex.total - event.detail.oldValue + event.detail.newValue;
    }, ['savingThrows.reflex.baseSave',
        'abilities.dexterity.mod',
        'savingThrows.reflex.magicMod',
        'savingThrows.reflex.miscMod',
        'savingThrows.reflex.tempMod']);
    
    KO.listen(function (event) {
        character.savingThrows.will.total = character.savingThrows.will.total - event.detail.oldValue + event.detail.newValue;
    }, ['savingThrows.will.baseSave',
        'abilities.wisdom.mod',
        'savingThrows.will.magicMod',
        'savingThrows.will.miscMod',
        'savingThrows.will.tempMod']);
    
    KO.listen(function (event) {
        character.grapple.total = character.grapple.total - event.detail.oldValue + event.detail.newValue;
    }, ['baseAttackBonus',
        'abilities.strength.mod',
        'grapple.sizeMod',
        'grapple.miscMod']);
    
    KO.listen(function (event, match) {
        var skill = match[1];
        
        character.skills[skill].skillMod = character.skills[skill].skillMod - event.detail.oldValue + event.detail.newValue;
    }, /skills\.(.*)\.(?:ranks|miscMod)/);
    
    KO.listen(function (event, match) {
        var ability = match[1];
        
        Object.keys(character.skills).forEach(function (skill) {
            if (character.skills[skill].keyAbility == ability) {
                character.skills[skill].skillMod = character.skills[skill].skillMod - event.detail.oldValue + event.detail.newValue;
            }
        });
    }, /abilities\.(.*)\.mod/);
    
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
                } catch (e) {
                    // handle error
                }
            };
            
            fileReader.readAsText(file);
            
            return;
        }
    });
}());