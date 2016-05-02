angular.module("app")
    .controller("AdminSettings", function (MyDate, $modal, modalService) {
        var vm = this;
        vm.categoryList = MyDate.sendCatList();
        vm.categoryAdd = function () {
            MyDate.data.push({category: vm.newCategory, sNo: (MyDate.data.length + 1), items: []});
            localStorage.setItem("dataKey", JSON.stringify(MyDate.data));
            vm.cancelNew();
        };
        var editIndexCat = null;
        vm.$editCat = true;
        vm.categoryDlt = function (i, c) {
            if (c) {
                var modalOptions = {
                    closeButtonText: 'Cancel',
                    actionButtonText: 'Delete',
                    headerText: 'Delete ' + MyDate.data[i].category + ' ?',
                    bodyText: 'Are you sure you want to delete ?'
                };
                modalService.showModal({}, modalOptions).then(function (result) {
                    MyDate.data.splice(i, 1);
                    localStorage.setItem("dataKey", JSON.stringify(MyDate.data));
                });
                vm.cancelNew();
            }
            else {
                editIndexCat = i;
                vm.newCategory = MyDate.data[i].category;
                vm.$editCat = false;
            }
            localStorage.setItem("dataKey", JSON.stringify(MyDate.data));
        };
        vm.editDone = function () {
            vm.$editCat = true;
            MyDate.data[editIndexCat].category = vm.newCategory;
            localStorage.setItem("dataKey", JSON.stringify(MyDate.data));
            vm.cancelNew();
        };
        vm.$eidt = true;
        var editIndex = null;
        vm.setRate = function(){
            if(vm.itemDataRate  < 1){
                vm.itemDataRate = 1;
            }
        };
        vm.ItemsAdd = function (con) {
            if (con) {
                MyDate.data[vm.indexCat].items.push({
                    item: vm.itemDataItem,
                    rate: vm.itemDataRate,
                    itemNo: MyDate.data[vm.indexCat].items.length + 1
                });
            }
            else {
                MyDate.data[vm.indexCat].items[editIndex].item = vm.itemDataItem;
                MyDate.data[vm.indexCat].items[editIndex].rate = vm.itemDataRate;
                vm.$edit = true;
            }

            localStorage.setItem("dataKey", JSON.stringify(MyDate.data));
            vm.cancelNew();
        };
        vm.edit = function (i, c) {
            editIndex = i;
            if (c) {
                vm.$eidt = false;
                vm.itemDataItem = MyDate.data[vm.indexCat].items[editIndex].item;
                vm.itemDataRate = MyDate.data[vm.indexCat].items[editIndex].rate;
            }
            else {
                var modalOptions = {
                    closeButtonText: 'Cancel',
                    actionButtonText: 'Delete',
                    headerText: 'Delete ' + MyDate.data[vm.indexCat].items[i].item + ' ?',
                    bodyText: 'Are you sure you want to delete ?'
                };
                modalService.showModal({}, modalOptions).then(function (result) {
                    MyDate.data[vm.indexCat].items.splice(i, 1);
                    localStorage.setItem("dataKey", JSON.stringify(MyDate.data));
                });
            }
            localStorage.setItem("dataKey", JSON.stringify(MyDate.data));
        };
        vm.cancelNew = function () {
            vm.newCategory = "";
            vm.itemDataItem = "";
            vm.itemDataRate = "";
            vm.$eidt = true;
            editIndex = null;
        };
        vm.viewCatCon = false;
        vm.categoryShow = function (i) {
            vm.viewCatCon = true;
            vm.indexCat = i;
        };
    });