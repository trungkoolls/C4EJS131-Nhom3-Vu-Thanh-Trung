let name = document.getElementById("name");
let artwork = document.getElementById("artwork");
let number = document.getElementById("number");
let type1 = document.getElementById("type1");
let type2 = document.getElementById("type2");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let abilities = document.getElementById("abilities");
let nor = document.getElementById("nor");
let fir = document.getElementById("fir");
let wat = document.getElementById("wat");
let gra = document.getElementById("gra");
let ele = document.getElementById("ele");
let ice = document.getElementById("ice");
let fig = document.getElementById("fig");
let poi = document.getElementById("poi");
let roc = document.getElementById("roc");
let gro = document.getElementById("gro");
let fly = document.getElementById("fly");
let bug = document.getElementById("bug");
let psy = document.getElementById("psy");
let gho = document.getElementById("gho");
let dar = document.getElementById("dar");
let ste = document.getElementById("ste");
let dra = document.getElementById("dra");
let fai = document.getElementById("fai");
let hpBar = document.getElementById("HPBar");
let atkBar = document.getElementById("AtkBar");
let defBar = document.getElementById("DefBar");
let spaBar = document.getElementById("SpABar");
let spdBar = document.getElementById("SpDBar");
let speBar = document.getElementById("SpeBar");
let total = document.getElementById("total");
let totalhp = document.getElementById("totalHP");
let totalatk = document.getElementById("totalAtk");
let totaldef = document.getElementById("totalDef");
let totalspa = document.getElementById("totalSpa");
let totalspd = document.getElementById("totalSpd");
let totalspe = document.getElementById("totalSpe");
let maxHP = document.getElementById("maxHP");
let maxAtk = document.getElementById("maxAtk");
let maxDef = document.getElementById("maxDef");
let maxSpa = document.getElementById("maxSpa");
let maxSpd = document.getElementById("maxSpd");
let maxSpe = document.getElementById("maxSpe");
let minHP = document.getElementById("minHP");
let minAtk = document.getElementById("minAtk");
let minDef = document.getElementById("minDef");
let minSpa = document.getElementById("minSpa");
let minSpd = document.getElementById("minSpd");
let minSpe = document.getElementById("minSpe");
let liList = document.getElementsByTagName("li");
let myUl = document.getElementById("myUl");
let myLi = document.getElementsByTagName("li");
let inp = document.querySelector("input");
let slot = document.getElementsByClassName("slot");
let type = document.getElementsByClassName("type");
let searchBar = document.getElementById("searchBar");
let searchList = document.getElementById("searchResult");
let body = document.querySelector("body");
let videoContainer = document.getElementsByClassName("videoContainer");
let removeBtn = document.getElementsByClassName("removeBtn");

searchPokemon("charizard");

function searching(value) {
  fetch("./data/PokemonData.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (Data) {
      let searchResult = [];
      if (value != "") {
        for (i = 0; i < Data.length; i++) {
          let pokemonName = Data[i].Name.toLowerCase();
          let txtValue = value.toLowerCase();
          if (pokemonName.includes(txtValue)) {
            searchResult.push(pokemonName);
          }
          for (j = 0; j < searchResult.length; j++) {
            if (!searchResult[j].includes(txtValue)) {
              searchResult.splice(j, 1);
            }
          }
          for (n = 0; n < searchResult.length; n++) {
            for (m = 0; m < searchResult.length; m++) {
              if (searchResult[n] == searchResult[m] && n != m) {
                searchResult.splice(m, 1);
                m--;
              }
            }
          }
        }
      }

      for (i = 0; i < myLi.length; i++) {
        myLi[i].remove();
      }
      for (i = 0; i < myLi.length; i++) {
        myLi[i].remove();
      }
      for (i = 0; i < myLi.length; i++) {
        myLi[i].remove();
      }
      for (i = 0; i < myLi.length; i++) {
        myLi[i].remove();
      }
      for (i = 0; i < myLi.length; i++) {
        myLi[i].remove();
      }
      for (i = 0; i < myLi.length; i++) {
        myLi[i].remove();
      }

      for (i = 0; i < searchResult.length; i++) {
        let newA = document.createElement("a");
        newA.innerHTML = searchResult[i];
        newA.classList.add("searchResultItem");
        newA.href = "#";
        newA.onclick = function () {
          searchPokemon(this.innerHTML);
        };

        let newLi = document.createElement("li");
        newLi.appendChild(newA);
        myUl.appendChild(newLi);
      }
    });
}

