import Data from "../models/formData.js"

export const formController = async (req,res)=>{
    const {name,phone,email,address,country,state,city,pinCode,photos} = req.body;  
    console.log(req.body);
    try {
        const newData = new Data({
            name,
            phone,
            email,
            address,
            country,
            state,
            city,
            pinCode,
            photos:originalName
        })

        await newData.save();
        res.status(200).json(newData);
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
}

