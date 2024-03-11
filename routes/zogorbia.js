import express from "express";
import { zogorbia } from "../data/planets.js";

const zogorbiaRouter = express.Router();

zogorbiaRouter.get('/', (req, res) => {
    res.render('pages/summary',
    {
        travel: zogorbia,
        planet: "Zogorbia",
        welcome: "Welcome to Zogorbia, the planet where gravity has a sense of humor and your steps might end up being more like dances! Here, the sky isn't just blue – it's a kaleidoscope of colors, blending together in a mesmerizing display. Be prepared to meet creatures that defy imagination, and don't be surprised if your words come out as intergalactic poetry. So, grab your space boots, adjust your antennae, and get ready for an adventure that's out of this world",
        footer: "Assignment 2 by Maria Hendricks"
    })
})

zogorbiaRouter.get('/:destination', (req, res) => {
    let myDestination = req.params.destination;

    zogorbia.forEach(trip => {
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

export default zogorbiaRouter;