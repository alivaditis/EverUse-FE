const camelToPascalCase = (path) => {
  const characters = path.split("");
  const newCharacters = [];
  for (let i = 0; i < characters.length; i++) {
    if (i === 0) {
      newCharacters.push(characters[i].toUpperCase());
    } else if (characters[i] === characters[i].toUpperCase()) {
      newCharacters.push(" ");
      newCharacters.push(characters[i]);
    } else {
      newCharacters.push(characters[i]);
    }
  }
  return newCharacters.join("");
};

const cleanFetchedData = (items) => {
  const productNames = new Set(items.map((product) => product.name));
  const productsForDisplay = [];

  productNames.forEach((productName) => {
    const filteredProducts = items.filter(
      (product) => product.name === productName
    );

    const filteredProduct = filteredProducts.reduce(
      (acc, curr) => {
        acc.id = curr.name;
        acc.name = curr.name;
        acc.price = curr.price;
        acc.category = curr.category;
        acc.image = curr.image;
        acc.description = curr.description;
        if (!acc.colorOptions.includes(curr.color)) {
          acc.colorOptions.push(curr.color);
        }
        if (!acc.sizeOptions.includes(curr.size)) {
          acc.sizeOptions.push(curr.size);
        }
        return acc;
      },
      {
        colorOptions: [],
        sizeOptions: [],
      }
    );
    productsForDisplay.push(filteredProduct);
  });
  return productsForDisplay;
};

export { camelToPascalCase, cleanFetchedData };
