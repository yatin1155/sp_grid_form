var genFormModule = (function () {

  var config = [{
    "baseURL": "https://ivpdemo.sharepoint.com/",
    "newFormGrid": {
      "headerName": "Wire Details",
      "ListName": "Wires",
      "gHeaders": [{
          "jsonName": "Title",
          "type": "textField",
          "dataType": "string",
          "displayName": "Transaction Name",
          "addClass": "",
          "errortext": "Enter a valid string."
        }, {
          "jsonName": "Activity_Type",
          "type": "textField",
          "dataType": "string",
          "displayName": "Activity_Type",
          "addClass": "",
          "errortext": "Enter a valid string."
        },
        {
          "jsonName": "Opportunity_Id",
          "type": "textField",
          "dataType": "number",
          "displayName": "Opportunity_id",
          "addClass": "",
          "errortext": "Enter a valid number."
        },
        {
          "jsonName": "Investor_ID",
          "type": "textField",
          "dataType": "number",
          "displayName": "Investor_ID",
          "addClass": "",
          "errortext": "Enter a valid number."
        },
        {
          "jsonName": "Investor",
          "type": "textField",
          "dataType": "string",
          "displayName": "Investor",
          "addClass": "",
          "errortext": "Enter a valid string."
        },
        {
          "jsonName": "Investing_x0020_Entity_x0020_Nam",
          "type": "textField",
          "dataType": "string",
          "displayName": "Investing_Entity_Name",
          "addClass": "",
          "errortext": "Enter a valid string."
        },
        {
          "jsonName": "Fund_Id",
          "type": "textField",
          "dataType": "number",
          "displayName": "Fund_Id",
          "addClass": "",
          "errortext": "Enter a valid number."
        },
        {
          "jsonName": "Fund_Name",
          "type": "textField",
          "dataType": "string",
          "displayName": "Fund_Name",
          "addClass": "",
          "errortext": "Enter a valid string."
        },
        {
          "jsonName": "Amount",
          "type": "textField",
          "dataType": "currency",
          "displayName": "Final_Amount",
          "addClass": "",
          "errortext": "Enter a valid number."
        },
        {
          "jsonName": "Completed_x0020_Date",
          "type": "textField",
          "displayName": "Completed Date",
          "dataType": "date",
          "format": "mm/dd/yyyy"
        },
        {
          "jsonName": "Completed_State",
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
          "jsonName": "Title",
          "type": "textField",
          "dataType": "string",
          "displayName": "Transaction Name",
          "property": "readonly",
          "addClass": "forcedDisabled",
          "errortext": "Enter a valid string."
        },
        {
          "jsonName": "Activity_Type",
          "type": "textField",
          "dataType": "string",
          "displayName": "Activity Type",
          "addClass": "",
          "errortext": "Enter a valid string."
        },
        {
          "jsonName": "Opportunity_Id",
          "type": "textField",
          "dataType": "number",
          "displayName": "Opp Id",
          "addClass": "forcedDisabled",
          "errortext": "Enter a valid number."
        },
        {
          "jsonName": "Investor_ID",
          "type": "textField",
          "dataType": "number",
          "displayName": "Investor ID",
          "addClass": "",
          "errortext": "Enter a valid number.",
          "precision": 2
        },
        {
          "jsonName": "Investor",
          "type": "textField",
          "dataType": "string",
          "displayName": "Investor",
          "addClass": "",
          "errortext": "Enter a valid string."
        },
        {
          "jsonName": "Investing_x0020_Entity_x0020_Nam",
          "type": "textField",
          "dataType": "string",
          "displayName": "Entity Name",
          "addClass": "",
          "errortext": "Enter a valid string."
        },
        {
          "jsonName": "Fund_Id",
          "type": "textField",
          "dataType": "number",
          "displayName": "Fund Id",
          "addClass": "",
          "errortext": "Enter a valid number."
        },
        {
          "jsonName": "Fund_Name",
          "type": "textField",
          "dataType": "string",
          "displayName": "Fund Name",
          "addClass": "",
          "errortext": "Enter a valid string."
        },
        {
          "jsonName": "Amount",
          "type": "textField",
          "dataType": "currency",
          "displayName": "Amount",
          "addClass": "",
          "errortext": "Enter a valid number.",
          "precision": 2
        },
        {
          "jsonName": "Created",
          "type": "textField",
          "displayName": "Created Date",
          "dataType": "date",
          "format": "mm/dd/yyyy"
        },
        {
          "jsonName": "Completed_State",
          "type": "dropDown",
          "dataType": "string",
          "displayName": "Wire Status",
          "optionArr": [
            "None",
            "Initiated",
            "Completed",
            "Pending",
            "SendtoTMS",
            "TMSExportCompleted"
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
      updateFormLayout.init(decodedFilters);
    } else {
      newFormLayout.init();
    }

  };
  var __REQUESTDIGEST;
  var newFormLayout = {
    newFormConfig: config[0].newFormGrid,
    init: function () {
      var $portletMain = $(".portletMain");
      $portletMain.empty();
      $portletMain.attr("id", "parent_newFormGrid_" + config[0].newFormGrid.ListName);
      $portletMain.addClass("newFormGrid");

      $portletMain.append(this.drawForm());

      this.eventListeners();

      $portletMain = null;
    },
    drawForm: function () {

      var htmlArr = [];
      // Draw Header Name
      htmlArr.push(`
        <div class="portlet-title mdl-cell mdl-cell--12-col mdl-cell--12-col-table">
          <h8>
          ${config[0].newFormGrid.headerName}
          </h8>
        </div>
        `)

      //Draw Body

      htmlArr.push(`
        <div class="portlet-body mdl-cell mdl-cell--12-col mdl-cell--12-col-table">
            <form id="Main_Form" role="form">
                <div class="grid-container">
                    <div class="grid-item">${this.makeGHeaders()}</div>
                </div>
            </form>
        </div>
        `);

      //draw Btn Group

      htmlArr.push(`
        <div class="btnGroup"> 
           
            <div class="saveBtnGroup">
              <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" id="saveForm" data-upgraded=",MaterialButton,MaterialRipple">
                Submit
              <span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></button>
              <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" id="cancelForm" data-upgraded=",MaterialButton,MaterialRipple">
                Reset
              <span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></button>
            </div>
        </div>

        <div class="notify"><span id="notifyType" class=""></span></div>
        `);

      return htmlArr.join("");
    },
    makeGHeaders: function () {
      var domArr = [];
      $.each(this.newFormConfig.gHeaders, function (k, v) {
        if (v.type === "textField") {
          if (v.dataType === "string") {

            let sDom = `
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input"  type="text" id="${v.jsonName}" >
                    <label class="mdl-textfield__label" for="${v.jsonName}">${v.displayName}</label>
                    <span class="mdl-textfield__error">${v.errortext}</span>
                </div>
                `;
            domArr.push(sDom);
          } else if (v.dataType === "number" || v.dataType === "currency") {
            let sDom = `
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="number" pattern="-?[0-9]*(\.[0-9]+)?" id="${v.jsonName}">
                <label class="mdl-textfield__label" for="${v.jsonName}">${v.displayName}</label>
                <span class="mdl-textfield__error">${v.errortext}</span>
              </div>
              `;
            domArr.push(sDom);
          } else if (v.dataType === "email") {
            let sDom = `
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input class="mdl-textfield__input"  type="email" id="${v.jsonName}" >
                  <label class="mdl-textfield__label" for="${v.jsonName}">${v.displayName}</label>
                  <span class="mdl-textfield__error">${v.errortext}</span>
              </div>
              `;
            domArr.push(sDom);

          } else if (v.dataType === "date") {
            let sDom = `
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" jName='${v.jsonName}'>
                  <input class="mdl-textfield__input"  type="date" id="${v.jsonName}" >
                  <label class="mdl-textfield__label" for="${v.jsonName}">${v.displayName}</label>
                  <span class="mdl-textfield__error">${v.errortext}</span>
              </div>
              `;
            domArr.push(sDom);
          }

        } else if (v.type == "dropDown") {
          var getOptions = (arr) => {
            let tempArr = [];
            if (!v.multiSelect)
              tempArr.push("<option value=''></option>");
            $.each(arr, (k, v) => {
              tempArr.push("<option value='" + v + "'>" + v + "</option>");
            });

            return tempArr.join("");
          };
          var str = `<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label ${v.addClass}" styles="${v.styles}"> 
                            <select class="mdl-textfield__input" id="${v.jsonName}" name="${v.jsonName}" ${v.multiSelect == true ? 'multiple=true':''} >
                            ${getOptions(v.optionArr)}
                            </select>
                            <label class="mdl-textfield__label" for="${v.jsonName}">${v.displayName}</label>
                        </div>`
          domArr.push(str);
        }

      });

      return domArr.join("");

    },
    makeServiceCall: function (postBody) {

      var getToken = () => {
        $.ajax({
          url: config[0].baseURL + "_api/contextinfo",
          method: "POST",
          headers: {
            "Accept": "application/json; odata=verbose"
          },
          success: function (data) {
            __REQUESTDIGEST = data.d.GetContextWebInformation.FormDigestValue;
            makeRequest(postBody);
          },
          error: function (data, errorCode, errorMessage) {
            alert(errorMessage)
          }
        });
      };
      var makeRequest = (postBody) => {

        function createListItem(itemProperties, success, failure) {

          var itemType = getItemTypeForListName(config[0].newFormGrid.ListName);
          itemProperties["__metadata"] = {
            "type": itemType
          };
          var URL = config[0].baseURL + "_api/web/lists/getbytitle('" + config[0].newFormGrid.ListName + "')/items";
          $.ajax({
            url: URL,
            type: "POST",
            contentType: "application/json;odata=verbose",
            data: JSON.stringify(itemProperties),
            headers: {
              "Accept": "application/json;odata=verbose",
              "X-RequestDigest": __REQUESTDIGEST,
              // "Accept": "application/json; odata=verbose",
              // "content-type": "application/json; odata=verbose",
              // "X-RequestDigest": __REQUESTDIGEST,
              // "content-length": itemProperties.length,
              // "X-HTTP-Method": "MERGE",
              // "IF-MATCH": "*"
            },
            success: function (data) {
              // alert("success")
              success(data.d);
            },
            error: function (data) {
              // alert("failure")
              failure(data);
            }
          });
        }


        function getItemTypeForListName(name) {
          return "SP.Data." + name + "ListItem";

        }

        function printInfo() {
          $(".notify").toggleClass("active");
          $("#notifyType").toggleClass("success");

          setTimeout(function () {
            $(".notify").removeClass("active");
            $("#notifyType").removeClass("success");
            newFormLayout.resetForm();
          }, 2000);
        }

        function logError(error) {
          $(".notify").addClass("active");
          $("#notifyType").addClass("failure");

          setTimeout(function () {
            $(".notify").removeClass("active");
            $("#notifyType").removeClass("failure");
          }, 2000);
        }
        createListItem(postBody, printInfo, logError);

      };


      getToken();
    },
    resetForm: function () {
      $.each(this.newFormConfig.gHeaders, function (k, obj) {
        $("#" + obj.jsonName).val("");
      });
    },
    getFormData: function () {
      var values = {};
      $.each(this.newFormConfig.gHeaders, function (k, obj) {
        var elmValue = $("#" + obj.jsonName).val();
        if (obj.dataType == "date" && elmValue !== "") {
          let date = new Date(elmValue);
          elmValue = date.toISOString();
        } else if (obj.multiSelect) {
          elmValue = {
            "results": elmValue
          };

        } else if (obj.dataType == "number") {
          elmValue = +elmValue;
        } else if (obj.select2Temp) {
          elmValue = {
            "results": [elmValue]
          };
        }

        values[obj.jsonName] = elmValue;
      });

      //delete elements if they are empty
      for (var item in values) {
        if (values[item] == "") {
          delete values[item];
        }
      }

      return values;
    },
    eventListeners: function () {
      $("#saveForm").off("click");
      $("#saveForm").on("click", () => {
        var formData = this.getFormData();
        this.makeServiceCall(formData);
      });

      $("#cancelForm").off("click");
      $("#cancelForm").on("click", () => {
        this.resetForm();
      });
    }

  };

  var updateFormLayout = {
    updateConfig: config[0].UpdateFormGrid,
    init: function (decodedFilters) {

      this.getFilteredData(decodedFilters);
    },
    getFilteredData: function (filters) {

      var filterString = this.getFilterString(filters);


      var URL = config[0].baseURL + "_api/web/lists/getbytitle('" + this.updateConfig.ListName + "')/items?$filter=" + filterString;
      $.ajax({
        url: URL,
        type: "GET",
        headers: {
          'Accept': 'application/json;odata=nometadata',
          'odata-version': ''
        },
        success: function (data) {
          var itemObj = data["value"][0]
          var dataArray = (updateFormLayout.updateConfig.gHeaders).map((obj) => {
            var value = itemObj[obj.jsonName];
            if (obj.dataType === "number" || obj.dataType === "currency") {
              if (value == null) {
                value = 0;
              }

              value = utils.formatNumbers(value + "", obj.precision)
            } else if (obj.dataType === "date") {
              value = utils.formatDate(value);
            } else if (obj.dataType === "string" && (value === null || value === "null")) {
              value = "-";
            }


            return {
              [obj.jsonName]: value
            }
          });


          updateFormLayout.drawTemplate(dataArray);

        },
        error: function (data, errorCode, errorMessage) {
          alert(errorMessage)
        }
      });
    },
    getFilterString: function (filterObj) {
      var tempStr = "";
      $.each(filterObj, function (key, value) {
        tempStr += key + ' eq ' + value + ' & ';
      });
      return tempStr;
    },
    drawTemplate: function (dataArray) {

      var $portletMain = $(".portletMain");
      $portletMain.empty();
      $portletMain.attr("id", "parent_UpdateFormGrid_" + this.updateConfig.ListName);
      $portletMain.addClass("UpdateFormGrid");

      $portletMain.append(this.getFormHtml());

      this.eventListeners();

      $portletMain = null;
    },
    getFormHtml: function(){
        var htmlArr = [];

        //Header
        htmlArr.push(`
        <div class="portlet-title mdl-cell mdl-cell--12-col mdl-cell--12-col-table">
          <h8>
            <i class="fa fa-table"></i>
            ${this.updateConfig.headerName}
          </h8>
        </div>
        `);

        //body
        htmlArr.push(`
        <div class="portlet-body mdl-cell mdl-cell--12-col mdl-cell--12-col-table">
            <form id="update_Form" role="form"  class="disabled">
                <div class="grid-container">
                    <div class="grid-item">

                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input"  type="text" id="Activity_Name" >
                    <label class="mdl-textfield__label" for="Activity_Name">Activity Name</label>
                    <span class="mdl-textfield__error">Enter a valid string.</span>
                    </div>
                    
                    
                    </div>
                </div>
            </form>
        </div>
        `);

        return htmlArr.join("");

    },
    eventListeners: function(){

    }
  };

  var utils = {
    formatNumbers: function (nStr, precision = 0) {
      nStr = parseFloat(nStr).toFixed(precision);
      nStr += '';
      var x = nStr.split('.');
      var x1 = x[0];
      var x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
      }

      return x1 + x2;
    },
    formatDate: function (dateStr) {
      // "2019-01-01T08:00:00Z"
      var date = new Date(dateStr);
      var year = date.getFullYear();
      var month = (1 + date.getMonth()).toString();
      month = month.length > 1 ? month : '0' + month;
      var day = date.getDate().toString();
      day = day.length > 1 ? day : '0' + day;
      var finalDate = month + "/" + day + "/" + year;

      return finalDate;
    }
  }


  return {
    init
  }
})();

$(document).ready(function () {

  genFormModule.init();
})
