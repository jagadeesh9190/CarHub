/* import { LightningElement, wire } from 'lwc';
//getFiledValue is used to extract the field values 
import { getFieldValue } from 'lightning/uiRecordApi'


// car__c schema 
import NAME_FILED from '@salesforce/schema/Car__c.Name'
import PICTURE_URL_FILED from '@salesforce/schema/Car__c.Picture_URL__c'
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c'
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c'
import FUEL_FIELD from '@salesforce/schema/Car__c.Fuel_Type__c'
import SEATS_FIELD from '@salesforce/schema/Car__c.Seats__c'
import CONTROL_FIELD from '@salesforce/schema/Car__c.Control__c'
import MSRP_FIELD from '@salesforce/schema/Car__c.MSRP__c'


export default class CarCard extends LightningElement {

    //Exposing fields to make available in the template  
    categoryField = CATEGORY_FIELD
    makeField = MAKE_FIELD
    fuelField = FUEL_FIELD
    SeatsField = SEATS_FIELD
    ControlField = CONTROL_FIELD
    msrpField = MSRP_FIELD

    recordId = 'a082w00000viHrRAAU'
    //Car Fields display with specific format
    carName
    carPictureUrl
    handleRecordLoaded(event) {
        const { records } = event.detail
        const recordDate = records.this.recordId
        this.carName = getFieldValue(recordDate, NAME_FILED)
        this.carPictureUrl = getFieldValue(recordDate, PICTURE_URL_FILED)
    }
} */
import { LightningElement } from "lwc";

//Car__c Schema

import NAME_FIELD from "@salesforce/schema/Car__c.Name";
import PICTURE_URL_FIELD from "@salesforce/schema/Car__c.Picture_URL__c";
import CATEGORY_FIELD from "@salesforce/schema/Car__c.Category__c";
import MAKE_FIELD from "@salesforce/schema/Car__c.Make__c";
import MSRP_FIELD from "@salesforce/schema/Car__c.MSRP__c";
import FUEL_FIELD from "@salesforce/schema/Car__c.Fuel_Type__c";
import SEATS_FIELD from "@salesforce/schema/Car__c.Seats__c";
import CONTROL_FIELD from "@salesforce/schema/Car__c.Control__c";
// getFieldValue function is used to extract field values
import { getFieldValue } from "lightning/uiRecordApi";
export default class CarCard extends LightningElement {
  //exposing fields to make them available in the template
  categoryField = CATEGORY_FIELD;
  makeField = MAKE_FIELD;
  msrpField = MSRP_FIELD;
  fuelField = FUEL_FIELD;
  seatsField = SEATS_FIELD;
  controlField = CONTROL_FIELD;

  //Id of Car__c to display data
  recordId = "a082w00000viHrRAAU";

  // car fields displayed with specific format
  carName;
  carPictureUrl;
  handleRecordLoaded(event) {
    const { records } = event.detail;
    const recordData = records[this.recordId];
    this.carName = getFieldValue(recordData, NAME_FIELD);
    this.carPictureUrl = getFieldValue(recordData, PICTURE_URL_FIELD);
  }
}
