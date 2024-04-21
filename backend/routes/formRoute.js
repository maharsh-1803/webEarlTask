import express from 'express';
import { formController } from '../controller/formController.js';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        const suffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, suffix + '-' + file.originalname);
    },
});

const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10 
    },
});

router.post('/upload', upload.array('files'), (req, res, next) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: "Please upload at least one file" });
    }
    
    formController(req, res, next);
});

export default router;
