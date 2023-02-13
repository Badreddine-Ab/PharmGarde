const axios = require('axios');

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

const getOnePharmacier = (async (req, res) => {
  const { id } = req.params
  try {
    const OnePharmacier = await Pharmacy.findById(id)
    console.log(OnePharmacier)
    res.status(200).send(OnePharmacier)
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }

})

const getAllPharmacier = async (req, res, next) => {
  try {
    const allPharmacier = await Pharmacy.find()
    // console.log(allPharmacier)
    const data = []
    allPharmacier.forEach(doc => {
      data.push({ id: doc.id, data: doc.data() })
    });
    res.status(200).send(data)
  } catch (error) {
    res.status(400)
    throw new Error(error)
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

    axios.post('https://app.nativenotify.com/api/notification',
      {
        appId: 6245,
        appToken: "bV8hWCDbs9OrULaWSKg7W5",
        title: "New Available Farmacy",
        body: name + " Opening hours : " + opening_hours
      })

    res.status(201).send(newPharmacy);
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: 'Error adding new pharmacy.' });
  }
};

setInterval(() => {
  axios.post('https://app.nativenotify.com/api/notification',
    {
      appId: 6245,
      appToken: "bV8hWCDbs9OrULaWSKg7W5",
      title: "Farmacy reminder",
      body: "Check opening hours for the new farmacys."
    })
}, 3600000);

const UpdatePharmacy = async (req, res, next) => {
  try {
    const { name, address, latitude, longitude, opening_hours, services } = req.body;
    const id = req.params.id;
    if (!name || !address || !latitude || !longitude || !id) {
      return next(new apiError('Missing required fields. or id', 400))
    }

    const UpdatePharmacy = await Pharmacy.update(id, {
      name,
      address,
      latitude,
      longitude,
      opening_hours,
      services
    });

    res.status(201).send("Updated (true)");
  } catch (error) {
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
const getPharmacierByGard = async (req, res, next) => {
  try {
    if (req.body.opening_hours) {
      const allPharmacier = await Pharmacy.findby("opening_hours", req.body.opening_hours)
      const data = []
      allPharmacier.forEach(doc => {
        data.push({ id: doc.id, data: doc.data() })
      });
      res.status(200).json(data)
    }

  } catch (error) {
    console.log(req.body)
    res.status(400)
    throw new Error(error)
  }
};


module.exports = {
  getNearbyPharmacies,
  getAllPharmacier,
  addPharmacy,
  UpdatePharmacy,
  DeletePharmacy,
  getPharmacierByGard,
  getOnePharmacier
}
