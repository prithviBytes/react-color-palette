import chroma from "chroma-js";

//Level of colors we want
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

//Function to generate new Palette with different shades and rhb value
function generatePalette(starterPalette) {
  //defining a new Palette
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {}
  };

  //Color Object with different levels as the key value
  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  //for each color in the color palette
  for (let color of starterPalette.colors) {
    //get shade of that color
    let scale = getScale(color.color, 10).reverse();
    //saving color info in newPalette
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)")
      });
    }
  }
  return newPalette;
}
// function that returns an array with darkerColor, orignalcolor & white
function getRange(hexColor) {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}

// function to return different shade of a particular color
function getScale(hexColor, numberOfColor) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColor);
}

export { generatePalette };
