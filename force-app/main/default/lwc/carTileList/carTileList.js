import { LightningElement, wire } from "lwc";
import GETCARS from '@salesforce/apex/CarController.getCars'

export default class CarTileList extends LightningElement {
    cars
    error
    @wire(GETCARS)
    carsHandler ({data,error}){
        if(data){
            console.log(data)
            this.cars= data
        }
        if(error){
            console.log(error)
            this.error = error
        }
    }
}