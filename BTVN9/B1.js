// B1: Tạo 1 object gồm 3 object con với key là id bắt đầu từ 1
// object con gồm 3 cặp keys value:
// albumTitle: 'values'
// artist: 'value'
// track: [value, value, value]

let objects = {
  obj: [
    {
      id: 1,
      albumTitle: "title1",
      artist: "artist1",
      track: [1, 2, 3],
    },
    {
      id: 2,
      albumTitle: "title2",
      artist: "artist2",
      track: [4, 5, 6],
    },
    {
      id: 3,
      albumTitle: "title3",
      artist: "artist3",
      track: [7, 8, 9],
    },
  ],
};

// B2: viết chương trình CRUD cho object trên

// CREATE
function create(AlbumTitle, Artist) {
  let count = objects.obj.length + 1;

  objects.obj.push({
    id: count,
    albumTitle: AlbumTitle,
    artist: Artist,
    track: [10, 11, 12],
  });
}

create("title4", "artist4");

// READ
// Read all objects
function readAll() {
  console.log(objects);
}

// Read a specific object
// With ID
function findID(ID) {
  for (i = 0; i < objects.obj.length; i++) {
    if (objects.obj[i].id === ID) {
      console.log(objects.obj[i]);
    }
  }
}
// With album title
function findTitle(Title) {
  for (i = 0; i < objects.obj.length; i++) {
    if (objects.obj[i].albumTitle.toLowerCase() === Title.toLowerCase()) {
      console.log(objects.obj[i]);
    }
  }
}
// With Artist
function findArtist(Artist) {
  for (i = 0; i < objects.obj.length; i++) {
    if (objects.obj[i].artist.toLowerCase() === Artist.toLowerCase()) {
      console.log(objects.obj[i]);
    }
  }
}
// With Track
function findTrack(Track) {
  for (i = 0; i < objects.obj.length; i++) {
    for (j = 0; i < objects.obj[i].track.length; j++) {
      if (objects.obj[i].track[j] === Track) {
        console.log(objects.obj[i]);
      }
    }
  }
}

// UPDATE
// Update ID
function updateID(ID, NewID) {
  for (i = 0; i < objects.obj.length; i++) {
    if (objects.obj[i].id === ID) {
      objects.obj[i].id = NewID;
    }
  }
}
// Update album title
function updateTitle(Title, NewTitle) {
  for (i = 0; i < objects.obj.length; i++) {
    if (objects.obj[i].albumTitle.toLowerCase() === Title.toLowerCase()) {
      objects.obj[i].Title = NewTitle;
    }
  }
}
// Update Artist
function updateArtist(Artist, newArtist) {
  for (i = 0; i < objects.obj.length; i++) {
    if (objects.obj[i].artist.toLowerCase() === Artist.toLowerCase()) {
      objects.obj[i].artist = newArtist;
    }
  }
}
// Update Track (sau khi tìm obj bằng ID)
function updateTrack(ID, NewTrack) {
  for (i = 0; i < objects.obj.length; i++) {
    if (objects.obj[i].id === ID) {
      objects.obj[i].track.push(NewTrack);
    }
  }
}

// DELETE
// ID
function deleteID(ID) {
  for (i = 0; i < objects.obj.length; i++) {
    if (objects.obj[i].id === ID) {
      objects.obj.splice(i, 1);
    }
  }
}
// Album title
function deleteTitle(Title) {
  for (i = 0; i < objects.obj.length; i++) {
    if (objects.obj[i].albumTitle.toLowerCase() === Title.toLowerCase()) {
      objects.obj.splice(i, 1);
    }
  }
}
// Artist
function deleteArtist(Artist) {
  for (i = 0; i < objects.obj.length; i++) {
    if (objects.obj[i].artist.toLowerCase() === Artist.toLowerCase()) {
      objects.obj.splice(i, 1);
    }
  }
}
// Update Track (after find with ID)
function deleteTrack(ID, Track) {
  for (i = 0; i < objects.obj.length; i++) {
    if (objects.obj[i].id === ID) {
      for (j = 0; j < objects.obj[i].track.length; j++) {
        if (objects.obj[i].track[j] === Track) {
          objects.obj[i].track.splice(j, 1);
        }
      }
    }
  }
}

deleteTitle("Title1");
console.log(objects);
