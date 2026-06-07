// FD Drinks JS

// FD Drinks JS

const drinksMenu = [
  {
    category: "Non-Alcoholic Drinks",
    items: [
      { name: "Coffee", price: 3.95 },
      { name: "Tea", price: 3.95, note: "Ask your server about flavors" },
      { name: "Hot Chocolate", price: 4.25 },
      { name: "Juice", price: 4.50, flavors: ["Orange", "Apple", "Cranberry"] },
      { name: "Milk", price: 4.50, flavors: ["White", "Chocolate"] },
      { name: "Pop", price: 3.95, note: "Ask your server about flavors" },
      { name: "Float", price: 7.99, flavors: ["Coke", "Diet Coke", "Root Beer"] }
    ]
  },

  {
    category: "Coffee & Espresso",
    items: [
      { name: "Espresso", price: 5.00 },
      { name: "Americano", price: 5.00 },
      { name: "Latte", price: 6.50 },
      { name: "Cappuccino", price: 6.50 },
      { name: "Mocha", price: 6.50 },
      { name: "Flat White", price: 6.50 },
      { name: "Iced Coffee", price: 4.99 }
    ],
    addOns: [
      { name: "Add Flavor Shot", price: 0.99 },
      { name: "Add Espresso Shot", price: 1.49 },
      { name: "Milk Alternative", option: "Oat Milk" }
    ]
  },

  {
    category: "Milkshakes",
    items: [
      {
        name: "Milkshake",
        price: 8.99,
        flavors: [
          "Chocolate",
          "Vanilla",
          "Strawberry",
          "Salted Caramel",
          "Coconut",
          "Butterscotch",
          "Banana",
          "Root Beer",
          "Black Cherry",
          "Banana Chocolate",
          "Blueberry",
          "Raspberry",
          "Orange Creamsicle"
        ]
      }
    ]
  },

  {
    category: "Alcoholic Drinks",
    items: [
      { name: "Beer", price: 6.95, size: "355ml", note: "Ask your server" },
      { name: "Cider", price: 6.95, size: "355ml", note: "Ask your server" },

      {
        name: "Caesar",
        prices: [
          { size: "1oz", price: 9.95 },
          { size: "2oz", price: 12.45 }
        ]
      },

      { name: "Mimosa", price: 12.95, size: "200ml" },

      {
        name: "Baileys & Coffee",
        prices: [
          { size: "1oz", price: 8.95 },
          { size: "2oz", price: 11.45 }
        ]
      },

      {
        name: "Shaft",
        prices: [
          { size: "1oz", price: 9.95 },
          { size: "2oz", price: 12.45 }
        ]
      }
    ]
  },

  {
    category: "Desserts",
    items: [
      { name: "Ice Cream Cone", price: 4.49 },
      { name: "Sundae", price: 6.95, flavors: ["Chocolate", "Caramel", "Strawberry"] }
    ]
  }
];