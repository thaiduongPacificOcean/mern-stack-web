import Tour from '../models/Tour.js'

// create new tour 
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body)
    try {
        const saveTour = await newTour.save();
        res.status(200).json({
            sussess: true,
            message: 'Successfully created',
            data: saveTour
        })
    } catch (error) {
        res.status(500).json({
            sussess: false,
            message: 'Failđe to create'
        })
    }
}
// update 
export const updateTour = async (req, res) => {
    const id = req.params.id
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })
        res.status(200).json({
            sussess: true,
            message: 'Successfully update',
            data: updatedTour
        })
    } catch (error) {
        res.status(500).json({
            sussess: false,
            message: 'Failed to update',
        })
    }
}

// delete
export const deleteTour = async (req, res) => {

    const id = req.params.id

    try {
        const deleteTour = await Tour.findByIdAndDelete(id)

        res.status(200).json({
            sussess: true,
            message: 'Successfully delete',
        })
    } catch (error) {
        res.status(500).json({
            sussess: false,
            message: 'Failed to delete',
        })
    }
}
// getSingleTour 
export const getSingleTour = async (req, res) => {
    const id = req.params.id
    try {
        const tour = await Tour.findById(id).populate('reviews');

        res.status(200).json({
            sussess: true,
            message: 'Successfully',
            data: tour
        })
    } catch (error) {
        res.status(500).json({
            sussess: false,
            message: 'not found',
        })
    }
}
// getAllTour
export const getAllTour = async (req, res) => {

    // paginate
    const page = parseInt(req.query.page);
    console.log(page);


    try {
        const tours = await Tour.find({}).populate('reviews').skip(page * 8).limit(8);

        res.status(200).json({
            sussess: true,
            count: tours.length,
            message: 'Successfully',
            data: tours
        })
    } catch (error) {
        res.status(500).json({
            sussess: false,
            message: 'not found',
        })
    }
}

// get Tour by Search 

export const getTourBySearch = async (req, res) => {

    // i mean case sensitive : phân biệt chữ hoa thường

    const city = new RegExp(req.query.city, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try {
        const tours = await Tour.find({
            city: city,
            distance: { $gte: distance },
            maxGroupSize: { $gte: maxGroupSize }
        })

        res.status(200).json({
            sussess: true,
            count: tours.length,
            message: 'Successfully',
            data: tours
        })

    } catch (error) {
        res.status(404).json({
            sussess: false,
            message: 'not found',
        })
    }
}

// get Featured Tour (fetured: true)

export const getFeaturedTours = async (req, res) => {

    try {
        const tours = await Tour.find({ featured: true }).limit(8)
        res.status(200).json({
            sussess: true,
            count: tours.length,
            message: 'Successfully',
            data: tours
        })

    } catch (error) {
        res.status(404).json({
            sussess: false,
            message: 'not found',
        })
    }
}

// get Featured Tour (fetured: true)

export const getTourCount = async (req, res) => {

    try {
        const tourCount = await Tour.estimatedDocumentCount();

        res.status(200).json({
            sussess: true,
            message: 'Successfully',
            data: tourCount
        })

    } catch (error) {
        res.status(404).json({
            sussess: false,
            message: 'not found',
        })
    }
} 