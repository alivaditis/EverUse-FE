const camelToPascalCase = path => {
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
}

export { camelToPascalCase };