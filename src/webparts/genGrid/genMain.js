var genGridModule = (function () {

  var GridConfig = [{
    "headerName": "Wire Grid",
    "sortingAttr": "Investor",
    "sorOrder": "asc",
    "gHeaders": [{
        "jsonName": "ID",
        "displayName": "ID",
        "visible": false
      },
      {
        "jsonName": "Title",
        "displayName": "Title",
        "visible": true,
        "dataType": "string",
        "popUpEnabled": {
          "value": true,
          "icon": "fa-external-link",
          "urlName": "https://google.com",
          "queryParams": [
            "ID",
            "Title"
          ]
        }
      },
      {
        "jsonName": "Activity_Type",
        "displayName": "Activity Type",
        "dataType": "string"
      },
      {
        "jsonName": "Opportunity_Id",
        "displayName": "Opportunity Id",
        "dataType": "string"
      },
      {
        "jsonName": "Investor_ID",
        "displayName": "Investor ID",
        "dataType": "string"
      },
      {
        "jsonName": "Investor",
        "displayName": "Investor",
        "dataType": "string"
      },
      {
        "jsonName": "Investing_x0020_Entity_x0020_Nam",
        "displayName": "Investing Entity Name",
        "dataType": "string"
      },
      {
        "jsonName": "Fund_Id",
        "displayName": "Fund_Id",
        "dataType": "string"
      },
      {
        "jsonName": "Fund_Name",
        "displayName": "Fund_Name",
        "dataType": "string"
      },
      {
        "jsonName": "Completed_State",
        "displayName": "Completed_State",
        "dataType": "string"
      },
      {
        "jsonName": "Completed_x0020_By",
        "displayName": "Completed_x0020_By",
        "dataType": "string"
      },
      {
        "jsonName": "Completed_x0020_Date",
        "displayName": "Completed Date",
        "dataType": "date",
        "format": "mm/dd/yyyy"
      },
      {
        "jsonName": "Pending_x0020_With",
        "displayName": "Pending With",
        "dataType": "string"
      },
      {
        "jsonName": "Pending_x0020_For",
        "displayName": "Pending For",
        "dataType": "string"
      },
      {
        "jsonName": "Transfer_Related",
        "displayName": "Transfer Related",
        "dataType": "boolean"
      },
      {
        "jsonName": "Requested_Amount",
        "displayName": "Requested_Amount",
        "dataType": "currency"
      },
      {
        "jsonName": "Estimated_Amount",
        "displayName": "Estimated_Amount",
        "dataType": "currency"
      },
      {
        "jsonName": "Estimated_Wire_Date",
        "displayName": "Estimated Wire Date",
        "dataType": "date",
        "format": "mm/dd/yyyy"
      },
      {
        "jsonName": "Amount",
        "displayName": "Final Amount",
        "dataType": "currency"
      },
      {
        "jsonName": "Pay_Date",
        "displayName": "Pay_Date",
        "dataType": "date",
        "format": "mm/dd/yyyy"
      },
      {
        "jsonName": "From_Account",
        "displayName": "From_Account",
        "dataType": "string"
      },
      {
        "jsonName": "From_Account_Number",
        "displayName": "From_Account_Number",
        "dataType": "string"
      },
      {
        "jsonName": "To_Account",
        "displayName": "To_Account",
        "dataType": "string"
      },
      {
        "jsonName": "To_Account_Number",
        "displayName": "To_Account_Number",
        "dataType": "string"
      }
    ]
  }]

  var init = function () {


  };

  var getListdata = function () {

  };

  var drawtable = function () {

  };

  var eventListener = function () {

  };

  return {
    init: init
  }
})();



$(document).ready(function () {
    
  genGridModule.init();
})
