export class CoreModel {
    
    deserialize(input: any): this {
        return Object.assign(this, input);
    }

    deserializes(input: any): this {
        return input.map(x => Object.assign({}, x));
    }
    
}
