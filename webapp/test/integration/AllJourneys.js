/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"ControlTaskVolovik/ControlTaskVolovik/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ControlTaskVolovik/ControlTaskVolovik/test/integration/pages/Worklist",
	"ControlTaskVolovik/ControlTaskVolovik/test/integration/pages/Object",
	"ControlTaskVolovik/ControlTaskVolovik/test/integration/pages/NotFound",
	"ControlTaskVolovik/ControlTaskVolovik/test/integration/pages/Browser",
	"ControlTaskVolovik/ControlTaskVolovik/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ControlTaskVolovik.ControlTaskVolovik.view."
	});

	sap.ui.require([
		"ControlTaskVolovik/ControlTaskVolovik/test/integration/WorklistJourney",
		"ControlTaskVolovik/ControlTaskVolovik/test/integration/ObjectJourney",
		"ControlTaskVolovik/ControlTaskVolovik/test/integration/NavigationJourney",
		"ControlTaskVolovik/ControlTaskVolovik/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});