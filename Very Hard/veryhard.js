class Person{
    constructor(name, job, age){
        this.name = name;
        this.job = job;
        this.age = age;
    }

    exercise(){
        console.log(`${this.name} is about to play some video games!`)
    }

    fetchJob(){
        console.log(`${this.name} is a ${this.job} at Road To Hire.`)
    }

}

class Programmer{
    constructor(name, job, age, languages, languagesIWantToLearn) {
        this.name = name;
        this.job = job;
        this.age = age;
        this.languages = languages;
        this.languagesIWantToLearn = languagesIWantToLearn;
        this.busy = true;
    }

    completeTask(){
        this.busy = false;
    }

    offerNewTask(){
        if (this.busy === true){
            console.log(`${this.name} can't accept any new tasks right now.`)
        } else if (this.busy == false){
            console.log(`${this.name} would love to take on a new responsibility.`)
        }
    }

    listLanuages(){
        console.log(`Here are programming languages I know: ${this.languages}`)
    }

    learnLanguages(){
        console.log(`Here are programming languages I want to learn: ${this.languagesIWantToLearn}`)
    }
}

const mariahTeasdale = new Person ('Mariah Teasdale', 'Apprentice', 24);
console.log(mariahTeasdale);
mariahTeasdale.exercise();
mariahTeasdale.fetchJob();

const teasdaleMariah = new Programmer('Mariah Teasdale', 'Apprentice', 24, "CSS, JavaScript, HTML", "C++, Python")
console.log(teasdaleMariah);
teasdaleMariah.completeTask();
teasdaleMariah.offerNewTask();
teasdaleMariah.listLanuages();
teasdaleMariah.learnLanguages();