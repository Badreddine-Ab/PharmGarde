// const geolib = require('geolib');
const Pharmacy = require('../models/pharmacy');
const apiError = require("../utils/apiError")

const getNearbyPharmacies = async (req, res, next) => {
  try {
    const { latitude, longitude } = req.query;
    if (!latitude || !longitude) {
      return next(new apiError('Missing latitude or longitude', 400))
    }
    const pharmacies = await Pharmacy.findAll();
    const nearbyPharmacies = pharmacies.filter((pharmacy) => {
      const distance = geolib.getDistance(
        { latitude, longitude },
        { latitude: pharmacy.latitude, longitude: pharmacy.longitude }
      );
      return distance <= 5000; // 5km
    });
    res.send(nearbyPharmacies);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching pharmacies.' });
  }
};

const addPharmacy = async (req, res, next) => {
  try {
    const { name, address, latitude, longitude, opening_hours, services } = req.body;
    if (!name || !address || !latitude || !longitude) {
      return next(new apiError('Missing required fields.', 400))
    }

    const newPharmacy = await Pharmacy.create({
      name,
      address,
      latitude,
      longitude,
      opening_hours,
      services
    });

    res.status(201).send(newPharmacy);
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: 'Error adding new pharmacy.' });
  }
};

const UpdatePharmacy = async (req, res, next) => {
  try {
    const { name, address, latitude, longitude, opening_hours, services } = req.body;
    const id = req.params.id;
    if (!name || !address || !latitude || !longitude || !id) {
      return next(new apiError('Missing required fields. or id', 400))
    }

    const UpdatePharmacy = await Pharmacy.update(id,{
      name,
      address,
      latitude,
      longitude,
      opening_hours,
      services
    });

    res.status(201).send(UpdatePharmacy);
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: 'Error updating pharmacy.' });
  }
};

const DeletePharmacy = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) {
      return next(new apiError('Needs id to delete', 500))
    }

    await Pharmacy.delete(id);

    res.status(201).send("Deleted !!.");
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: 'Error deleting pharmacy.' });
  }
};




module.exports = {
  getNearbyPharmacies,
  addPharmacy,
  UpdatePharmacy,
  DeletePharmacy
}
