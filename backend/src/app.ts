import express,{ Application } from "express"
import cors from 'cors'

class App{

    public app:Application

    constructor(){
        this.app=express()
        this.settingan()
    }

    private settingan(){
        this.app.use(cors())
    }

}

export default new App().app