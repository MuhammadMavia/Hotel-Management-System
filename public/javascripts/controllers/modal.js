angular.module("app")
    .controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
        var vm = this;
        vm.ok = function () {
            $modalInstance.close();
        };
        vm.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
        vm.changeAdminPass = function () {

        };
    });