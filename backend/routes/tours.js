import express from 'express'
import { createTour, deleteTour, getAllTour, getFeaturedTours, getSingleTour, getTourBySearch, getTourCount, updateTour } from './../controller/tourController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

// create new tour 

router.post('/', verifyAdmin, createTour)

// update tour 

router.put('/:id', verifyAdmin, updateTour)

// delete tour 

router.delete('/:id', verifyAdmin, deleteTour)

// get single tour 

router.get('/:id', getSingleTour)

// get all tour 

router.get('/', getAllTour)

// get tour by search

router.get('/search/getTourBySearch', getTourBySearch)

// get featured tours

router.get('/search/getFeaturedTours', getFeaturedTours)

// get tour count 

router.get('/search/getTourCount', getTourCount);


export default router;