function searchPokemon(value) {
  fetch("./data/PokemonData.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (Data) {
      for (i = 0; i < Data.length; i++) {
        let pokemonName = Data[i].Name.toLowerCase();
        if (value.toLowerCase() == pokemonName) {
          // Set artwork
          if (Data[i].Name == "Arceus") {
            artwork.src = "./img/pokemon_Artwork/493-normal.png";
          } else {
            if (
              !Data[i].Name.includes("Mega") ||
              Data[i].Name.includes("Meganium")
            ) {
              artwork.src = "./img/pokemon_Artwork/" + Data[i].Number + ".png";
            } else {
              switch (Data[i].Name) {
                case "Mega Charizard X":
                  artwork.src = "./img/pokemon_Artwork/6-mega-x.png";
                  break;
                case "Mega Charizard Y":
                  artwork.src = "./img/pokemon_Artwork/6-mega-y.png";
                  break;
                case "Mega Mewtwo X":
                  artwork.src = "./img/pokemon_Artwork/150-mega-x.png";
                  break;
                case "Mega Mewtwo Y":
                  artwork.src = "./img/pokemon_Artwork/150-mega-y.png";
                  break;
                default:
                  artwork.src =
                    "./img/pokemon_Artwork/" + Data[i].Number + "-mega.png";
              }
            }
          }

          // Set name
          name.innerHTML = Data[i].Name;

          // Set number
          number.innerHTML = Data[i].Number;

          // Set type
          setType(type1, Data[i]["Type 1"]);
          setType(type2, Data[i]["Type 2"]);

          // Set height
          height.innerHTML = Data[i].Height;

          // Set weight
          weight.innerHTML = Data[i].Weight;

          // Set abilities
          abilities.innerHTML = Data[i].Abilities;

          // Set type defenses
          setTypeDefenses(Data[i]);

          // Set height of stats bar
          setStatsBarHeight(Data[i]);

          // Set color of stats bar
          setStatsBarColor(hpBar, Data[i].HP);
          setStatsBarColor(atkBar, Data[i].Att);
          setStatsBarColor(defBar, Data[i].Def);
          setStatsBarColor(spaBar, Data[i].Spa);
          setStatsBarColor(spdBar, Data[i].Spd);
          setStatsBarColor(speBar, Data[i].Spe);

          // Set total stats
          setTotalStats(Data[i]);

          // Set max stats
          setMaxStats(Data[i]);

          // Set min stats
          setMinStats(Data[i]);

          // Change effective color of Type Defense
          for (j = 0; j < type.length; j++) {
            switch (type[j].innerHTML) {
              case "4":
                type[j].classList.remove(type[j].classList[1]);
                type[j].classList.add("superDuperEff");
                break;
              case "2":
                type[j].classList.remove(type[j].classList[1]);
                type[j].classList.add("superEff");
                break;
              case "1":
                type[j].classList.remove(type[j].classList[1]);
                type[j].innerHTML = "";
                break;
              case "0.5":
                type[j].classList.remove(type[j].classList[1]);
                type[j].classList.add("notVeryEff");
                break;
              case "0.25":
                type[j].classList.remove(type[j].classList[1]);
                type[j].classList.add("notVeryVeryEff");
                break;
              case "0":
                type[j].classList.remove(type[j].classList[1]);
                type[j].classList.add("notEff");
                break;
            }
          }
        }
      }
    });
}

let stats = {
  Total: 318,
  HP: 45,
  Atk: 49,
  Def: 49,
  SpA: 65,
  SpD: 65,
  Spd: 45,
};

let barColors = [
  "rgba(0,0,0,0)",
  "#FF7F0F",
  "#FF7F0F",
  "#FF7F0F",
  "#FFDD57",
  "#FFDD57",
  "#FF7F0F",
];

function setStatsBarHeight(Index) {
  hpBar.style.height = Index.HP + "px";
  atkBar.style.height = Index.Att + "px";
  defBar.style.height = Index.Def + "px";
  spaBar.style.height = Index.Spa + "px";
  spdBar.style.height = Index.Spd + "px";
  speBar.style.height = Index.Spe + "px";
}

function setStatsBarColor(StatsBar, Stats) {
  StatsBar.classList.remove(StatsBar.classList[0]);
  switch (true) {
    case 0 <= Stats && Stats <= 30:
      StatsBar.classList.add("rank1");
      break;
    case 31 <= Stats && Stats <= 60:
      StatsBar.classList.add("rank2");
      break;
    case 61 <= Stats && Stats <= 90:
      StatsBar.classList.add("rank3");
      break;
    case 91 <= Stats && Stats <= 120:
      StatsBar.classList.add("rank4");
      break;
    case 121 <= Stats && Stats:
      StatsBar.classList.add("rank5");
      break;
    case 121 <= Stats:
      StatsBar.classList.add("rank6");
      break;
  }
}

