import express from 'express'
import { formController } from '../controller/formController.js';
const router = express.Router();
import multer from 'multer';


const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/');
    },
    filename:function(req,file,cd){
        cb(null,file.originalname)
    },
});

const upload = multer({storage:storage})
router.post('/upload',formController);

export default router;