angular.module("app")
    .controller("CashCounter", function (MyDate, $interval) {
        var vm = this;
        var loc = JSON.parse(localStorage.getItem("itemsKey"));
        var locArr = [];
        if (loc) {
            locArr = loc;
        }
        var item, selectedItem, editReqInd;
        vm.data = MyDate.data;
        vm.showHideEidt = false;
        vm.selectedItems = [];
        $interval(function () {
            var day;
            var getDate = new Date();
            day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            day = day[getDate.getDay()];
            vm.fullDate = [day, getDate];
        }, 1000);
        vm.getCategory = function () {
            if (vm.category <= 0) {
                vm.category = vm.data.length;
            }
            else if (vm.category > vm.data.length) {
                vm.category = 1;
            }
            var run = true;
            angular.forEach(vm.data, function (val, i) {
                if (val.sNo == vm.category) {
                    vm.categoryLebel = val.category;
                    item = i;
                    run = false;
                    vm.getItem();
                } else if (run) {
                    vm.categoryLebel = "";
                    vm.itemLebel = "";
                    vm.itemRate = "";
                }
            });
        };
        vm.getItem = function () {
            if (vm.item <= 0) {
                vm.item = vm.data[item].items.length;
            }
            else if(vm.item > vm.data[item].items.length){
                vm.item = 1;
            }
            var run = true;
            angular.forEach(vm.data[item].items, function (val) {
                if (val.itemNo == vm.item) {
                    vm.itemLebel = val.item;
                    vm.itemRate = val.rate;
                    selectedItem = val;
                    run = false;
                } else if (run) {
                    vm.itemLebel = "";
                    vm.itemRate = "";
                }
            });
        };
        vm.setQty = function(){
            if(vm.qty < 1){
                vm.qty = 1;
            }
        };
        vm.getTotal = function () {
            var totalAmount = 0;
            angular.forEach(vm.selectedItems, function (v, i) {
                totalAmount += v.perRate * v.qty
            });
            return totalAmount;
        };
        vm.addItem = function () {
            var obj = {
                category: vm.categoryLebel,
                categoryNo: vm.category,
                item: vm.itemLebel,
                itemNo: vm.item,
                perRate: selectedItem.rate,
                qty: vm.qty,
                amount: vm.qty * selectedItem.rate,
                dateAndTime: vm.fullDate
            };
            if (vm.showHideEidt) {
                var matchedEdit = false;
                vm.selectedItems.forEach(function (val, i, arr) {
                    if (val.categoryNo == vm.category && val.itemNo == vm.item) {
                        if (editReqInd != i) {
                            val.qty += vm.qty;
                            arr.splice(editReqInd, 1);
                        }
                        else {
                            val.qty = vm.qty;
                        }
                        matchedEdit = true;
                    }
                });
                if (!matchedEdit) {
                    vm.selectedItems[editReqInd] = obj;
                    console.log("Hello")
                }
                vm.showHideEidt = false;
                vm.clearForm();
                return;
            }
            else {
                if (vm.selectedItems.length == 0) {
                    vm.selectedItems.push(obj);
                }
                else {
                    var matched = false;
                    vm.selectedItems.forEach(function (val, i, arr) {
                        if (val.categoryNo == vm.category && val.itemNo == vm.item) {
                            val.qty += vm.qty;
                            matched = true;
                        }
                    });
                    if (!matched) {
                        vm.selectedItems.push(obj);
                    }
                }
            }
            vm.clearForm();
        };
        vm.clearForm = function () {
            vm.qty = "";
            vm.item = "";
            vm.category = "";
            vm.itemLebel = "";
            vm.itemRate = "";
            vm.categoryLebel = "";
            vm.showHideEidt = false;
        };
        vm.removeItem = function (i) {
            vm.selectedItems.splice(i, 1);
        };
        vm.itemEdit = function (i) {
            editReqInd = i;
            var it = vm.selectedItems[i];
            vm.showHideEidt = true;
            vm.category = it.categoryNo;
            vm.item = it.itemNo;
            vm.qty = it.qty;
            vm.getCategory();
            vm.getItem();
        };
        vm.saveToLocalStorage = function () {
            var catObj = [];
            var isNaM = true;
            var a = vm.selectedItems;


            for (var i = 0; i < a.length; i++) {
                for (var j = 0; j < catObj.length; j++) {
                    if (a[i].category == catObj[j].category) {
                        catObj[j].items.push({name: a[i].item, qty: a[i].qty, rate: a[i].perRate});
                        isNaM = false;
                        break;
                    }
                    else {
                        isNaM = true;
                    }
                }
                if (catObj.length == 0 || isNaM) {
                    catObj.push({
                        category: a[i].category,
                        time: a[i].dateAndTime,
                        items: [{name: a[i].item, qty: a[i].qty, rate: a[i].perRate}],
                        categoryNo: a[i].categoryNo,
                    })
                }
            }
            locArr.push(vm.selectedItems);
            localStorage.setItem("itemsKey", JSON.stringify(locArr));
            localStorage.setItem("itemsKey2", JSON.stringify(catObj));
            vm.selectedItems = [];
        };
    });