function setType(TypeIndex, Type) {
  if (Type == "") {
    TypeIndex.style.display = "none";
  } else {
    TypeIndex.style.display = "inline-block";
    TypeIndex.classList.remove(TypeIndex.classList[1]);
    TypeIndex.innerHTML = Type;
    switch (Type) {
      case "Normal":
        TypeIndex.classList.add("nor");
        break;
      case "Fire":
        TypeIndex.classList.add("fir");
        break;
      case "Water":
        TypeIndex.classList.add("wat");
        break;
      case "Grass":
        TypeIndex.classList.add("gra");
        break;
      case "Electric":
        TypeIndex.classList.add("ele");
        break;
      case "Ice":
        TypeIndex.classList.add("ice");
        break;
      case "Fighting":
        TypeIndex.classList.add("fig");
        break;
      case "Poison":
        TypeIndex.classList.add("poi");
        break;
      case "Flying":
        TypeIndex.classList.add("fly");
        break;
      case "Rock":
        TypeIndex.classList.add("roc");
        break;
      case "Ground":
        TypeIndex.classList.add("gro");
        break;
      case "Bug":
        TypeIndex.classList.add("bug");
        break;
      case "Psychic":
        TypeIndex.classList.add("psy");
        break;
      case "Ghost":
        TypeIndex.classList.add("gho");
        break;
      case "Dark":
        TypeIndex.classList.add("dar");
        break;
      case "Steel":
        TypeIndex.classList.add("ste");
        break;
      case "Dragon":
        TypeIndex.classList.add("dra");
        break;
      case "Fairy":
        type2.classList.add("fai");
        break;
    }
  }
}

function setTypeDefenses(Index) {
  nor.innerHTML = Index["Against Normal"];
  fir.innerHTML = Index["Against Fire"];
  wat.innerHTML = Index["Against Water"];
  gra.innerHTML = Index["Against Grass"];
  ele.innerHTML = Index["Against Electric"];
  ice.innerHTML = Index["Against Ice"];
  fig.innerHTML = Index["Against Fighting"];
  poi.innerHTML = Index["Against Poison"];
  roc.innerHTML = Index["Against Rock"];
  gro.innerHTML = Index["Against Ground"];
  fly.innerHTML = Index["Against Flying"];
  bug.innerHTML = Index["Against Bug"];
  psy.innerHTML = Index["Against Psychic"];
  gho.innerHTML = Index["Against Ghost"];
  dar.innerHTML = Index["Against Dark"];
  ste.innerHTML = Index["Against Steel"];
  dra.innerHTML = Index["Against Dragon"];
  fai.innerHTML = Index["Against Fairy"];
}

function setTotalStats(Index) {
  total.innerHTML = Index.BST;
  totalhp.innerHTML = Index.HP;
  totalatk.innerHTML = Index.Att;
  totaldef.innerHTML = Index.Def;
  totalspa.innerHTML = Index.Spa;
  totalspd.innerHTML = Index.Spd;
  totalspe.innerHTML = Index.Spe;
}

function setMaxStats(Index) {
  maxHP.innerHTML = parseInt(
    ((2 * Index.HP + 31 + 252 / 4) * 100) / 100 + 100 + 10
  );
  maxAtk.innerHTML = parseInt(
    (((2 * Index.Att + 31 + 252 / 4) * 100) / 100 + 5) * 1.1
  );
  maxDef.innerHTML = parseInt(
    (((2 * Index.Def + 31 + 252 / 4) * 100) / 100 + 5) * 1.1
  );
  maxSpa.innerHTML = parseInt(
    (((2 * Index.Spa + 31 + 252 / 4) * 100) / 100 + 5) * 1.1
  );
  maxSpd.innerHTML = parseInt(
    (((2 * Index.Spd + 31 + 252 / 4) * 100) / 100 + 5) * 1.1
  );
  maxSpe.innerHTML = parseInt(
    (((2 * Index.Spe + 31 + 252 / 4) * 100) / 100 + 5) * 1.1
  );
}

function setMinStats(Index) {
  minHP.innerHTML = parseInt((2 * Index.HP * 100) / 100 + 100 + 10);
  minAtk.innerHTML = parseInt(((2 * Index.Att * 100) / 100 + 5) * 0.9);
  minDef.innerHTML = parseInt(((2 * Index.Def * 100) / 100 + 5) * 0.9);
  minSpa.innerHTML = parseInt(((2 * Index.Spa * 100) / 100 + 5) * 0.9);
  minSpd.innerHTML = parseInt(((2 * Index.Spd * 100) / 100 + 5) * 0.9);
  minSpe.innerHTML = parseInt(((2 * Index.Spe * 100) / 100 + 5) * 0.9);
}

