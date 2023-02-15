import { Router } from "express";
import { readJsonFromFile, writeJsonToFile } from "../../utilities.js";
const songRoutes = Router();

let songs = []


// songRoutes.post('/add-song', (req, res) => {

//     let songObj = req.body;

//     songs.push(songObj)

//     res.send("added")
// })


// songRoutes.get('/songs', (req, res) => {

//     if (req.query.rating) {
//         let rating = req.query.rating;

//         return res.json(songs.filter(x => x.rating == rating))
//     }

//     if (req.query.ratingMin && req.query.ratingMax) {
//         return res.json(songs.filter(x => x.rating >= req.query.ratingMin && x.rating <= req.query.ratingMax))
//     }

//     if (req.query.ratings) {
//         console.log(req.query.ratings)
//     }

//     return res.json(songs)
// })


songRoutes.post('/songs', (req, res) => {
    let songObj = req.body;

    let songs = readJsonFromFile('./songs.json')
    songs.push(songObj)
    writeJsonToFile('./songs.json', songs)

    res.send("added")
})

songRoutes.get('/songs', (req, res) => {
    let songs = readJsonFromFile('./songs.json')
    return res.json(songs)
})
export default songRoutes

