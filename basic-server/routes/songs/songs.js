import { Router } from "express";
const songRoutes = Router();

let songs = []


songRoutes.post('/add-song', (req, res) => {

    let songObj = req.body;

    songs.push(songObj)

    res.send("added")
})


songRoutes.get('/songs', (req, res) => {

    if (req.query.rating) {
        let rating = req.query.rating;

        return res.json(songs.filter(x => x.rating == rating))
    }

    if (req.query.ratingMin && req.query.ratingMax) {
        return res.json(songs.filter(x => x.rating >= req.query.ratingMin && x.rating <= req.query.ratingMax))
    }

    if (req.query.ratings) {
        console.log(req.query.ratings)
    }

    return res.json(songs)
})

export default songRoutes