// function setTypeDefensesColor() {
//   for (i = 0; i < type.length; i++) {
//     switch (type[i].innerHTML) {
//       case "4":
//         type[i].classList.remove(type[i].classList[1]);
//         type[i].classList.add("superDuperEff");
//         break;
//       case "2":
//         type[i].classList.remove(type[i].classList[1]);
//         type[i].classList.add("superEff");
//         break;
//       case "1":
//         type[i].classList.remove(type[i].classList[1]);
//         type[i].innerHTML = "";
//         break;
//       case "0.5":
//         type[i].classList.remove(type[i].classList[1]);
//         type[i].classList.add("notVeryEff");
//         break;
//       case "0.25":
//         type[i].classList.remove(type[i].classList[1]);
//         type[i].classList.add("notVeryVeryEff");
//         break;
//       case "0":
//         type[i].classList.remove(type[i].classList[1]);
//         type[i].classList.add("notEff");
//         break;
//     }
//   }
// }

inp.addEventListener("click", function () {
  searchList.classList.add("active");
});

window.onclick = function (event) {
  if (!event.target.matches(".searchResult") && !event.target.matches(".inp")) {
    searchList.classList.remove("active");
  }
};

function ToggleTongQuanHe() {
  if (videoContainer[0].style.display == "none") {
    videoContainer[0].style.display = "block";
  } else videoContainer[0].style.display = "none";
}

function ToggleTanManChienThuat() {
  if (videoContainer[1].style.display == "none") {
    videoContainer[1].style.display = "block";
  } else videoContainer[1].style.display = "none";
}

function ToggleTeamBuilding() {
  if (videoContainer[2].style.display == "none") {
    videoContainer[2].style.display = "block";
  } else videoContainer[2].style.display = "none";
}

TestGetLocalStorage();

function TestLocalStorage() {
  localStorage.setItem("Slot 0", "Charizard");
  localStorage.setItem("Slot 1", "Pikachu");
  localStorage.setItem("Slot 2", "Gardevoir");
  localStorage.setItem("Slot 3", "Gallade");
  localStorage.setItem("Slot 4", "Darkrai");
  localStorage.setItem("Slot 5", "Arceus");
}

function TestGetLocalStorage() {
  if (localStorage.getItem("Slot 0") != null) {
    AddPokemonToSlot(localStorage.getItem("Slot 0"), 0);
  }
  if (localStorage.getItem("Slot 1") != null) {
    AddPokemonToSlot(localStorage.getItem("Slot 1"), 1);
  }
  if (localStorage.getItem("Slot 2") != null) {
    AddPokemonToSlot(localStorage.getItem("Slot 2"), 2);
  }
  if (localStorage.getItem("Slot 3") != null) {
    AddPokemonToSlot(localStorage.getItem("Slot 3"), 3);
  }
  if (localStorage.getItem("Slot 4") != null) {
    AddPokemonToSlot(localStorage.getItem("Slot 4"), 4);
  }
  if (localStorage.getItem("Slot 5") != null) {
    AddPokemonToSlot(localStorage.getItem("Slot 5"), 5);
  }
}

function AddPokemonToSlot(value, Index) {
  fetch("./data/PokemonData.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (Data) {
      for (i = 0; i < Data.length; i++) {
        let pokemonName = Data[i].Name.toLowerCase();
        let pokemonSlotName = value.toLowerCase();

        if (pokemonName == pokemonSlotName) {
          slot[Index].children[0].innerHTML = Data[i].Name;

          if (Data[i].Name == "Arceus") {
            slot[Index].children[1].src =
              "./img/pokemon_Artwork/493-normal.png";
          } else {
            if (
              !Data[i].Name.includes("Mega") ||
              Data[i].Name.includes("Meganium")
            ) {
              slot[Index].children[1].src =
                "./img/pokemon_Artwork/" + Data[i].Number + ".png";
            } else {
              switch (Data[i].Name) {
                case "Mega Charizard X":
                  slot[Index].children[1].src =
                    "./img/pokemon_Artwork/6-mega-x.png";
                  break;
                case "Mega Charizard Y":
                  slot[Index].children[1].src =
                    "./img/pokemon_Artwork/6-mega-y.png";
                  break;
                case "Mega Mewtwo X":
                  slot[Index].children[1].src =
                    "./img/pokemon_Artwork/150-mega-x.png";
                  break;
                case "Mega Mewtwo Y":
                  slot[Index].children[1].src =
                    "./img/pokemon_Artwork/150-mega-y.png";
                  break;
                default:
                  slot[Index].children[1].src =
                    "./img/pokemon_Artwork/" + Data[i].Number + "-mega.png";
              }
            }
          }
        }
      }
    });
}

function RemoveBtn(value) {
  localStorage.removeItem(value);
}
