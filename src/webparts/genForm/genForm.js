var genFormModule = (function () {

  var config = [{
    "baseURL": "https://ivpdemo.sharepoint.com/",
    "newFormGrid": {
      "headerName": "Wire Details",
      "ListName": "Wires",
      "gHeaders": [{
          "jsonName": "Activity_Type",
          "type": "textField",
          "dataType": "string",
          "displayName": "Activity_Type",
          "addClass": ""
        },
        {
          "jsonName": "Opportunity_id",
          "type": "textField",
          "dataType": "number",
          "displayName": "Opportunity_id",
          "addClass": ""
        },
        {
          "jsonName": "Investor_ID",
          "type": "textField",
          "dataType": "number",
          "displayName": "Investor_ID",
          "addClass": ""
        },
        {
          "jsonName": "Investor",
          "type": "textField",
          "dataType": "string",
          "displayName": "Investor",
          "addClass": ""
        },
        {
          "jsonName": "Investing_Entity_Name",
          "type": "textField",
          "dataType": "string",
          "displayName": "Investing_Entity_Name",
          "addClass": ""
        },
        {
          "jsonName": "Fund_Id",
          "type": "textField",
          "dataType": "number",
          "displayName": "Fund_Id",
          "addClass": ""
        },
        {
          "jsonName": "Fund_Name",
          "type": "textField",
          "dataType": "string",
          "displayName": "Fund_Name",
          "addClass": ""
        },
        {
          "jsonName": "Final_Amount",
          "type": "textField",
          "dataType": "currency",
          "displayName": "Final_Amount",
          "addClass": ""
        },
        {
          "jsonName": "Completed_x0020_Date",
          "type": "textField",
          "displayName": "Completed Date",
          "dataType": "date",
          "format": "mm/dd/yyyy"
        },
        {
          "jsonName": "Wire_Status",
          "type": "dropDown",
          "dataType": "string",
          "displayName": "Wire_Status",
          "optionArr": [
            "None",
            "Initiated",
            "Completed",
            "Pending",
            "Send to TMS",
            "TMS Export Completed"
          ]
        }
      ]
    },
    "UpdateFormGrid": {
      "headerName": "Wire Details",
      "ListName": "Wires",
      "gHeaders": [{
          "jsonName": "Activity_Type",
          "type": "textField",
          "dataType": "string",
          "displayName": "Activity_Type",
          "addClass": ""
        },
        {
          "jsonName": "Opportunity_id",
          "type": "textField",
          "dataType": "number",
          "displayName": "Opportunity_id",
          "addClass": ""
        },
        {
          "jsonName": "Investor_ID",
          "type": "textField",
          "dataType": "number",
          "displayName": "Investor_ID",
          "addClass": ""
        },
        {
          "jsonName": "Investor",
          "type": "textField",
          "dataType": "string",
          "displayName": "Investor",
          "addClass": ""
        },
        {
          "jsonName": "Investing_Entity_Name",
          "type": "textField",
          "dataType": "string",
          "displayName": "Investing_Entity_Name",
          "addClass": ""
        },
        {
          "jsonName": "Fund_Id",
          "type": "textField",
          "dataType": "number",
          "displayName": "Fund_Id",
          "addClass": ""
        },
        {
          "jsonName": "Fund_Name",
          "type": "textField",
          "dataType": "string",
          "displayName": "Fund_Name",
          "addClass": ""
        },
        {
          "jsonName": "Final_Amount",
          "type": "textField",
          "dataType": "currency",
          "displayName": "Final_Amount",
          "addClass": ""
        },
        {
          "jsonName": "Completed_x0020_Date",
          "type": "textField",
          "displayName": "Completed Date",
          "dataType": "date",
          "format": "mm/dd/yyyy"
        },
        {
          "jsonName": "Wire_Status",
          "type": "dropDown",
          "dataType": "string",
          "displayName": "Wire_Status",
          "optionArr": [
            "None",
            "Initiated",
            "Completed",
            "Pending",
            "Send to TMS",
            "TMS Export Completed"
          ]
        }
      ]
    }
  }];
  var init = function () {
    checkFormMode()
  };
  var checkFormMode = function () {

    let URL = window.location.href;
    if (URL.split("?")[1]) {
      var decodedFilters = atob(URL.split("?")[1]);
      decodedFilters = JSON.parse(decodedFilters);
      updateFormLayout(decodedFilters);
    } else {
      newFormLayout();
    }

  };

  var newFormLayout = function () {

  };

  var updateFormLayout = function (Filters) {

  };

  var utils = {

  }


  return {
    init
  }
})();

$(document).ready(function () {

  genFormModule.init();
})
