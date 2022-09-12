const parameterNames = [
    "name",
    "race",
    "profession",
    "healthCurrent",
    "healthMax",
    "healthTemp",
    "manaCurrent",
    "manaMax",
    "manaTemp",
    "staminaCurrent",
    "staminaMax",
    "staminaTemp",
    "inventory",
    "diceNameOne",
    "diceRollOne",
    "diceNameTwo",
    "diceRollTwo",
    "diceNameThree",
    "diceRollThree",
    "diceNameFour",
    "diceRollFour",
    "summonOneName",
    "summonOneHealthCurrent",
    "summonOneHealthMax",
    "summonOneHealthTemp",
    "summonOneManaCurrent",
    "summonOneManaMax",
    "summonOneManaTemp",
    "summonOneStaminaCurrent",
    "summonOneStaminaMax",
    "summonOneStaminaTemp",
    "summonTwoName",
    "summonTwoHealthCurrent",
    "summonTwoHealthMax",
    "summonTwoHealthTemp",
    "summonTwoManaCurrent",
    "summonTwoManaMax",
    "summonTwoManaTemp",
    "summonTwoStaminaCurrent",
    "summonTwoStaminaMax",
    "summonTwoStaminaTemp",
    "summonThreeName",
    "summonThreeHealthCurrent",
    "summonThreeHealthMax",
    "summonThreeHealthTemp",
    "summonThreeManaCurrent",
    "summonThreeManaMax",
    "summonThreeManaTemp",
    "summonThreeStaminaCurrent",
    "summonThreeStaminaMax",
    "summonThreeStaminaTemp",
    "summonFourName",
    "summonFourHealthCurrent",
    "summonFourHealthMax",
    "summonFourHealthTemp",
    "summonFourManaCurrent",
    "summonFourManaMax",
    "summonFourManaTemp",
    "summonFourStaminaCurrent",
    "summonFourStaminaMax",
    "summonFourStaminaTemp",
    "summonOneSubsumed",
    "summonOneAbilities",
    "summonTwoSubsumed",
    "summonTwoAbilities",
    "summonThreeSubsumed",
    "summonThreeAbilities",
    "summonFourSubsumed",
    "summonFourAbilities",
    "raceName",
    "racialOneName",
    "racialOneText",
    "racialTwoName",
    "racialTwoText",
    "racialThreeName",
    "racialThreeText",
    "racialFourName",
    "racialFourText",
    "racialFiveName",
    "racialFiveText",
    "racialSixName",
    "racialSixText",
    "skillsName",
    "skillsText",
    "spiritEssenceName",
    "spiritEssenceAbilityNameOne",
    "spiritEssenceAbilityTextOne",
    "spiritEssenceAbilityNameTwo",
    "spiritEssenceAbilityTextTwo",
    "spiritEssenceAbilityNameThree",
    "spiritEssenceAbilityTextThree",
    "spiritEssenceAbilityNameFour",
    "spiritEssenceAbilityTextFour",
    "spiritEssenceAbilityNameFive",
    "spiritEssenceAbilityTextFive",
    "recoveryEssenceName",
    "recoveryEssenceAbilityNameOne",
    "recoveryEssenceAbilityTextOne",
    "recoveryEssenceAbilityNameTwo",
    "recoveryEssenceAbilityTextTwo",
    "recoveryEssenceAbilityNameThree",
    "recoveryEssenceAbilityTextThree",
    "recoveryEssenceAbilityNameFour",
    "recoveryEssenceAbilityTextFour",
    "recoveryEssenceAbilityNameFive",
    "recoveryEssenceAbilityTextFive",
    "speedEssenceName",
    "speedEssenceAbilityNameOne",
    "speedEssenceAbilityTextOne",
    "speedEssenceAbilityNameTwo",
    "speedEssenceAbilityTextTwo",
    "speedEssenceAbilityNameThree",
    "speedEssenceAbilityTextThree",
    "speedEssenceAbilityNameFour",
    "speedEssenceAbilityTextFour",
    "speedEssenceAbilityNameFive",
    "speedEssenceAbilityTextFive",
    "powerEssenceName",
    "powerEssenceAbilityNameOne",
    "powerEssenceAbilityTextOne",
    "powerEssenceAbilityNameTwo",
    "powerEssenceAbilityTextTwo",
    "powerEssenceAbilityNameThree",
    "powerEssenceAbilityTextThree",
    "powerEssenceAbilityNameFour",
    "powerEssenceAbilityTextFour",
    "powerEssenceAbilityNameFive",
    "powerEssenceAbilityTextFive"
]

function getStoredValues() {
    // loop through every parameter name in the parameter array
    parameterNames.forEach(parameter => {
        // for each string value in the parameter array, get the item from local storage and get the matching input elenemt
        const savedParameterValueFromLocalStorage = localStorage.getItem(parameter);
        const parameterInputElement = document.getElementById(parameter);

        // if either the value doesn't exist in local storage, or we could not find a matching input element, then we don't want to set it
        if (savedParameterValueFromLocalStorage != null && parameterInputElement != null) {
            // if we did get both a value and input element, then set it
            parameterInputElement.value = savedParameterValueFromLocalStorage;
        } else {
            // do nothing
        }
    });
}

function setLocalStorage() {
    // loop through every parameter name in the parameter array
    parameterNames.forEach(parameter => {
        // for each string value in the parameter array, see if we have a matching input element
        const parameterInputElement = document.getElementById(parameter);

        // if we found a matching input element, then we can stick its current value in localstorage. 
        if (parameterInputElement != null) {
            localStorage.setItem(parameter, parameterInputElement.value);
        }
    });
}

// Dice Roll button listener
// document.querySelector('#diceRoller').addEventListener('click', rollDice)

let diceRolls = [];

// Rolls the one Dice with optional bonus
function diceRoller() {
    let diceSize = document.getElementById('diceSize').value
    let diceBonus = document.getElementById('diceBonus').value
    let rng = parseInt((Math.random()*diceSize)+1)
    return Number(rng) + Number(diceBonus)
}

function showResults(valueToPassIn) {
    document.querySelector('#diceResult').innerText = valueToPassIn;
}

function rollDice() {
    let diceAmount = document.getElementById('diceAmount').value
    for (let i = 0; i < diceAmount; i=i+1) {
        diceRolls[i] = diceRoller();
    }

    const outputOfDiceRolls = diceRolls.join(', ');
    showResults(outputOfDiceRolls);
    diceRolls = []
}