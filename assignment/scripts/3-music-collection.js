console.log('***** Music Collection *****')

let collection = [];

function addToCollection( title, artist, yearPublished){ // adds a new album to the collection array
    let newAlbum = { title, artist, yearPublished };
    collection.push( newAlbum );
    return newAlbum;
} // end addToCollection


