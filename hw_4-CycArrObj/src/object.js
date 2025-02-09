const newMenu = {
    name: 'Central Pub',
    location: 'London, England',
    weekMenu: function() {
        console.log(this.name, this.location);
    },
    menuMonday: [
        {
            food: 'Fish and chips',
            drink: 'Mineral water',
            dessert: 'Brownie'
        },
        {
            food: 'Shepherds pie',
            drink: 'Cappuccino',
            dessert: 'Fondant'
        }
    ],
    mondayMenu: function() {
        console.log(this.menuMonday)
    },

    menuTuesday:[
        {
            food: 'Beef steak',
            drink: 'Orange juice',
            dessert: 'Oreo cheesecake'
        },
        {
            food: 'Schnitzel',
            drink: 'Apple juice',
            dessert: 'Charlotte'
        },

    ],
    tuesdayMenu: function() {
        console.log(this.menuTuesday)
    },
};

newMenu.weekMenu();
newMenu.mondayMenu();
newMenu.tuesdayMenu();