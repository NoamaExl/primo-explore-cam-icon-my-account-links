app.controller('PrmIconAfterController', ['$http', '$mdDialog', '$scope', function ($http, $mdDialog, $scope) {
    var vm = this;

    vm.$onInit = function () {
        if (this.parentCtrl.iconDefinition === 'account-card-details') {
            try {
                angular.element(document.getElementsByTagName('md-fab-actions')[0].children[2].children[0])[0].style.display = 'none';
            }catch(err) {
            }
            try {
                angular.element(document.querySelector('.settings-container')).find('button')[0].style.display = 'none';
            }catch(err){

            }

        }
    };

    var myAccountLink = function myAccountLink() {
        //window.open('http://www.lib.cam.ac.uk/library_widget/library_widget_login.cgi', '_blank');
        var parentEl = angular.element(document.body);

        $mdDialog.show({
            parent: parentEl,
            /**/
            template: '<md-dialog style="width:100%;padding:2em;max-width:500px;" aria-label="List dialog">' + '  <md-dialog-content >' + '   <iframe  flex style="border-width:0px;width:100%;min-height:500px" src="http://www.lib.cam.ac.uk/library_widget/library_widget_login.cgi"></iframe>' + '  </md-dialog-content>' + '  <md-dialog-actions>' + '<div flex layout="row" layout-align="center center">' + '       <md-button ng-click="closeDialog()" class="md-primary">' + '       {{"nui.locations.items.widget.close" | translate}}' + '       </md-button>' + '    </div>' + '</md-dialog-actions>' + '</md-dialog>',

            controller: DialogController
        });
        function DialogController($scope, $mdDialog) {

            $scope.closeDialog = function () {
                $mdDialog.hide();
            };
        }
    };

    vm.getLink = function () {
        return vm.opacLink;
    };
}]);

app.component('prmIconAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'PrmIconAfterController',
    template: ''
});
