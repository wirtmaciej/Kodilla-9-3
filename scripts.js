var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.'
var dinosaur = 'triceratops'
var dinosaurUpperCase = dinosaur.toUpperCase();
var textreplaced = text.replace('Velociraptor', dinosaurUpperCase);
var length = textreplaced.length;
console.log(textreplaced.substr(0, length/2));
