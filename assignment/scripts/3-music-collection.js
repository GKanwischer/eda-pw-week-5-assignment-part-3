console.log('***** Music Collection *****')

let collection = [];

function addToCollection( title, artist, yearPublished){ // adds a new album to the collection array
    let newAlbum = { title, artist, yearPublished };
    collection.push( newAlbum );
    return newAlbum;
} // end addToCollection

function showCollection( collection ){ // displays the number of records in the collection, and displays each item in an easy to read format
    console.log( `The number of records in the album collection: ${collection.length}` );
    for( let i = 0; i < collection.length; i++ ){
        console.log( `${collection[i].title} by ${collection[i].artist}, punlished in ${collection[i].yearPublished}.` );
    }
} // end showCollection

function findByArtist( artist ){ // searches through to collection for a matching album, by the artist's name
    let artistMatch = [];
    for( let i = 0; i < collection.length; i++ ){
        if( collection[i].artist === artist ){
            artistMatch.push(collection[i]);
        }
    }
    return artistMatch; 
} // end findByArtist

/* Was unable to get the search function to work properly. Two albums from the collection would be 
returned if they both had the same artist, but different years. The yearPublished didn't behave in 
this manor, and would only return the full exact match, like intended.

function search( searchedItem ){ // search through the collection
    let result =[];
    if( !searchedItem || ( searchedItem.artist === undefined && searchedItem.yearPublished === undefined ) ){
        return collection;
    }
    for( let i = 0; i < collection.length; i++ ){
        const album = collection[i];
        if( searchedItem.artist && album.artist !== searchedItem.artist ){
            continue;
        }
        if( searchedItem.yearPublished && album.yearPublished !== searchedItem.yearPublished ){
            continue;    
        }
        result.push(album);
    }
    return result;
} // end search
*/

addToCollection( "2001", "Dr. Dre", 1999 );
addToCollection( "The Carter III", "Lil Wayne", 2008 );
addToCollection( "The Carter V", "Lil Wayne", 2018 );
addToCollection( "Illmatic", "Nas", 1994 );
addToCollection( "Californication", "Red Hot Chili Peppers", 1999 );
addToCollection( "Led Zeppelin IV", "Led Zepplin", 1971);

console.log( 'My album collection contains:', collection );
console.log(""); // to help with readability in the console

showCollection( collection );
console.log(""); // to help with readability in the console

console.log( 'These are the albums associated with your indicated artist within the collection:', findByArtist( "Lil Wayne" ) );
console.log( 'These are the albums associated with your indicated artist within the collection:', findByArtist( "Led Zepplin" ) );
console.log( 'These are the albums associated with your indicated artist within the collection:', findByArtist( "ACDC" ) );
console.log(""); // to help with readability in the console

/*
console.log( search( { artist: 'Lil Wayne', year: 2008 } ));
console.log( search( { artist: 'Ray Charles', year: 1957 } ));
console.log( search( { artist: 'Red Hot Chili Peppers', year: 1999 } )); */