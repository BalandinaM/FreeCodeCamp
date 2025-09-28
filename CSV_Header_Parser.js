function getHeadings(csv) { 
  return csv.split(",").map(element => element.trim());
}