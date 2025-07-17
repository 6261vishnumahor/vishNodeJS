import express from 'express'
const Menurouter=express.Router()
import { deletemenudata, fatchtesteType, Menu, menuData, updatemenudata } from '../Controller/menuController.js'
Menurouter.post('/menu', Menu)
Menurouter.get('/menu', menuData)
Menurouter.get('/menu/:testeType', fatchtesteType)
Menurouter.put('/menu/:id', updatemenudata)
Menurouter.delete('/menu/:id', deletemenudata)

export default Menurouter