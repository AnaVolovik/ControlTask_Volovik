sap.ui.define([
    "ControlTaskVolovik/ControlTaskVolovik/controller/BaseController"
  ], function (BaseController) {
    "use strict";

    return BaseController.extend("ControlTaskVolovik.ControlTaskVolovik.controller.NotFound", {

      onLinkPressed : function () {
        this.getRouter().navTo("worklist");
      }

    });

  }
);