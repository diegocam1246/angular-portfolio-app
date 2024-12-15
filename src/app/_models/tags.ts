
export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#5a7581');
    static readonly RUST = new Tag('Rust', '#355158')
    static readonly CANDCPLUSPLUS = new Tag('C/C++', '#4a6a77');
    static readonly NODEJS = new Tag('NodeJS', '#4a6a77');
    static readonly TYPESCRIPT = new Tag('Typescript', '#192129');
    static readonly KICAD = new Tag('KiCad', '#192129');
    static readonly DOCKER = new Tag('Docker', '#355158');
    static readonly MONGODB = new Tag('MongoDB', '#192129');

    private constructor(private readonly key: string, public readonly color: string) {
    }

    toString() {
        return this.key;
    }

}