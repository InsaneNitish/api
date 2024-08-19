import express from "express";
import {getAllAstroids,getClosest10} from "../controller/astroidController.js"

const router  = express.Router();
router.route("/").get(getAllAstroids);
router.route("/closest10").get(getClosest10);
router.route("/largest10").get(getClosest10);

export default router;