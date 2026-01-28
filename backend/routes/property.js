import express from "express";
import Property from "../models/Property";

const router = express.Router();

// All Property ke liye 

router.get("/", async (req, res)=>{
  const properties = await Property.find().populate("owner","name email");
  res.json(properties);
});

// Single Property ke liye

router.get("/:id", async (req, res) => {
  const property = await Property.findById(req.params.id).populate(
    "owner",
    "name email"
  );
  res.json(property);
});


// Add Property (Admin)

router.post("/", async(req, res)=>{
  try {
    const property = new Property(req.body);
    await property.save();
    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({error: error.message})
  }
});

// Update Property 

router.put("/:id", async (req, res)=>{
  const updated = await Property.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true}
  );
  res.json(updated);
});

// Delete Property 

router.delete("/:id", async (req, res)=> {
  await Property.findByIdAndDelete(req.params.id);
  res.json({message: "Property deleted"});
});


export default router;