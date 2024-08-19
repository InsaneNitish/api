import Asteroid from "../models/astroidModel.js";

export const getAllAstroids = async (req,res)=>{
    const astroidData = await Asteroid.find({});
    res.status(200).json({
        msg:"All Astroids",
        data:astroidData,
    })
}

export const getClosest10 = async (req,res)=>{
    const astroidData = await Asteroid.find().sort({ q: 1 }).limit(10);
    res.status(200).json({
        msg:"10 Closest Astroids",
        data:astroidData,
    })
}

export const getLargest10 = async (req,res)=>{
    const astroidData = await Asteroid.find().sort({diameter: -1}).limit(10);
    res.status(200).json({
        msg:"10 Largest Astroids",
        data:astroidData,
    })
}



