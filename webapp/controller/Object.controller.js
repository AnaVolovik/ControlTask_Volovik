sap.ui.define([
    "ControlTaskVolovik/ControlTaskVolovik/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History",
    "ControlTaskVolovik/ControlTaskVolovik/model/formatter"
  ], function (
    BaseController,
    JSONModel,
    History,
    formatter
  ) {
    "use strict";

    return BaseController.extend("ControlTaskVolovik.ControlTaskVolovik.controller.Object", {

      formatter: formatter,

      onInit : function () {
        const oViewModel = new JSONModel({
          busy : true,
          delay : 0
        });

        this.getRouter().getRoute("object").attachPatternMatched(this._onObjectMatched, this);

        iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();
        this.setModel(oViewModel, "objectView");
        this.getOwnerComponent().getModel().metadataLoaded().then(function () {
            oViewModel.setProperty("/delay", iOriginalBusyDelay);
          }
        );
      },

      onNavBack : function() {
        var sPreviousHash = History.getInstance().getPreviousHash();

        if (sPreviousHash !== undefined) {
          history.go(-1);
        } else {
          this.getRouter().navTo("worklist", {}, true);
        }
      },

      _onObjectMatched : function (oEvent) {
        var sObjectId =  oEvent.getParameter("arguments").objectId;
        this.getModel().metadataLoaded().then( function() {
          var sObjectPath = this.getModel().createKey("MaterialID", {
            ID :  sObjectId
          });
          this._bindView("/" + sObjectPath);
        }.bind(this));
      },

      _bindView : function (sObjectPath) {
        var oViewModel = this.getModel("objectView"),
          oDataModel = this.getModel();

        this.getView().bindElement({
          path: sObjectPath,
          events: {
            change: this._onBindingChange.bind(this),
            dataRequested: function () {
              oDataModel.metadataLoaded().then(function () {
                oViewModel.setProperty("/busy", true);
              });
            },
            dataReceived: function () {
              oViewModel.setProperty("/busy", false);
            }
          }
        });
      },

      _onBindingChange : function () {
        var oView = this.getView(),
          oViewModel = this.getModel("objectView"),
          oElementBinding = oView.getElementBinding();

        if (!oElementBinding.getBoundContext()) {
          this.getRouter().getTargets().display("objectNotFound");
          return;
        }

        oViewModel.setProperty("/busy", false);
      }

    });

  }
);