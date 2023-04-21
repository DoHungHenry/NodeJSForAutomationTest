class Person {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }


    // method
    speak (){
        console.log("hi man");
    }

    getName (){
        console.log(this.name);
        console.log(this.age);
    }
}

let bi = new Person("bi", 10);
bi.speak();
bi.getName();
