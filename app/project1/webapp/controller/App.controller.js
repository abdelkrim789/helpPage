sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (BaseController) {
    "use strict";

    return BaseController.extend("helperportal.controller.App", {

        /**
         * Called when the controller is initialized
         */
        onInit: function () {
            this.oOwnerComponent = this.getOwnerComponent();
            this.oRouter = this.oOwnerComponent.getRouter();

            // Attach event handler when route is matched
            this.oRouter.attachRouteMatched(this.onRouteMatched, this);
        },

        /**
         * Event handler: triggered when a route is matched
         * @param {sap.ui.base.Event} oEvent
         */
        onRouteMatched: function (oEvent) {
            var sRouteName = oEvent.getParameter("name");
            var oArguments = oEvent.getParameter("arguments");

            this.currentRouteName = sRouteName;
            this.currentPerson = oArguments.person;
        },

        /**
         * Event handler: triggered when the layout/state changes
         * @param {sap.ui.base.Event} oEvent
         */
        onStateChanged: function (oEvent) {
            var bIsNavigationArrow = oEvent.getParameter("isNavigationArrow");
            var sLayout = oEvent.getParameter("layout");

            // If navigation was triggered by arrow → update the route
            if (bIsNavigationArrow) {
                this.oRouter.navTo(this.currentRouteName, {
                    layout: sLayout,
                    person: this.currentPerson
                }, true);
            }
        }
    });
});
