import express from "express";
import { jupiter } from '../data/planets.js'

const jupiterRouter = express.Router();

jupiterRouter.get('/', (req, res) => {
    res.render('pages/summary',
    {
        travel: jupiter,
        planet: "Jupiter",
        welcome: "Welcome to Jupiter, where the sky is always stormy, and the size of your umbrella doesn't matter because it's made of metal and would get squashed by the gravity anyway! Here, the clouds aren't just fluffy – they're like a watercolor painting gone wild. And remember, if you think you've found solid ground, it's probably just another layer of gas. So buckle up, hold on tight, and enjoy the ride through the biggest rollercoaster in the solar system",
        footer: "Assignment 2 by Maria Hendricks"
    })
})

jupiterRouter.get('/:destination', (req, res) => {
    let myDestination = req.params.destination;

    jupiter.forEach(trip => {
        if (myDestination === trip.destination) {
            myDestination = trip;
        }
    })

    res.render('pages/details',
    {
        travel: myDestination,
        footer: "Assignment 2 by Maria Hendricks"
    })
})

export default jupiterRouter;