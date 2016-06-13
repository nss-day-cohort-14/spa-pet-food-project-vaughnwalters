var dogBrandsRequest = new XMLHttpRequest();
var catBrandsRequest = new XMLHttpRequest();

var outputEl = document.getElementById("outputEl");

function loadDogBrandsPage () {
  outputEl.innerHTML += `<div class="dogBrands")>DOGFOOD BRANDS</div>`
  var dogBrandsObject = JSON.parse(event.target.responseText);
  outputEl.innerHTML += `<div class="dogBrands">`

  var dogBrandsArray = dogBrandsObject.dog_brands;
  for (var i=0; i<dogBrandsArray.length; i++) {
    var dogBrand = dogBrandsArray[i];
    outputEl.innerHTML += `
    <div>${dogBrand.name}</div>`
    var dogBrandTypesArray = dogBrand.types;
    for (var k=0; k<dogBrandTypesArray.length; k++) {
      var dogBrandTypes = dogBrandTypesArray[k];
      outputEl.innerHTML += `
      <div>${dogBrandTypes.type}</div>`

      var dogBrandVolumesArray = dogBrandTypes.volumes;
      for (var j=0; j<dogBrandVolumesArray.length; j++) {
        var dogBrandTypesVolumes = dogBrandVolumesArray[j];
        outputEl.innerHTML += `
        <div>${dogBrandTypesVolumes.name}</div>
        <div>${dogBrandTypesVolumes.price}</div>`
      };
    };    
  };
  outputEl.innerHTML += `</div>`
  catBrandsRequest.open("GET", "cat_brands.json");
  catBrandsRequest.send();
};


function loadCatBrandsPage () {
  var catBrandsObject = JSON.parse(event.target.responseText);
  outputEl.innerHTML += `<div class="catBrands">CATFOOD BRANDS</div>`

  var catBrandsArray = catBrandsObject.cat_brands;
  for (var i=0; i<catBrandsArray.length; i++) {
    var catBrand = catBrandsArray[i];
    outputEl.innerHTML += `
    <div>${catBrand.name}</div>
    <div>Good for the following breeds:</div>`
    var catBreeds = catBrand.breeds;
    for (var k=0; k<catBreeds.length; k++) {
      var catBreed = catBreeds[k];
      outputEl.innerHTML += `
      <span class="catBreeds">${catBreed}</span>`
    };

    var catBrandTypesArray = catBrand.types;
    for (var k=0; k<catBrandTypesArray.length; k++) {
      var catBrandTypes = catBrandTypesArray[k];
      outputEl.innerHTML += `
      <div>${catBrandTypes.type}</div>`

      var catBrandVolumesArray = catBrandTypes.volumes;
      for (var j=0; j<catBrandVolumesArray.length; j++) {
        var catBrandTypesVolumes = catBrandVolumesArray[j];
        outputEl.innerHTML += `
        <div>${catBrandTypesVolumes.name}</div>
        <div>${catBrandTypesVolumes.price}</div>`
      };
    };    
  };
  outputEl.innerHTML += `</div>`
};


dogBrandsRequest.open("GET", "dog_brands.json");
dogBrandsRequest.send();
dogBrandsRequest.addEventListener("load", loadDogBrandsPage);

catBrandsRequest.addEventListener("load", loadCatBrandsPage);


