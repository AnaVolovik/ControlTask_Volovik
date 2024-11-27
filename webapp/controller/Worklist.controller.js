sap.ui.define([
    "ControlTaskVolovik/ControlTaskVolovik/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "ControlTaskVolovik/ControlTaskVolovik/model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
  ], function (BaseController, JSONModel, formatter, Filter, FilterOperator) {
    "use strict";

    return BaseController.extend("ControlTaskVolovik.ControlTaskVolovik.controller.Worklist", {

      formatter: formatter,

      onInit : function () {
        const oViewModel = new JSONModel({
          
        });
        this.setModel(oViewModel, "worklistView");

      },


    });
  }
);