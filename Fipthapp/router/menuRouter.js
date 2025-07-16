import express from 'express'
const Menurouter=express.Router()
import { Menu } from '../Controller/menuController.js'
Menurouter.post('/menu',Menu)

export default Menurouter