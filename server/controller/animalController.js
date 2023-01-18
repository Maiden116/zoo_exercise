import Animal from './../models/animal.js';
import Zoo from './../models/zoo.js';

const saveAnimal = (req) =>   {
    let body = req.body;
    if(!body.sound) {
        return 'Please specify a sound that you want it to say';
    }
    if(!body.specie) {
        return 'Please specify a specie that you want it to talk'
    }
    let animal = new Animal(body.sound, body.specie);

    let zoo = new Zoo();
    let animalFounded = zoo.animalsInCaptivity.find(animal => animal.specie.toUpperCase() == body.specie.toUpperCase());
    if(animalFounded) {
        return 'That Specie is already on the Zoo';
    }
    zoo.addAnimal(animal)
    return animal;
}

const getAnimalList = () => {
    let zoo = new Zoo();
    return zoo.animalList(); 
}

const getAnimalToSpeak = (req) => {
    let body = req.body;
    let phrase = body.phrase;
    let specie = body.specie;
    if(!phrase) {
        return 'Please specify a phrase that you want it to say';
    }
    if(!specie) {
        return 'Please specify a specie that you want it to talk'
    }
    let zoo = new Zoo();
    let animal = zoo.animalsInCaptivity.find(animal => animal.specie.toUpperCase() == specie.toUpperCase());
    if(animal == undefined){
        return 'That animal is not in the zoo';
    }

    return animal.speak(phrase);

}

export { saveAnimal, getAnimalList, getAnimalToSpeak };