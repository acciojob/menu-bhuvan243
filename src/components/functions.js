export function capitalizeFirstLetter(str) {
  console.log(str);
  const capitalizedResult = str
    .split(" ")
    .map(capitalize)
    .join(" ");
    return capitalizedResult;
  
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}