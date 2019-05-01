export default class CustomValidity {
    constructor() {
        this.invalidities = [];
    }

    checkValidity(input) {
        let validity = input.validity;
        
        //debugger
        //console.log("qeqwewqewqe", input.value)
        
        
        if (validity.valueMissing) {
            this.addInvalidity('Это поле обязательно для заполнения.')
        }

        if( validity.patternMismatch ) {
            this.addInvalidity('Это поле заполненно некорректно.')
        }

    }

    getInvaliditiesForHTML() {
        console.log(this.invalidities)
        return this.invalidities.join('<br />');
    }

    addInvalidity(message) {
        this.invalidities.push(message);
    }
    
    getInvalidities() {
        return this.invalidities.join('. \n');
    }
}