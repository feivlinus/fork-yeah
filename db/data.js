const data = [
  {
    id: "1",
    name: "Pizza Soup",
    description:
      "Nice not so healthy dish but I swear it tastes wonderful. Buy a cheap as possible pizza. Throw everything inside a large pot. Cut the pizza, tomatoes and salami into very tiny chunks. Cook everything together for at least 12 hours.",
    imageURL:
      "https://res.cloudinary.com/dkipkog6r/image/upload/v1701358482/recipe-images/pizzasoup_m4goru.jpg",
    imageId: "recipe-images/pizzasoup_m4goru",
    preparationTime: "12 hours",
    ingredients: [
      { quantity: "4", name: "salmon fillets", id: "1-1" },
      { quantity: "1/4 cup", name: "fresh lemon juice", id: "1-2" },
      { quantity: "2 tbsp", name: "olive oil", id: "1-3" },
      { quantity: "1 tbsp", name: "fresh dill, chopped", id: "1-4" },
    ],
  },
  {
    id: "2",
    name: "Grilled Smiley",
    description:
      "A healthy and colorful salad with quinoa, fresh vegetables, and a tangy vinaigrette.",
    imageURL:
      "https://res.cloudinary.com/dkipkog6r/image/upload/v1701358484/recipe-images/grilled-smiley_ns7icw.png",
    imageId: "recipe-images/grilled-smiley_ns7icw",
    preparationTime: "40 min",
    ingredients: [
      { quantity: "1 cup", name: "quinoa, cooked", id: "2-1" },
      { quantity: "1 cup", name: "cherry tomatoes, halved", id: "2-2" },
      { quantity: "1/2 cup", name: "cucumber, diced", id: "2-3" },
      { quantity: "1/4 cup", name: "red onion, finely chopped", id: "2-4" },
      { quantity: "1/4 cup", name: "feta cheese, crumbled", id: "2-5" },
      { quantity: "2 tbsp", name: "fresh parsley, chopped", id: "2-6" },
      { quantity: "2 tbsp", name: "olive oil", id: "2-7" },
      { quantity: "1 tbsp", name: "balsamic vinegar", id: "2-8" },
      { quantity: "to taste", name: "salt and pepper", id: "2-9" },
    ],
  },
  {
    id: "3",
    name: "Haunted Lasagna",
    description: "Savory beef tacos topped with a refreshing avocado salsa.",
    imageURL:
      "https://res.cloudinary.com/dkipkog6r/image/upload/v1701358483/recipe-images/haunted-lansagna_yahano.png",
    imageId: "recipe-images/haunted-lansagna_yahano",
    preparationTime: "40 min",
    ingredients: [
      { quantity: "1 lb", name: "ground beef", id: "3-1" },
      { quantity: "1 packet", name: "taco seasoning", id: "3-2" },
      { quantity: "8", name: "taco shells", id: "3-3" },
      { quantity: "1 cup", name: "shredded lettuce", id: "3-4" },
    ],
  },
  {
    id: "4",
    name: "Inside-Out Lasagna",
    description:
      "Delicious pasta tossed in a vibrant pesto sauce and topped with sweet cherry tomatoes.",
    imageURL:
      "https://res.cloudinary.com/dkipkog6r/image/upload/v1701358483/recipe-images/inside-out-lasagna_pteejo.png",
    imageId: "recipe-images/inside-out-lasagna_pteejo",
    preparationTime: "40 min",
    ingredients: [
      { quantity: "12 oz", name: "penne pasta, cooked", id: "4-1" },
      { quantity: "1 cup", name: "fresh basil leaves", id: "4-2" },
      { quantity: "1/2 cup", name: "pine nuts, toasted", id: "4-3" },
      { quantity: "1/2 cup", name: "parmesan cheese, grated", id: "4-4" },
    ],
  },
  {
    id: "10",
    name: "Low Carb Ananas Soup",
    description:
      "Grilled chicken and colorful vegetables skewers marinated in a savory herb sauce.",
    imageURL:
      "https://res.cloudinary.com/dkipkog6r/image/upload/v1701358484/recipe-images/low-carb-ananas-soup_c7yf5o.png",
    imageId: "recipe-images/low-carb-ananas-soup_c7yf5o",
    preparationTime: "40 min",
    ingredients: [
      { quantity: "1 lb", name: "chicken breast, cut into cubes", id: "10-1" },
      { quantity: "1", name: "red bell pepper, cut into chunks", id: "10-2" },
      {
        quantity: "1",
        name: "yellow bell pepper, cut into chunks",
        id: "10-3",
      },
      { quantity: "1", name: "zucchini, sliced", id: "10-4" },
      { quantity: "1/4 cup", name: "olive oil", id: "10-5" },
      { quantity: "2 tbsp", name: "balsamic vinegar", id: "10-6" },
      { quantity: "1 tsp", name: "dried oregano", id: "10-7" },
    ],
  },
  {
    id: "5",
    name: "Unicorn Ice",
    description:
      "Quick and flavorful stir-fried shrimp with tender asparagus spears.",
    imageURL:
      "https://res.cloudinary.com/dkipkog6r/image/upload/v1701358483/recipe-images/unicorn-ice_ecd6t9.jpg",
    imageId: "recipe-images/unicorn-ice_ecd6t9",
    preparationTime: "40 min",
    ingredients: [
      { quantity: "1 lb", name: "shrimp, peeled and deveined", id: "5-1" },
      {
        quantity: "1 lb",
        name: "asparagus, trimmed and cut into 2-inch pieces",
        id: "5-2",
      },
      { quantity: "3 cloves", name: "garlic, minced", id: "5-3" },
      { quantity: "2 tbsp", name: "soy sauce", id: "5-4" },
      { quantity: "1 tbsp", name: "hoisin sauce", id: "5-5" },
      { quantity: "1 tbsp", name: "sesame oil", id: "5-6" },
    ],
  },
  {
    id: "6",
    name: "Krabby Patty Burger",
    description:
      "A classic Italian salad with fresh tomatoes, mozzarella, and basil.",
    imageURL:
      "https://res.cloudinary.com/dkipkog6r/image/upload/v1701358483/recipe-images/krabby-patty_oxmrbi.png",
    imageId: "recipe-images/krabby-patty_oxmrbi",
    preparationTime: "40 min",
    ingredients: [
      { quantity: "4", name: "ripe tomatoes, sliced", id: "6-1" },
      { quantity: "8 oz", name: "fresh mozzarella, sliced", id: "6-2" },
      { quantity: "1/2 cup", name: "fresh basil leaves", id: "6-3" },
      { quantity: "1/4 cup", name: "balsamic glaze", id: "6-4" },
    ],
  },
  {
    id: "7",
    name: "Slimey Burger",
    description:
      "Hearty and flavorful chili loaded with beans, vegetables, and spices.",
    imageURL:
      "https://res.cloudinary.com/dkipkog6r/image/upload/v1701358484/recipe-images/slime-burger_ykhxje.png",
    imageId: "recipe-images/slime-burger_ykhxje",
    preparationTime: "40 min",
    ingredients: [
      {
        quantity: "2 cans",
        name: "kidney beans, drained and rinsed",
        id: "7-1",
      },
      {
        quantity: "1 can",
        name: "black beans, drained and rinsed",
        id: "7-2",
      },
      { quantity: "1", name: "onion, chopped", id: "7-3" },
      { quantity: "1", name: "bell pepper, chopped", id: "7-4" },
      { quantity: "2 cloves", name: "garlic, minced", id: "7-5" },
      { quantity: "1 can", name: "diced tomatoes", id: "7-6" },
      { quantity: "1 cup", name: "corn kernels", id: "7-7" },
    ],
  },
  {
    id: "8",
    name: "Mushroom Risotto",
    description:
      "Creamy and comforting risotto with sautéed mushrooms and Parmesan cheese.",
    imageURL:
      "https://res.cloudinary.com/dkipkog6r/image/upload/v1701358485/recipe-images/generic-food-1_dopnzr.png",
    preparationTime: "40 min",
    imageId: "recipe-images/generic-food-1_dopnzr",
    ingredients: [
      { quantity: "1 cup", name: "Arborio rice", id: "8-1" },
      { quantity: "1/2 lb", name: "mushrooms, sliced", id: "8-2" },
      { quantity: "1", name: "onion, finely chopped", id: "8-3" },
      { quantity: "2 cloves", name: "garlic, minced", id: "8-4" },
    ],
  },
  {
    id: "9",
    name: "A variarity of Insects",
    description:
      "Classic homemade chocolate chip cookies that are chewy on the inside and crispy on the outside.",
    imageURL:
      "https://res.cloudinary.com/dkipkog6r/image/upload/v1701358482/recipe-images/a-variarity-of-insects_foavqq.png",
    imageId: "recipe-images/a-variarity-of-insects_foavqq",
    preparationTime: "40 min",
    ingredients: [
      { quantity: "2 1/4 cups", name: "all-purpose flour", id: "9-1" },
      { quantity: "1 tsp", name: "baking soda", id: "9-2" },
      { quantity: "1/2 tsp", name: "salt", id: "9-3" },
      { quantity: "1 cup", name: "unsalted butter, softened", id: "9-4" },
    ],
  },
];

export default data;
