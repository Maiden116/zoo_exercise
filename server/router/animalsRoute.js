import express from 'express';
import { getAnimalList, saveAnimal, getAnimalToSpeak } from '../controller/animalController.js';

const appRoutes = express()

appRoutes.get('/', (_, res) => {
    res.json({
        code: 200,
        Greatings: 'WELCOME TO THE ZOO'
    });
})

appRoutes.get('/animals', (_, res) => {
   
    res.json({
        code: 200,
        results: getAnimalList()
    });
})

appRoutes.post('/animal' , (req, res) => {
    let animalSaved = saveAnimal(req);
    res.status(200).send({
        animal: animalSaved
    });
})

appRoutes.post('/animal/speak' , (req, res) => {

    res.status(200).send({
        animalSpeaking: getAnimalToSpeak(req)
    });
})





export {appRoutes}