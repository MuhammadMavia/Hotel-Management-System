angular.module("app")
    .service('modalService', ['$modal',
        function ($modal) {

            var modalDefaults = {
                backdrop: true,
                keyboard: true,
                modalFade: true,
                templateUrl: 'templates/confirm-dialogue.html'
            };

            var modalOptions = {
                closeButtonText: 'Close',
                actionButtonText: 'OK',
                headerText: 'Proceed?',
                bodyText: 'Perform this action?'
            };

            this.showModal = function (customModalDefaults, customModalOptions) {
                if (!customModalDefaults) customModalDefaults = {};
                customModalDefaults.backdrop = 'static';
                return this.show(customModalDefaults, customModalOptions);
            };

            this.show = function (customModalDefaults, customModalOptions) {
                //Create temp objects to work with since we're in a singleton service
                var tempModalDefaults = {};
                var tempModalOptions = {};

                //Map angular-ui modal custom defaults to modal defaults defined in service
                angular.extend(tempModalDefaults, modalDefaults, customModalDefaults);

                //Map modal.html $scope custom properties to defaults defined in service
                angular.extend(tempModalOptions, modalOptions, customModalOptions);

                if (!tempModalDefaults.controller) {
                    tempModalDefaults.controller = function ($scope, $modalInstance) {
                        $scope.modalOptions = tempModalOptions;
                        $scope.modalOptions.ok = function (result) {
                            $modalInstance.close(result);
                        };
                        $scope.modalOptions.close = function (result) {
                            $modalInstance.dismiss('cancel');
                        };
                    }
                }

                return $modal.open(tempModalDefaults).result;
            };

        }])
    .service("MyDate", function(){
        this.user = [];
        var loc = JSON.parse(localStorage.getItem("userKey"));
        if(loc){
            this.user = loc;
        }
        var data = JSON.parse(localStorage.getItem("dataKey"));
        this.data = [
            {
                "category": "pakistani food's",
                "sNo": 1,
                "items": [{
                    "item": "chicken ginger (boneless)",
                    "rate": 150,
                    "itemNo": 1,
                    "show": true
                }, {
                    "item": "chicken shahi qorma (plate)",
                    "rate": 130,
                    "itemNo": 2,
                    "show": true
                }, {
                    "item": "chicken karahi (plate)",
                    "rate": 130,
                    "itemNo": 3,
                    "show": true
                }, {
                    "item": "chicken white karahi (plate)",
                    "rate": 150,
                    "itemNo": 4,
                    "show": true
                }, {
                    "item": "mutton white qorma (plate)",
                    "rate": 180,
                    "itemNo": 5,
                    "show": true
                }, {
                    "item": "dal mash / dal chana (plate)",
                    "rate": 50,
                    "itemNo": 6,
                    "show": true
                }, {
                    "item": "mix vegetable (plate)",
                    "rate": 50,
                    "itemNo": 7,
                    "show": true
                }, {"item": "lahori chana (plate)", "rate": 50, "itemNo": 8, "show": true}, {
                    "item": "chicken biryani half",
                    "rate": 90,
                    "itemNo": 9,
                    "show": true
                }, {"item": "chicken biryani full", "rate": 160, "itemNo": 10, "show": true}]
            }, {
                "category": "dilpasand karahi",
                "sNo": 2,
                "items": [{
                    "item": "plain karahi half (chicken)",
                    "rate": 380,
                    "itemNo": 1,
                    "show": true
                }, {
                    "item": "plain karahi full (chicken)",
                    "rate": 750,
                    "itemNo": 2,
                    "show": true
                }, {
                    "item": "plain karahi half (mutton)",
                    "rate": 550,
                    "itemNo": 3,
                    "show": true
                }, {
                    "item": "plain karahi full (mutton)",
                    "rate": 1100,
                    "itemNo": 4,
                    "show": true
                }, {
                    "item": "white karahi half (chicken)",
                    "rate": 380,
                    "itemNo": 5,
                    "show": true
                }, {
                    "item": "white karahi full (chicken)",
                    "rate": 750,
                    "itemNo": 6,
                    "show": true
                }, {
                    "item": "white karahi half (mutton)",
                    "rate": 550,
                    "itemNo": 7,
                    "show": true
                }, {
                    "item": "white karahi full (mutton)",
                    "rate": 1100,
                    "itemNo": 8,
                    "show": true
                }, {
                    "item": "balochi brown karahi half (chicken) (dry)",
                    "rate": 380,
                    "itemNo": 9,
                    "show": true
                }, {
                    "item": "balochi brown karahi full (chicken) (dry)",
                    "rate": 750,
                    "itemNo": 10,
                    "show": true
                }, {
                    "item": "balochi brown karahi half (mutton) (dry)",
                    "rate": 550,
                    "itemNo": 11,
                    "show": true
                }, {
                    "item": "balochi brown karahi full (mutton) (dry)",
                    "rate": 1100,
                    "itemNo": 12,
                    "show": true
                }, {
                    "item": "hara masala karahi half (chicken)",
                    "rate": 380,
                    "itemNo": 13,
                    "show": true
                }, {
                    "item": "hara masala karahi full (chicken)",
                    "rate": 750,
                    "itemNo": 14,
                    "show": true
                }, {
                    "item": "hara masala karahi half (mutton)",
                    "rate": 550,
                    "itemNo": 15,
                    "show": true
                }, {
                    "item": "hara masala karahi full (mutton)",
                    "rate": 1100,
                    "itemNo": 16,
                    "show": true
                }, {
                    "item": "special arabic karahi half (chicken)",
                    "rate": 400,
                    "itemNo": 17,
                    "show": true
                }, {
                    "item": "special arabic karahi full (chicken)",
                    "rate": 800,
                    "itemNo": 18,
                    "show": true
                }, {
                    "item": "special arabic karahi half (mutton)",
                    "rate": 600,
                    "itemNo": 19,
                    "show": true
                }, {
                    "item": "special arabic karahi full (mutton)",
                    "rate": 1200,
                    "itemNo": 20,
                    "show": true
                }, {
                    "item": "special makhan karahi half (chicken)",
                    "rate": 400,
                    "itemNo": 21,
                    "show": true
                }, {
                    "item": "special makhan karahi full (chicken)",
                    "rate": 800,
                    "itemNo": 22,
                    "show": true
                }, {
                    "item": "special makhan karahi half (mutton)",
                    "rate": 600,
                    "itemNo": 23,
                    "show": true
                }, {
                    "item": "special makhan karahi full (mutton)",
                    "rate": 1200,
                    "itemNo": 24,
                    "show": true
                }, {
                    "item": "special white papper karahi half (chicken)",
                    "rate": 400,
                    "itemNo": 25,
                    "show": true
                }, {
                    "item": "special white papper karahi full (chicken)",
                    "rate": 800,
                    "itemNo": 26,
                    "show": true
                }, {
                    "item": "special white papper karahi full (mutton)",
                    "rate": 600,
                    "itemNo": 27,
                    "show": true
                }, {
                    "item": "special white papper karahi full (mutton)",
                    "rate": 1200,
                    "itemNo": 28,
                    "show": true
                }, {
                    "item": "sp. kashmiri fruit karahi half (chicken)",
                    "rate": 425,
                    "itemNo": 29,
                    "show": true
                }, {
                    "item": "sp. kashmiri fruit karahi full (chicken)",
                    "rate": 850,
                    "itemNo": 30,
                    "show": true
                }, {
                    "item": "sp. kashmiri fruit karahi half (mutton)",
                    "rate": 650,
                    "itemNo": 31,
                    "show": true
                }, {"item": "sp. kashmiri fruit karahi full (mutton)", "rate": 1300, "itemNo": 32, "show": true}]
            }, {
                "category": "dilpasand sea foods items",
                "sNo": 3,
                "items": [{
                    "item": "special fish fry (half)",
                    "rate": 380,
                    "itemNo": 1,
                    "show": true
                }, {
                    "item": "special fish fry (full)",
                    "rate": 700,
                    "itemNo": 2,
                    "show": true
                }, {
                    "item": "special fish karahi (half)",
                    "rate": 450,
                    "itemNo": 3,
                    "show": true
                }, {
                    "item": "special fish karahi (full)",
                    "rate": 900,
                    "itemNo": 4,
                    "show": true
                }, {"item": "prown karahi (half)", "rate": 800, "itemNo": 5, "show": true}, {
                    "item": "prown karahi (full)",
                    "rate": 1600,
                    "itemNo": 6,
                    "show": true
                }, {"item": "fish broast", "rate": 200, "itemNo": 7, "show": true}, {
                    "item": "fish bar-b-q boti (plate)",
                    "rate": 200,
                    "itemNo": 8,
                    "show": true
                }, {"item": "fish chatni roll", "rate": 90, "itemNo": 9, "show": true}]
            }, {
                "category": "dilpasand special handi",
                "sNo": 4,
                "items": [{
                    "item": "dilpasand chicken handi half (boneless)",
                    "rate": 500,
                    "itemNo": 1,
                    "show": true
                }, {
                    "item": "dilpasand chicken handi full (boneless)",
                    "rate": 1000,
                    "itemNo": 2,
                    "show": true
                }, {
                    "item": "dilpasand sp. mutton handi half (with bone)",
                    "rate": 600,
                    "itemNo": 3,
                    "show": true
                }, {"item": "dilpasand sp. mutton handi full (with bone)", "rate": 1200, "itemNo": 4, "show": true}]
            }, {
                "category": "dilpasand special items",
                "sNo": 5,
                "items": [{
                    "item": "mutton steam raan (1 kg)",
                    "rate": 1200,
                    "itemNo": 1,
                    "show": true
                }, {
                    "item": "mutton numkeen roast (1 kg)",
                    "rate": 1200,
                    "itemNo": 2,
                    "show": true
                }, {"item": "chicken lahori tikka (with egg)", "rate": 200, "itemNo": 3, "show": true}]
            }, {
                "category": "dilpasand fast foods & snack's",
                "sNo": 6,
                "items": [{
                    "item": "chicken crispy broast",
                    "rate": 170,
                    "itemNo": 1,
                    "show": true
                }, {
                    "item": "chicken spicy broast",
                    "rate": 170,
                    "itemNo": 2,
                    "show": true
                }, {
                    "item": "chicken garlic mayo broast",
                    "rate": 200,
                    "itemNo": 3,
                    "show": true
                }, {"item": "chicken zinger burger", "rate": 160, "itemNo": 4, "show": true}, {
                    "item": "chicken burger",
                    "rate": 110,
                    "itemNo": 5,
                    "show": true
                }, {"item": "chicken burger jumbo", "rate": 150, "itemNo": 6, "show": true}, {
                    "item": "club sandwich",
                    "rate": 130,
                    "itemNo": 7,
                    "show": true
                }, {
                    "item": "ch. girll best sandwich",
                    "rate": 180,
                    "itemNo": 8,
                    "show": true
                }, {"item": "chicken nuggets (6pcs)", "rate": 200, "itemNo": 9, "show": true}]
            }, {
                "category": "dilpasand bar-b-q",
                "sNo": 7,
                "items": [{
                    "item": "chicken spicy tikka (leg)",
                    "rate": 130,
                    "itemNo": 1,
                    "show": true
                }, {
                    "item": "chicken spicy tikka (chest)",
                    "rate": 140,
                    "itemNo": 2,
                    "show": true
                }, {
                    "item": "chicken behari tikka (leg)",
                    "rate": 140,
                    "itemNo": 3,
                    "show": true
                }, {
                    "item": "chicken behari tikka (chest)",
                    "rate": 150,
                    "itemNo": 4,
                    "show": true
                }, {"item": "chicken malai tikka", "rate": 150, "itemNo": 5, "show": true}, {
                    "item": "chicken boti (plate)",
                    "rate": 160,
                    "itemNo": 6,
                    "show": true
                }, {
                    "item": "chicken malai boti (plate)",
                    "rate": 200,
                    "itemNo": 7,
                    "show": true
                }, {"item": "mutton boti (plate)", "rate": 240, "itemNo": 8, "show": true}, {
                    "item": "beef seekh kabab",
                    "rate": 160,
                    "itemNo": 9,
                    "show": true
                }, {"item": "beef gola kabab", "rate": 160, "itemNo": 10, "show": true}, {
                    "item": "chicken reshmi kabab",
                    "rate": 200,
                    "itemNo": 11,
                    "show": true
                }, {"item": "chicken chatni roll", "rate": 70, "itemNo": 12, "show": true}, {
                    "item": "chicken mayo roll",
                    "rate": 80,
                    "itemNo": 13,
                    "show": true
                }, {
                    "item": "chicken lahori shawarma",
                    "rate": 70,
                    "itemNo": 14,
                    "show": true
                }, {"item": "chicken arabi shawarma", "rate": 100, "itemNo": 15, "show": true}]
            }, {
                "category": "dilpasand desserts",
                "sNo": 8,
                "items": [{
                    "item": "dilpasand sp. rabri kheer (plate)",
                    "rate": 70,
                    "itemNo": 1,
                    "show": true
                }, {
                    "item": "dilpasand sp. doodh dulari (plate)",
                    "rate": 100,
                    "itemNo": 2,
                    "show": true
                }, {
                    "item": "dilpasand special faloda",
                    "rate": 130,
                    "itemNo": 3,
                    "show": true
                }, {"item": "dilpasand spcial surprize", "rate": 150, "itemNo": 4, "show": true}]
            }, {
                "category": "dilpasand shakes/ice creams",
                "sNo": 9,
                "items": [{"item": "mango milk shake", "rate": 80, "itemNo": 1, "show": true}, {
                    "item": "chikoo milk shake",
                    "rate": 80,
                    "itemNo": 2,
                    "show": true
                }, {"item": "banana milk shake", "rate": 80, "itemNo": 3, "show": true}, {
                    "item": "strawberry milk shake",
                    "rate": 90,
                    "itemNo": 4,
                    "show": true
                }, {
                    "item": "pineapple milk shake",
                    "rate": 90,
                    "itemNo": 5,
                    "show": true
                }, {
                    "item": "ice cream single scoop)",
                    "rate": 40,
                    "itemNo": 6,
                    "show": true
                }, {
                    "item": "ice cream double scoop",
                    "rate": 80,
                    "itemNo": 7,
                    "show": true
                }, {"item": "ice cream all flavour (per liter)", "rate": 300, "itemNo": 8, "show": true}]
            }, {
                "category": "salad+raita",
                "sNo": 10,
                "items": [{"item": "fresh salad", "rate": 25, "itemNo": 1, "show": true}, {
                    "item": "russian salad",
                    "rate": 70,
                    "itemNo": 2,
                    "show": true
                }, {
                    "item": "fresh raita",
                    "rate": 20,
                    "itemNo": 3,
                    "show": true
                }, {"item": "zeerz+podina raita (dispossible)", "rate": 25, "itemNo": 4, "show": true}]
            }, {
                "category": "beverages (hot-n-cold)",
                "sNo": 11,
                "items": [{
                    "item": "soft drink 300 ml",
                    "rate": 35,
                    "itemNo": 1,
                    "show": true
                }, {"item": "soft drink 500 ml", "rate": 50, "itemNo": 2, "show": true}, {
                    "item": "soft drink (can)",
                    "rate": 45,
                    "itemNo": 3,
                    "show": true
                }, {
                    "item": "mineral water (small)",
                    "rate": 30,
                    "itemNo": 4,
                    "show": true
                }, {"item": "mineral water (large)", "rate": 60, "itemNo": 5, "show": true}]
            }, {
                "category": "extra items",
                "sNo": 12,
                "items": [{"item": "farmaishi chapati", "rate": 8, "itemNo": 1, "show": true}, {
                    "item": "poori paratha",
                    "rate": 30,
                    "itemNo": 2,
                    "show": true
                }, {"item": "bun", "rate": 15, "itemNo": 3, "show": true}, {
                    "item": "bread slice (2 pcs)",
                    "rate": 15,
                    "itemNo": 4,
                    "show": true
                }, {"item": "dispossible glass", "rate": 5, "itemNo": 5, "show": true}]
            }
        ];
        if(data){
            this.data = data;
        }
         this.sNo = function(){
         for(var i = 0; i < this.data.length; i++){
         this.data[i].sNo = i+1;
         }
         //localStorage.setItem("dataKey",JSON.stringify(this.data))
         };
         this.sNo();

        this.sendCatList = function(){
            return this.data;
        };
        this.sandArrOfUser = function(){
            return this.user;
        }
    });