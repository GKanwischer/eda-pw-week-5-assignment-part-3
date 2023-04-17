console.log('***** Music Collection *****')

let collection = [];

function addToCollection( title, artist, yearPublished){ // adds a new album to the collection array
    let newAlbum = { title, artist, yearPublished };
    collection.push( newAlbum );
    return newAlbum;
} // end addToCollection

addToCollection( "2001", "Dr. Dre", 1999 );
addToCollection( "The Carter III", "Lil Wayne", 2008 );
addToCollection( "The Carter V", "Lil Wayne", 2018 );
addToCollection( "Illmatic", "Nas", 1994 );
addToCollection( "Californication", "Red Hot Chili Peppers", 1999 );
addToCollection( "Led Zeppelin IV", "Led Zepplin", 1971);

console.log( collection );