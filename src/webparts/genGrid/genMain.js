var genGridModule = (function () {

  var GridConfig = [{
    "headerName": "Wire Grid",
    "ListName": "Wires",
    "sortingAttr": "Investor",
    "sortOrder": "asc",
    "baseURL": "https://ivpdemo.sharepoint.com/",
    "defaultListCount": 10,
    "popOutConfig": {
      "urlName": "https://ivpdemo.sharepoint.com/SitePages/Wire-popUp.aspx",
      "queryParams": [
        "ID",
        "Title"
      ]
    },
    "gHeaders": [{
        "jsonName": "ID",
        "displayName": "ID",
        "visible": false
      },
      {
        "jsonName": "Title",
        "displayName": "Opportunity Name",
        "visible": true,
        "dataType": "string",
        "popUpEnabled": {
          "value": true,
          "icon": "fa-external-link"
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
        "displayName": "IEntity Name",
        "dataType": "string"
      },
      {
        "jsonName": "Fund_Id",
        "displayName": "Fund Id",
        "dataType": "string"
      },
      {
        "jsonName": "Fund_Name",
        "displayName": "Fund Name",
        "dataType": "string"
      },
      {
        "jsonName": "Completed_State",
        "displayName": "Status",
        "dataType": "string"
      },
      {
        "jsonName": "Completed_x0020_By",
        "displayName": "Completed By",
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
        "displayName": "Requested Amount",
        "dataType": "currency"
      },
      {
        "jsonName": "Estimated_Amount",
        "displayName": "Estimated Amount",
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
          "displayName": "Pay Date",
          "dataType": "date",
          "format": "mm/dd/yyyy"
      },
      {
          "jsonName": "From_Account",
          "displayName": "From Account",
          "dataType": "string"
      },
      {
          "jsonName": "From_Account_Number",
          "displayName": "From Account Number",
          "dataType": "string"
      },
      {
          "jsonName": "To_Account",
          "displayName": "To Account",
          "dataType": "string"
      },
      {
          "jsonName": "To_Account_Number",
          "displayName": "To Account Number",
          "dataType": "string"
      }
    ]
  }];
  var init = function () {
    getServiceData();
    // drawtable();
    
    
  };
  var getServiceData = function(){
    $.ajax({
      url: (GridConfig[0].baseURL ? GridConfig[0].baseURL : "https://ivpdemo.sharepoint.com/") + "_api/web/lists/getbytitle('" + GridConfig[0].ListName + "')/items",
      method: "GET",
      headers: {
        'Accept': 'application/json;odata=nometadata',
        'odata-version': ''
      },
      success: function (data) {
        var finalArr = data.value.map(function (item) {
          var tempArr = [];
          $.each(GridConfig[0].gHeaders, (k, obj) => {
            var dt = item[obj.jsonName];
            dt = utils.preFormatRules(dt, obj);
            tempArr.push(dt);
          })
          return tempArr;
        });

        drawtable(finalArr);
        
      },
      error: function (data) {
        console.log("Service Failed");
      }
    });
  };
  var table_elm;
  var drawtable = function (dataObj) {

    var $portletMain = $(".portletMain");
    $portletMain.empty();
    $portletMain.attr("id", "parent" + GridConfig[0].ListName);

    $portletMain.append(`
    <table id="tableMain${GridConfig[0].ListName}" class="display" style="width:100%">
          <thead>
            <tr>${getHeaders()}</tr>
          </thead>
          <tbody></tbody>
        </table>
    
    `);

    dataTableInit(dataObj);
    applyStyles();
    eventListener();
    function getHeaders() {

      let headerArr = [];
      $.each(GridConfig[0].gHeaders, (key, value) => {

        headerArr.push(`<th jn-name='${value.jsonName}' data-type='${value.dataType}'>${value.displayName}</th>`);
      });

      return headerArr.join("");
    };

    function applyStyles(){
      $("#tableMainWires").css("width", "2500px");
      table_elm.draw();
    }

    function dataTableInit(dataObj) {

      table_elm = $("#tableMain" + GridConfig[0].ListName).DataTable({
       
        "scrollX": true,
        "autoWidth": false,
        "data":dataObj,
        "order": [
          utils.getCurrentSorting()
        ],
        "autoWidth": true,
        "language": {
          "decimal": ".",
          "thousands": ","
        },
        
        "columnDefs": utils.createColumnDefs()
      });


      $("#tableMain" + GridConfig[0].ListName + "_wrapper").prepend("<span class='headerName'>" + GridConfig[0].headerName + "</span>");

      $("#tableMain" + GridConfig[0].ListName + "_length").css("display", "none");
      $("#tableMain" + GridConfig[0].ListName + "_filter label input").attr("placeholder", "Enter Name...");

      //Table layout adjustments


    };
  }
  var eventListener = function () {
    $('.dataTables_scrollBody tbody').on('mouseout', 'tr', function () {
      $(this).removeClass("activeHover");
    });

    $('.dataTables_scrollBody tbody').on('mouseover', 'tr', function () {
      $(this).addClass("activeHover");
    });

    $('.dataTables_scrollBody tbody').on('click', '.popOut', function () {

      var tr = $(this).closest("tr");
      var data = table_elm.row(tr).data();
      var config = GridConfig[0]["popOutConfig"];

      var filter = {};
      GridConfig[0].gHeaders.filter((k, v) => {
        if (config.queryParams.includes(k.jsonName)) {
          filter[k.jsonName] = data[v];
        }
      });

     
      // Encode the String
      var encodedString = btoa(JSON.stringify(filter));

      // Decode the String
      // var decodedString = atob(encodedString);
      // console.log(decodedString); // Outputs: "Hello World!"
      //---------------------------------


      var baseUrl = config["urlName"]+'?' + encodedString;
      window.open(baseUrl, '_blank');
    });
  };
  var utils = {
    getJsonName: function (headers) {
      var jsonArr = headers.map((obj) => {
        return obj.jsonName;
      });
      return jsonArr;
    },
    getCurrentSorting: function () {

      let order = GridConfig[0].sortOrder || "desc";
      var index;
      let sortAttr = GridConfig[0].sortingAttr || GridConfig[0].gHeaders[0].jsonName;
      $.each(GridConfig[0].gHeaders, function (k, v) {
        if (v.jsonName === sortAttr) {
          index = k;
        }
      });

      return [index, order];
    },
    fromatNumbers: function (nStr) {
      nStr += '';
      var x = nStr.split('.');
      var x1 = x[0];
      var x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
      }
      return "$" + x1 + x2;
    },
    formatDate: function (dateStr) {
      // "2019-01-01T08:00:00Z"
      var date = new Date(dateStr);
      var year = date.getFullYear();
      var month = (1 + date.getMonth()).toString();
      month = month.length > 1 ? month : '0' + month;
      var day = date.getDate().toString();
      day = day.length > 1 ? day : '0' + day;
      var finalDate = day + "/" + month + "/" + year;

      return finalDate;
    },
    preFormatRules: function (dataValue, dataObj) {
      if (dataValue === null) {
        if (dataObj.dataType === "date" || dataObj.dataType === "string") {
          dataValue = "-"
        } else if (dataObj.dataType === "currency") {
          dataValue = this.fromatNumbers(0);
        }
      } else {
        if (dataObj.dataType === "string") {

        } else if (dataObj.dataType === "date") {
          dataValue = this.formatDate(dataValue, dataObj.format)
        } else if (dataObj.dataType === "currency") {
          dataValue = this.fromatNumbers(dataValue);
        }
      }


      return dataValue;
    },
    createColumnDefs: function () {
      let renderIcon;
      let invisible = {
        "targets": [],
        "visible": false,
        "searchable": false
      };
      let renderColumns = {
        "render": function (data, type, row) {

          return "<i class='fa " + renderIcon + " popOut' aria-hidden='true'></i>" + data;
        },
        "targets": []
      };
      $.each(GridConfig[0].gHeaders, (key, value) => {
        if (value.visible !== undefined && !value.visible) {
          invisible.targets.push(key);
        } else if (value.popUpEnabled && value.popUpEnabled.value) {
          renderIcon = value.popUpEnabled.icon;
          renderColumns.targets.push(key);
        }
      });

      return [invisible, renderColumns];
    }
  };
  return {
    init: init
  }
})();

$(document).ready(function () {
  genGridModule.init();
})
