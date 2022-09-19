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
          artwork.src = "./img/pokemon_Artwork/" + Data[i].Number + ".png";

          // Set name
          name.innerHTML = Data[i].Name;

          // Set number
          number.innerHTML = Data[i].Number;

          // Set type 1
          type1.innerHTML = Data[i]["Type 1"];
          type1.classList.remove(type1.classList[1]);

          switch (Data[i]["Type 1"]) {
            case "Normal":
              type1.classList.add("nor");
              break;
            case "Fire":
              type1.classList.add("fir");
              break;
            case "Water":
              type1.classList.add("wat");
              break;
            case "Grass":
              type1.classList.add("gra");
              break;
            case "Electric":
              type1.classList.add("ele");
              break;
            case "Ice":
              type1.classList.add("ice");
              break;
            case "Fighting":
              type1.classList.add("fig");
              break;
            case "Poison":
              type1.classList.add("poi");
              break;
            case "Flying":
              type1.classList.add("fly");
              break;
            case "Rock":
              type1.classList.add("roc");
              break;
            case "Ground":
              type1.classList.add("gro");
              break;
            case "Bug":
              type1.classList.add("bug");
              break;
            case "Psychic":
              type1.classList.add("psy");
              break;
            case "Ghost":
              type1.classList.add("gho");
              break;
            case "Dark":
              type1.classList.add("dar");
              break;
            case "Steel":
              type1.classList.add("ste");
              break;
            case "Dragon":
              type1.classList.add("dra");
              break;
            case "Fairy":
              type1.classList.add("fai");
              break;
          }

          // Set type 2
          if (Data[i]["Type 2"] != "") {
            type2.innerHTML = Data[i]["Type 2"];
            switch (Data[i]["Type 2"]) {
              case "Normal":
                type2.classList.add("nor");
                break;
              case "Fire":
                type2.classList.add("fir");
                break;
              case "Water":
                type2.classList.add("wat");
                break;
              case "Grass":
                type2.classList.add("gra");
                break;
              case "Electric":
                type2.classList.add("ele");
                break;
              case "Ice":
                type2.classList.add("ice");
                break;
              case "Fighting":
                type2.classList.add("fig");
                break;
              case "Poison":
                type2.classList.add("poi");
                break;
              case "Flying":
                type2.classList.add("fly");
                break;
              case "Rock":
                type2.classList.add("roc");
                break;
              case "Ground":
                type2.classList.add("gro");
                break;
              case "Bug":
                type2.classList.add("bug");
                break;
              case "Psychic":
                type2.classList.add("psy");
                break;
              case "Ghost":
                type2.classList.add("gho");
                break;
              case "Dark":
                type2.classList.add("dar");
                break;
              case "Steel":
                type2.classList.add("ste");
                break;
              case "Dragon":
                type2.classList.add("dra");
                break;
              case "Fairy":
                type2.classList.add("fai");
                break;
            }
          }

          // Set height
          height.innerHTML = Data[i].Height;

          // Set weight
          weight.innerHTML = Data[i].Weight;

          // Set abilities
          abilities.innerHTML = Data[i].Abilities;

          // Set type defense
          nor.innerHTML = Data[i]["Against Normal"];
          fir.innerHTML = Data[i]["Against Fire"];
          wat.innerHTML = Data[i]["Against Water"];
          gra.innerHTML = Data[i]["Against Grass"];
          ele.innerHTML = Data[i]["Against Electric"];
          ice.innerHTML = Data[i]["Against Ice"];
          fig.innerHTML = Data[i]["Against Fighting"];
          poi.innerHTML = Data[i]["Against Poison"];
          roc.innerHTML = Data[i]["Against Rock"];
          gro.innerHTML = Data[i]["Against Ground"];
          fly.innerHTML = Data[i]["Against Flying"];
          bug.innerHTML = Data[i]["Against Bug"];
          psy.innerHTML = Data[i]["Against Psychic"];
          gho.innerHTML = Data[i]["Against Ghost"];
          dar.innerHTML = Data[i]["Against Dark"];
          ste.innerHTML = Data[i]["Against Steel"];
          dra.innerHTML = Data[i]["Against Dragon"];
          fai.innerHTML = Data[i]["Against Fairy"];

          // Set height of stats bar
          hpBar.style.height = Data[i].HP + "px";
          atkBar.style.height = Data[i].Att + "px";
          defBar.style.height = Data[i].Def + "px";
          spaBar.style.height = Data[i].Spa + "px";
          spdBar.style.height = Data[i].Spd + "px";
          speBar.style.height = Data[i].Spe + "px";

          // Set color of stats bar
          hpBar.classList.remove(hpBar.classList[0]);
          switch (true) {
            case 0 <= Data[i].HP && Data[i] <= 30:
              hpBar.classList.add("rank1");
              break;
            case 31 <= Data[i].HP && Data[i].HP <= 60:
              hpBar.classList.add("rank2");
              break;
            case 61 <= Data[i].HP && Data[i].HP <= 90:
              hpBar.classList.add("rank3");

              break;
            case 91 <= Data[i].HP && Data[i].HP <= 120:
              hpBar.classList.add("rank4");
              break;
            case 121 <= Data[i].HP && Data[i].HP:
              hpBar.classList.add("rank5");
              break;
            case 121 <= Data[i].HP:
              hpBar.classList.add("rank6");
              break;
          }

          atkBar.classList.remove(atkBar.classList[0]);
          switch (true) {
            case 0 <= Data[i].Att && Data[i] <= 30:
              atkBar.classList.add("rank1");
              break;
            case 31 <= Data[i].Att && Data[i].Att <= 60:
              atkBar.classList.add("rank2");
              break;
            case 61 <= Data[i].Att && Data[i].Att <= 90:
              atkBar.classList.add("rank3");
              break;
            case 91 <= Data[i].Att && Data[i].Att <= 120:
              atkBar.classList.add("rank4");
              break;
            case 121 <= Data[i].Att && Data[i].Att <= 150:
              atkBar.classList.add("rank5");
              break;
            case 121 <= Data[i].Att:
              atkBar.classList.add("rank6");
              break;
          }

          defBar.classList.remove(defBar.classList[0]);
          switch (true) {
            case 0 <= Data[i].Def && Data[i] <= 30:
              defBar.classList.add("rank1");
              break;
            case 31 <= Data[i].Def && Data[i].Def <= 60:
              defBar.classList.add("rank2");
              break;
            case 61 <= Data[i].Def && Data[i].Def <= 90:
              defBar.classList.add("rank3");
              break;
            case 91 <= Data[i].Def && Data[i].Def <= 120:
              defBar.classList.add("rank4");
              break;
            case 121 <= Data[i].Def && Data[i].Def <= 150:
              defBar.classList.add("rank5");
              break;
            case 121 <= Data[i].Def:
              defBar.classList.add("rank6");
              break;
          }

          spaBar.classList.remove(spaBar.classList[0]);
          switch (true) {
            case 0 <= Data[i].Spa && Data[i] <= 30:
              spaBar.classList.add("rank1");
              break;
            case 31 <= Data[i].Spa && Data[i].Spa <= 60:
              spaBar.classList.add("rank2");
              break;
            case 61 <= Data[i].Spa && Data[i].Spa <= 90:
              spaBar.classList.add("rank3");
              break;
            case 91 <= Data[i].Spa && Data[i].Spa <= 120:
              spaBar.classList.add("rank4");
              break;
            case 121 <= Data[i].Spa && Data[i].Spa <= 150:
              spaBar.classList.add("rank5");
              break;
            case 121 <= Data[i].Spa:
              spaBar.classList.add("rank6");
              break;
          }

          spdBar.classList.remove(spdBar.classList[0]);
          switch (true) {
            case 0 <= Data[i].Spd && Data[i] <= 30:
              spdBar.classList.add("rank1");
              break;
            case 31 <= Data[i].Spd && Data[i].Spd <= 60:
              spdBar.classList.add("rank2");
              break;
            case 61 <= Data[i].Spd && Data[i].Spd <= 90:
              spdBar.classList.add("rank3");
              break;
            case 91 <= Data[i].Spd && Data[i].Spd <= 120:
              spdBar.classList.add("rank4");
              break;
            case 121 <= Data[i].Spd && Data[i].Spd <= 150:
              spdBar.classList.add("rank5");
              break;
            case 121 <= Data[i].Spd:
              spdBar.classList.add("rank6");
              break;
          }

          speBar.classList.remove(speBar.classList[0]);
          switch (true) {
            case 0 <= Data[i].Spe && Data[i] <= 30:
              speBar.classList.add("rank1");
              break;
            case 31 <= Data[i].Spe && Data[i].Spe <= 60:
              speBar.classList.add("rank2");
              break;
            case 61 <= Data[i].Spe && Data[i].Spe <= 90:
              speBar.classList.add("rank3");
              break;
            case 91 <= Data[i].Spe && Data[i].Spe <= 120:
              speBar.classList.add("rank4");
              break;
            case 121 <= Data[i].Spe && Data[i].Spe <= 150:
              speBar.classList.add("rank5");
              break;
            case 151 <= Data[i].Spe:
              speBar.classList.add("rank6");
              break;
          }

          // Set total stats
          totalhp.innerHTML = Data[i].HP;
          totalatk.innerHTML = Data[i].Att;
          totaldef.innerHTML = Data[i].Def;
          totalspa.innerHTML = Data[i].Spa;
          totalspd.innerHTML = Data[i].Spd;
          totalspe.innerHTML = Data[i].Spe;

          // Set max stats
          maxHP.innerHTML = parseInt(
            ((2 * Data[i].HP + 31 + 252 / 4) * 100) / 100 + 100 + 10
          );
          maxAtk.innerHTML = parseInt(
            (((2 * Data[i].Att + 31 + 252 / 4) * 100) / 100 + 5) * 1.1
          );
          maxDef.innerHTML = parseInt(
            (((2 * Data[i].Def + 31 + 252 / 4) * 100) / 100 + 5) * 1.1
          );
          maxSpa.innerHTML = parseInt(
            (((2 * Data[i].Spa + 31 + 252 / 4) * 100) / 100 + 5) * 1.1
          );
          maxSpd.innerHTML = parseInt(
            (((2 * Data[i].Spd + 31 + 252 / 4) * 100) / 100 + 5) * 1.1
          );
          maxSpe.innerHTML = parseInt(
            (((2 * Data[i].Spe + 31 + 252 / 4) * 100) / 100 + 5) * 1.1
          );

          // Set min stats
          minHP.innerHTML = parseInt((2 * Data[i].HP * 100) / 100 + 100 + 10);
          minAtk.innerHTML = parseInt(
            ((2 * Data[i].Att * 100) / 100 + 5) * 0.9
          );
          minDef.innerHTML = parseInt(
            ((2 * Data[i].Def * 100) / 100 + 5) * 0.9
          );
          minSpa.innerHTML = parseInt(
            ((2 * Data[i].Spa * 100) / 100 + 5) * 0.9
          );
          minSpd.innerHTML = parseInt(
            ((2 * Data[i].Spd * 100) / 100 + 5) * 0.9
          );
          minSpe.innerHTML = parseInt(
            ((2 * Data[i].Spe * 100) / 100 + 5) * 0.9
          );

          // Change effective color of Type Defense
          let type = document.getElementsByClassName("type");
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
let inp = document.getElementsByTagName("input");
let slot1 = document.getElementById("slot1");
let slot2 = document.getElementById("slot2");
let slot3 = document.getElementById("slot3");
let slot4 = document.getElementById("slot4");
let slot5 = document.getElementById("slot5");
let slot6 = document.getElementById("slot6");

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
