import express from "express";
import { mars } from "../data/planets.js"

const marsRouter = express.Router();

marsRouter.get('/', (req, res) => {
    res.render('pages/summary',
    {
        travel: mars,
        planet: "Mars",
        welcome: "Welcome to Mars, where 'taking a walk' means hopping around in low gravity, and 'making friends' might involve chatting with a rover! Don't worry, Martians don't bite... well, unless you're a potato left unattended in the rover's path. Enjoy your stay and try not to get lost in the vast Martian deserts – those GPS signals tend to bounce off the atmosphere and end up on Phobos!",
        footer: "Assignment 2 by Maria Hendricks"  

    })
})

marsRouter.get('/:destination', (req, res) => {
    let myDestination = req.params.destination;

    mars.forEach(trip => {
        if(myDestination === trip.destination) {
            myDestination = trip;
        }
    })

    res.render('pages/details',
    {
        travel: myDestination,
        footer: "Assignment 2 by Maria Hendricks"  

    })
})

export default marsRouter;