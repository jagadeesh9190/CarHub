import { LightningElement, wire } from "lwc";
import { getObjectInfo, getPicklistValues } from "lightning/uiObjectInfoApi";
import CAR_OBJECT from "@salesforce/schema/Car__c";

/*** Car Schema*/
import CATEGORY_FIELD from "@salesforce/schema/Car__c.Category__c";
import MAKE_FIELD from "@salesforce/schema/Car__c.Make__c";

/**Constants */
const CATEGORY_ERROR = "Error Loading Categories";
const MAKETYPE_ERROR = "Error Loading Make Types";
export default class CarFilter extends LightningElement {
  filters = {
    searchKey: "",
    maxPrice: 999999
  };
  categoryError = CATEGORY_ERROR;
  makeError = MAKETYPE_ERROR;
  /***Fetching Category Picklist */
  @wire(getObjectInfo, { objectApiName: CAR_OBJECT })
  carObjectInfo;

  @wire(getPicklistValues, {
    recordTypeId: "$carObjectInfo.data.defaultRecordTypeId",
    fieldApiName: CATEGORY_FIELD
  })
  categories;
  /** Fetching Make Picklist */
  @wire(getPicklistValues, {
    recordTypeId: "$carObjectInfo.data.defaultRecordTypeId",
    fieldApiName: MAKE_FIELD
  })
  makeType;
  /** search Key Handler */
  handleSearchKeyChabge(event) {
    console.log(event.target.value);
    this.filters = { ...this.filters, searchKey: event.target.value };
  }
  /** Price Range Handler */
  handleMaxPriceChange(event) {
    console.log(event.target.value);
    this.filters = { ...this.filters, maxPrice: event.target.value };
  }
  handelCheckbox(event) {
    const { name, value } = event.target.dataset;
    console.log("name", name);
    console.log("value", value);
  }
}
