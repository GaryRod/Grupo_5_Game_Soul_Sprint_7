const {body} = require('express-validator');
const path = require('path')

const validaciones = [
    body('nombre')
        .notEmpty().withMessage("Debés completar con un nombre")
        .isLength({min: 5}).withMessage("El nombre debe tener al menos 5 caracteres"),
    body('descripcion')
        .notEmpty().withMessage("Debés completar con una despcripción")
        .isLength({min: 50}).withMessage("La descripción debe tener al menos 60 caracteres"),
    body('genero')
        .notEmpty().withMessage("Debés elegir un género"),
    body('edicion')
        .notEmpty().withMessage("Debés elegir una edición"),
    body('precio')
        .notEmpty().withMessage("Debés completar con un precio")
        .isNumeric().withMessage("Sólo se permiten números"),
    body('imagen').custom((value, {req})=>{
        let file = req.file
        let acceptedExtensions = ['.jpg', '.png']
        if(!file){
            throw new Error ('Debés agregar una imagen')
        } else {
            let fileExtension = path.extname(file.originalname)
            if (!acceptedExtensions.includes(fileExtension)){
            throw new Error ('Las extensiones permitidas son .jpg .png')
            }
        }
        return true;
    })
]

module.exports = validaciones;