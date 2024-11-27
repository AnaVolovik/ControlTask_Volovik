sap.ui.define([
		"ControlTaskVolovik/ControlTaskVolovik/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("ControlTaskVolovik.ControlTaskVolovik.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);