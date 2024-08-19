import mongoose from "mongoose";

const asteroidSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  a: { type: Number, required: true }, // Semi-major axis
  e: { type: Number, required: true }, // Eccentricity
  i: { type: Number, required: true }, // Inclination
  om: { type: Number, required: true }, // Longitude of the ascending node
  w: { type: Number, required: true }, // Argument of perihelion
  q: { type: Number, required: true }, // Perihelion distance
  ad: { type: Number, required: true }, // Aphelion distance
  per_y: { type: Number, required: true }, // Orbital period in years
  data_arc: { type: Number, required: true }, // Data-arc span
  n_obs_used: { type: Number, required: true }, // Number of observations used
  n_del_obs_used: { type: mongoose.Schema.Types.Mixed, required: true }, // Number of delay observations used
  n_dop_obs_used: { type: mongoose.Schema.Types.Mixed, required: true }, // Number of Doppler observations used
  H: { type: Number, required: true }, // Absolute magnitude
  diameter: { type: mongoose.Schema.Types.Mixed, required: true }, // Diameter
  albedo: { type: mongoose.Schema.Types.Mixed, required: true }, // Albedo
  rot_per: { type: mongoose.Schema.Types.Mixed, required: true }, // Rotation period
  GM: { type: mongoose.Schema.Types.Mixed, required: true }, // Gravitational parameter
  BV: { type: mongoose.Schema.Types.Mixed, required: true }, // B-V color index
  UB: { type: mongoose.Schema.Types.Mixed, required: true }, // U-B color index
  IR: { type: mongoose.Schema.Types.Mixed, required: true }, // Infrared magnitude
});

const Asteroid = mongoose.model("Asteroid", asteroidSchema);

export default Asteroid;
