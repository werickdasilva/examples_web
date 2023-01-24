
class MyClass {
    private atributes: String
    public atributePublic: boolean

    constructor(private name = "Werick", value: String) {
        this.atributes = value
    }

    // Metodos
    public MyMetodo(arg: number): void{
        // chamendo atributos
        console.log(`Meu nome é ${this.name}`)
    }

    private metodoPrivado(): boolean {
        return true
    }
}