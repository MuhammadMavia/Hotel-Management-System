angular.module("app")
    .service("report", function () {
        var vm = this;
        var dataKey = [
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
        var itemKay = [
            [{
            "category": "extra items",
            "categoryNo": 14,
            "item": "farmaishi chapati",
            "itemNo": 1,
            "perRate": 8,
            "qty": 5,
            "amount": 40,
            "dateAndTime": ["Wednesday", "2015-09-23T06:58:42.810Z"],
            "$$hashKey": "object:15"
        }], [{
            "category": "extra items",
            "categoryNo": 14,
            "item": "dispossible glass",
            "itemNo": 5,
            "perRate": 5,
            "qty": 2,
            "amount": 10,
            "dateAndTime": ["Wednesday", "2015-09-23T07:03:01.652Z"],
            "$$hashKey": "object:17"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 2,
            "amount": 300,
            "dateAndTime": ["Monday", "2015-09-28T11:26:18.929Z"],
            "$$hashKey": "object:15"
        }, {
            "category": "dilpasand karahi",
            "categoryNo": 2,
            "item": "plain karahi full (chicken)",
            "itemNo": 2,
            "perRate": 750,
            "qty": 2,
            "amount": 1500,
            "dateAndTime": ["Monday", "2015-09-28T11:26:22.971Z"],
            "$$hashKey": "object:19"
        }, {
            "category": "dilpasand sea foods items",
            "categoryNo": 3,
            "item": "special fish karahi (half)",
            "itemNo": 3,
            "perRate": 450,
            "qty": 3,
            "amount": 1350,
            "dateAndTime": ["Monday", "2015-09-28T11:26:32.991Z"],
            "$$hashKey": "object:23"
        }], [{
            "category": "dilpasand karahi",
            "categoryNo": 2,
            "item": "plain karahi half (mutton)",
            "itemNo": 3,
            "perRate": 550,
            "qty": 2,
            "amount": 1100,
            "dateAndTime": ["Monday", "2015-09-28T11:39:15.081Z"],
            "$$hashKey": "object:15"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Monday", "2015-09-28T11:39:20.085Z"],
            "$$hashKey": "object:19"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Monday", "2015-09-28T11:49:28.830Z"],
            "$$hashKey": "object:15"
        }, {
            "category": "dilpasand karahi",
            "categoryNo": 2,
            "item": "plain karahi full (chicken)",
            "itemNo": 2,
            "perRate": 750,
            "qty": 2,
            "amount": 1500,
            "dateAndTime": ["Monday", "2015-09-28T11:49:55.927Z"],
            "$$hashKey": "object:21"
        }, {
            "category": "dilpasand sea foods items",
            "categoryNo": 3,
            "item": "special fish karahi (half)",
            "itemNo": 3,
            "perRate": 450,
            "qty": 3,
            "amount": 1350,
            "dateAndTime": ["Monday", "2015-09-28T11:49:59.962Z"],
            "$$hashKey": "object:25"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Monday", "2015-09-28T11:53:59.579Z"],
            "$$hashKey": "object:15"
        }, {
            "category": "dilpasand karahi",
            "categoryNo": 2,
            "item": "plain karahi full (chicken)",
            "itemNo": 2,
            "perRate": 750,
            "qty": 2,
            "amount": 1500,
            "dateAndTime": ["Monday", "2015-09-28T11:54:03.593Z"],
            "$$hashKey": "object:19"
        }, {
            "category": "dilpasand sea foods items",
            "categoryNo": 3,
            "item": "special fish karahi (half)",
            "itemNo": 3,
            "perRate": 450,
            "qty": 3,
            "amount": 1350,
            "dateAndTime": ["Monday", "2015-09-28T11:54:17.627Z"],
            "$$hashKey": "object:24"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Tuesday", "2015-09-29T05:10:32.523Z"],
            "$$hashKey": "object:15"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Tuesday", "2015-09-29T05:11:19.293Z"],
            "$$hashKey": "object:15"
        }, {
            "category": "dilpasand karahi",
            "categoryNo": 2,
            "item": "plain karahi full (chicken)",
            "itemNo": 2,
            "perRate": 750,
            "qty": 2,
            "amount": 1500,
            "dateAndTime": ["Tuesday", "2015-09-29T05:11:37.383Z"],
            "$$hashKey": "object:19"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Tuesday", "2015-09-29T06:17:18.787Z"],
            "$$hashKey": "object:15"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken shahi qorma (plate)",
            "itemNo": 2,
            "perRate": 130,
            "qty": 1,
            "amount": 130,
            "dateAndTime": ["Tuesday", "2015-09-29T06:17:24.924Z"],
            "$$hashKey": "object:19"
        }, {
            "category": "dilpasand karahi",
            "categoryNo": 2,
            "item": "plain karahi full (chicken)",
            "itemNo": 2,
            "perRate": 750,
            "qty": 2,
            "amount": 1500,
            "dateAndTime": ["Tuesday", "2015-09-29T06:17:37.983Z"],
            "$$hashKey": "object:23"
        }], [{
            "category": "dilpasand karahi",
            "categoryNo": 2,
            "item": "plain karahi full (chicken)",
            "itemNo": 2,
            "perRate": 750,
            "qty": 2,
            "amount": 1500,
            "dateAndTime": ["Tuesday", "2015-09-29T06:20:05.265Z"],
            "$$hashKey": "object:15"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Tuesday", "2015-09-29T06:20:10.266Z"],
            "$$hashKey": "object:19"
        }, {
            "category": "dilpasand sea foods items",
            "categoryNo": 3,
            "item": "special fish karahi (half)",
            "itemNo": 3,
            "perRate": 450,
            "qty": 3,
            "amount": 1350,
            "dateAndTime": ["Tuesday", "2015-09-29T06:20:13.284Z"],
            "$$hashKey": "object:23"
        }, {
            "category": "dilpasand karahi",
            "categoryNo": 2,
            "item": "plain karahi half (chicken)",
            "itemNo": 1,
            "perRate": 380,
            "qty": 2,
            "amount": 760,
            "dateAndTime": ["Tuesday", "2015-09-29T06:20:21.309Z"],
            "$$hashKey": "object:27"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Tuesday", "2015-09-29T06:21:31.594Z"],
            "$$hashKey": "object:15"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken shahi qorma (plate)",
            "itemNo": 2,
            "perRate": 130,
            "qty": 1,
            "amount": 130,
            "dateAndTime": ["Tuesday", "2015-09-29T06:21:35.604Z"],
            "$$hashKey": "object:19"
        }, {
            "category": "dilpasand karahi",
            "categoryNo": 2,
            "item": "plain karahi full (chicken)",
            "itemNo": 2,
            "perRate": 750,
            "qty": 2,
            "amount": 1500,
            "dateAndTime": ["Tuesday", "2015-09-29T06:21:39.612Z"],
            "$$hashKey": "object:23"
        }, {
            "category": "dilpasand karahi",
            "categoryNo": 2,
            "item": "plain karahi half (chicken)",
            "itemNo": 1,
            "perRate": 380,
            "qty": 2,
            "amount": 760,
            "dateAndTime": ["Tuesday", "2015-09-29T06:21:43.613Z"],
            "$$hashKey": "object:27"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Tuesday", "2015-09-29T06:24:09.101Z"],
            "$$hashKey": "object:15"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Tuesday", "2015-09-29T06:27:51.055Z"],
            "$$hashKey": "object:15"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken shahi qorma (plate)",
            "itemNo": 2,
            "perRate": 130,
            "qty": 1,
            "amount": 130,
            "dateAndTime": ["Tuesday", "2015-09-29T06:27:55.066Z"],
            "$$hashKey": "object:19"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken karahi (plate)",
            "itemNo": 3,
            "perRate": 130,
            "qty": 1,
            "amount": 130,
            "dateAndTime": ["Tuesday", "2015-09-29T06:28:00.095Z"],
            "$$hashKey": "object:23"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Tuesday", "2015-09-29T06:29:51.452Z"],
            "$$hashKey": "object:15"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken shahi qorma (plate)",
            "itemNo": 2,
            "perRate": 130,
            "qty": 1,
            "amount": 130,
            "dateAndTime": ["Tuesday", "2015-09-29T06:29:57.480Z"],
            "$$hashKey": "object:19"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Tuesday", "2015-09-29T06:32:16.727Z"],
            "$$hashKey": "object:15"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken shahi qorma (plate)",
            "itemNo": 2,
            "perRate": 130,
            "qty": 1,
            "amount": 130,
            "dateAndTime": ["Tuesday", "2015-09-29T06:32:20.729Z"],
            "$$hashKey": "object:19"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Tuesday", "2015-09-29T06:33:57.153Z"],
            "$$hashKey": "object:15"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken shahi qorma (plate)",
            "itemNo": 2,
            "perRate": 130,
            "qty": 1,
            "amount": 130,
            "dateAndTime": ["Tuesday", "2015-09-29T06:34:03.154Z"],
            "$$hashKey": "object:19"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Tuesday", "2015-09-29T06:35:14.498Z"],
            "$$hashKey": "object:15"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken shahi qorma (plate)",
            "itemNo": 2,
            "perRate": 130,
            "qty": 2,
            "amount": 260,
            "dateAndTime": ["Tuesday", "2015-09-29T06:35:21.510Z"],
            "$$hashKey": "object:19"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Tuesday", "2015-09-29T06:39:07.700Z"],
            "$$hashKey": "object:15"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken shahi qorma (plate)",
            "itemNo": 2,
            "perRate": 130,
            "qty": 1,
            "amount": 130,
            "dateAndTime": ["Tuesday", "2015-09-29T06:39:10.700Z"],
            "$$hashKey": "object:19"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken karahi (plate)",
            "itemNo": 3,
            "perRate": 130,
            "qty": 4,
            "amount": 390,
            "dateAndTime": ["Tuesday", "2015-09-29T06:39:14.710Z"],
            "$$hashKey": "object:23"
        }, {
            "category": "dilpasand karahi",
            "categoryNo": 2,
            "item": "plain karahi half (chicken)",
            "itemNo": 1,
            "perRate": 380,
            "qty": 2,
            "amount": 760,
            "dateAndTime": ["Tuesday", "2015-09-29T06:39:17.720Z"],
            "$$hashKey": "object:27"
        }, {
            "category": "dilpasand special handi",
            "categoryNo": 4,
            "item": "dilpasand chicken handi half (boneless)",
            "itemNo": 1,
            "perRate": 500,
            "qty": 2,
            "amount": 1000,
            "dateAndTime": ["Tuesday", "2015-09-29T06:39:38.799Z"],
            "$$hashKey": "object:33"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Tuesday", "2015-09-29T06:41:11.361Z"],
            "$$hashKey": "object:15"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken shahi qorma (plate)",
            "itemNo": 2,
            "perRate": 130,
            "qty": 1,
            "amount": 130,
            "dateAndTime": ["Tuesday", "2015-09-29T06:41:14.361Z"],
            "$$hashKey": "object:19"
        }, {
            "category": "dilpasand karahi",
            "categoryNo": 2,
            "item": "plain karahi half (chicken)",
            "itemNo": 1,
            "perRate": 380,
            "qty": 2,
            "amount": 760,
            "dateAndTime": ["Tuesday", "2015-09-29T06:41:21.379Z"],
            "$$hashKey": "object:23"
        }, {
            "category": "dilpasand karahi",
            "categoryNo": 2,
            "item": "plain karahi full (chicken)",
            "itemNo": 2,
            "perRate": 750,
            "qty": 1,
            "amount": 750,
            "dateAndTime": ["Tuesday", "2015-09-29T06:41:40.436Z"],
            "$$hashKey": "object:27"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken karahi (plate)",
            "itemNo": 3,
            "perRate": 130,
            "qty": 1,
            "amount": 130,
            "dateAndTime": ["Tuesday", "2015-09-29T06:41:46.443Z"],
            "$$hashKey": "object:31"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Tuesday", "2015-09-29T06:43:19.100Z"],
            "$$hashKey": "object:15"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken shahi qorma (plate)",
            "itemNo": 2,
            "perRate": 130,
            "qty": 1,
            "amount": 130,
            "dateAndTime": ["Tuesday", "2015-09-29T06:43:22.100Z"],
            "$$hashKey": "object:19"
        }, {
            "category": "dilpasand karahi",
            "categoryNo": 2,
            "item": "plain karahi half (chicken)",
            "itemNo": 1,
            "perRate": 380,
            "qty": 1,
            "amount": 380,
            "dateAndTime": ["Tuesday", "2015-09-29T06:43:36.142Z"],
            "$$hashKey": "object:24"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken karahi (plate)",
            "itemNo": 3,
            "perRate": 130,
            "qty": 1,
            "amount": 130,
            "dateAndTime": ["Tuesday", "2015-09-29T06:43:42.169Z"],
            "$$hashKey": "object:29"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Tuesday", "2015-09-29T06:47:21.447Z"],
            "$$hashKey": "object:15"
        }, {
            "category": "dilpasand karahi",
            "categoryNo": 2,
            "item": "plain karahi half (chicken)",
            "itemNo": 1,
            "perRate": 380,
            "qty": 1,
            "amount": 380,
            "dateAndTime": ["Tuesday", "2015-09-29T06:47:25.462Z"],
            "$$hashKey": "object:19"
        }, {
            "category": "dilpasand sea foods items",
            "categoryNo": 3,
            "item": "special fish fry (half)",
            "itemNo": 1,
            "perRate": 380,
            "qty": 2,
            "amount": 380,
            "dateAndTime": ["Tuesday", "2015-09-29T06:47:29.462Z"],
            "$$hashKey": "object:23"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Tuesday", "2015-09-29T06:48:54.234Z"],
            "$$hashKey": "object:15"
        }, {
            "category": "dilpasand karahi",
            "categoryNo": 2,
            "item": "plain karahi half (chicken)",
            "itemNo": 1,
            "perRate": 380,
            "qty": 1,
            "amount": 380,
            "dateAndTime": ["Tuesday", "2015-09-29T06:49:06.235Z"],
            "$$hashKey": "object:19"
        }, {
            "category": "dilpasand sea foods items",
            "categoryNo": 3,
            "item": "special fish fry (half)",
            "itemNo": 1,
            "perRate": 380,
            "qty": 1,
            "amount": 380,
            "dateAndTime": ["Tuesday", "2015-09-29T06:49:11.236Z"],
            "$$hashKey": "object:23"
        }, {
            "category": "dilpasand sea foods items",
            "categoryNo": 3,
            "item": "special fish fry (full)",
            "itemNo": 2,
            "perRate": 700,
            "qty": 1,
            "amount": 700,
            "dateAndTime": ["Tuesday", "2015-09-29T06:49:16.236Z"],
            "$$hashKey": "object:27"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Tuesday", "2015-09-29T06:52:13.986Z"],
            "$$hashKey": "object:15"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken shahi qorma (plate)",
            "itemNo": 2,
            "perRate": 130,
            "qty": 1,
            "amount": 130,
            "dateAndTime": ["Tuesday", "2015-09-29T06:52:16.996Z"],
            "$$hashKey": "object:19"
        }, {
            "category": "dilpasand karahi",
            "categoryNo": 2,
            "item": "plain karahi half (chicken)",
            "itemNo": 1,
            "perRate": 380,
            "qty": 1,
            "amount": 380,
            "dateAndTime": ["Tuesday", "2015-09-29T06:52:21.998Z"],
            "$$hashKey": "object:23"
        }, {
            "category": "dilpasand sea foods items",
            "categoryNo": 3,
            "item": "special fish fry (half)",
            "itemNo": 1,
            "perRate": 380,
            "qty": 1,
            "amount": 380,
            "dateAndTime": ["Tuesday", "2015-09-29T06:52:25.016Z"],
            "$$hashKey": "object:27"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "mutton white qorma (plate)",
            "itemNo": 5,
            "perRate": 180,
            "qty": 1,
            "amount": 180,
            "dateAndTime": ["Tuesday", "2015-09-29T06:52:32.045Z"],
            "$$hashKey": "object:31"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Tuesday", "2015-09-29T06:56:56.274Z"],
            "$$hashKey": "object:15"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken shahi qorma (plate)",
            "itemNo": 2,
            "perRate": 130,
            "qty": 2,
            "amount": 260,
            "dateAndTime": ["Tuesday", "2015-09-29T06:57:01.287Z"],
            "$$hashKey": "object:19"
        }, {
            "category": "dilpasand karahi",
            "categoryNo": 2,
            "item": "plain karahi half (chicken)",
            "itemNo": 1,
            "perRate": 380,
            "qty": 1,
            "amount": 380,
            "dateAndTime": ["Tuesday", "2015-09-29T06:57:10.308Z"],
            "$$hashKey": "object:23"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken karahi (plate)",
            "itemNo": 3,
            "perRate": 130,
            "qty": 1,
            "amount": 130,
            "dateAndTime": ["Tuesday", "2015-09-29T06:57:21.339Z"],
            "$$hashKey": "object:28"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Tuesday", "2015-09-29T07:06:28.545Z"],
            "$$hashKey": "object:15"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken shahi qorma (plate)",
            "itemNo": 2,
            "perRate": 130,
            "qty": 1,
            "amount": 130,
            "dateAndTime": ["Tuesday", "2015-09-29T07:06:32.561Z"],
            "$$hashKey": "object:19"
        }, {
            "category": "dilpasand karahi",
            "categoryNo": 2,
            "item": "plain karahi full (chicken)",
            "itemNo": 2,
            "perRate": 750,
            "qty": 2,
            "amount": 1500,
            "dateAndTime": ["Tuesday", "2015-09-29T07:06:34.561Z"],
            "$$hashKey": "object:23"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken karahi (plate)",
            "itemNo": 3,
            "perRate": 130,
            "qty": 1,
            "amount": 130,
            "dateAndTime": ["Tuesday", "2015-09-29T07:06:38.562Z"],
            "$$hashKey": "object:27"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Tuesday", "2015-09-29T07:07:28.691Z"],
            "$$hashKey": "object:31"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken shahi qorma (plate)",
            "itemNo": 2,
            "perRate": 130,
            "qty": 1,
            "amount": 130,
            "dateAndTime": ["Tuesday", "2015-09-29T07:07:33.703Z"],
            "$$hashKey": "object:35"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 2,
            "amount": 150,
            "dateAndTime": ["Tuesday", "2015-09-29T07:15:42.805Z"],
            "$$hashKey": "object:15"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Tuesday", "2015-09-29T07:16:03.812Z"],
            "$$hashKey": "object:15"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken shahi qorma (plate)",
            "itemNo": 2,
            "perRate": 130,
            "qty": 1,
            "amount": 130,
            "dateAndTime": ["Tuesday", "2015-09-29T07:16:07.814Z"],
            "$$hashKey": "object:19"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Tuesday", "2015-09-29T07:31:06.888Z"],
            "$$hashKey": "object:15"
        }], [{
            "category": "salad+raita",
            "categoryNo": 10,
            "item": "fresh salad",
            "itemNo": 1,
            "perRate": 25,
            "qty": 1,
            "amount": 25,
            "dateAndTime": ["Tuesday", "2015-09-29T09:52:28.023Z"],
            "$$hashKey": "object:22"
        }, {
            "category": "dilpasand special items",
            "categoryNo": 5,
            "item": "mutton numkeen roast (1 kg)",
            "itemNo": 2,
            "perRate": 1200,
            "qty": 1,
            "amount": 1200,
            "dateAndTime": ["Tuesday", "2015-09-29T09:52:35.031Z"],
            "$$hashKey": "object:26"
        }, {
            "category": "dilpasand fast foods & snack's",
            "categoryNo": 6,
            "item": "chicken crispy broast",
            "itemNo": 1,
            "perRate": 170,
            "qty": 3,
            "amount": 510,
            "dateAndTime": ["Tuesday", "2015-09-29T09:52:41.035Z"],
            "$$hashKey": "object:30"
        }, {
            "category": "dilpasand desserts",
            "categoryNo": 8,
            "item": "dilpasand special faloda",
            "itemNo": 3,
            "perRate": 130,
            "qty": 2,
            "amount": 260,
            "dateAndTime": ["Tuesday", "2015-09-29T09:52:50.066Z"],
            "$$hashKey": "object:34"
        }], [{
            "category": "extra items",
            "categoryNo": 12,
            "item": "poori paratha",
            "itemNo": 2,
            "perRate": 30,
            "qty": 100,
            "amount": 3000,
            "dateAndTime": ["Wednesday", "2015-09-30T06:42:43.983Z"],
            "$$hashKey": "object:27"
        }, {
            "category": "dilpasand karahi",
            "categoryNo": 2,
            "item": "white karahi full (chicken)",
            "itemNo": 6,
            "perRate": 750,
            "qty": 2,
            "amount": 1500,
            "dateAndTime": ["Wednesday", "2015-09-30T06:43:11.129Z"],
            "$$hashKey": "object:32"
        }, {
            "category": "dilpasand fast foods & snack's",
            "categoryNo": 6,
            "item": "chicken zinger burger",
            "itemNo": 4,
            "perRate": 160,
            "qty": 4,
            "amount": 640,
            "dateAndTime": ["Wednesday", "2015-09-30T06:43:31.246Z"],
            "$$hashKey": "object:36"
        }], [{
            "category": "beverages (hot-n-cold)",
            "categoryNo": 11,
            "item": "soft drink 300 ml",
            "itemNo": 1,
            "perRate": 35,
            "qty": 2,
            "amount": 70,
            "dateAndTime": ["Wednesday", "2015-09-30T10:30:58.174Z"],
            "$$hashKey": "object:40"
        }], [{
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken ginger (boneless)",
            "itemNo": 1,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Wednesday", "2015-09-30T11:59:15.492Z"],
            "$$hashKey": "object:15"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken shahi qorma (plate)",
            "itemNo": 2,
            "perRate": 130,
            "qty": 2,
            "amount": 130,
            "dateAndTime": ["Wednesday", "2015-09-30T11:59:18.505Z"],
            "$$hashKey": "object:19"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken karahi (plate)",
            "itemNo": 3,
            "perRate": 130,
            "qty": 1,
            "amount": 130,
            "dateAndTime": ["Wednesday", "2015-09-30T11:59:21.517Z"],
            "$$hashKey": "object:23"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken white karahi (plate)",
            "itemNo": 4,
            "perRate": 150,
            "qty": 1,
            "amount": 150,
            "dateAndTime": ["Wednesday", "2015-09-30T11:59:23.525Z"],
            "$$hashKey": "object:27"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "mutton white qorma (plate)",
            "itemNo": 5,
            "perRate": 180,
            "qty": 4,
            "amount": 540,
            "dateAndTime": ["Wednesday", "2015-09-30T11:59:27.533Z"],
            "$$hashKey": "object:31"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "dal mash / dal chana (plate)",
            "itemNo": 6,
            "perRate": 50,
            "qty": 1,
            "amount": 50,
            "dateAndTime": ["Wednesday", "2015-09-30T11:59:30.546Z"],
            "$$hashKey": "object:35"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "mix vegetable (plate)",
            "itemNo": 7,
            "perRate": 50,
            "qty": 1,
            "amount": 50,
            "dateAndTime": ["Wednesday", "2015-09-30T11:59:33.560Z"],
            "$$hashKey": "object:39"
        }, {
            "category": "pakistani food's",
            "categoryNo": 1,
            "item": "chicken biryani half",
            "itemNo": 9,
            "perRate": 90,
            "qty": 1,
            "amount": 90,
            "dateAndTime": ["Wednesday", "2015-09-30T11:59:36.564Z"],
            "$$hashKey": "object:43"
        }, {
            "category": "dilpasand karahi",
            "categoryNo": 2,
            "item": "plain karahi half (chicken)",
            "itemNo": 1,
            "perRate": 380,
            "qty": 1,
            "amount": 380,
            "dateAndTime": ["Wednesday", "2015-09-30T11:59:43.601Z"],
            "$$hashKey": "object:49"
        }, {
            "category": "dilpasand karahi",
            "categoryNo": 2,
            "item": "plain karahi full (chicken)",
            "itemNo": 2,
            "perRate": 750,
            "qty": 2,
            "amount": 1500,
            "dateAndTime": ["Wednesday", "2015-09-30T11:59:49.616Z"],
            "$$hashKey": "object:55"
        }]
        ];
    });