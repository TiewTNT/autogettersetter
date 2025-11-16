function cap(s: String) {
    return s.charAt(0).toUpperCase() +
            s.slice(1)
}

class LangVar {
    type: String
    name: String
    constructor(type: String, name: String) {
        this.type = type
        this.name = name
    }
}

class Cpp extends LangVar {
    constructor(type: String, name: String) {
        super(type, name)
    }

    getter() {
        return `
${this.type} get${cap(this.name)}() {
    return ${this.name};
}  
        `
    }

    setter() {
        return `
void set${cap(this.name)}(new${cap(this.name)}) {
    ${this.name} = new${cap(this.name)};
}  
        `
    }
}