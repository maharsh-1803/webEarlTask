import FormData from "../models/formData.js";

export const formController = async (req, res) => {
    const { name, phone, email, address, country, state, city, pinCode } = req.body;
    
    try {
        
        let photos = [];
        if (req.files) {
            photos = req.files.map(file => ({ originalName: file.originalname }));
        }

        const newData = new FormData({
            name,
            phone,
            email,
            address,
            country,
            state,
            city,
            pinCode,
            photos: photos
        });

        console.log(newData);

        await newData.save();

        res.status(200).json(newData); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
