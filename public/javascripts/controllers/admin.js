angular.module("app")
    .controller("Admin", function ($state, MyDate, $modal) {
        var vm = this;
        var editReqIndex;
        $state.go('adminPanel.settings');

        vm.putInList = MyDate.sandArrOfUser();
        vm.editAndAdd = false;
        vm.showAndHideUser = true;
        vm.showAndHideForm = false;
        vm.createUser = function ()
        {
            vm.obj = {
                name: vm.name,
                email: vm.email,
                password: vm.password,
                nic: vm.nic,
                mobile: vm.mobile
            };
            if (vm.editAndAdd) {
                MyDate.user[editReqIndex] = vm.obj;
                vm.editAndAdd = false;
            } else {
                MyDate.user.push(vm.obj);
            }
            localStorage.setItem("userKey", JSON.stringify(MyDate.user));
            vm.putInList = MyDate.sandArrOfUser();
            vm.showAndHideForm = false;
            vm.clearForm();
        };
        vm.userEdit = function (i) {
            var editIndex = MyDate.sandArrOfUser()[i];
            editReqIndex = i;
            vm.name = editIndex.name;
            vm.email = editIndex.email;
            vm.password = editIndex.password;
            vm.nic = editIndex.nic;
            vm.mobile = editIndex.mobile;
            vm.editAndAdd = true;
            vm.showAndHideUser = false;
            vm.viewForm();
        };
        vm.clearForm = function () {
            vm.name = "";
            vm.email = "";
            vm.password = "";
            vm.nic = "";
            vm.mobile = "";
            vm.showAndHideForm = false;
        };
        vm.viewUser = function (i) {
            vm.showAndHideForm = false;
            vm.showAndHideUser = false;
            vm.view = MyDate.sandArrOfUser()[i]
        };
        vm.viewForm = function () {
            vm.showAndHideUser = true;
            vm.showAndHideForm = true;
        };
        vm.deleteUser = function (i) {
            MyDate.user.splice(i, 1);
            vm.clearForm();
        };


        if (localStorage.getItem("itemsKey")) {
            vm.showReport = [];
            var loc = JSON.parse(localStorage.getItem("itemsKey"));
            var loc2 = JSON.parse(localStorage.getItem("itemsKey2"));
            console.log(loc);
            console.log(loc2);
            if (loc) {
                angular.forEach(loc, function (val) {
                    angular.forEach(val, function (valObj) {
                        valObj.showHideCat = true;
                        valObj.showHideItem = true;
                        vm.showReport.push(valObj);
                    });
                });
            }

            ///////////////////////////////////////

            var finalArray = [vm.showReport[0]];
            for (var t = 0; t < vm.showReport.length; t++) {
                for (var j = 0; j < finalArray.length; j++) {
                    var matched = false;
                    if (vm.showReport[t].item == finalArray[j].item) {
                        finalArray[j].qty += vm.showReport[t].qty;
                        matched = true;
                        break;
                    }
                }
                if (!matched) {
                    finalArray.push(vm.showReport[t]);
                }
            }
            vm.showReport = finalArray;


            /////////////////////////////////////////

            var arr = [];
            var totalData = MyDate.data;
            for (var i = 0; i < totalData.length; i++) {
                arr.push({catName: totalData[i].category, itemArr: totalData[i].items, show: true, allItemSlt: true});
                var a = arr[i].itemArr;
                for (var d = 0; d < a.length; d++) {
                    a[d].show = true;
                }
            }
            vm.catArr = arr;


            //////////////////////////////////////////////


            vm.allCatSlt = true;
            vm.allCatSltFunc = function (o) {
                if (o) {
                    for (var i = 0; i < vm.catArr.length; i++) {
                        vm.catArr[i].show = vm.allCatSlt;
                    }
                }
                else {
                    for (var j = 0; j < vm.catArr.length; j++) {
                        if (!vm.catArr[j].show) {
                            vm.allCatSlt = false;
                            break;
                        } else {
                            vm.allCatSlt = true;
                        }
                    }
                }
            };
            vm.allItemSlt = true;
            vm.allItemSltFunc = function (o, ind) {
                var a = vm.catArr[ind].itemArr;
                if (o) {
                    for (var i = 0; i < a.length; i++) {
                        a[i].show = vm.catArr[ind].allItemSlt;
                    }
                }
                else {
                    for (var j = 0; j < a.length; j++) {
                        if (!a[j].show) {
                            vm.catArr[ind].allItemSlt = false;
                            break;
                        } else {
                            vm.catArr[ind].allItemSlt = true;
                        }
                    }
                }
            };
            vm.resultFunc = function (con, vlu, itm, id) {
                for (var k = 0; k < vm.showReport.length; k++) {
                    var val = vm.showReport[k];
                    if (con == "item" && itm == val.item) {
                        val.showHideItem = vlu;
                        break;
                    }
                    if (con !== "cat" && con !== "item") {
                        val.showHideItem = vlu;
                        //break;
                    }
                    if (con == "cat" && itm == val.category) {
                        console.log(vm.catArr[id]);
                        vm.catArr[id].allItemSlt = vlu;

                        angular.forEach(vm.catArr[id].itemArr, function (y) {
                            y.show = vlu;
                            val.showHideItem = vlu;
                        });


                        val.showHideCat = vlu;
                    }
                }
                vm.totalRes();
            };
            vm.totalRes = function () {
                var num = 0;
                vm.totalAmount = 0;
                vm.totalQty = 0;
                angular.forEach(vm.showReport, function (v) {
                    if (v.showHideCat && v.showHideItem) {
                        v.s = ++num;
                        vm.totalAmount += (v.qty * v.perRate);
                        vm.totalQty += v.qty;
                    }
                });
            };
            vm.totalRes();
            vm.showSelectAll = function (d, con, val) {
                if (d) {
                    angular.forEach(vm.showReport, function (v) {
                        v.showHideCat = con;
                        v.showHideItem = con;
                        angular.forEach(vm.catArr, function (v2) {
                            v2.allItemSlt = con;
                        });
                    });
                } else {
                    angular.forEach(vm.showReport, function (v) {
                        if (v.category == val) {
                            v.showHideItem = con;
                        }
                    });
                }
                vm.totalRes();
            };
        }

        {        /*Date picker start*/


            vm.today = function () {
                vm.dt = new Date();
            };
            vm.today();
            vm.clear = function () {
                vm.dt = null;
            };
            vm.open1 = function ($event) {
                vm.status.opened = true;
            };
            vm.dateOptions = {
                formatYear: 'yy',
                startingDay: 1
            };
            vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
            vm.format = vm.formats[0];
            vm.status = {
                opened: false
            };
            var tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            var afterTomorrow = new Date();
            afterTomorrow.setDate(tomorrow.getDate() + 2);
            vm.events = [
                {
                    date: tomorrow,
                    status: 'full'
                },
                {
                    date: afterTomorrow,
                    status: 'partially'
                }
            ];
            vm.getDayClass = function (date, mode) {
                if (mode === 'day') {
                    var dayToCheck = new Date(date).setHours(0, 0, 0, 0);
                    for (var i = 0; i < vm.events.length; i++) {
                        var currentDay = new Date(vm.events[i].date).setHours(0, 0, 0, 0);
                        if (dayToCheck === currentDay) {
                            return vm.events[i].status;
                        }
                    }
                }
                return '';
            };

            /*Date picker end*/

            vm.today2 = function () {
                vm.dt2 = new Date();
            };
            vm.today2();
            vm.clear2 = function () {
                vm.dt2 = null;
            };
            vm.open2 = function ($event) {
                vm.status2.opened = true;
            };
            vm.dateOptions2 = {
                formatYear: 'yy',
                startingDay: 1
            };
            vm.formats2 = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
            vm.format2 = vm.formats2[0];
            vm.status2 = {
                opened2: false
            };
            var tomorrow2 = new Date();
            tomorrow2.setDate(tomorrow2.getDate() + 1);
            var afterTomorrow2 = new Date();
            afterTomorrow.setDate(tomorrow2.getDate() + 2);
            vm.events2 = [
                {
                    date: tomorrow2,
                    status: 'full'
                },
                {
                    date: afterTomorrow2,
                    status: 'partially'
                }
            ];
            vm.getDayClass2 = function (date, mode) {
                if (mode === 'day') {
                    var dayToCheck2 = new Date(date).setHours(0, 0, 0, 0);
                    for (var i = 0; i < vm.events2.length; i++) {
                        var currentDay2 = new Date(vm.events2[i].date).setHours(0, 0, 0, 0);
                        if (dayToCheck2 === currentDay2) {
                            return vm.events2[i].status;
                        }
                    }
                }
                return '';
            };
            vm.searchByDate = function () {
                vm.byDate = vm.dt.toDateString() + " to " + vm.dt2.toDateString();
            };
            vm.open = function () {
                var modalInstance = $modal.open({
                    //animation: vm.animationsEnabled,
                    templateUrl: './templates/myModalContent.html',
                    controller: 'ModalInstanceCtrl as vm',
                    size: "sm",
                    resolve: {
                        items: function () {
                            return vm.items;
                        }
                    }
                });
            };
        }
    });


