(function () {
    var character = new DD.Character({
        'armorClass': {
            'total': 10,
            'baseArmor': 10,
            'touch': 10,
            'flatFooted': 10
        }
    });
    
    (function createSkillsTable() {
        var tbody = document.getElementById('skills').appendChild(document.createElement('tbody'));
        
        for (var i = 0; i < character.skills.length; i++) {
            var newRow = tbody.insertRow();
            
            newRow.innerHTML = '<td><input data-mapping="skills.' + i + '.classSkill" type="checkbox" /></td>' +
                               '<td class="skill-name">' +
                                   DD.skills[i].name +
                                   (DD.skills[i].description === true ? ' <input data-mapping="skills.' + i + '.description" type="text" />' : '') +
                                   (DD.skills[i].useUntrained === true ? ' ■' : '') +
                                   (DD.skills[i].armorCheckPenalty === true ? ' *' : '') +
                               '</td>' +
                               '<td>' + DD.skills[i].keyAbility.substr(0, 3).toUpperCase() + '</td>' +
                               '<td><input data-mapping="skills.' + i + '.skillMod" type="text" readonly="readonly" /></td>' +
                               '<td>=</td>' +
                               '<td><input data-mapping="abilities.' + DD.skills[i].keyAbility + '.mod" type="text" readonly="readonly" /></td>' +
                               '<td>+</td>' +
                               '<td><input data-mapping="skills.' + i + '.ranks" type="text" /></td>' +
                               '<td>+</td>' +
                               '<td><input data-mapping="skills.' + i + '.miscMod" type="text" /></td>';
        }
    }());
    
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
    
    (function createSpellsTable() {
        var table = document.getElementById('spells');
        
        for (var i = 0; i < character.spellLevels.length; i++) {
            var newRow = table.insertRow();
            
            newRow.innerHTML = '<td>' + i + '</td>' +
                               '<td><input data-mapping="spellLevels.' + i + '.spellSaveDifficultlyClass" type="text" /></td>' +
                               '<td><input data-mapping="spellLevels.' + i + '.spellsPerDay" type="text" /></td>';
            
            if (i === 0) {
                newRow.innerHTML += '<td>0</td>';
            } else {
                newRow.innerHTML += '<td><input data-mapping="spellLevels.' + i + '.bonusSpellsPerDay" type="text" /></td>';
            }
            
            newRow.innerHTML += '<td><textarea data-mapping="spellLevels.' + i + '.spellList"></textarea></td>';
        }
    }());
    
    // all of these must be numeric to validate
    KO.validate(['armorClass.armorBonus', 'armorClass.shieldBonus', 'armorClass.sizeMod', 'armorClass.naturalArmor', 'armorClass.deflectionMod', 'armorClass.miscMod',
                 'initiative.miscMod',
                 'savingThrows.fortitude.baseSave', 'savingThrows.fortitude.magicMod', 'savingThrows.fortitude.miscMod', 'savingThrows.fortitude.tempMod',
                 'savingThrows.reflex.baseSave', 'savingThrows.reflex.magicMod', 'savingThrows.reflex.miscMod', 'savingThrows.reflex.tempMod',
                 'savingThrows.will.baseSave', 'savingThrows.will.magicMod', 'savingThrows.will.miscMod', 'savingThrows.will.tempMod',
                 'baseAttackBonus', 'grapple.sizeMod', 'grapple.miscMod'], function (event) {
        return !isNaN(event.target.value);
    });
    
    KO.validate(/skills\.(.*)\.(ranks|miscMod)/, function (event) {
        return !isNaN(event.target.value);
    });
    
    KO.validate(/(?:gear|otherPossessions)\.\d+\.weight/, function (event, match) {
        var newValue = parseInt(event.target.value);
        
        if (isNaN(newValue)) {
            return false;
        }
        
        event.target.value = newValue;
        
        return true;
    });
    
    KO.bind(character);
    
    KO.listen(/abilities\.(.*)\.(score|tempScore)/, function (event, match) {
        var ability = match[1],
            prop = match[2];
        
        if (prop === 'score') {
            character.abilities[ability].computeMod();
            
            return;
        }
        
        character.abilities[ability].computeTempMod();
    });
    
    KO.listen(['armorClass.armorBonus', 'armorClass.shieldBonus', 'abilities.dexterity.mod', 'armorClass.sizeMod', 'armorClass.naturalArmor', 'armorClass.deflectionMod', 'armorClass.miscMod'], function (event) {
        character.armorClass.total = character.armorClass.total - event.detail.oldValue + event.detail.newValue;
    });
    
    KO.listen('armorClass.total', function (event) {
        character.armorClass.touch = character.armorClass.total - character.armorClass.armorBonus - character.armorClass.shieldBonus - character.armorClass.naturalArmor;
        
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
    
    KO.listen(/skills\.(.*)\.(ranks|miscMod)/, function (event, match) {
        var skill = match[1],
            prop = match[2];
        
        character.skills[skill].skillMod = character.skills[skill].skillMod - event.detail.oldValue + event.detail.newValue;
        
        if (prop === 'ranks') {
            character.totalRanks = character.totalRanks - event.detail.oldValue + event.detail.newValue;
        }
    });
    
    KO.listen(/abilities\.(.*)\.mod/, function (event, match) {
        var ability = match[1];
        
        for (var i = 0; i < DD.skills.length; i++) {
            if (ability === DD.skills[i].keyAbility) {
                character.skills[i].skillMod = character.skills[i].skillMod - event.detail.oldValue + event.detail.newValue;
            }
        }
    });
    
    KO.listen(/(?:gear|otherPossessions)\.\d+\.weight/, function (event, match) {
        character.totalWeight = character.totalWeight - event.detail.oldValue + event.detail.newValue;
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
        var data, file, fileReader;
        
        if (event.target.id === 'load-file') {
            file = document.getElementById('load-file').files[0];
            
            fileReader = new FileReader();
            
            fileReader.onerror = function () {
                alert('An error occurred while reading the file.');
            };
            
            fileReader.onload = function () {
                try {
                    data = JSON.parse(this.result);
                    
                    character = new DD.Character(data);
                    
                    KO.bind(character);
                } catch (exception) {
                    if (exception instanceof SyntaxError) {
                        alert('The file ' + file.name + ' is not valid.');
                    }
                    
                    throw exception;
                }
            };
            
            fileReader.readAsText(file);
            
            return;
        }
    });
}());