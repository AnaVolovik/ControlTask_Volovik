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
        isBusy: false
      });
      this.setModel(oViewModel, "worklistView");
    },

    onFilter: function(oEvent) {
      const sValue = oEvent.getParameter('newValue');
      this._filterHandler(sValue);
    },

    _filterHandler(sValue) {
      const oTable = this.getView().byId('table'),
            oFilter = new Filter({
              filters: [
                  new Filter('MaterialID', FilterOperator.Contains, sValue),
                  new Filter('GroupID', FilterOperator.EQ, sValue)
              ],
              and: false
            });

      oTable.getBinding('rows').filter(oFilter);
    },

    onShowStudent: function () {
      const sBoxMessage = this.getResourceBundle().getText("MBoxMessage"),
            sBoxTitle = this.getResourceBundle().getText("MBoxTitle");

        sap.m.MessageBox.information(sBoxMessage, {
        title: sBoxTitle,
        actions: [sap.m.MessageBox.Action.OK]
      });
    }


  });
}
);