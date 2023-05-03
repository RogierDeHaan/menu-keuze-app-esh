//google sheets menu data
const sheetId = "1GjsqxfhbANrd6D8pF9w_tj2lMQKkq6P9XrQEvJghlbY";
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = "gerechten";
const query = encodeURIComponent("Select *");
const url = `${base}&sheet=${sheetName}&tq=${query}`;

//dutch menu
const voorgerechtenNL = [];
const hoofdgerechtenNL = [];
// english menu
const voorgerechtenEN = [];
const hoofdgerechtenEN = [];

// to push the starters and mains from different language settings
let voorgerechten = [];
let hoofdgerechten = [];

// all conference rooms html selectors and array creators
let koetshuisArr = [];
const koetshuis = document.querySelector(".koetshuis");
const fullNameKoetshuis = document.querySelector(".full-name-koetshuis");
const starterKoetshuis = document.querySelector(".starter-koetshuis");
const mainKoetshuis = document.querySelector(".main-koetshuis");
const starterKoetshuisEN = document.querySelector(".starter-en-koetshuis");
const mainKoetshuisEN = document.querySelector(".main-en-koetshuis");

let wagenzaalArr = [];
const wagenzaal = document.querySelector(".wagenzaal");
const fullNameWagenzaal = document.querySelector(".full-name-wagenzaal");
const starterWagenzaal = document.querySelector(".starter-wagenzaal");
const mainWagenzaal = document.querySelector(".main-wagenzaal");
const starterWagenzaalEN = document.querySelector(".starter-en-wagenzaal");
const mainWagenzaalEN = document.querySelector(".main-en-wagenzaal");

let forumArr = [];
const forum = document.querySelector(".forum");
const fullNameForum = document.querySelector(".full-name-forum");
const starterForum = document.querySelector(".starter-forum");
const mainForum = document.querySelector(".main-forum");
const starterForumEN = document.querySelector(".starter-en-forum");
const mainForumEN = document.querySelector(".main-en-forum");

let ruiterkamerArr = [];
const ruiterkamer = document.querySelector(".ruiterkamer");
const fullNameRuiterkamer = document.querySelector(".full-name-ruiterkamer");
const starterRuiterkamer = document.querySelector(".starter-ruiterkamer");
const mainRuiterkamer = document.querySelector(".main-ruiterkamer");
const starterRuiterkamerEN = document.querySelector(".starter-en-ruiterkamer");
const mainRuiterkamerEN = document.querySelector(".main-en-ruiterkamer");

let koetsierskamerArr = [];
const koetsierskamer = document.querySelector(".koetsierskamer");
const fullNameKoetsierskamer = document.querySelector(
  ".full-name-koetsierskamer"
);
const starterKoetsierskamer = document.querySelector(".starter-koetsierskamer");
const mainKoetsierskamer = document.querySelector(".main-koetsierskamer");
const starterKoetsierskamerEN = document.querySelector(
  ".starter-en-koetsierskamer"
);
const mainKoetsierskamerEN = document.querySelector(".main-en-koetsierskamer");

let rododendronArr = [];
const rododendron = document.querySelector(".rododendron");
const fullNameRododendron = document.querySelector(".full-name-rododendron");
const starterRododendron = document.querySelector(".starter-rododendron");
const mainRododendron = document.querySelector(".main-rododendron");
const starterRododendronEN = document.querySelector(".starter-en-rododendron");
const mainRododendronEN = document.querySelector(".main-en-rododendron");

let patioArr = [];
const patio = document.querySelector(".patio");
const fullNamePatio = document.querySelector(".full-name-patio");
const starterPatio = document.querySelector(".starter-patio");
const mainPatio = document.querySelector(".main-patio");
const starterPatioEN = document.querySelector(".starter-en-patio");
const mainPatioEN = document.querySelector(".main-en-patio");

let magnoliaArr = [];
const magnolia = document.querySelector(".magnolia");
const fullNameMagnolia = document.querySelector(".full-name-magnolia");
const starterMagnolia = document.querySelector(".starter-magnolia");
const mainMagnolia = document.querySelector(".main-magnolia");
const starterMagnoliaEN = document.querySelector(".starter-en-magnolia");
const mainMagnoliaEN = document.querySelector(".main-en-magnolia");

let zadelkamerArr = [];
const zadelkamer = document.querySelector(".zadelkamer");
const fullNameZadelkamer = document.querySelector(".full-name-zadelkamer");
const starterZadelkamer = document.querySelector(".starter-zadelkamer");
const mainZadelkamer = document.querySelector(".main-zadelkamer");
const starterZadelkamerEN = document.querySelector(".starter-en-zadelkamer");
const mainZadelkamerEN = document.querySelector(".main-en-zadelkamer");

let prinshendrik1Arr = [];
const prinshendrik1 = document.querySelector(".prins-hendrik1");
const fullNamePrinshendrik1 = document.querySelector(
  ".full-name-prins-hendrik1"
);
const starterPrinshendrik1 = document.querySelector(".starter-prins-hendrik1");
const mainPrinshendrik1 = document.querySelector(".main-prins-hendrik1");
const starterPrinshendrik1EN = document.querySelector(
  ".starter-en-prins-hendrik1"
);
const mainPrinshendrik1EN = document.querySelector(".main-en-prins-hendrik1");

let prinshendrik2Arr = [];
const prinshendrik2 = document.querySelector(".prins-hendrik2");
const fullNamePrinshendrik2 = document.querySelector(
  ".full-name-prins-hendrik2"
);
const starterPrinshendrik2 = document.querySelector(".starter-prins-hendrik2");
const mainPrinshendrik2 = document.querySelector(".main-prins-hendrik2");
const starterPrinshendrik2EN = document.querySelector(
  ".starter-en-prins-hendrik2"
);
const mainPrinshendrik2EN = document.querySelector(".main-en-prins-hendrik2");

let prinshendrik3Arr = [];
const prinshendrik3 = document.querySelector(".prins-hendrik3");
const fullNamePrinshendrik3 = document.querySelector(
  ".full-name-prins-hendrik3"
);
const starterPrinshendrik3 = document.querySelector(".starter-prins-hendrik3");
const mainPrinshendrik3 = document.querySelector(".main-prins-hendrik3");
const starterPrinshendrik3EN = document.querySelector(
  ".starter-en-prins-hendrik3"
);
const mainPrinshendrik3EN = document.querySelector(".main-en-prins-hendrik3");

let serreArr = [];
const serre = document.querySelector(".serre");
const fullNameSerre = document.querySelector(".full-name-serre");
const starterSerre = document.querySelector(".starter-serre");
const mainSerre = document.querySelector(".main-serre");
const starterSerreEN = document.querySelector(".starter-en-serre");
const mainSerreEN = document.querySelector(".main-en-serre");

let vierspanArr = [];
const vierspan = document.querySelector(".vierspan");
const fullNameVierspan = document.querySelector(".full-name-vierspan");
const starterVierspan = document.querySelector(".starter-vierspan");
const mainVierspan = document.querySelector(".main-vierspan");
const starterVierspanEN = document.querySelector(".starter-en-vierspan");
const mainVierspanEN = document.querySelector(".main-en-vierspan");

let tweespanArr = [];
const tweespan = document.querySelector(".tweespan");
const fullNameTweespan = document.querySelector(".full-name-tweespan");
const starterTweespan = document.querySelector(".starter-tweespan");
const mainTweespan = document.querySelector(".main-tweespan");
const starterTweespanEN = document.querySelector(".starter-en-tweespan");
const mainTweespanEN = document.querySelector(".main-en-tweespan");

let stalmeesterArr = [];
const stalmeester = document.querySelector(".stalmeester");
const fullNameStalmeester = document.querySelector(".full-name-stalmeester");
const starterStalmeester = document.querySelector(".starter-stalmeester");
const mainStalmeester = document.querySelector(".main-stalmeester");
const starterStalmeesterEN = document.querySelector(".starter-en-stalmeester");
const mainStalmeesterEN = document.querySelector(".main-en-stalmeester");

let disselArr = [];
const dissel = document.querySelector(".dissel");
const fullNameDissel = document.querySelector(".full-name-dissel");
const starterDissel = document.querySelector(".starter-dissel");
const mainDissel = document.querySelector(".main-dissel");
const starterDisselEN = document.querySelector(".starter-en-dissel");
const mainDisselEN = document.querySelector(".main-en-dissel");

let larixArr = [];
const larix = document.querySelector(".larix");
const fullNameLarix = document.querySelector(".full-name-larix");
const starterLarix = document.querySelector(".starter-larix");
const mainLarix = document.querySelector(".main-larix");
const starterLarixEN = document.querySelector(".starter-en-larix");
const mainLarixEN = document.querySelector(".main-en-larix");

//google sheets blad 1 data van menu keuzes die gemaakt zijn
const sheetIdBlad1 = "1WjACx0CCWrQvqdA8GQ6iVP8q2vMw-FbDtmVGIeyltoA";
const baseBlad1 = `https://docs.google.com/spreadsheets/d/${sheetIdBlad1}/gviz/tq?`;
const sheetNameBlad1 = "blad1";
const queryBlad1 = encodeURIComponent("Select *");
const urlBlad1 = `${baseBlad1}&sheet=${sheetNameBlad1}&tq=${queryBlad1}`;
const dataBlad1 = [];

const h3 = document.querySelector("h3");
const ul = document.querySelector(".ul");
const li = document.querySelectorAll("li");

// for language settings
const imgNl = document.querySelector(".img-nl");
const imgEn = document.querySelector(".img-en");
const nl = document.querySelector("#nl");
const en = document.querySelector("#en");
const setHiddenNL = document.querySelectorAll(".nl");
const setHiddenEN = document.querySelectorAll(".en");
const hideSection = document.querySelectorAll(".hide-section");

function removeHidden(zaal) {
  return zaal.classList.remove("hidden");
}
function addHidden(zaal) {
  return zaal.classList.add("hidden");
}

// hide the conference room sections
h3.addEventListener("click", () => {
  ul.classList.toggle("hidden");
  addHidden(koetshuis);
  addHidden(wagenzaal);
  addHidden(forum);
  addHidden(ruiterkamer);
  addHidden(koetsierskamer);
  addHidden(rododendron);
  addHidden(patio);
  addHidden(magnolia);
  addHidden(zadelkamer);
  addHidden(prinshendrik1);
  addHidden(prinshendrik2);
  addHidden(prinshendrik3);
  addHidden(serre);
  addHidden(vierspan);
  addHidden(tweespan);
  addHidden(stalmeester);
  addHidden(dissel);
  addHidden(larix);
});

// injecting info into dom and showing/hiding li items and dom items
let koetshuisArrCount = 0;
let wagenzaalArrCount = 0;
let forumArrCount = 0;
let ruiterkamerArrCount = 0;
let koetsierskamerArrCount = 0;
let rododendronArrCount = 0;
let patioArrCount = 0;
let magnoliaArrCount = 0;
let zadelkamerArrCount = 0;
let prinshendrik1ArrCount = 0;
let prinshendrik2ArrCount = 0;
let prinshendrik3ArrCount = 0;
let serreArrCount = 0;
let vierspanArrCount = 0;
let tweespanArrCount = 0;
let stalmeesterArrCount = 0;
let disselArrCount = 0;
let larixArrCount = 0;

li.forEach((li) => {
  li.addEventListener("click", () => {
    if (li.classList.value === "koetshuis-li") {
      removeHidden(koetshuis);
      if (koetshuisArrCount < 1) {
        let counter = 0;
        for (i = 0; i < koetshuisArr.length; i++) {
          //  console.log(koetshuisArr[i]);
          if (counter % 2 === 0) {
            fullNameKoetshuis.innerHTML += `<div class="injected">${koetshuisArr[i].fullName}</div>`;
            //    console.log(koetshuisArr[i].fullName + " none");
            if (koetshuisArr[i].voorgerecht1) {
              starterKoetshuis.innerHTML += `<div class="injected">${voorgerechtenNL[0]}</div>`;
              starterKoetshuisEN.innerHTML += `<div class="injected">${voorgerechtenEN[0]}</div>`;
            } else if (koetshuisArr[i].voorgerecht2) {
              starterKoetshuis.innerHTML += `<div class="injected">${voorgerechtenNL[1]}</div>`;
              starterKoetshuisEN.innerHTML += `<div class="injected">${voorgerechtenEN[1]}</div>`;
            } else if (koetshuisArr[i].voorgerecht3) {
              starterKoetshuis.innerHTML += `<div class="injected">${voorgerechtenNL[2]}</div>`;
              starterKoetshuisEN.innerHTML += `<div class="injected">${voorgerechtenEN[2]}</div>`;
            } else if (koetshuisArr[i].voorgerecht4) {
              starterKoetshuis.innerHTML += `<div class="injected">${voorgerechtenNL[3]}</div>`;
              starterKoetshuisEN.innerHTML += `<div class="injected">${voorgerechtenEN[3]}</div>`;
            } else if (koetshuisArr[i].voorgerecht5) {
              starterKoetshuis.innerHTML += `<div class="injected">${voorgerechtenNL[4]}</div>`;
              starterKoetshuisEN.innerHTML += `<div class="injected">${voorgerechtenEN[4]}</div>`;
            } else if (koetshuisArr[i].voorgerecht6) {
              starterKoetshuis.innerHTML += `<div class="injected">${voorgerechtenNL[5]}</div>`;
              starterKoetshuisEN.innerHTML += `<div class="injected">${voorgerechtenEN[5]}</div>`;
            } else if (koetshuisArr[i].voorgerecht7) {
              starterKoetshuis.innerHTML += `<div class="injected">${voorgerechtenNL[6]}</div>`;
              starterKoetshuisEN.innerHTML += `<div class="injected">${voorgerechtenEN[6]}</div>`;
            }
            if (koetshuisArr[i].hoofdgerecht1) {
              mainKoetshuis.innerHTML += `<div class="injected">${hoofdgerechtenNL[0]}</div>`;
              mainKoetshuisEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[0]}</div>`;
            } else if (koetshuisArr[i].hoofdgerecht2) {
              mainKoetshuis.innerHTML += `<div class="injected">${hoofdgerechtenNL[1]}</div>`;
              mainKoetshuisEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[1]}</div>`;
            } else if (koetshuisArr[i].hoofdgerecht3) {
              mainKoetshuis.innerHTML += `<div class="injected">${hoofdgerechtenNL[2]}</div>`;
              mainKoetshuisEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[2]}</div>`;
            } else if (koetshuisArr[i].hoofdgerecht4) {
              mainKoetshuis.innerHTML += `<div class="injected">${hoofdgerechtenNL[3]}</div>`;
              mainKoetshuisEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[3]}</div>`;
            } else if (koetshuisArr[i].hoofdgerecht5) {
              mainKoetshuis.innerHTML += `<div class="injected">${hoofdgerechtenNL[4]}</div>`;
              mainKoetshuisEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[4]}</div>`;
            } else if (koetshuisArr[i].hoofdgerecht6) {
              mainKoetshuis.innerHTML += `<div class="injected">${hoofdgerechtenNL[5]}</div>`;
              mainKoetshuisEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[5]}</div>`;
            } else if (koetshuisArr[i].hoofdgerecht7) {
              mainKoetshuis.innerHTML += `<div class="injected">${hoofdgerechtenNL[6]}</div>`;
              mainKoetshuisEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[6]}</div>`;
            }
          } else {
            fullNameKoetshuis.innerHTML += `<div class="injected red-background">${koetshuisArr[i].fullName}</div>`;
            //    console.log(koetshuisArr[i].fullName + " red");
            if (koetshuisArr[i].voorgerecht1) {
              starterKoetshuis.innerHTML += `<div class="injected red-background">${voorgerechtenNL[0]}</div>`;
              starterKoetshuisEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[0]}</div>`;
            } else if (koetshuisArr[i].voorgerecht2) {
              starterKoetshuis.innerHTML += `<div class="injected red-background">${voorgerechtenNL[1]}</div>`;
              starterKoetshuisEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[1]}</div>`;
            } else if (koetshuisArr[i].voorgerecht3) {
              starterKoetshuis.innerHTML += `<div class="injected red-background">${voorgerechtenNL[2]}</div>`;
              starterKoetshuisEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[2]}</div>`;
            } else if (koetshuisArr[i].voorgerecht4) {
              starterKoetshuis.innerHTML += `<div class="injected red-background">${voorgerechtenNL[3]}</div>`;
              starterKoetshuisEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[3]}</div>`;
            } else if (koetshuisArr[i].voorgerecht5) {
              starterKoetshuis.innerHTML += `<div class="injected red-background">${voorgerechtenNL[4]}</div>`;
              starterKoetshuisEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[4]}</div>`;
            } else if (koetshuisArr[i].voorgerecht6) {
              starterKoetshuis.innerHTML += `<div class="injected red-background">${voorgerechtenNL[5]}</div>`;
              starterKoetshuisEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[5]}</div>`;
            } else if (koetshuisArr[i].voorgerecht7) {
              starterKoetshuis.innerHTML += `<div class="injected red-background">${voorgerechtenNL[6]}</div>`;
              starterKoetshuisEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[6]}</div>`;
            }
            if (koetshuisArr[i].hoofdgerecht1) {
              mainKoetshuis.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[0]}</div>`;
              mainKoetshuisEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[0]}</div>`;
            } else if (koetshuisArr[i].hoofdgerecht2) {
              mainKoetshuis.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[1]}</div>`;
              mainKoetshuisEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[1]}</div>`;
            } else if (koetshuisArr[i].hoofdgerecht3) {
              mainKoetshuis.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[2]}</div>`;
              mainKoetshuisEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[2]}</div>`;
            } else if (koetshuisArr[i].hoofdgerecht4) {
              mainKoetshuis.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[3]}</div>`;
              mainKoetshuisEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[3]}</div>`;
            } else if (koetshuisArr[i].hoofdgerecht5) {
              mainKoetshuis.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[4]}</div>`;
              mainKoetshuisEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[4]}</div>`;
            } else if (koetshuisArr[i].hoofdgerecht6) {
              mainKoetshuis.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[5]}</div>`;
              mainKoetshuisEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[5]}</div>`;
            } else if (koetshuisArr[i].hoofdgerecht7) {
              mainKoetshuis.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[6]}</div>`;
              mainKoetshuisEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[6]}</div>`;
            }
          }
          counter++;
        }
      }
      koetshuisArrCount++;
      addHidden(ul);
    } else if (li.classList.value === "wagenzaal-li") {
      removeHidden(wagenzaal);
      if (wagenzaalArrCount < 1) {
        let counter = 0;
        for (i = 0; i < wagenzaalArr.length; i++) {
          //    console.log(wagenzaalArr[i]);
          if (counter % 2 === 0) {
            fullNameWagenzaal.innerHTML += `<div class="injected">${wagenzaalArr[i].fullName}</div>`;
            //    console.log(wagenzaalArr[i].fullName + " none");
            if (wagenzaalArr[i].voorgerecht1) {
              starterWagenzaal.innerHTML += `<div class="injected">${voorgerechtenNL[0]}</div>`;
              starterWagenzaalEN.innerHTML += `<div class="injected">${voorgerechtenEN[0]}</div>`;
            } else if (wagenzaalArr[i].voorgerecht2) {
              starterWagenzaal.innerHTML += `<div class="injected">${voorgerechtenNL[1]}</div>`;
              starterWagenzaalEN.innerHTML += `<div class="injected">${voorgerechtenEN[1]}</div>`;
            } else if (wagenzaalArr[i].voorgerecht3) {
              starterWagenzaal.innerHTML += `<div class="injected">${voorgerechtenNL[2]}</div>`;
              starterWagenzaalEN.innerHTML += `<div class="injected">${voorgerechtenEN[2]}</div>`;
            } else if (wagenzaalArr[i].voorgerecht4) {
              starterWagenzaal.innerHTML += `<div class="injected">${voorgerechtenNL[3]}</div>`;
              starterWagenzaalEN.innerHTML += `<div class="injected">${voorgerechtenEN[3]}</div>`;
            } else if (wagenzaalArr[i].voorgerecht5) {
              starterWagenzaal.innerHTML += `<div class="injected">${voorgerechtenNL[4]}</div>`;
              starterWagenzaalEN.innerHTML += `<div class="injected">${voorgerechtenEN[4]}</div>`;
            } else if (wagenzaalArr[i].voorgerecht6) {
              starterWagenzaal.innerHTML += `<div class="injected">${voorgerechtenNL[5]}</div>`;
              starterWagenzaalEN.innerHTML += `<div class="injected">${voorgerechtenEN[5]}</div>`;
            } else if (wagenzaalArr[i].voorgerecht7) {
              starterWagenzaal.innerHTML += `<div class="injected">${voorgerechtenNL[6]}</div>`;
              starterWagenzaalEN.innerHTML += `<div class="injected">${voorgerechtenEN[6]}</div>`;
            }
            if (wagenzaalArr[i].hoofdgerecht1) {
              mainWagenzaal.innerHTML += `<div class="injected">${hoofdgerechtenNL[0]}</div>`;
              mainWagenzaalEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[0]}</div>`;
            } else if (wagenzaalArr[i].hoofdgerecht2) {
              mainWagenzaal.innerHTML += `<div class="injected">${hoofdgerechtenNL[1]}</div>`;
              mainWagenzaalEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[1]}</div>`;
            } else if (wagenzaalArr[i].hoofdgerecht3) {
              mainWagenzaal.innerHTML += `<div class="injected">${hoofdgerechtenNL[2]}</div>`;
              mainWagenzaalEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[2]}</div>`;
            } else if (wagenzaalArr[i].hoofdgerecht4) {
              mainWagenzaal.innerHTML += `<div class="injected">${hoofdgerechtenNL[3]}</div>`;
              mainWagenzaalEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[3]}</div>`;
            } else if (wagenzaalArr[i].hoofdgerecht5) {
              mainWagenzaal.innerHTML += `<div class="injected">${hoofdgerechtenNL[4]}</div>`;
              mainWagenzaalEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[4]}</div>`;
            } else if (wagenzaalArr[i].hoofdgerecht6) {
              mainWagenzaal.innerHTML += `<div class="injected">${hoofdgerechtenNL[5]}</div>`;
              mainWagenzaalEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[5]}</div>`;
            } else if (wagenzaalArr[i].hoofdgerecht7) {
              mainWagenzaal.innerHTML += `<div class="injected">${hoofdgerechtenNL[6]}</div>`;
              mainWagenzaalEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[6]}</div>`;
            }
          } else {
            fullNameWagenzaal.innerHTML += `<div class="injected red-background">${wagenzaalArr[i].fullName}</div>`;
            //     console.log(wagenzaalArr[i].fullName + " red");
            if (wagenzaalArr[i].voorgerecht1) {
              starterWagenzaal.innerHTML += `<div class="injected red-background">${voorgerechtenNL[0]}</div>`;
              starterWagenzaalEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[0]}</div>`;
            } else if (wagenzaalArr[i].voorgerecht2) {
              starterWagenzaal.innerHTML += `<div class="injected red-background">${voorgerechtenNL[1]}</div>`;
              starterWagenzaalEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[1]}</div>`;
            } else if (wagenzaalArr[i].voorgerecht3) {
              starterWagenzaal.innerHTML += `<div class="injected red-background">${voorgerechtenNL[2]}</div>`;
              starterWagenzaalEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[2]}</div>`;
            } else if (wagenzaalArr[i].voorgerecht4) {
              starterWagenzaal.innerHTML += `<div class="injected red-background">${voorgerechtenNL[3]}</div>`;
              starterWagenzaalEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[3]}</div>`;
            } else if (wagenzaalArr[i].voorgerecht5) {
              starterWagenzaal.innerHTML += `<div class="injected red-background">${voorgerechtenNL[4]}</div>`;
              starterWagenzaalEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[4]}</div>`;
            } else if (wagenzaalArr[i].voorgerecht6) {
              starterWagenzaal.innerHTML += `<div class="injected red-background">${voorgerechtenNL[5]}</div>`;
              starterWagenzaalEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[5]}</div>`;
            } else if (wagenzaalArr[i].voorgerecht7) {
              starterWagenzaal.innerHTML += `<div class="injected red-background">${voorgerechtenNL[6]}</div>`;
              starterWagenzaalEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[6]}</div>`;
            }
            if (wagenzaalArr[i].hoofdgerecht1) {
              mainWagenzaal.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[0]}</div>`;
              mainWagenzaalEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[0]}</div>`;
            } else if (wagenzaalArr[i].hoofdgerecht2) {
              mainWagenzaal.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[1]}</div>`;
              mainWagenzaalEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[1]}</div>`;
            } else if (wagenzaalArr[i].hoofdgerecht3) {
              mainWagenzaal.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[2]}</div>`;
              mainWagenzaalEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[2]}</div>`;
            } else if (wagenzaalArr[i].hoofdgerecht4) {
              mainWagenzaal.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[3]}</div>`;
              mainWagenzaalEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[3]}</div>`;
            } else if (wagenzaalArr[i].hoofdgerecht5) {
              mainWagenzaal.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[4]}</div>`;
              mainWagenzaalEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[4]}</div>`;
            } else if (wagenzaalArr[i].hoofdgerecht6) {
              mainWagenzaal.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[5]}</div>`;
              mainWagenzaalEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[5]}</div>`;
            } else if (wagenzaalArr[i].hoofdgerecht7) {
              mainWagenzaal.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[6]}</div>`;
              mainWagenzaalEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[6]}</div>`;
            }
          }
          counter++;
        }
      }
      wagenzaalArrCount++;
      addHidden(ul);
    } else if (li.classList.value === "forum-li") {
      removeHidden(forum);
      if (forumArrCount < 1) {
        let counter = 0;
        for (i = 0; i < forumArr.length; i++) {
          //    console.log(forumArr[i]);
          if (counter % 2 === 0) {
            fullNameForum.innerHTML += `<div class="injected">${forumArr[i].fullName}</div>`;
            //   console.log(forumArr[i].fullName + " none");
            if (forumArr[i].voorgerecht1) {
              starterForum.innerHTML += `<div class="injected">${voorgerechtenNL[0]}</div>`;
              starterForumEN.innerHTML += `<div class="injected">${voorgerechtenEN[0]}</div>`;
            } else if (forumArr[i].voorgerecht2) {
              starterForum.innerHTML += `<div class="injected">${voorgerechtenNL[1]}</div>`;
              starterForumEN.innerHTML += `<div class="injected">${voorgerechtenEN[1]}</div>`;
            } else if (forumArr[i].voorgerecht3) {
              starterForum.innerHTML += `<div class="injected">${voorgerechtenNL[2]}</div>`;
              starterForumEN.innerHTML += `<div class="injected">${voorgerechtenEN[2]}</div>`;
            } else if (forumArr[i].voorgerecht4) {
              starterForum.innerHTML += `<div class="injected">${voorgerechtenNL[3]}</div>`;
              starterForumEN.innerHTML += `<div class="injected">${voorgerechtenEN[3]}</div>`;
            } else if (forumArr[i].voorgerecht5) {
              starterForum.innerHTML += `<div class="injected">${voorgerechtenNL[4]}</div>`;
              starterForumEN.innerHTML += `<div class="injected">${voorgerechtenEN[4]}</div>`;
            } else if (forumArr[i].voorgerecht6) {
              starterForum.innerHTML += `<div class="injected">${voorgerechtenNL[5]}</div>`;
              starterForumEN.innerHTML += `<div class="injected">${voorgerechtenEN[5]}</div>`;
            } else if (forumArr[i].voorgerecht7) {
              starterForum.innerHTML += `<div class="injected">${voorgerechtenNL[6]}</div>`;
              starterForumEN.innerHTML += `<div class="injected">${voorgerechtenEN[6]}</div>`;
            }
            if (forumArr[i].hoofdgerecht1) {
              mainForum.innerHTML += `<div class="injected">${hoofdgerechtenNL[0]}</div>`;
              mainForumEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[0]}</div>`;
            } else if (forumArr[i].hoofdgerecht2) {
              mainForum.innerHTML += `<div class="injected">${hoofdgerechtenNL[1]}</div>`;
              mainForumEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[1]}</div>`;
            } else if (forumArr[i].hoofdgerecht3) {
              mainForum.innerHTML += `<div class="injected">${hoofdgerechtenNL[2]}</div>`;
              mainForumEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[2]}</div>`;
            } else if (forumArr[i].hoofdgerecht4) {
              mainForum.innerHTML += `<div class="injected">${hoofdgerechtenNL[3]}</div>`;
              mainForumEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[3]}</div>`;
            } else if (forumArr[i].hoofdgerecht5) {
              mainForum.innerHTML += `<div class="injected">${hoofdgerechtenNL[4]}</div>`;
              mainForumEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[4]}</div>`;
            } else if (forumArr[i].hoofdgerecht6) {
              mainForum.innerHTML += `<div class="injected">${hoofdgerechtenNL[5]}</div>`;
              mainForumEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[5]}</div>`;
            } else if (forumArr[i].hoofdgerecht7) {
              mainForum.innerHTML += `<div class="injected">${hoofdgerechtenNL[6]}</div>`;
              mainForumEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[6]}</div>`;
            }
          } else {
            fullNameForum.innerHTML += `<div class="injected red-background">${forumArr[i].fullName}</div>`;
            //     console.log(forumArr[i].fullName + " red");
            if (forumArr[i].voorgerecht1) {
              starterForum.innerHTML += `<div class="injected red-background">${voorgerechtenNL[0]}</div>`;
              starterForumEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[0]}</div>`;
            } else if (forumArr[i].voorgerecht2) {
              starterForum.innerHTML += `<div class="injected red-background">${voorgerechtenNL[1]}</div>`;
              starterForumEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[1]}</div>`;
            } else if (forumArr[i].voorgerecht3) {
              starterForum.innerHTML += `<div class="injected red-background">${voorgerechtenNL[2]}</div>`;
              starterForumEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[2]}</div>`;
            } else if (forumArr[i].voorgerecht4) {
              starterForum.innerHTML += `<div class="injected red-background">${voorgerechtenNL[3]}</div>`;
              starterForumEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[3]}</div>`;
            } else if (forumArr[i].voorgerecht5) {
              starterForum.innerHTML += `<div class="injected red-background">${voorgerechtenNL[4]}</div>`;
              starterForumEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[4]}</div>`;
            } else if (forumArr[i].voorgerecht6) {
              starterForum.innerHTML += `<div class="injected red-background">${voorgerechtenNL[5]}</div>`;
              starterForumEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[5]}</div>`;
            } else if (forumArr[i].voorgerecht7) {
              starterForum.innerHTML += `<div class="injected red-background">${voorgerechtenNL[6]}</div>`;
              starterForumEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[6]}</div>`;
            }
            if (forumArr[i].hoofdgerecht1) {
              mainForum.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[0]}</div>`;
              mainForumEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[0]}</div>`;
            } else if (forumArr[i].hoofdgerecht2) {
              mainForum.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[1]}</div>`;
              mainForumEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[1]}</div>`;
            } else if (forumArr[i].hoofdgerecht3) {
              mainForum.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[2]}</div>`;
              mainForumEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[2]}</div>`;
            } else if (forumArr[i].hoofdgerecht4) {
              mainForum.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[3]}</div>`;
              mainForumEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[3]}</div>`;
            } else if (forumArr[i].hoofdgerecht5) {
              mainForum.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[4]}</div>`;
              mainForumEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[4]}</div>`;
            } else if (forumArr[i].hoofdgerecht6) {
              mainForum.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[5]}</div>`;
              mainForumEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[5]}</div>`;
            } else if (forumArr[i].hoofdgerecht7) {
              mainForum.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[6]}</div>`;
              mainForumEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[6]}</div>`;
            }
          }
          counter++;
        }
      }
      forumArrCount++;
      addHidden(ul);
    } else if (li.classList.value === "ruiterkamer-li") {
      removeHidden(ruiterkamer);
      if (ruiterkamerArrCount < 1) {
        let counter = 0;
        for (i = 0; i < ruiterkamerArr.length; i++) {
          //    console.log(ruiterkamerArr[i]);
          if (counter % 2 === 0) {
            fullNameRuiterkamer.innerHTML += `<div class="injected">${ruiterkamerArr[i].fullName}</div>`;
            //    console.log(ruiterkamerArr[i].fullName + " none");
            if (ruiterkamerArr[i].voorgerecht1) {
              starterRuiterkamer.innerHTML += `<div class="injected">${voorgerechtenNL[0]}</div>`;
              starterRuiterkamerEN.innerHTML += `<div class="injected">${voorgerechtenEN[0]}</div>`;
            } else if (ruiterkamerArr[i].voorgerecht2) {
              starterRuiterkamer.innerHTML += `<div class="injected">${voorgerechtenNL[1]}</div>`;
              starterRuiterkamerEN.innerHTML += `<div class="injected">${voorgerechtenEN[1]}</div>`;
            } else if (ruiterkamerArr[i].voorgerecht3) {
              starterRuiterkamer.innerHTML += `<div class="injected">${voorgerechtenNL[2]}</div>`;
              starterRuiterkamerEN.innerHTML += `<div class="injected">${voorgerechtenEN[2]}</div>`;
            } else if (ruiterkamerArr[i].voorgerecht4) {
              starterRuiterkamer.innerHTML += `<div class="injected">${voorgerechtenNL[3]}</div>`;
              starterRuiterkamerEN.innerHTML += `<div class="injected">${voorgerechtenEN[3]}</div>`;
            } else if (ruiterkamerArr[i].voorgerecht5) {
              starterRuiterkamer.innerHTML += `<div class="injected">${voorgerechtenNL[4]}</div>`;
              starterRuiterkamerEN.innerHTML += `<div class="injected">${voorgerechtenEN[4]}</div>`;
            } else if (ruiterkamerArr[i].voorgerecht6) {
              starterRuiterkamer.innerHTML += `<div class="injected">${voorgerechtenNL[5]}</div>`;
              starterRuiterkamerEN.innerHTML += `<div class="injected">${voorgerechtenEN[5]}</div>`;
            } else if (ruiterkamerArr[i].voorgerecht7) {
              starterRuiterkamer.innerHTML += `<div class="injected">${voorgerechtenNL[6]}</div>`;
              starterRuiterkamerEN.innerHTML += `<div class="injected">${voorgerechtenEN[6]}</div>`;
            }
            if (ruiterkamerArr[i].hoofdgerecht1) {
              mainRuiterkamer.innerHTML += `<div class="injected">${hoofdgerechtenNL[0]}</div>`;
              mainRuiterkamerEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[0]}</div>`;
            } else if (ruiterkamerArr[i].hoofdgerecht2) {
              mainRuiterkamer.innerHTML += `<div class="injected">${hoofdgerechtenNL[1]}</div>`;
              mainRuiterkamerEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[1]}</div>`;
            } else if (ruiterkamerArr[i].hoofdgerecht3) {
              mainRuiterkamer.innerHTML += `<div class="injected">${hoofdgerechtenNL[2]}</div>`;
              mainRuiterkamerEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[2]}</div>`;
            } else if (ruiterkamerArr[i].hoofdgerecht4) {
              mainRuiterkamer.innerHTML += `<div class="injected">${hoofdgerechtenNL[3]}</div>`;
              mainRuiterkamerEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[3]}</div>`;
            } else if (ruiterkamerArr[i].hoofdgerecht5) {
              mainRuiterkamer.innerHTML += `<div class="injected">${hoofdgerechtenNL[4]}</div>`;
              mainRuiterkamerEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[4]}</div>`;
            } else if (ruiterkamerArr[i].hoofdgerecht6) {
              mainRuiterkamer.innerHTML += `<div class="injected">${hoofdgerechtenNL[5]}</div>`;
              mainRuiterkamerEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[5]}</div>`;
            } else if (ruiterkamerArr[i].hoofdgerecht7) {
              mainRuiterkamer.innerHTML += `<div class="injected">${hoofdgerechtenNL[6]}</div>`;
              mainRuiterkamerEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[6]}</div>`;
            }
          } else {
            fullNameRuiterkamer.innerHTML += `<div class="injected red-background">${ruiterkamerArr[i].fullName}</div>`;
            //    console.log(ruiterkamerArr[i].fullName + " red");
            if (ruiterkamerArr[i].voorgerecht1) {
              starterRuiterkamer.innerHTML += `<div class="injected red-background">${voorgerechtenNL[0]}</div>`;
              starterRuiterkamerEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[0]}</div>`;
            } else if (ruiterkamerArr[i].voorgerecht2) {
              starterRuiterkamer.innerHTML += `<div class="injected red-background">${voorgerechtenNL[1]}</div>`;
              starterRuiterkamerEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[1]}</div>`;
            } else if (ruiterkamerArr[i].voorgerecht3) {
              starterRuiterkamer.innerHTML += `<div class="injected red-background">${voorgerechtenNL[2]}</div>`;
              starterRuiterkamerEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[2]}</div>`;
            } else if (ruiterkamerArr[i].voorgerecht4) {
              starterRuiterkamer.innerHTML += `<div class="injected red-background">${voorgerechtenNL[3]}</div>`;
              starterRuiterkamerEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[3]}</div>`;
            } else if (ruiterkamerArr[i].voorgerecht5) {
              starterRuiterkamer.innerHTML += `<div class="injected red-background">${voorgerechtenNL[4]}</div>`;
              starterRuiterkamerEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[4]}</div>`;
            } else if (ruiterkamerArr[i].voorgerecht6) {
              starterRuiterkamer.innerHTML += `<div class="injected red-background">${voorgerechtenNL[5]}</div>`;
              starterRuiterkamerEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[5]}</div>`;
            } else if (ruiterkamerArr[i].voorgerecht7) {
              starterRuiterkamer.innerHTML += `<div class="injected red-background">${voorgerechtenNL[6]}</div>`;
              starterRuiterkamerEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[6]}</div>`;
            }
            if (ruiterkamerArr[i].hoofdgerecht1) {
              mainRuiterkamer.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[0]}</div>`;
              mainRuiterkamerEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[0]}</div>`;
            } else if (ruiterkamerArr[i].hoofdgerecht2) {
              mainRuiterkamer.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[1]}</div>`;
              mainRuiterkamerEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[1]}</div>`;
            } else if (ruiterkamerArr[i].hoofdgerecht3) {
              mainRuiterkamer.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[2]}</div>`;
              mainRuiterkamerEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[2]}</div>`;
            } else if (ruiterkamerArr[i].hoofdgerecht4) {
              mainRuiterkamer.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[3]}</div>`;
              mainRuiterkamerEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[3]}</div>`;
            } else if (ruiterkamerArr[i].hoofdgerecht5) {
              mainRuiterkamer.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[4]}</div>`;
              mainRuiterkamerEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[4]}</div>`;
            } else if (ruiterkamerArr[i].hoofdgerecht6) {
              mainRuiterkamer.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[5]}</div>`;
              mainRuiterkamerEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[5]}</div>`;
            } else if (ruiterkamerArr[i].hoofdgerecht7) {
              mainRuiterkamer.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[6]}</div>`;
              mainRuiterkamerEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[6]}</div>`;
            }
          }
          counter++;
        }
      }
      ruiterkamerArrCount++;
      addHidden(ul);
    } else if (li.classList.value === "koetsierskamer-li") {
      removeHidden(koetsierskamer);
      if (koetsierskamerArrCount < 1) {
        let counter = 0;
        for (i = 0; i < koetsierskamerArr.length; i++) {
          //     console.log(koetsierskamerArr[i]);
          if (counter % 2 === 0) {
            fullNameKoetsierskamer.innerHTML += `<div class="injected">${koetsierskamerArr[i].fullName}</div>`;
            //     console.log(koetsierskamerArr[i].fullName + " none");
            if (koetsierskamerArr[i].voorgerecht1) {
              starterKoetsierskamer.innerHTML += `<div class="injected">${voorgerechtenNL[0]}</div>`;
              starterKoetsierskamerEN.innerHTML += `<div class="injected">${voorgerechtenEN[0]}</div>`;
            } else if (koetsierskamerArr[i].voorgerecht2) {
              starterKoetsierskamer.innerHTML += `<div class="injected">${voorgerechtenNL[1]}</div>`;
              starterKoetsierskamerEN.innerHTML += `<div class="injected">${voorgerechtenEN[1]}</div>`;
            } else if (koetsierskamerArr[i].voorgerecht3) {
              starterKoetsierskamer.innerHTML += `<div class="injected">${voorgerechtenNL[2]}</div>`;
              starterKoetsierskamerEN.innerHTML += `<div class="injected">${voorgerechtenEN[2]}</div>`;
            } else if (koetsierskamerArr[i].voorgerecht4) {
              starterKoetsierskamer.innerHTML += `<div class="injected">${voorgerechtenNL[3]}</div>`;
              starterKoetsierskamerEN.innerHTML += `<div class="injected">${voorgerechtenEN[3]}</div>`;
            } else if (koetsierskamerArr[i].voorgerecht5) {
              starterKoetsierskamer.innerHTML += `<div class="injected">${voorgerechtenNL[4]}</div>`;
              starterKoetsierskamerEN.innerHTML += `<div class="injected">${voorgerechtenEN[4]}</div>`;
            } else if (koetsierskamerArr[i].voorgerecht6) {
              starterKoetsierskamer.innerHTML += `<div class="injected">${voorgerechtenNL[5]}</div>`;
              starterKoetsierskamerEN.innerHTML += `<div class="injected">${voorgerechtenEN[5]}</div>`;
            } else if (koetsierskamerArr[i].voorgerecht7) {
              starterKoetsierskamer.innerHTML += `<div class="injected">${voorgerechtenNL[6]}</div>`;
              starterKoetsierskamerEN.innerHTML += `<div class="injected">${voorgerechtenEN[6]}</div>`;
            }
            if (koetsierskamerArr[i].hoofdgerecht1) {
              mainKoetsierskamer.innerHTML += `<div class="injected">${hoofdgerechtenNL[0]}</div>`;
              mainKoetsierskamerEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[0]}</div>`;
            } else if (koetsierskamerArr[i].hoofdgerecht2) {
              mainKoetsierskamer.innerHTML += `<div class="injected">${hoofdgerechtenNL[1]}</div>`;
              mainKoetsierskamerEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[1]}</div>`;
            } else if (koetsierskamerArr[i].hoofdgerecht3) {
              mainKoetsierskamer.innerHTML += `<div class="injected">${hoofdgerechtenNL[2]}</div>`;
              mainKoetsierskamerEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[2]}</div>`;
            } else if (koetsierskamerArr[i].hoofdgerecht4) {
              mainKoetsierskamer.innerHTML += `<div class="injected">${hoofdgerechtenNL[3]}</div>`;
              mainKoetsierskamerEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[3]}</div>`;
            } else if (koetsierskamerArr[i].hoofdgerecht5) {
              mainKoetsierskamer.innerHTML += `<div class="injected">${hoofdgerechtenNL[4]}</div>`;
              mainKoetsierskamerEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[4]}</div>`;
            } else if (koetsierskamerArr[i].hoofdgerecht6) {
              mainKoetsierskamer.innerHTML += `<div class="injected">${hoofdgerechtenNL[5]}</div>`;
              mainKoetsierskamerEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[5]}</div>`;
            } else if (koetsierskamerArr[i].hoofdgerecht7) {
              mainKoetsierskamer.innerHTML += `<div class="injected">${hoofdgerechtenNL[6]}</div>`;
              mainKoetsierskamerEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[6]}</div>`;
            }
          } else {
            fullNameKoetsierskamer.innerHTML += `<div class="injected red-background">${koetsierskamerArr[i].fullName}</div>`;
            //    console.log(koetsierskamerArr[i].fullName + " red");
            if (koetsierskamerArr[i].voorgerecht1) {
              starterKoetsierskamer.innerHTML += `<div class="injected red-background">${voorgerechtenNL[0]}</div>`;
              starterKoetsierskamerEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[0]}</div>`;
            } else if (koetsierskamerArr[i].voorgerecht2) {
              starterKoetsierskamer.innerHTML += `<div class="injected red-background">${voorgerechtenNL[1]}</div>`;
              starterKoetsierskamerEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[1]}</div>`;
            } else if (koetsierskamerArr[i].voorgerecht3) {
              starterKoetsierskamer.innerHTML += `<div class="injected red-background">${voorgerechtenNL[2]}</div>`;
              starterKoetsierskamerEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[2]}</div>`;
            } else if (koetsierskamerArr[i].voorgerecht4) {
              starterKoetsierskamer.innerHTML += `<div class="injected red-background">${voorgerechtenNL[3]}</div>`;
              starterKoetsierskamerEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[3]}</div>`;
            } else if (koetsierskamerArr[i].voorgerecht5) {
              starterKoetsierskamer.innerHTML += `<div class="injected red-background">${voorgerechtenNL[4]}</div>`;
              starterKoetsierskamerEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[4]}</div>`;
            } else if (koetsierskamerArr[i].voorgerecht6) {
              starterKoetsierskamer.innerHTML += `<div class="injected red-background">${voorgerechtenNL[5]}</div>`;
              starterKoetsierskamerEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[5]}</div>`;
            } else if (koetsierskamerArr[i].voorgerecht7) {
              starterKoetsierskamer.innerHTML += `<div class="injected red-background">${voorgerechtenNL[6]}</div>`;
              starterKoetsierskamerEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[6]}</div>`;
            }
            if (koetsierskamerArr[i].hoofdgerecht1) {
              mainKoetsierskamer.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[0]}</div>`;
              mainKoetsierskamerEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[0]}</div>`;
            } else if (koetsierskamerArr[i].hoofdgerecht2) {
              mainKoetsierskamer.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[1]}</div>`;
              mainKoetsierskamerEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[1]}</div>`;
            } else if (koetsierskamerArr[i].hoofdgerecht3) {
              mainKoetsierskamer.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[2]}</div>`;
              mainKoetsierskamerEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[2]}</div>`;
            } else if (koetsierskamerArr[i].hoofdgerecht4) {
              mainKoetsierskamer.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[3]}</div>`;
              mainKoetsierskamerEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[3]}</div>`;
            } else if (koetsierskamerArr[i].hoofdgerecht5) {
              mainKoetsierskamer.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[4]}</div>`;
              mainKoetsierskamerEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[4]}</div>`;
            } else if (koetsierskamerArr[i].hoofdgerecht6) {
              mainKoetsierskamer.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[5]}</div>`;
              mainKoetsierskamerEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[5]}</div>`;
            } else if (koetsierskamerArr[i].hoofdgerecht7) {
              mainKoetsierskamer.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[6]}</div>`;
              mainKoetsierskamerEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[6]}</div>`;
            }
          }
          counter++;
        }
      }
      koetsierskamerArrCount++;
      addHidden(ul);
    } else if (li.classList.value === "rododendron-li") {
      removeHidden(rododendron);
      if (rododendronArrCount < 1) {
        let counter = 0;
        for (i = 0; i < rododendronArr.length; i++) {
          //    console.log(rododendronArr[i]);
          if (counter % 2 === 0) {
            fullNameRododendron.innerHTML += `<div class="injected">${rododendronArr[i].fullName}</div>`;
            //     console.log(rododendronArr[i].fullName + " none");
            if (rododendronArr[i].voorgerecht1) {
              starterRododendron.innerHTML += `<div class="injected">${voorgerechtenNL[0]}</div>`;
              starterRododendronEN.innerHTML += `<div class="injected">${voorgerechtenEN[0]}</div>`;
            } else if (rododendronArr[i].voorgerecht2) {
              starterRododendron.innerHTML += `<div class="injected">${voorgerechtenNL[1]}</div>`;
              starterRododendronEN.innerHTML += `<div class="injected">${voorgerechtenEN[1]}</div>`;
            } else if (rododendronArr[i].voorgerecht3) {
              starterRododendron.innerHTML += `<div class="injected">${voorgerechtenNL[2]}</div>`;
              starterRododendronEN.innerHTML += `<div class="injected">${voorgerechtenEN[2]}</div>`;
            } else if (rododendronArr[i].voorgerecht4) {
              starterRododendron.innerHTML += `<div class="injected">${voorgerechtenNL[3]}</div>`;
              starterRododendronEN.innerHTML += `<div class="injected">${voorgerechtenEN[3]}</div>`;
            } else if (rododendronArr[i].voorgerecht5) {
              starterRododendron.innerHTML += `<div class="injected">${voorgerechtenNL[4]}</div>`;
              starterRododendronEN.innerHTML += `<div class="injected">${voorgerechtenEN[4]}</div>`;
            } else if (rododendronArr[i].voorgerecht6) {
              starterRododendron.innerHTML += `<div class="injected">${voorgerechtenNL[5]}</div>`;
              starterRododendronEN.innerHTML += `<div class="injected">${voorgerechtenEN[5]}</div>`;
            } else if (rododendronArr[i].voorgerecht7) {
              starterRododendron.innerHTML += `<div class="injected">${voorgerechtenNL[6]}</div>`;
              starterRododendronEN.innerHTML += `<div class="injected">${voorgerechtenEN[6]}</div>`;
            }
            if (rododendronArr[i].hoofdgerecht1) {
              mainRododendron.innerHTML += `<div class="injected">${hoofdgerechtenNL[0]}</div>`;
              mainRododendronEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[0]}</div>`;
            } else if (rododendronArr[i].hoofdgerecht2) {
              mainRododendron.innerHTML += `<div class="injected">${hoofdgerechtenNL[1]}</div>`;
              mainRododendronEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[1]}</div>`;
            } else if (rododendronArr[i].hoofdgerecht3) {
              mainRododendron.innerHTML += `<div class="injected">${hoofdgerechtenNL[2]}</div>`;
              mainRododendronEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[2]}</div>`;
            } else if (rododendronArr[i].hoofdgerecht4) {
              mainRododendron.innerHTML += `<div class="injected">${hoofdgerechtenNL[3]}</div>`;
              mainRododendronEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[3]}</div>`;
            } else if (rododendronArr[i].hoofdgerecht5) {
              mainRododendron.innerHTML += `<div class="injected">${hoofdgerechtenNL[4]}</div>`;
              mainRododendronEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[4]}</div>`;
            } else if (rododendronArr[i].hoofdgerecht6) {
              mainRododendron.innerHTML += `<div class="injected">${hoofdgerechtenNL[5]}</div>`;
              mainRododendronEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[5]}</div>`;
            } else if (rododendronArr[i].hoofdgerecht7) {
              mainRododendron.innerHTML += `<div class="injected">${hoofdgerechtenNL[6]}</div>`;
              mainRododendronEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[6]}</div>`;
            }
          } else {
            fullNameRododendron.innerHTML += `<div class="injected red-background">${rododendronArr[i].fullName}</div>`;
            //     console.log(rododendronArr[i].fullName + " red");
            if (rododendronArr[i].voorgerecht1) {
              starterRododendron.innerHTML += `<div class="injected red-background">${voorgerechtenNL[0]}</div>`;
              starterRododendronEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[0]}</div>`;
            } else if (rododendronArr[i].voorgerecht2) {
              starterRododendron.innerHTML += `<div class="injected red-background">${voorgerechtenNL[1]}</div>`;
              starterRododendronEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[1]}</div>`;
            } else if (rododendronArr[i].voorgerecht3) {
              starterRododendron.innerHTML += `<div class="injected red-background">${voorgerechtenNL[2]}</div>`;
              starterRododendronEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[2]}</div>`;
            } else if (rododendronArr[i].voorgerecht4) {
              starterRododendron.innerHTML += `<div class="injected red-background">${voorgerechtenNL[3]}</div>`;
              starterRododendronEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[3]}</div>`;
            } else if (rododendronArr[i].voorgerecht5) {
              starterRododendron.innerHTML += `<div class="injected red-background">${voorgerechtenNL[4]}</div>`;
              starterRododendronEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[4]}</div>`;
            } else if (rododendronArr[i].voorgerecht6) {
              starterRododendron.innerHTML += `<div class="injected red-background">${voorgerechtenNL[5]}</div>`;
              starterRododendronEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[5]}</div>`;
            } else if (rododendronArr[i].voorgerecht7) {
              starterRododendron.innerHTML += `<div class="injected red-background">${voorgerechtenNL[6]}</div>`;
              starterRododendronEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[6]}</div>`;
            }
            if (rododendronArr[i].hoofdgerecht1) {
              mainRododendron.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[0]}</div>`;
              mainRododendronEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[0]}</div>`;
            } else if (rododendronArr[i].hoofdgerecht2) {
              mainRododendron.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[1]}</div>`;
              mainRododendronEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[1]}</div>`;
            } else if (rododendronArr[i].hoofdgerecht3) {
              mainRododendron.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[2]}</div>`;
              mainRododendronEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[2]}</div>`;
            } else if (rododendronArr[i].hoofdgerecht4) {
              mainRododendron.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[3]}</div>`;
              mainRododendronEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[3]}</div>`;
            } else if (rododendronArr[i].hoofdgerecht5) {
              mainRododendron.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[4]}</div>`;
              mainRododendronEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[4]}</div>`;
            } else if (rododendronArr[i].hoofdgerecht6) {
              mainRododendron.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[5]}</div>`;
              mainRododendronEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[5]}</div>`;
            } else if (rododendronArr[i].hoofdgerecht7) {
              mainRododendron.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[6]}</div>`;
              mainRododendronEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[6]}</div>`;
            }
          }
          counter++;
        }
      }
      rododendronArrCount++;
      addHidden(ul);
    } else if (li.classList.value === "patio-li") {
      removeHidden(patio);
      if (patioArrCount < 1) {
        let counter = 0;
        for (i = 0; i < patioArr.length; i++) {
          //     console.log(patioArr[i]);
          if (counter % 2 === 0) {
            fullNamePatio.innerHTML += `<div class="injected">${patioArr[i].fullName}</div>`;
            //     console.log(patioArr[i].fullName + " none");
            if (patioArr[i].voorgerecht1) {
              starterPatio.innerHTML += `<div class="injected">${voorgerechtenNL[0]}</div>`;
              starterPatioEN.innerHTML += `<div class="injected">${voorgerechtenEN[0]}</div>`;
            } else if (patioArr[i].voorgerecht2) {
              starterPatio.innerHTML += `<div class="injected">${voorgerechtenNL[1]}</div>`;
              starterPatioEN.innerHTML += `<div class="injected">${voorgerechtenEN[1]}</div>`;
            } else if (patioArr[i].voorgerecht3) {
              starterPatio.innerHTML += `<div class="injected">${voorgerechtenNL[2]}</div>`;
              starterPatioEN.innerHTML += `<div class="injected">${voorgerechtenEN[2]}</div>`;
            } else if (patioArr[i].voorgerecht4) {
              starterPatio.innerHTML += `<div class="injected">${voorgerechtenNL[3]}</div>`;
              starterPatioEN.innerHTML += `<div class="injected">${voorgerechtenEN[3]}</div>`;
            } else if (patioArr[i].voorgerecht5) {
              starterPatio.innerHTML += `<div class="injected">${voorgerechtenNL[4]}</div>`;
              starterPatioEN.innerHTML += `<div class="injected">${voorgerechtenEN[4]}</div>`;
            } else if (patioArr[i].voorgerecht6) {
              starterPatio.innerHTML += `<div class="injected">${voorgerechtenNL[5]}</div>`;
              starterPatioEN.innerHTML += `<div class="injected">${voorgerechtenEN[5]}</div>`;
            } else if (patioArr[i].voorgerecht7) {
              starterPatio.innerHTML += `<div class="injected">${voorgerechtenNL[6]}</div>`;
              starterPatioEN.innerHTML += `<div class="injected">${voorgerechtenEN[6]}</div>`;
            }
            if (patioArr[i].hoofdgerecht1) {
              mainPatio.innerHTML += `<div class="injected">${hoofdgerechtenNL[0]}</div>`;
              mainPatioEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[0]}</div>`;
            } else if (patioArr[i].hoofdgerecht2) {
              mainPatio.innerHTML += `<div class="injected">${hoofdgerechtenNL[1]}</div>`;
              mainPatioEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[1]}</div>`;
            } else if (patioArr[i].hoofdgerecht3) {
              mainPatio.innerHTML += `<div class="injected">${hoofdgerechtenNL[2]}</div>`;
              mainPatioEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[2]}</div>`;
            } else if (patioArr[i].hoofdgerecht4) {
              mainPatio.innerHTML += `<div class="injected">${hoofdgerechtenNL[3]}</div>`;
              mainPatioEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[3]}</div>`;
            } else if (patioArr[i].hoofdgerecht5) {
              mainPatio.innerHTML += `<div class="injected">${hoofdgerechtenNL[4]}</div>`;
              mainPatioEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[4]}</div>`;
            } else if (patioArr[i].hoofdgerecht6) {
              mainPatio.innerHTML += `<div class="injected">${hoofdgerechtenNL[5]}</div>`;
              mainPatioEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[5]}</div>`;
            } else if (patioArr[i].hoofdgerecht7) {
              mainPatio.innerHTML += `<div class="injected">${hoofdgerechtenNL[6]}</div>`;
              mainPatioEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[6]}</div>`;
            }
          } else {
            fullNamePatio.innerHTML += `<div class="injected red-background">${patioArr[i].fullName}</div>`;
            //        console.log(patioArr[i].fullName + " red");
            if (patioArr[i].voorgerecht1) {
              starterPatio.innerHTML += `<div class="injected red-background">${voorgerechtenNL[0]}</div>`;
              starterPatioEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[0]}</div>`;
            } else if (patioArr[i].voorgerecht2) {
              starterPatio.innerHTML += `<div class="injected red-background">${voorgerechtenNL[1]}</div>`;
              starterPatioEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[1]}</div>`;
            } else if (patioArr[i].voorgerecht3) {
              starterPatio.innerHTML += `<div class="injected red-background">${voorgerechtenNL[2]}</div>`;
              starterPatioEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[2]}</div>`;
            } else if (patioArr[i].voorgerecht4) {
              starterPatio.innerHTML += `<div class="injected red-background">${voorgerechtenNL[3]}</div>`;
              starterPatioEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[3]}</div>`;
            } else if (patioArr[i].voorgerecht5) {
              starterPatio.innerHTML += `<div class="injected red-background">${voorgerechtenNL[4]}</div>`;
              starterPatioEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[4]}</div>`;
            } else if (patioArr[i].voorgerecht6) {
              starterPatio.innerHTML += `<div class="injected red-background">${voorgerechtenNL[5]}</div>`;
              starterPatioEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[5]}</div>`;
            } else if (patioArr[i].voorgerecht7) {
              starterPatio.innerHTML += `<div class="injected red-background">${voorgerechtenNL[6]}</div>`;
              starterPatioEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[6]}</div>`;
            }
            if (patioArr[i].hoofdgerecht1) {
              mainPatio.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[0]}</div>`;
              mainPatioEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[0]}</div>`;
            } else if (patioArr[i].hoofdgerecht2) {
              mainPatio.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[1]}</div>`;
              mainPatioEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[1]}</div>`;
            } else if (patioArr[i].hoofdgerecht3) {
              mainPatio.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[2]}</div>`;
              mainPatioEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[2]}</div>`;
            } else if (patioArr[i].hoofdgerecht4) {
              mainPatio.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[3]}</div>`;
              mainPatioEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[3]}</div>`;
            } else if (patioArr[i].hoofdgerecht5) {
              mainPatio.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[4]}</div>`;
              mainPatioEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[4]}</div>`;
            } else if (patioArr[i].hoofdgerecht6) {
              mainPatio.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[5]}</div>`;
              mainPatioEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[5]}</div>`;
            } else if (patioArr[i].hoofdgerecht7) {
              mainPatio.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[6]}</div>`;
              mainPatioEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[6]}</div>`;
            }
          }
          counter++;
        }
      }
      patioArrCount++;
      addHidden(ul);
    } else if (li.classList.value === "magnolia-li") {
      removeHidden(magnolia);
      if (magnoliaArrCount < 1) {
        let counter = 0;
        for (i = 0; i < magnoliaArr.length; i++) {
          //      console.log(magnoliaArr[i]);
          if (counter % 2 === 0) {
            fullNameMagnolia.innerHTML += `<div class="injected">${magnoliaArr[i].fullName}</div>`;
            //      console.log(magnoliaArr[i].fullName + " none");
            if (magnoliaArr[i].voorgerecht1) {
              starterMagnolia.innerHTML += `<div class="injected">${voorgerechtenNL[0]}</div>`;
              starterMagnoliaEN.innerHTML += `<div class="injected">${voorgerechtenEN[0]}</div>`;
            } else if (magnoliaArr[i].voorgerecht2) {
              starterMagnolia.innerHTML += `<div class="injected">${voorgerechtenNL[1]}</div>`;
              starterMagnoliaEN.innerHTML += `<div class="injected">${voorgerechtenEN[1]}</div>`;
            } else if (magnoliaArr[i].voorgerecht3) {
              starterMagnolia.innerHTML += `<div class="injected">${voorgerechtenNL[2]}</div>`;
              starterMagnoliaEN.innerHTML += `<div class="injected">${voorgerechtenEN[2]}</div>`;
            } else if (magnoliaArr[i].voorgerecht4) {
              starterMagnolia.innerHTML += `<div class="injected">${voorgerechtenNL[3]}</div>`;
              starterMagnoliaEN.innerHTML += `<div class="injected">${voorgerechtenEN[3]}</div>`;
            } else if (magnoliaArr[i].voorgerecht5) {
              starterMagnolia.innerHTML += `<div class="injected">${voorgerechtenNL[4]}</div>`;
              starterMagnoliaEN.innerHTML += `<div class="injected">${voorgerechtenEN[4]}</div>`;
            } else if (magnoliaArr[i].voorgerecht6) {
              starterMagnolia.innerHTML += `<div class="injected">${voorgerechtenNL[5]}</div>`;
              starterMagnoliaEN.innerHTML += `<div class="injected">${voorgerechtenEN[5]}</div>`;
            } else if (magnoliaArr[i].voorgerecht7) {
              starterMagnolia.innerHTML += `<div class="injected">${voorgerechtenNL[6]}</div>`;
              starterMagnoliaEN.innerHTML += `<div class="injected">${voorgerechtenEN[6]}</div>`;
            }
            if (magnoliaArr[i].hoofdgerecht1) {
              mainMagnolia.innerHTML += `<div class="injected">${hoofdgerechtenNL[0]}</div>`;
              mainMagnoliaEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[0]}</div>`;
            } else if (magnoliaArr[i].hoofdgerecht2) {
              mainMagnolia.innerHTML += `<div class="injected">${hoofdgerechtenNL[1]}</div>`;
              mainMagnoliaEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[1]}</div>`;
            } else if (magnoliaArr[i].hoofdgerecht3) {
              mainMagnolia.innerHTML += `<div class="injected">${hoofdgerechtenNL[2]}</div>`;
              mainMagnoliaEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[2]}</div>`;
            } else if (magnoliaArr[i].hoofdgerecht4) {
              mainMagnolia.innerHTML += `<div class="injected">${hoofdgerechtenNL[3]}</div>`;
              mainMagnoliaEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[3]}</div>`;
            } else if (magnoliaArr[i].hoofdgerecht5) {
              mainMagnolia.innerHTML += `<div class="injected">${hoofdgerechtenNL[4]}</div>`;
              mainMagnoliaEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[4]}</div>`;
            } else if (magnoliaArr[i].hoofdgerecht6) {
              mainMagnolia.innerHTML += `<div class="injected">${hoofdgerechtenNL[5]}</div>`;
              mainMagnoliaEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[5]}</div>`;
            } else if (magnoliaArr[i].hoofdgerecht7) {
              mainMagnolia.innerHTML += `<div class="injected">${hoofdgerechtenNL[6]}</div>`;
              mainMagnoliaEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[6]}</div>`;
            }
          } else {
            fullNameMagnolia.innerHTML += `<div class="injected red-background">${magnoliaArr[i].fullName}</div>`;
            //        console.log(magnoliaArr[i].fullName + " red");
            if (magnoliaArr[i].voorgerecht1) {
              starterMagnolia.innerHTML += `<div class="injected red-background">${voorgerechtenNL[0]}</div>`;
              starterMagnoliaEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[0]}</div>`;
            } else if (magnoliaArr[i].voorgerecht2) {
              starterMagnolia.innerHTML += `<div class="injected red-background">${voorgerechtenNL[1]}</div>`;
              starterMagnoliaEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[1]}</div>`;
            } else if (magnoliaArr[i].voorgerecht3) {
              starterMagnolia.innerHTML += `<div class="injected red-background">${voorgerechtenNL[2]}</div>`;
              starterMagnoliaEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[2]}</div>`;
            } else if (magnoliaArr[i].voorgerecht4) {
              starterMagnolia.innerHTML += `<div class="injected red-background">${voorgerechtenNL[3]}</div>`;
              starterMagnoliaEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[3]}</div>`;
            } else if (magnoliaArr[i].voorgerecht5) {
              starterMagnolia.innerHTML += `<div class="injected red-background">${voorgerechtenNL[4]}</div>`;
              starterMagnoliaEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[4]}</div>`;
            } else if (magnoliaArr[i].voorgerecht6) {
              starterMagnolia.innerHTML += `<div class="injected red-background">${voorgerechtenNL[5]}</div>`;
              starterMagnoliaEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[5]}</div>`;
            } else if (magnoliaArr[i].voorgerecht7) {
              starterMagnolia.innerHTML += `<div class="injected red-background">${voorgerechtenNL[6]}</div>`;
              starterMagnoliaEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[6]}</div>`;
            }
            if (magnoliaArr[i].hoofdgerecht1) {
              mainMagnolia.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[0]}</div>`;
              mainMagnoliaEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[0]}</div>`;
            } else if (magnoliaArr[i].hoofdgerecht2) {
              mainMagnolia.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[1]}</div>`;
              mainMagnoliaEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[1]}</div>`;
            } else if (magnoliaArr[i].hoofdgerecht3) {
              mainMagnolia.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[2]}</div>`;
              mainMagnoliaEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[2]}</div>`;
            } else if (magnoliaArr[i].hoofdgerecht4) {
              mainMagnolia.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[3]}</div>`;
              mainMagnoliaEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[3]}</div>`;
            } else if (magnoliaArr[i].hoofdgerecht5) {
              mainMagnolia.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[4]}</div>`;
              mainMagnoliaEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[4]}</div>`;
            } else if (magnoliaArr[i].hoofdgerecht6) {
              mainMagnolia.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[5]}</div>`;
              mainMagnoliaEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[5]}</div>`;
            } else if (magnoliaArr[i].hoofdgerecht7) {
              mainMagnolia.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[6]}</div>`;
              mainMagnoliaEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[6]}</div>`;
            }
          }
          counter++;
        }
      }
      magnoliaArrCount++;
      addHidden(ul);
    } else if (li.classList.value === "zadelkamer-li") {
      removeHidden(zadelkamer);
      if (zadelkamerArrCount < 1) {
        let counter = 0;
        for (i = 0; i < zadelkamerArr.length; i++) {
          //      console.log(zadelkamerArr[i]);
          if (counter % 2 === 0) {
            fullNameZadelkamer.innerHTML += `<div class="injected">${zadelkamerArr[i].fullName}</div>`;
            //       console.log(zadelkamerArr[i].fullName + " none");
            if (zadelkamerArr[i].voorgerecht1) {
              starterZadelkamer.innerHTML += `<div class="injected">${voorgerechtenNL[0]}</div>`;
              starterZadelkamerEN.innerHTML += `<div class="injected">${voorgerechtenEN[0]}</div>`;
            } else if (zadelkamerArr[i].voorgerecht2) {
              starterZadelkamer.innerHTML += `<div class="injected">${voorgerechtenNL[1]}</div>`;
              starterZadelkamerEN.innerHTML += `<div class="injected">${voorgerechtenEN[1]}</div>`;
            } else if (zadelkamerArr[i].voorgerecht3) {
              starterZadelkamer.innerHTML += `<div class="injected">${voorgerechtenNL[2]}</div>`;
              starterZadelkamerEN.innerHTML += `<div class="injected">${voorgerechtenEN[2]}</div>`;
            } else if (zadelkamerArr[i].voorgerecht4) {
              starterZadelkamer.innerHTML += `<div class="injected">${voorgerechtenNL[3]}</div>`;
              starterZadelkamerEN.innerHTML += `<div class="injected">${voorgerechtenEN[3]}</div>`;
            } else if (zadelkamerArr[i].voorgerecht5) {
              starterZadelkamer.innerHTML += `<div class="injected">${voorgerechtenNL[4]}</div>`;
              starterZadelkamerEN.innerHTML += `<div class="injected">${voorgerechtenEN[4]}</div>`;
            } else if (zadelkamerArr[i].voorgerecht6) {
              starterZadelkamer.innerHTML += `<div class="injected">${voorgerechtenNL[5]}</div>`;
              starterZadelkamerEN.innerHTML += `<div class="injected">${voorgerechtenEN[5]}</div>`;
            } else if (zadelkamerArr[i].voorgerecht7) {
              starterZadelkamer.innerHTML += `<div class="injected">${voorgerechtenNL[6]}</div>`;
              starterZadelkamerEN.innerHTML += `<div class="injected">${voorgerechtenEN[6]}</div>`;
            }
            if (zadelkamerArr[i].hoofdgerecht1) {
              mainZadelkamer.innerHTML += `<div class="injected">${hoofdgerechtenNL[0]}</div>`;
              mainZadelkamerEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[0]}</div>`;
            } else if (zadelkamerArr[i].hoofdgerecht2) {
              mainZadelkamer.innerHTML += `<div class="injected">${hoofdgerechtenNL[1]}</div>`;
              mainZadelkamerEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[1]}</div>`;
            } else if (zadelkamerArr[i].hoofdgerecht3) {
              mainZadelkamer.innerHTML += `<div class="injected">${hoofdgerechtenNL[2]}</div>`;
              mainZadelkamerEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[2]}</div>`;
            } else if (zadelkamerArr[i].hoofdgerecht4) {
              mainZadelkamer.innerHTML += `<div class="injected">${hoofdgerechtenNL[3]}</div>`;
              mainZadelkamerEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[3]}</div>`;
            } else if (zadelkamerArr[i].hoofdgerecht5) {
              mainZadelkamer.innerHTML += `<div class="injected">${hoofdgerechtenNL[4]}</div>`;
              mainZadelkamerEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[4]}</div>`;
            } else if (zadelkamerArr[i].hoofdgerecht6) {
              mainZadelkamer.innerHTML += `<div class="injected">${hoofdgerechtenNL[5]}</div>`;
              mainZadelkamerEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[5]}</div>`;
            } else if (zadelkamerArr[i].hoofdgerecht7) {
              mainZadelkamer.innerHTML += `<div class="injected">${hoofdgerechtenNL[6]}</div>`;
              mainZadelkamerEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[6]}</div>`;
            }
          } else {
            fullNameZadelkamer.innerHTML += `<div class="injected red-background">${zadelkamerArr[i].fullName}</div>`;
            //      console.log(zadelkamerArr[i].fullName + " red");
            if (zadelkamerArr[i].voorgerecht1) {
              starterZadelkamer.innerHTML += `<div class="injected red-background">${voorgerechtenNL[0]}</div>`;
              starterZadelkamerEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[0]}</div>`;
            } else if (zadelkamerArr[i].voorgerecht2) {
              starterZadelkamer.innerHTML += `<div class="injected red-background">${voorgerechtenNL[1]}</div>`;
              starterZadelkamerEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[1]}</div>`;
            } else if (zadelkamerArr[i].voorgerecht3) {
              starterZadelkamer.innerHTML += `<div class="injected red-background">${voorgerechtenNL[2]}</div>`;
              starterZadelkamerEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[2]}</div>`;
            } else if (zadelkamerArr[i].voorgerecht4) {
              starterZadelkamer.innerHTML += `<div class="injected red-background">${voorgerechtenNL[3]}</div>`;
              starterZadelkamerEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[3]}</div>`;
            } else if (zadelkamerArr[i].voorgerecht5) {
              starterZadelkamer.innerHTML += `<div class="injected red-background">${voorgerechtenNL[4]}</div>`;
              starterZadelkamerEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[4]}</div>`;
            } else if (zadelkamerArr[i].voorgerecht6) {
              starterZadelkamer.innerHTML += `<div class="injected red-background">${voorgerechtenNL[5]}</div>`;
              starterZadelkamerEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[5]}</div>`;
            } else if (zadelkamerArr[i].voorgerecht7) {
              starterZadelkamer.innerHTML += `<div class="injected red-background">${voorgerechtenNL[6]}</div>`;
              starterZadelkamerEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[6]}</div>`;
            }
            if (zadelkamerArr[i].hoofdgerecht1) {
              mainZadelkamer.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[0]}</div>`;
              mainZadelkamerEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[0]}</div>`;
            } else if (zadelkamerArr[i].hoofdgerecht2) {
              mainZadelkamer.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[1]}</div>`;
              mainZadelkamerEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[1]}</div>`;
            } else if (zadelkamerArr[i].hoofdgerecht3) {
              mainZadelkamer.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[2]}</div>`;
              mainZadelkamerEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[2]}</div>`;
            } else if (zadelkamerArr[i].hoofdgerecht4) {
              mainZadelkamer.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[3]}</div>`;
              mainZadelkamerEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[3]}</div>`;
            } else if (zadelkamerArr[i].hoofdgerecht5) {
              mainZadelkamer.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[4]}</div>`;
              mainZadelkamerEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[4]}</div>`;
            } else if (zadelkamerArr[i].hoofdgerecht6) {
              mainZadelkamer.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[5]}</div>`;
              mainZadelkamerEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[5]}</div>`;
            } else if (zadelkamerArr[i].hoofdgerecht7) {
              mainZadelkamer.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[6]}</div>`;
              mainZadelkamerEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[6]}</div>`;
            }
          }
          counter++;
        }
      }
      zadelkamerArrCount++;
      addHidden(ul);
    } else if (li.classList.value === "prins-hendrik1-li") {
      removeHidden(prinshendrik1);
      if (prinshendrik1ArrCount < 1) {
        let counter = 0;
        for (i = 0; i < prinshendrik1Arr.length; i++) {
          //      console.log(prinshendrik1Arr[i]);
          if (counter % 2 === 0) {
            fullNamePrinshendrik1.innerHTML += `<div class="injected">${prinshendrik1Arr[i].fullName}</div>`;
            //     console.log(prinshendrik1Arr[i].fullName + " none");
            if (prinshendrik1Arr[i].voorgerecht1) {
              starterPrinshendrik1.innerHTML += `<div class="injected">${voorgerechtenNL[0]}</div>`;
              starterPrinshendrik1EN.innerHTML += `<div class="injected">${voorgerechtenEN[0]}</div>`;
            } else if (prinshendrik1Arr[i].voorgerecht2) {
              starterPrinshendrik1.innerHTML += `<div class="injected">${voorgerechtenNL[1]}</div>`;
              starterPrinshendrik1EN.innerHTML += `<div class="injected">${voorgerechtenEN[1]}</div>`;
            } else if (prinshendrik1Arr[i].voorgerecht3) {
              starterPrinshendrik1.innerHTML += `<div class="injected">${voorgerechtenNL[2]}</div>`;
              starterPrinshendrik1EN.innerHTML += `<div class="injected">${voorgerechtenEN[2]}</div>`;
            } else if (prinshendrik1Arr[i].voorgerecht4) {
              starterPrinshendrik1.innerHTML += `<div class="injected">${voorgerechtenNL[3]}</div>`;
              starterPrinshendrik1EN.innerHTML += `<div class="injected">${voorgerechtenEN[3]}</div>`;
            } else if (prinshendrik1Arr[i].voorgerecht5) {
              starterPrinshendrik1.innerHTML += `<div class="injected">${voorgerechtenNL[4]}</div>`;
              starterPrinshendrik1EN.innerHTML += `<div class="injected">${voorgerechtenEN[4]}</div>`;
            } else if (prinshendrik1Arr[i].voorgerecht6) {
              starterPrinshendrik1.innerHTML += `<div class="injected">${voorgerechtenNL[5]}</div>`;
              starterPrinshendrik1EN.innerHTML += `<div class="injected">${voorgerechtenEN[5]}</div>`;
            } else if (prinshendrik1Arr[i].voorgerecht7) {
              starterPrinshendrik1.innerHTML += `<div class="injected">${voorgerechtenNL[6]}</div>`;
              starterPrinshendrik1EN.innerHTML += `<div class="injected">${voorgerechtenEN[6]}</div>`;
            }
            if (prinshendrik1Arr[i].hoofdgerecht1) {
              mainPrinshendrik1.innerHTML += `<div class="injected">${hoofdgerechtenNL[0]}</div>`;
              mainPrinshendrik1EN.innerHTML += `<div class="injected">${hoofdgerechtenEN[0]}</div>`;
            } else if (prinshendrik1Arr[i].hoofdgerecht2) {
              mainPrinshendrik1.innerHTML += `<div class="injected">${hoofdgerechtenNL[1]}</div>`;
              mainPrinshendrik1EN.innerHTML += `<div class="injected">${hoofdgerechtenEN[1]}</div>`;
            } else if (prinshendrik1Arr[i].hoofdgerecht3) {
              mainPrinshendrik1.innerHTML += `<div class="injected">${hoofdgerechtenNL[2]}</div>`;
              mainPrinshendrik1EN.innerHTML += `<div class="injected">${hoofdgerechtenEN[2]}</div>`;
            } else if (prinshendrik1Arr[i].hoofdgerecht4) {
              mainPrinshendrik1.innerHTML += `<div class="injected">${hoofdgerechtenNL[3]}</div>`;
              mainPrinshendrik1EN.innerHTML += `<div class="injected">${hoofdgerechtenEN[3]}</div>`;
            } else if (prinshendrik1Arr[i].hoofdgerecht5) {
              mainPrinshendrik1.innerHTML += `<div class="injected">${hoofdgerechtenNL[4]}</div>`;
              mainPrinshendrik1EN.innerHTML += `<div class="injected">${hoofdgerechtenEN[4]}</div>`;
            } else if (prinshendrik1Arr[i].hoofdgerecht6) {
              mainPrinshendrik1.innerHTML += `<div class="injected">${hoofdgerechtenNL[5]}</div>`;
              mainPrinshendrik1EN.innerHTML += `<div class="injected">${hoofdgerechtenEN[5]}</div>`;
            } else if (prinshendrik1Arr[i].hoofdgerecht7) {
              mainPrinshendrik1.innerHTML += `<div class="injected">${hoofdgerechtenNL[6]}</div>`;
              mainPrinshendrik1EN.innerHTML += `<div class="injected">${hoofdgerechtenEN[6]}</div>`;
            }
          } else {
            fullNamePrinshendrik1.innerHTML += `<div class="injected red-background">${prinshendrik1Arr[i].fullName}</div>`;
            //     console.log(prinshendrik1Arr[i].fullName + " red");
            if (prinshendrik1Arr[i].voorgerecht1) {
              starterPrinshendrik1.innerHTML += `<div class="injected red-background">${voorgerechtenNL[0]}</div>`;
              starterPrinshendrik1EN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[0]}</div>`;
            } else if (prinshendrik1Arr[i].voorgerecht2) {
              starterPrinshendrik1.innerHTML += `<div class="injected red-background">${voorgerechtenNL[1]}</div>`;
              starterPrinshendrik1EN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[1]}</div>`;
            } else if (prinshendrik1Arr[i].voorgerecht3) {
              starterPrinshendrik1.innerHTML += `<div class="injected red-background">${voorgerechtenNL[2]}</div>`;
              starterPrinshendrik1EN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[2]}</div>`;
            } else if (prinshendrik1Arr[i].voorgerecht4) {
              starterPrinshendrik1.innerHTML += `<div class="injected red-background">${voorgerechtenNL[3]}</div>`;
              starterPrinshendrik1EN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[3]}</div>`;
            } else if (prinshendrik1Arr[i].voorgerecht5) {
              starterPrinshendrik1.innerHTML += `<div class="injected red-background">${voorgerechtenNL[4]}</div>`;
              starterPrinshendrik1EN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[4]}</div>`;
            } else if (prinshendrik1Arr[i].voorgerecht6) {
              starterPrinshendrik1.innerHTML += `<div class="injected red-background">${voorgerechtenNL[5]}</div>`;
              starterPrinshendrik1EN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[5]}</div>`;
            } else if (prinshendrik1Arr[i].voorgerecht7) {
              starterPrinshendrik1.innerHTML += `<div class="injected red-background">${voorgerechtenNL[6]}</div>`;
              starterPrinshendrik1EN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[6]}</div>`;
            }
            if (prinshendrik1Arr[i].hoofdgerecht1) {
              mainPrinshendrik1.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[0]}</div>`;
              mainPrinshendrik1EN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[0]}</div>`;
            } else if (prinshendrik1Arr[i].hoofdgerecht2) {
              mainPrinshendrik1.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[1]}</div>`;
              mainPrinshendrik1EN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[1]}</div>`;
            } else if (prinshendrik1Arr[i].hoofdgerecht3) {
              mainPrinshendrik1.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[2]}</div>`;
              mainPrinshendrik1EN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[2]}</div>`;
            } else if (prinshendrik1Arr[i].hoofdgerecht4) {
              mainPrinshendrik1.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[3]}</div>`;
              mainPrinshendrik1EN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[3]}</div>`;
            } else if (prinshendrik1Arr[i].hoofdgerecht5) {
              mainPrinshendrik1.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[4]}</div>`;
              mainPrinshendrik1EN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[4]}</div>`;
            } else if (prinshendrik1Arr[i].hoofdgerecht6) {
              mainPrinshendrik1.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[5]}</div>`;
              mainPrinshendrik1EN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[5]}</div>`;
            } else if (prinshendrik1Arr[i].hoofdgerecht7) {
              mainPrinshendrik1.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[6]}</div>`;
              mainPrinshendrik1EN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[6]}</div>`;
            }
          }
          counter++;
        }
      }
      prinshendrik1ArrCount++;
      addHidden(ul);
    } else if (li.classList.value === "prins-hendrik2-li") {
      removeHidden(prinshendrik2);
      if (prinshendrik2ArrCount < 1) {
        let counter = 0;
        for (i = 0; i < prinshendrik2Arr.length; i++) {
          //      console.log(prinshendrik2Arr[i]);
          if (counter % 2 === 0) {
            fullNamePrinshendrik2.innerHTML += `<div class="injected">${prinshendrik2Arr[i].fullName}</div>`;
            //      console.log(prinshendrik2Arr[i].fullName + " none");
            if (prinshendrik2Arr[i].voorgerecht1) {
              starterPrinshendrik2.innerHTML += `<div class="injected">${voorgerechtenNL[0]}</div>`;
              starterPrinshendrik2EN.innerHTML += `<div class="injected">${voorgerechtenEN[0]}</div>`;
            } else if (prinshendrik2Arr[i].voorgerecht2) {
              starterPrinshendrik2.innerHTML += `<div class="injected">${voorgerechtenNL[1]}</div>`;
              starterPrinshendrik2EN.innerHTML += `<div class="injected">${voorgerechtenEN[1]}</div>`;
            } else if (prinshendrik2Arr[i].voorgerecht3) {
              starterPrinshendrik2.innerHTML += `<div class="injected">${voorgerechtenNL[2]}</div>`;
              starterPrinshendrik2EN.innerHTML += `<div class="injected">${voorgerechtenEN[2]}</div>`;
            } else if (prinshendrik2Arr[i].voorgerecht4) {
              starterPrinshendrik2.innerHTML += `<div class="injected">${voorgerechtenNL[3]}</div>`;
              starterPrinshendrik2EN.innerHTML += `<div class="injected">${voorgerechtenEN[3]}</div>`;
            } else if (prinshendrik2Arr[i].voorgerecht5) {
              starterPrinshendrik2.innerHTML += `<div class="injected">${voorgerechtenNL[4]}</div>`;
              starterPrinshendrik2EN.innerHTML += `<div class="injected">${voorgerechtenEN[4]}</div>`;
            } else if (prinshendrik2Arr[i].voorgerecht6) {
              starterPrinshendrik2.innerHTML += `<div class="injected">${voorgerechtenNL[5]}</div>`;
              starterPrinshendrik2EN.innerHTML += `<div class="injected">${voorgerechtenEN[5]}</div>`;
            } else if (prinshendrik2Arr[i].voorgerecht7) {
              starterPrinshendrik2.innerHTML += `<div class="injected">${voorgerechtenNL[6]}</div>`;
              starterPrinshendrik2EN.innerHTML += `<div class="injected">${voorgerechtenEN[6]}</div>`;
            }
            if (prinshendrik2Arr[i].hoofdgerecht1) {
              mainPrinshendrik2.innerHTML += `<div class="injected">${hoofdgerechtenNL[0]}</div>`;
              mainPrinshendrik2EN.innerHTML += `<div class="injected">${hoofdgerechtenEN[0]}</div>`;
            } else if (prinshendrik2Arr[i].hoofdgerecht2) {
              mainPrinshendrik2.innerHTML += `<div class="injected">${hoofdgerechtenNL[1]}</div>`;
              mainPrinshendrik2EN.innerHTML += `<div class="injected">${hoofdgerechtenEN[1]}</div>`;
            } else if (prinshendrik2Arr[i].hoofdgerecht3) {
              mainPrinshendrik2.innerHTML += `<div class="injected">${hoofdgerechtenNL[2]}</div>`;
              mainPrinshendrik2EN.innerHTML += `<div class="injected">${hoofdgerechtenEN[2]}</div>`;
            } else if (prinshendrik2Arr[i].hoofdgerecht4) {
              mainPrinshendrik2.innerHTML += `<div class="injected">${hoofdgerechtenNL[3]}</div>`;
              mainPrinshendrik2EN.innerHTML += `<div class="injected">${hoofdgerechtenEN[3]}</div>`;
            } else if (prinshendrik2Arr[i].hoofdgerecht5) {
              mainPrinshendrik2.innerHTML += `<div class="injected">${hoofdgerechtenNL[4]}</div>`;
              mainPrinshendrik2EN.innerHTML += `<div class="injected">${hoofdgerechtenEN[4]}</div>`;
            } else if (prinshendrik2Arr[i].hoofdgerecht6) {
              mainPrinshendrik2.innerHTML += `<div class="injected">${hoofdgerechtenNL[5]}</div>`;
              mainPrinshendrik2EN.innerHTML += `<div class="injected">${hoofdgerechtenEN[5]}</div>`;
            } else if (prinshendrik2Arr[i].hoofdgerecht7) {
              mainPrinshendrik2.innerHTML += `<div class="injected">${hoofdgerechtenNL[6]}</div>`;
              mainPrinshendrik2EN.innerHTML += `<div class="injected">${hoofdgerechtenEN[6]}</div>`;
            }
          } else {
            fullNamePrinshendrik2.innerHTML += `<div class="injected red-background">${prinshendrik2Arr[i].fullName}</div>`;
            //       console.log(prinshendrik2Arr[i].fullName + " red");
            if (prinshendrik2Arr[i].voorgerecht1) {
              starterPrinshendrik2.innerHTML += `<div class="injected red-background">${voorgerechtenNL[0]}</div>`;
              starterPrinshendrik2EN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[0]}</div>`;
            } else if (prinshendrik2Arr[i].voorgerecht2) {
              starterPrinshendrik2.innerHTML += `<div class="injected red-background">${voorgerechtenNL[1]}</div>`;
              starterPrinshendrik2EN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[1]}</div>`;
            } else if (prinshendrik2Arr[i].voorgerecht3) {
              starterPrinshendrik2.innerHTML += `<div class="injected red-background">${voorgerechtenNL[2]}</div>`;
              starterPrinshendrik2EN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[2]}</div>`;
            } else if (prinshendrik2Arr[i].voorgerecht4) {
              starterPrinshendrik2.innerHTML += `<div class="injected red-background">${voorgerechtenNL[3]}</div>`;
              starterPrinshendrik2EN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[3]}</div>`;
            } else if (prinshendrik2Arr[i].voorgerecht5) {
              starterPrinshendrik2.innerHTML += `<div class="injected red-background">${voorgerechtenNL[4]}</div>`;
              starterPrinshendrik2EN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[4]}</div>`;
            } else if (prinshendrik2Arr[i].voorgerecht6) {
              starterPrinshendrik2.innerHTML += `<div class="injected red-background">${voorgerechtenNL[5]}</div>`;
              starterPrinshendrik2EN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[5]}</div>`;
            } else if (prinshendrik2Arr[i].voorgerecht7) {
              starterPrinshendrik2.innerHTML += `<div class="injected red-background">${voorgerechtenNL[6]}</div>`;
              starterPrinshendrik2EN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[6]}</div>`;
            }
            if (prinshendrik2Arr[i].hoofdgerecht1) {
              mainPrinshendrik2.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[0]}</div>`;
              mainPrinshendrik2EN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[0]}</div>`;
            } else if (prinshendrik2Arr[i].hoofdgerecht2) {
              mainPrinshendrik2.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[1]}</div>`;
              mainPrinshendrik2EN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[1]}</div>`;
            } else if (prinshendrik2Arr[i].hoofdgerecht3) {
              mainPrinshendrik2.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[2]}</div>`;
              mainPrinshendrik2EN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[2]}</div>`;
            } else if (prinshendrik2Arr[i].hoofdgerecht4) {
              mainPrinshendrik2.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[3]}</div>`;
              mainPrinshendrik2EN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[3]}</div>`;
            } else if (prinshendrik2Arr[i].hoofdgerecht5) {
              mainPrinshendrik2.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[4]}</div>`;
              mainPrinshendrik2EN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[4]}</div>`;
            } else if (prinshendrik2Arr[i].hoofdgerecht6) {
              mainPrinshendrik2.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[5]}</div>`;
              mainPrinshendrik2EN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[5]}</div>`;
            } else if (prinshendrik2Arr[i].hoofdgerecht7) {
              mainPrinshendrik2.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[6]}</div>`;
              mainPrinshendrik2EN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[6]}</div>`;
            }
          }
          counter++;
        }
      }
      prinshendrik2ArrCount++;
      addHidden(ul);
    } else if (li.classList.value === "prins-hendrik3-li") {
      removeHidden(prinshendrik3);
      if (prinshendrik3ArrCount < 1) {
        let counter = 0;
        for (i = 0; i < prinshendrik3Arr.length; i++) {
          //     console.log(prinshendrik3Arr[i]);
          if (counter % 2 === 0) {
            fullNamePrinshendrik3.innerHTML += `<div class="injected">${prinshendrik3Arr[i].fullName}</div>`;
            //     console.log(prinshendrik3Arr[i].fullName + " none");
            if (prinshendrik3Arr[i].voorgerecht1) {
              starterPrinshendrik3.innerHTML += `<div class="injected">${voorgerechtenNL[0]}</div>`;
              starterPrinshendrik3EN.innerHTML += `<div class="injected">${voorgerechtenEN[0]}</div>`;
            } else if (prinshendrik3Arr[i].voorgerecht2) {
              starterPrinshendrik3.innerHTML += `<div class="injected">${voorgerechtenNL[1]}</div>`;
              starterPrinshendrik3EN.innerHTML += `<div class="injected">${voorgerechtenEN[1]}</div>`;
            } else if (prinshendrik3Arr[i].voorgerecht3) {
              starterPrinshendrik3.innerHTML += `<div class="injected">${voorgerechtenNL[2]}</div>`;
              starterPrinshendrik3EN.innerHTML += `<div class="injected">${voorgerechtenEN[2]}</div>`;
            } else if (prinshendrik3Arr[i].voorgerecht4) {
              starterPrinshendrik3.innerHTML += `<div class="injected">${voorgerechtenNL[3]}</div>`;
              starterPrinshendrik3EN.innerHTML += `<div class="injected">${voorgerechtenEN[3]}</div>`;
            } else if (prinshendrik3Arr[i].voorgerecht5) {
              starterPrinshendrik3.innerHTML += `<div class="injected">${voorgerechtenNL[4]}</div>`;
              starterPrinshendrik3EN.innerHTML += `<div class="injected">${voorgerechtenEN[4]}</div>`;
            } else if (prinshendrik3Arr[i].voorgerecht6) {
              starterPrinshendrik3.innerHTML += `<div class="injected">${voorgerechtenNL[5]}</div>`;
              starterPrinshendrik3EN.innerHTML += `<div class="injected">${voorgerechtenEN[5]}</div>`;
            } else if (prinshendrik3Arr[i].voorgerecht7) {
              starterPrinshendrik3.innerHTML += `<div class="injected">${voorgerechtenNL[6]}</div>`;
              starterPrinshendrik3EN.innerHTML += `<div class="injected">${voorgerechtenEN[6]}</div>`;
            }
            if (prinshendrik3Arr[i].hoofdgerecht1) {
              mainPrinshendrik3.innerHTML += `<div class="injected">${hoofdgerechtenNL[0]}</div>`;
              mainPrinshendrik3EN.innerHTML += `<div class="injected">${hoofdgerechtenEN[0]}</div>`;
            } else if (prinshendrik3Arr[i].hoofdgerecht2) {
              mainPrinshendrik3.innerHTML += `<div class="injected">${hoofdgerechtenNL[1]}</div>`;
              mainPrinshendrik3EN.innerHTML += `<div class="injected">${hoofdgerechtenEN[1]}</div>`;
            } else if (prinshendrik3Arr[i].hoofdgerecht3) {
              mainPrinshendrik3.innerHTML += `<div class="injected">${hoofdgerechtenNL[2]}</div>`;
              mainPrinshendrik3EN.innerHTML += `<div class="injected">${hoofdgerechtenEN[2]}</div>`;
            } else if (prinshendrik3Arr[i].hoofdgerecht4) {
              mainPrinshendrik3.innerHTML += `<div class="injected">${hoofdgerechtenNL[3]}</div>`;
              mainPrinshendrik3EN.innerHTML += `<div class="injected">${hoofdgerechtenEN[3]}</div>`;
            } else if (prinshendrik3Arr[i].hoofdgerecht5) {
              mainPrinshendrik3.innerHTML += `<div class="injected">${hoofdgerechtenNL[4]}</div>`;
              mainPrinshendrik3EN.innerHTML += `<div class="injected">${hoofdgerechtenEN[4]}</div>`;
            } else if (prinshendrik3Arr[i].hoofdgerecht6) {
              mainPrinshendrik3.innerHTML += `<div class="injected">${hoofdgerechtenNL[5]}</div>`;
              mainPrinshendrik3EN.innerHTML += `<div class="injected">${hoofdgerechtenEN[5]}</div>`;
            } else if (prinshendrik3Arr[i].hoofdgerecht7) {
              mainPrinshendrik3.innerHTML += `<div class="injected">${hoofdgerechtenNL[6]}</div>`;
              mainPrinshendrik3EN.innerHTML += `<div class="injected">${hoofdgerechtenEN[6]}</div>`;
            }
          } else {
            fullNamePrinshendrik3.innerHTML += `<div class="injected red-background">${prinshendrik3Arr[i].fullName}</div>`;
            //      console.log(prinshendrik3Arr[i].fullName + " red");
            if (prinshendrik3Arr[i].voorgerecht1) {
              starterPrinshendrik3.innerHTML += `<div class="injected red-background">${voorgerechtenNL[0]}</div>`;
              starterPrinshendrik3EN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[0]}</div>`;
            } else if (prinshendrik3Arr[i].voorgerecht2) {
              starterPrinshendrik3.innerHTML += `<div class="injected red-background">${voorgerechtenNL[1]}</div>`;
              starterPrinshendrik3EN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[1]}</div>`;
            } else if (prinshendrik3Arr[i].voorgerecht3) {
              starterPrinshendrik3.innerHTML += `<div class="injected red-background">${voorgerechtenNL[2]}</div>`;
              starterPrinshendrik3EN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[2]}</div>`;
            } else if (prinshendrik3Arr[i].voorgerecht4) {
              starterPrinshendrik3.innerHTML += `<div class="injected red-background">${voorgerechtenNL[3]}</div>`;
              starterPrinshendrik3EN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[3]}</div>`;
            } else if (prinshendrik3Arr[i].voorgerecht5) {
              starterPrinshendrik3.innerHTML += `<div class="injected red-background">${voorgerechtenNL[4]}</div>`;
              starterPrinshendrik3EN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[4]}</div>`;
            } else if (prinshendrik3Arr[i].voorgerecht6) {
              starterPrinshendrik3.innerHTML += `<div class="injected red-background">${voorgerechtenNL[5]}</div>`;
              starterPrinshendrik3EN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[5]}</div>`;
            } else if (prinshendrik3Arr[i].voorgerecht7) {
              starterPrinshendrik3.innerHTML += `<div class="injected red-background">${voorgerechtenNL[6]}</div>`;
              starterPrinshendrik3EN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[6]}</div>`;
            }
            if (prinshendrik3Arr[i].hoofdgerecht1) {
              mainPrinshendrik3.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[0]}</div>`;
              mainPrinshendrik3EN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[0]}</div>`;
            } else if (prinshendrik3Arr[i].hoofdgerecht2) {
              mainPrinshendrik3.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[1]}</div>`;
              mainPrinshendrik3EN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[1]}</div>`;
            } else if (prinshendrik3Arr[i].hoofdgerecht3) {
              mainPrinshendrik3.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[2]}</div>`;
              mainPrinshendrik3EN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[2]}</div>`;
            } else if (prinshendrik3Arr[i].hoofdgerecht4) {
              mainPrinshendrik3.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[3]}</div>`;
              mainPrinshendrik3EN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[3]}</div>`;
            } else if (prinshendrik3Arr[i].hoofdgerecht5) {
              mainPrinshendrik3.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[4]}</div>`;
              mainPrinshendrik3EN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[4]}</div>`;
            } else if (prinshendrik3Arr[i].hoofdgerecht6) {
              mainPrinshendrik3.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[5]}</div>`;
              mainPrinshendrik3EN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[5]}</div>`;
            } else if (prinshendrik3Arr[i].hoofdgerecht7) {
              mainPrinshendrik3.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[6]}</div>`;
              mainPrinshendrik3EN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[6]}</div>`;
            }
          }
          counter++;
        }
      }
      prinshendrik3ArrCount++;
      addHidden(ul);
    } else if (li.classList.value === "serre-li") {
      removeHidden(serre);
      if (serreArrCount < 1) {
        let counter = 0;
        for (i = 0; i < serreArr.length; i++) {
          //     console.log(serreArr[i]);
          if (counter % 2 === 0) {
            fullNameSerre.innerHTML += `<div class="injected">${serreArr[i].fullName}</div>`;
            //     console.log(serreArr[i].fullName + " none");
            if (serreArr[i].voorgerecht1) {
              starterSerre.innerHTML += `<div class="injected">${voorgerechtenNL[0]}</div>`;
              starterSerreEN.innerHTML += `<div class="injected">${voorgerechtenEN[0]}</div>`;
            } else if (serreArr[i].voorgerecht2) {
              starterSerre.innerHTML += `<div class="injected">${voorgerechtenNL[1]}</div>`;
              starterSerreEN.innerHTML += `<div class="injected">${voorgerechtenEN[1]}</div>`;
            } else if (serreArr[i].voorgerecht3) {
              starterSerre.innerHTML += `<div class="injected">${voorgerechtenNL[2]}</div>`;
              starterSerreEN.innerHTML += `<div class="injected">${voorgerechtenEN[2]}</div>`;
            } else if (serreArr[i].voorgerecht4) {
              starterSerre.innerHTML += `<div class="injected">${voorgerechtenNL[3]}</div>`;
              starterSerreEN.innerHTML += `<div class="injected">${voorgerechtenEN[3]}</div>`;
            } else if (serreArr[i].voorgerecht5) {
              starterSerre.innerHTML += `<div class="injected">${voorgerechtenNL[4]}</div>`;
              starterSerreEN.innerHTML += `<div class="injected">${voorgerechtenEN[4]}</div>`;
            } else if (serreArr[i].voorgerecht6) {
              starterSerre.innerHTML += `<div class="injected">${voorgerechtenNL[5]}</div>`;
              starterSerreEN.innerHTML += `<div class="injected">${voorgerechtenEN[5]}</div>`;
            } else if (serreArr[i].voorgerecht7) {
              starterSerre.innerHTML += `<div class="injected">${voorgerechtenNL[6]}</div>`;
              starterSerreEN.innerHTML += `<div class="injected">${voorgerechtenEN[6]}</div>`;
            }
            if (serreArr[i].hoofdgerecht1) {
              mainSerre.innerHTML += `<div class="injected">${hoofdgerechtenNL[0]}</div>`;
              mainSerreEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[0]}</div>`;
            } else if (serreArr[i].hoofdgerecht2) {
              mainSerre.innerHTML += `<div class="injected">${hoofdgerechtenNL[1]}</div>`;
              mainSerreEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[1]}</div>`;
            } else if (serreArr[i].hoofdgerecht3) {
              mainSerre.innerHTML += `<div class="injected">${hoofdgerechtenNL[2]}</div>`;
              mainSerreEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[2]}</div>`;
            } else if (serreArr[i].hoofdgerecht4) {
              mainSerre.innerHTML += `<div class="injected">${hoofdgerechtenNL[3]}</div>`;
              mainSerreEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[3]}</div>`;
            } else if (serreArr[i].hoofdgerecht5) {
              mainSerre.innerHTML += `<div class="injected">${hoofdgerechtenNL[4]}</div>`;
              mainSerreEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[4]}</div>`;
            } else if (serreArr[i].hoofdgerecht6) {
              mainSerre.innerHTML += `<div class="injected">${hoofdgerechtenNL[5]}</div>`;
              mainSerreEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[5]}</div>`;
            } else if (serreArr[i].hoofdgerecht7) {
              mainSerre.innerHTML += `<div class="injected">${hoofdgerechtenNL[6]}</div>`;
              mainSerreEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[6]}</div>`;
            }
          } else {
            fullNameSerre.innerHTML += `<div class="injected red-background">${serreArr[i].fullName}</div>`;
            //        console.log(serreArr[i].fullName + " red");
            if (serreArr[i].voorgerecht1) {
              starterSerre.innerHTML += `<div class="injected red-background">${voorgerechtenNL[0]}</div>`;
              starterSerreEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[0]}</div>`;
            } else if (serreArr[i].voorgerecht2) {
              starterSerre.innerHTML += `<div class="injected red-background">${voorgerechtenNL[1]}</div>`;
              starterSerreEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[1]}</div>`;
            } else if (serreArr[i].voorgerecht3) {
              starterSerre.innerHTML += `<div class="injected red-background">${voorgerechtenNL[2]}</div>`;
              starterSerreEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[2]}</div>`;
            } else if (serreArr[i].voorgerecht4) {
              starterSerre.innerHTML += `<div class="injected red-background">${voorgerechtenNL[3]}</div>`;
              starterSerreEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[3]}</div>`;
            } else if (serreArr[i].voorgerecht5) {
              starterSerre.innerHTML += `<div class="injected red-background">${voorgerechtenNL[4]}</div>`;
              starterSerreEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[4]}</div>`;
            } else if (serreArr[i].voorgerecht6) {
              starterSerre.innerHTML += `<div class="injected red-background">${voorgerechtenNL[5]}</div>`;
              starterSerreEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[5]}</div>`;
            } else if (serreArr[i].voorgerecht7) {
              starterSerre.innerHTML += `<div class="injected red-background">${voorgerechtenNL[6]}</div>`;
              starterSerreEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[6]}</div>`;
            }
            if (serreArr[i].hoofdgerecht1) {
              mainSerre.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[0]}</div>`;
              mainSerreEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[0]}</div>`;
            } else if (serreArr[i].hoofdgerecht2) {
              mainSerre.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[1]}</div>`;
              mainSerreEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[1]}</div>`;
            } else if (serreArr[i].hoofdgerecht3) {
              mainSerre.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[2]}</div>`;
              mainSerreEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[2]}</div>`;
            } else if (serreArr[i].hoofdgerecht4) {
              mainSerre.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[3]}</div>`;
              mainSerreEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[3]}</div>`;
            } else if (serreArr[i].hoofdgerecht5) {
              mainSerre.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[4]}</div>`;
              mainSerreEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[4]}</div>`;
            } else if (serreArr[i].hoofdgerecht6) {
              mainSerre.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[5]}</div>`;
              mainSerreEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[5]}</div>`;
            } else if (serreArr[i].hoofdgerecht7) {
              mainSerre.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[6]}</div>`;
              mainSerreEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[6]}</div>`;
            }
          }
          counter++;
        }
      }
      serreArrCount++;
      addHidden(ul);
    } else if (li.classList.value === "vierspan-li") {
      removeHidden(vierspan);
      if (vierspanArrCount < 1) {
        let counter = 0;
        for (i = 0; i < vierspanArr.length; i++) {
          //     console.log(vierspanArr[i]);
          if (counter % 2 === 0) {
            fullNameVierspan.innerHTML += `<div class="injected">${vierspanArr[i].fullName}</div>`;
            //      console.log(vierspanArr[i].fullName + " none");
            if (vierspanArr[i].voorgerecht1) {
              starterVierspan.innerHTML += `<div class="injected">${voorgerechtenNL[0]}</div>`;
              starterVierspanEN.innerHTML += `<div class="injected">${voorgerechtenEN[0]}</div>`;
            } else if (vierspanArr[i].voorgerecht2) {
              starterVierspan.innerHTML += `<div class="injected">${voorgerechtenNL[1]}</div>`;
              starterVierspanEN.innerHTML += `<div class="injected">${voorgerechtenEN[1]}</div>`;
            } else if (vierspanArr[i].voorgerecht3) {
              starterVierspan.innerHTML += `<div class="injected">${voorgerechtenNL[2]}</div>`;
              starterVierspanEN.innerHTML += `<div class="injected">${voorgerechtenEN[2]}</div>`;
            } else if (vierspanArr[i].voorgerecht4) {
              starterVierspan.innerHTML += `<div class="injected">${voorgerechtenNL[3]}</div>`;
              starterVierspanEN.innerHTML += `<div class="injected">${voorgerechtenEN[3]}</div>`;
            } else if (vierspanArr[i].voorgerecht5) {
              starterVierspan.innerHTML += `<div class="injected">${voorgerechtenNL[4]}</div>`;
              starterVierspanEN.innerHTML += `<div class="injected">${voorgerechtenEN[4]}</div>`;
            } else if (vierspanArr[i].voorgerecht6) {
              starterVierspan.innerHTML += `<div class="injected">${voorgerechtenNL[5]}</div>`;
              starterVierspanEN.innerHTML += `<div class="injected">${voorgerechtenEN[5]}</div>`;
            } else if (vierspanArr[i].voorgerecht7) {
              starterVierspan.innerHTML += `<div class="injected">${voorgerechtenNL[6]}</div>`;
              starterVierspanEN.innerHTML += `<div class="injected">${voorgerechtenEN[6]}</div>`;
            }
            if (vierspanArr[i].hoofdgerecht1) {
              mainVierspan.innerHTML += `<div class="injected">${hoofdgerechtenNL[0]}</div>`;
              mainVierspanEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[0]}</div>`;
            } else if (vierspanArr[i].hoofdgerecht2) {
              mainVierspan.innerHTML += `<div class="injected">${hoofdgerechtenNL[1]}</div>`;
              mainVierspanEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[1]}</div>`;
            } else if (vierspanArr[i].hoofdgerecht3) {
              mainVierspan.innerHTML += `<div class="injected">${hoofdgerechtenNL[2]}</div>`;
              mainVierspanEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[2]}</div>`;
            } else if (vierspanArr[i].hoofdgerecht4) {
              mainVierspan.innerHTML += `<div class="injected">${hoofdgerechtenNL[3]}</div>`;
              mainVierspanEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[3]}</div>`;
            } else if (vierspanArr[i].hoofdgerecht5) {
              mainVierspan.innerHTML += `<div class="injected">${hoofdgerechtenNL[4]}</div>`;
              mainVierspanEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[4]}</div>`;
            } else if (vierspanArr[i].hoofdgerecht6) {
              mainVierspan.innerHTML += `<div class="injected">${hoofdgerechtenNL[5]}</div>`;
              mainVierspanEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[5]}</div>`;
            } else if (vierspanArr[i].hoofdgerecht7) {
              mainVierspan.innerHTML += `<div class="injected">${hoofdgerechtenNL[6]}</div>`;
              mainVierspanEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[6]}</div>`;
            }
          } else {
            fullNameVierspan.innerHTML += `<div class="injected red-background">${vierspanArr[i].fullName}</div>`;
            //      console.log(vierspanArr[i].fullName + " red");
            if (vierspanArr[i].voorgerecht1) {
              starterVierspan.innerHTML += `<div class="injected red-background">${voorgerechtenNL[0]}</div>`;
              starterVierspanEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[0]}</div>`;
            } else if (vierspanArr[i].voorgerecht2) {
              starterVierspan.innerHTML += `<div class="injected red-background">${voorgerechtenNL[1]}</div>`;
              starterVierspanEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[1]}</div>`;
            } else if (vierspanArr[i].voorgerecht3) {
              starterVierspan.innerHTML += `<div class="injected red-background">${voorgerechtenNL[2]}</div>`;
              starterVierspanEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[2]}</div>`;
            } else if (vierspanArr[i].voorgerecht4) {
              starterVierspan.innerHTML += `<div class="injected red-background">${voorgerechtenNL[3]}</div>`;
              starterVierspanEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[3]}</div>`;
            } else if (vierspanArr[i].voorgerecht5) {
              starterVierspan.innerHTML += `<div class="injected red-background">${voorgerechtenNL[4]}</div>`;
              starterVierspanEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[4]}</div>`;
            } else if (vierspanArr[i].voorgerecht6) {
              starterVierspan.innerHTML += `<div class="injected red-background">${voorgerechtenNL[5]}</div>`;
              starterVierspanEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[5]}</div>`;
            } else if (vierspanArr[i].voorgerecht7) {
              starterVierspan.innerHTML += `<div class="injected red-background">${voorgerechtenNL[6]}</div>`;
              starterVierspanEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[6]}</div>`;
            }
            if (vierspanArr[i].hoofdgerecht1) {
              mainVierspan.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[0]}</div>`;
              mainVierspanEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[0]}</div>`;
            } else if (vierspanArr[i].hoofdgerecht2) {
              mainVierspan.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[1]}</div>`;
              mainVierspanEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[1]}</div>`;
            } else if (vierspanArr[i].hoofdgerecht3) {
              mainVierspan.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[2]}</div>`;
              mainVierspanEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[2]}</div>`;
            } else if (vierspanArr[i].hoofdgerecht4) {
              mainVierspan.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[3]}</div>`;
              mainVierspanEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[3]}</div>`;
            } else if (vierspanArr[i].hoofdgerecht5) {
              mainVierspan.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[4]}</div>`;
              mainVierspanEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[4]}</div>`;
            } else if (vierspanArr[i].hoofdgerecht6) {
              mainVierspan.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[5]}</div>`;
              mainVierspanEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[5]}</div>`;
            } else if (vierspanArr[i].hoofdgerecht7) {
              mainVierspan.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[6]}</div>`;
              mainVierspanEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[6]}</div>`;
            }
          }
          counter++;
        }
      }
      vierspanArrCount++;
      addHidden(ul);
    } else if (li.classList.value === "tweespan-li") {
      removeHidden(tweespan);
      if (tweespanArrCount < 1) {
        let counter = 0;
        for (i = 0; i < tweespanArr.length; i++) {
          //     console.log(tweespanArr[i]);
          if (counter % 2 === 0) {
            fullNameTweespan.innerHTML += `<div class="injected">${tweespanArr[i].fullName}</div>`;
            //    console.log(tweespanArr[i].fullName + " none");
            if (tweespanArr[i].voorgerecht1) {
              starterTweespan.innerHTML += `<div class="injected">${voorgerechtenNL[0]}</div>`;
              starterTweespanEN.innerHTML += `<div class="injected">${voorgerechtenEN[0]}</div>`;
            } else if (tweespanArr[i].voorgerecht2) {
              starterTweespan.innerHTML += `<div class="injected">${voorgerechtenNL[1]}</div>`;
              starterTweespanEN.innerHTML += `<div class="injected">${voorgerechtenEN[1]}</div>`;
            } else if (tweespanArr[i].voorgerecht3) {
              starterTweespan.innerHTML += `<div class="injected">${voorgerechtenNL[2]}</div>`;
              starterTweespanEN.innerHTML += `<div class="injected">${voorgerechtenEN[2]}</div>`;
            } else if (tweespanArr[i].voorgerecht4) {
              starterTweespan.innerHTML += `<div class="injected">${voorgerechtenNL[3]}</div>`;
              starterTweespanEN.innerHTML += `<div class="injected">${voorgerechtenEN[3]}</div>`;
            } else if (tweespanArr[i].voorgerecht5) {
              starterTweespan.innerHTML += `<div class="injected">${voorgerechtenNL[4]}</div>`;
              starterTweespanEN.innerHTML += `<div class="injected">${voorgerechtenEN[4]}</div>`;
            } else if (tweespanArr[i].voorgerecht6) {
              starterTweespan.innerHTML += `<div class="injected">${voorgerechtenNL[5]}</div>`;
              starterTweespanEN.innerHTML += `<div class="injected">${voorgerechtenEN[5]}</div>`;
            } else if (tweespanArr[i].voorgerecht7) {
              starterTweespan.innerHTML += `<div class="injected">${voorgerechtenNL[6]}</div>`;
              starterTweespanEN.innerHTML += `<div class="injected">${voorgerechtenEN[6]}</div>`;
            }
            if (tweespanArr[i].hoofdgerecht1) {
              mainTweespan.innerHTML += `<div class="injected">${hoofdgerechtenNL[0]}</div>`;
              mainTweespanEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[0]}</div>`;
            } else if (tweespanArr[i].hoofdgerecht2) {
              mainTweespan.innerHTML += `<div class="injected">${hoofdgerechtenNL[1]}</div>`;
              mainTweespanEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[1]}</div>`;
            } else if (tweespanArr[i].hoofdgerecht3) {
              mainTweespan.innerHTML += `<div class="injected">${hoofdgerechtenNL[2]}</div>`;
              mainTweespanEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[2]}</div>`;
            } else if (tweespanArr[i].hoofdgerecht4) {
              mainTweespan.innerHTML += `<div class="injected">${hoofdgerechtenNL[3]}</div>`;
              mainTweespanEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[3]}</div>`;
            } else if (tweespanArr[i].hoofdgerecht5) {
              mainTweespan.innerHTML += `<div class="injected">${hoofdgerechtenNL[4]}</div>`;
              mainTweespanEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[4]}</div>`;
            } else if (tweespanArr[i].hoofdgerecht6) {
              mainTweespan.innerHTML += `<div class="injected">${hoofdgerechtenNL[5]}</div>`;
              mainTweespanEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[5]}</div>`;
            } else if (tweespanArr[i].hoofdgerecht7) {
              mainTweespan.innerHTML += `<div class="injected">${hoofdgerechtenNL[6]}</div>`;
              mainTweespanEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[6]}</div>`;
            }
          } else {
            fullNameTweespan.innerHTML += `<div class="injected red-background">${tweespanArr[i].fullName}</div>`;
            //     console.log(tweespanArr[i].fullName + " red");
            if (tweespanArr[i].voorgerecht1) {
              starterTweespan.innerHTML += `<div class="injected red-background">${voorgerechtenNL[0]}</div>`;
              starterTweespanEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[0]}</div>`;
            } else if (tweespanArr[i].voorgerecht2) {
              starterTweespan.innerHTML += `<div class="injected red-background">${voorgerechtenNL[1]}</div>`;
              starterTweespanEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[1]}</div>`;
            } else if (tweespanArr[i].voorgerecht3) {
              starterTweespan.innerHTML += `<div class="injected red-background">${voorgerechtenNL[2]}</div>`;
              starterTweespanEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[2]}</div>`;
            } else if (tweespanArr[i].voorgerecht4) {
              starterTweespan.innerHTML += `<div class="injected red-background">${voorgerechtenNL[3]}</div>`;
              starterTweespanEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[3]}</div>`;
            } else if (tweespanArr[i].voorgerecht5) {
              starterTweespan.innerHTML += `<div class="injected red-background">${voorgerechtenNL[4]}</div>`;
              starterTweespanEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[4]}</div>`;
            } else if (tweespanArr[i].voorgerecht6) {
              starterTweespan.innerHTML += `<div class="injected red-background">${voorgerechtenNL[5]}</div>`;
              starterTweespanEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[5]}</div>`;
            } else if (tweespanArr[i].voorgerecht7) {
              starterTweespan.innerHTML += `<div class="injected red-background">${voorgerechtenNL[6]}</div>`;
              starterTweespanEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[6]}</div>`;
            }
            if (tweespanArr[i].hoofdgerecht1) {
              mainTweespan.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[0]}</div>`;
              mainTweespanEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[0]}</div>`;
            } else if (tweespanArr[i].hoofdgerecht2) {
              mainTweespan.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[1]}</div>`;
              mainTweespanEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[1]}</div>`;
            } else if (tweespanArr[i].hoofdgerecht3) {
              mainTweespan.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[2]}</div>`;
              mainTweespanEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[2]}</div>`;
            } else if (tweespanArr[i].hoofdgerecht4) {
              mainTweespan.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[3]}</div>`;
              mainTweespanEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[3]}</div>`;
            } else if (tweespanArr[i].hoofdgerecht5) {
              mainTweespan.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[4]}</div>`;
              mainTweespanEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[4]}</div>`;
            } else if (tweespanArr[i].hoofdgerecht6) {
              mainTweespan.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[5]}</div>`;
              mainTweespanEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[5]}</div>`;
            } else if (tweespanArr[i].hoofdgerecht7) {
              mainTweespan.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[6]}</div>`;
              mainTweespanEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[6]}</div>`;
            }
          }
          counter++;
        }
      }
      tweespanArrCount++;
      addHidden(ul);
    } else if (li.classList.value === "stalmeester-li") {
      removeHidden(stalmeester);
      if (stalmeesterArrCount < 1) {
        let counter = 0;
        for (i = 0; i < stalmeesterArr.length; i++) {
          //      console.log(stalmeesterArr[i]);
          if (counter % 2 === 0) {
            fullNameStalmeester.innerHTML += `<div class="injected">${stalmeesterArr[i].fullName}</div>`;
            //     console.log(stalmeesterArr[i].fullName + " none");
            if (stalmeesterArr[i].voorgerecht1) {
              starterStalmeester.innerHTML += `<div class="injected">${voorgerechtenNL[0]}</div>`;
              starterStalmeesterEN.innerHTML += `<div class="injected">${voorgerechtenEN[0]}</div>`;
            } else if (stalmeesterArr[i].voorgerecht2) {
              starterStalmeester.innerHTML += `<div class="injected">${voorgerechtenNL[1]}</div>`;
              starterStalmeesterEN.innerHTML += `<div class="injected">${voorgerechtenEN[1]}</div>`;
            } else if (stalmeesterArr[i].voorgerecht3) {
              starterStalmeester.innerHTML += `<div class="injected">${voorgerechtenNL[2]}</div>`;
              starterStalmeesterEN.innerHTML += `<div class="injected">${voorgerechtenEN[2]}</div>`;
            } else if (stalmeesterArr[i].voorgerecht4) {
              starterStalmeester.innerHTML += `<div class="injected">${voorgerechtenNL[3]}</div>`;
              starterStalmeesterEN.innerHTML += `<div class="injected">${voorgerechtenEN[3]}</div>`;
            } else if (stalmeesterArr[i].voorgerecht5) {
              starterStalmeester.innerHTML += `<div class="injected">${voorgerechtenNL[4]}</div>`;
              starterStalmeesterEN.innerHTML += `<div class="injected">${voorgerechtenEN[4]}</div>`;
            } else if (stalmeesterArr[i].voorgerecht6) {
              starterStalmeester.innerHTML += `<div class="injected">${voorgerechtenNL[5]}</div>`;
              starterStalmeesterEN.innerHTML += `<div class="injected">${voorgerechtenEN[5]}</div>`;
            } else if (stalmeesterArr[i].voorgerecht7) {
              starterStalmeester.innerHTML += `<div class="injected">${voorgerechtenNL[6]}</div>`;
              starterStalmeesterEN.innerHTML += `<div class="injected">${voorgerechtenEN[6]}</div>`;
            }
            if (stalmeesterArr[i].hoofdgerecht1) {
              mainStalmeester.innerHTML += `<div class="injected">${hoofdgerechtenNL[0]}</div>`;
              mainStalmeesterEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[0]}</div>`;
            } else if (stalmeesterArr[i].hoofdgerecht2) {
              mainStalmeester.innerHTML += `<div class="injected">${hoofdgerechtenNL[1]}</div>`;
              mainStalmeesterEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[1]}</div>`;
            } else if (stalmeesterArr[i].hoofdgerecht3) {
              mainStalmeester.innerHTML += `<div class="injected">${hoofdgerechtenNL[2]}</div>`;
              mainStalmeesterEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[2]}</div>`;
            } else if (stalmeesterArr[i].hoofdgerecht4) {
              mainStalmeester.innerHTML += `<div class="injected">${hoofdgerechtenNL[3]}</div>`;
              mainStalmeesterEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[3]}</div>`;
            } else if (stalmeesterArr[i].hoofdgerecht5) {
              mainStalmeester.innerHTML += `<div class="injected">${hoofdgerechtenNL[4]}</div>`;
              mainStalmeesterEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[4]}</div>`;
            } else if (stalmeesterArr[i].hoofdgerecht6) {
              mainStalmeester.innerHTML += `<div class="injected">${hoofdgerechtenNL[5]}</div>`;
              mainStalmeesterEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[5]}</div>`;
            } else if (stalmeesterArr[i].hoofdgerecht7) {
              mainStalmeester.innerHTML += `<div class="injected">${hoofdgerechtenNL[6]}</div>`;
              mainStalmeesterEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[6]}</div>`;
            }
          } else {
            fullNameStalmeester.innerHTML += `<div class="injected red-background">${stalmeesterArr[i].fullName}</div>`;
            //      console.log(stalmeesterArr[i].fullName + " red");
            if (stalmeesterArr[i].voorgerecht1) {
              starterStalmeester.innerHTML += `<div class="injected red-background">${voorgerechtenNL[0]}</div>`;
              starterStalmeesterEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[0]}</div>`;
            } else if (stalmeesterArr[i].voorgerecht2) {
              starterStalmeester.innerHTML += `<div class="injected red-background">${voorgerechtenNL[1]}</div>`;
              starterStalmeesterEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[1]}</div>`;
            } else if (stalmeesterArr[i].voorgerecht3) {
              starterStalmeester.innerHTML += `<div class="injected red-background">${voorgerechtenNL[2]}</div>`;
              starterStalmeesterEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[2]}</div>`;
            } else if (stalmeesterArr[i].voorgerecht4) {
              starterStalmeester.innerHTML += `<div class="injected red-background">${voorgerechtenNL[3]}</div>`;
              starterStalmeesterEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[3]}</div>`;
            } else if (stalmeesterArr[i].voorgerecht5) {
              starterStalmeester.innerHTML += `<div class="injected red-background">${voorgerechtenNL[4]}</div>`;
              starterStalmeesterEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[4]}</div>`;
            } else if (stalmeesterArr[i].voorgerecht6) {
              starterStalmeester.innerHTML += `<div class="injected red-background">${voorgerechtenNL[5]}</div>`;
              starterStalmeesterEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[5]}</div>`;
            } else if (stalmeesterArr[i].voorgerecht7) {
              starterStalmeester.innerHTML += `<div class="injected red-background">${voorgerechtenNL[6]}</div>`;
              starterStalmeesterEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[6]}</div>`;
            }
            if (stalmeesterArr[i].hoofdgerecht1) {
              mainStalmeester.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[0]}</div>`;
              mainStalmeesterEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[0]}</div>`;
            } else if (stalmeesterArr[i].hoofdgerecht2) {
              mainStalmeester.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[1]}</div>`;
              mainStalmeesterEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[1]}</div>`;
            } else if (stalmeesterArr[i].hoofdgerecht3) {
              mainStalmeester.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[2]}</div>`;
              mainStalmeesterEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[2]}</div>`;
            } else if (stalmeesterArr[i].hoofdgerecht4) {
              mainStalmeester.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[3]}</div>`;
              mainStalmeesterEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[3]}</div>`;
            } else if (stalmeesterArr[i].hoofdgerecht5) {
              mainStalmeester.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[4]}</div>`;
              mainStalmeesterEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[4]}</div>`;
            } else if (stalmeesterArr[i].hoofdgerecht6) {
              mainStalmeester.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[5]}</div>`;
              mainStalmeesterEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[5]}</div>`;
            } else if (stalmeesterArr[i].hoofdgerecht7) {
              mainStalmeester.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[6]}</div>`;
              mainStalmeesterEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[6]}</div>`;
            }
          }
          counter++;
        }
      }
      stalmeesterArrCount++;
      addHidden(ul);
    } else if (li.classList.value === "dissel-li") {
      removeHidden(dissel);
      if (disselArrCount < 1) {
        let counter = 0;
        for (i = 0; i < disselArr.length; i++) {
          //    console.log(disselArr[i]);
          if (counter % 2 === 0) {
            fullNameDissel.innerHTML += `<div class="injected">${disselArr[i].fullName}</div>`;
            //     console.log(disselArr[i].fullName + " none");
            if (disselArr[i].voorgerecht1) {
              starterDissel.innerHTML += `<div class="injected">${voorgerechtenNL[0]}</div>`;
              starterDisselEN.innerHTML += `<div class="injected">${voorgerechtenEN[0]}</div>`;
            } else if (disselArr[i].voorgerecht2) {
              starterDissel.innerHTML += `<div class="injected">${voorgerechtenNL[1]}</div>`;
              starterDisselEN.innerHTML += `<div class="injected">${voorgerechtenEN[1]}</div>`;
            } else if (disselArr[i].voorgerecht3) {
              starterDissel.innerHTML += `<div class="injected">${voorgerechtenNL[2]}</div>`;
              starterDisselEN.innerHTML += `<div class="injected">${voorgerechtenEN[2]}</div>`;
            } else if (disselArr[i].voorgerecht4) {
              starterDissel.innerHTML += `<div class="injected">${voorgerechtenNL[3]}</div>`;
              starterDisselEN.innerHTML += `<div class="injected">${voorgerechtenEN[3]}</div>`;
            } else if (disselArr[i].voorgerecht5) {
              starterDissel.innerHTML += `<div class="injected">${voorgerechtenNL[4]}</div>`;
              starterDisselEN.innerHTML += `<div class="injected">${voorgerechtenEN[4]}</div>`;
            } else if (disselArr[i].voorgerecht6) {
              starterDissel.innerHTML += `<div class="injected">${voorgerechtenNL[5]}</div>`;
              starterDisselEN.innerHTML += `<div class="injected">${voorgerechtenEN[5]}</div>`;
            } else if (disselArr[i].voorgerecht7) {
              starterDissel.innerHTML += `<div class="injected">${voorgerechtenNL[6]}</div>`;
              starterDisselEN.innerHTML += `<div class="injected">${voorgerechtenEN[6]}</div>`;
            }
            if (disselArr[i].hoofdgerecht1) {
              mainDissel.innerHTML += `<div class="injected">${hoofdgerechtenNL[0]}</div>`;
              mainDisselEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[0]}</div>`;
            } else if (disselArr[i].hoofdgerecht2) {
              mainDissel.innerHTML += `<div class="injected">${hoofdgerechtenNL[1]}</div>`;
              mainDisselEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[1]}</div>`;
            } else if (disselArr[i].hoofdgerecht3) {
              mainDissel.innerHTML += `<div class="injected">${hoofdgerechtenNL[2]}</div>`;
              mainDisselEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[2]}</div>`;
            } else if (disselArr[i].hoofdgerecht4) {
              mainDissel.innerHTML += `<div class="injected">${hoofdgerechtenNL[3]}</div>`;
              mainDisselEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[3]}</div>`;
            } else if (disselArr[i].hoofdgerecht5) {
              mainDissel.innerHTML += `<div class="injected">${hoofdgerechtenNL[4]}</div>`;
              mainDisselEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[4]}</div>`;
            } else if (disselArr[i].hoofdgerecht6) {
              mainDissel.innerHTML += `<div class="injected">${hoofdgerechtenNL[5]}</div>`;
              mainDisselEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[5]}</div>`;
            } else if (disselArr[i].hoofdgerecht7) {
              mainDissel.innerHTML += `<div class="injected">${hoofdgerechtenNL[6]}</div>`;
              mainDisselEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[6]}</div>`;
            }
          } else {
            fullNameDissel.innerHTML += `<div class="injected red-background">${disselArr[i].fullName}</div>`;
            //       console.log(disselArr[i].fullName + " red");
            if (disselArr[i].voorgerecht1) {
              starterDissel.innerHTML += `<div class="injected red-background">${voorgerechtenNL[0]}</div>`;
              starterDisselEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[0]}</div>`;
            } else if (disselArr[i].voorgerecht2) {
              starterDissel.innerHTML += `<div class="injected red-background">${voorgerechtenNL[1]}</div>`;
              starterDisselEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[1]}</div>`;
            } else if (disselArr[i].voorgerecht3) {
              starterDissel.innerHTML += `<div class="injected red-background">${voorgerechtenNL[2]}</div>`;
              starterDisselEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[2]}</div>`;
            } else if (disselArr[i].voorgerecht4) {
              starterDissel.innerHTML += `<div class="injected red-background">${voorgerechtenNL[3]}</div>`;
              starterDisselEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[3]}</div>`;
            } else if (disselArr[i].voorgerecht5) {
              starterDissel.innerHTML += `<div class="injected red-background">${voorgerechtenNL[4]}</div>`;
              starterDisselEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[4]}</div>`;
            } else if (disselArr[i].voorgerecht6) {
              starterDissel.innerHTML += `<div class="injected red-background">${voorgerechtenNL[5]}</div>`;
              starterDisselEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[5]}</div>`;
            } else if (disselArr[i].voorgerecht7) {
              starterDissel.innerHTML += `<div class="injected red-background">${voorgerechtenNL[6]}</div>`;
              starterDisselEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[6]}</div>`;
            }
            if (disselArr[i].hoofdgerecht1) {
              mainDissel.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[0]}</div>`;
              mainDisselEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[0]}</div>`;
            } else if (disselArr[i].hoofdgerecht2) {
              mainDissel.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[1]}</div>`;
              mainDisselEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[1]}</div>`;
            } else if (disselArr[i].hoofdgerecht3) {
              mainDissel.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[2]}</div>`;
              mainDisselEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[2]}</div>`;
            } else if (disselArr[i].hoofdgerecht4) {
              mainDissel.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[3]}</div>`;
              mainDisselEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[3]}</div>`;
            } else if (disselArr[i].hoofdgerecht5) {
              mainDissel.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[4]}</div>`;
              mainDisselEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[4]}</div>`;
            } else if (disselArr[i].hoofdgerecht6) {
              mainDissel.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[5]}</div>`;
              mainDisselEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[5]}</div>`;
            } else if (disselArr[i].hoofdgerecht7) {
              mainDissel.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[6]}</div>`;
              mainDisselEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[6]}</div>`;
            }
          }
          counter++;
        }
      }
      disselArrCount++;
      addHidden(ul);
    } else if (li.classList.value === "larix-li") {
      removeHidden(larix);
      if (larixArrCount < 1) {
        let counter = 0;
        for (i = 0; i < larixArr.length; i++) {
          //     console.log(larixArr[i]);
          if (counter % 2 === 0) {
            fullNameLarix.innerHTML += `<div class="injected">${larixArr[i].fullName}</div>`;
            //     console.log(larixArr[i].fullName + " none");
            if (larixArr[i].voorgerecht1) {
              starterLarix.innerHTML += `<div class="injected">${voorgerechtenNL[0]}</div>`;
              starterLarixEN.innerHTML += `<div class="injected">${voorgerechtenEN[0]}</div>`;
            } else if (larixArr[i].voorgerecht2) {
              starterLarix.innerHTML += `<div class="injected">${voorgerechtenNL[1]}</div>`;
              starterLarixEN.innerHTML += `<div class="injected">${voorgerechtenEN[1]}</div>`;
            } else if (larixArr[i].voorgerecht3) {
              starterLarix.innerHTML += `<div class="injected">${voorgerechtenNL[2]}</div>`;
              starterLarixEN.innerHTML += `<div class="injected">${voorgerechtenEN[2]}</div>`;
            } else if (larixArr[i].voorgerecht4) {
              starterLarix.innerHTML += `<div class="injected">${voorgerechtenNL[3]}</div>`;
              starterLarixEN.innerHTML += `<div class="injected">${voorgerechtenEN[3]}</div>`;
            } else if (larixArr[i].voorgerecht5) {
              starterLarix.innerHTML += `<div class="injected">${voorgerechtenNL[4]}</div>`;
              starterLarixEN.innerHTML += `<div class="injected">${voorgerechtenEN[4]}</div>`;
            } else if (larixArr[i].voorgerecht6) {
              starterLarix.innerHTML += `<div class="injected">${voorgerechtenNL[5]}</div>`;
              starterLarixEN.innerHTML += `<div class="injected">${voorgerechtenEN[5]}</div>`;
            } else if (larixArr[i].voorgerecht7) {
              starterLarix.innerHTML += `<div class="injected">${voorgerechtenNL[6]}</div>`;
              starterLarixEN.innerHTML += `<div class="injected">${voorgerechtenEN[6]}</div>`;
            }
            if (larixArr[i].hoofdgerecht1) {
              mainLarix.innerHTML += `<div class="injected">${hoofdgerechtenNL[0]}</div>`;
              mainLarixEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[0]}</div>`;
            } else if (larixArr[i].hoofdgerecht2) {
              mainLarix.innerHTML += `<div class="injected">${hoofdgerechtenNL[1]}</div>`;
              mainLarixEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[1]}</div>`;
            } else if (larixArr[i].hoofdgerecht3) {
              mainLarix.innerHTML += `<div class="injected">${hoofdgerechtenNL[2]}</div>`;
              mainLarixEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[2]}</div>`;
            } else if (larixArr[i].hoofdgerecht4) {
              mainLarix.innerHTML += `<div class="injected">${hoofdgerechtenNL[3]}</div>`;
              mainLarixEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[3]}</div>`;
            } else if (larixArr[i].hoofdgerecht5) {
              mainLarix.innerHTML += `<div class="injected">${hoofdgerechtenNL[4]}</div>`;
              mainLarixEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[4]}</div>`;
            } else if (larixArr[i].hoofdgerecht6) {
              mainLarix.innerHTML += `<div class="injected">${hoofdgerechtenNL[5]}</div>`;
              mainLarixEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[5]}</div>`;
            } else if (larixArr[i].hoofdgerecht7) {
              mainLarix.innerHTML += `<div class="injected">${hoofdgerechtenNL[6]}</div>`;
              mainLarixEN.innerHTML += `<div class="injected">${hoofdgerechtenEN[6]}</div>`;
            }
          } else {
            fullNameLarix.innerHTML += `<div class="injected red-background">${larixArr[i].fullName}</div>`;
            //    console.log(larixArr[i].fullName + " red");
            if (larixArr[i].voorgerecht1) {
              starterLarix.innerHTML += `<div class="injected red-background">${voorgerechtenNL[0]}</div>`;
              starterLarixEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[0]}</div>`;
            } else if (larixArr[i].voorgerecht2) {
              starterLarix.innerHTML += `<div class="injected red-background">${voorgerechtenNL[1]}</div>`;
              starterLarixEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[1]}</div>`;
            } else if (larixArr[i].voorgerecht3) {
              starterLarix.innerHTML += `<div class="injected red-background">${voorgerechtenNL[2]}</div>`;
              starterLarixEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[2]}</div>`;
            } else if (larixArr[i].voorgerecht4) {
              starterLarix.innerHTML += `<div class="injected red-background">${voorgerechtenNL[3]}</div>`;
              starterLarixEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[3]}</div>`;
            } else if (larixArr[i].voorgerecht5) {
              starterLarix.innerHTML += `<div class="injected red-background">${voorgerechtenNL[4]}</div>`;
              starterLarixEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[4]}</div>`;
            } else if (larixArr[i].voorgerecht6) {
              starterLarix.innerHTML += `<div class="injected red-background">${voorgerechtenNL[5]}</div>`;
              starterLarixEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[5]}</div>`;
            } else if (larixArr[i].voorgerecht7) {
              starterLarix.innerHTML += `<div class="injected red-background">${voorgerechtenNL[6]}</div>`;
              starterLarixEN.innerHTML += `<div class="injected red-background">${voorgerechtenEN[6]}</div>`;
            }
            if (larixArr[i].hoofdgerecht1) {
              mainLarix.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[0]}</div>`;
              mainLarixEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[0]}</div>`;
            } else if (larixArr[i].hoofdgerecht2) {
              mainLarix.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[1]}</div>`;
              mainLarixEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[1]}</div>`;
            } else if (larixArr[i].hoofdgerecht3) {
              mainLarix.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[2]}</div>`;
              mainLarixEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[2]}</div>`;
            } else if (larixArr[i].hoofdgerecht4) {
              mainLarix.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[3]}</div>`;
              mainLarixEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[3]}</div>`;
            } else if (larixArr[i].hoofdgerecht5) {
              mainLarix.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[4]}</div>`;
              mainLarixEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[4]}</div>`;
            } else if (larixArr[i].hoofdgerecht6) {
              mainLarix.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[5]}</div>`;
              mainLarixEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[5]}</div>`;
            } else if (larixArr[i].hoofdgerecht7) {
              mainLarix.innerHTML += `<div class="injected red-background">${hoofdgerechtenNL[6]}</div>`;
              mainLarixEN.innerHTML += `<div class="injected red-background">${hoofdgerechtenEN[6]}</div>`;
            }
          }
          counter++;
        }
      }
      larixArrCount++;
      addHidden(ul);
    }
  });
});

li.forEach((li) => {
  li.addEventListener("click", () => {
    //  console.log(li.textContent.toLocaleLowerCase());
    zaalCoice = li.textContent.toLocaleLowerCase();
  });
});

nl.addEventListener("click", () => {
  imgNl.classList.remove("opacity-change");
  imgEn.classList.add("opacity-change");
  h3.textContent = "Kies hier de zaal van uw training";
  setHiddenNL.forEach((element) => {
    element.classList.remove("hidden");
  });
  setHiddenEN.forEach((element) => {
    element.classList.add("hidden");
  });
  // nlLanguage = true;
  // enLanguage = false;
});

//start loading site with dutch language
nl.click();

en.addEventListener("click", () => {
  imgNl.classList.add("opacity-change");
  imgEn.classList.remove("opacity-change");
  h3.textContent = "Choose the conference room of your training here";
  setHiddenNL.forEach((element) => {
    element.classList.add("hidden");
  });
  setHiddenEN.forEach((element) => {
    element.classList.remove("hidden");
  });
  // nlLanguage = false;
  // enLanguage = true;
});

//get data from google sheets for menu items
fetch(url)
  .then((res) => res.text())
  .then((rep) => {
    const jsData = JSON.parse(rep.substring(47).slice(0, -2));
    let gerechten = [];
    jsData.table.rows.forEach((element) => {
      gerechten.push(element);
    });

    //dutch dishes
    let gerechtenNL = gerechten[2];
    gerechtenNL = gerechtenNL.c.slice(0);
    //english dishes
    let gerechtenEN = gerechten[4];
    gerechtenEN = gerechtenEN.c.slice(0);
    for (i = 0; i <= 6; i++) {
      voorgerechtenNL.push(gerechtenNL[i].v);
    }
    for (i = 7; i <= 13; i++) {
      hoofdgerechtenNL.push(gerechtenNL[i].v);
    }

    for (i = 0; i <= 6; i++) {
      voorgerechtenEN.push(gerechtenEN[i].v);
    }
    for (i = 7; i <= 13; i++) {
      hoofdgerechtenEN.push(gerechtenEN[i].v);
    }

    // get data from google sheets from input users menu choises
    fetch(urlBlad1)
      .then((response) => response.text())
      .then((reply) => {
        //Remove additional text and extract only JSON:
        const jsonData = JSON.parse(reply.substring(47).slice(0, -2));
        const colz = [];
        //Extract column labels
        jsonData.table.cols.forEach((heading) => {
          if (heading.label) {
            let column = heading.label;
            colz.push(column);
          }
        });
        //extract row data:
        jsonData.table.rows.forEach((rowData) => {
          const row = {};
          colz.forEach((ele, ind) => {
            row[ele] = rowData.c[ind] != null ? rowData.c[ind].v : "";
          });
          dataBlad1.push(row);
          //    console.log(dataBlad1);
        });
        let load = 0;
        if (load < 1) {
          for (i = 0; i < dataBlad1.length; i++) {
            if (dataBlad1[i]["zaal-training"] === "koetshuis") {
              let zaalObj = {};
              let fullName = `${dataBlad1[i].voornaam} ${dataBlad1[i].achternaam}`;
              let voorgerecht1 = dataBlad1[i].voorgerecht1;
              let voorgerecht2 = dataBlad1[i].voorgerecht2;
              let voorgerecht3 = dataBlad1[i].voorgerecht3;
              let voorgerecht4 = dataBlad1[i].voorgerecht4;
              let voorgerecht5 = dataBlad1[i].voorgerecht5;
              let voorgerecht6 = dataBlad1[i].voorgerecht6;
              let voorgerecht7 = dataBlad1[i]["geen-voorgerecht"];
              let hoofdgerecht1 = dataBlad1[i].hoofdgerecht1;
              let hoofdgerecht2 = dataBlad1[i].hoofdgerecht2;
              let hoofdgerecht3 = dataBlad1[i].hoofdgerecht3;
              let hoofdgerecht4 = dataBlad1[i].hoofdgerecht4;
              let hoofdgerecht5 = dataBlad1[i].hoofdgerecht5;
              let hoofdgerecht6 = dataBlad1[i].hoofdgerecht6;
              let hoofdgerecht7 = dataBlad1[i]["geen-hoofdgerecht"];
              zaalObj.fullName = fullName;
              zaalObj.voorgerecht1 = voorgerecht1;
              zaalObj.voorgerecht2 = voorgerecht2;
              zaalObj.voorgerecht3 = voorgerecht3;
              zaalObj.voorgerecht4 = voorgerecht4;
              zaalObj.voorgerecht5 = voorgerecht5;
              zaalObj.voorgerecht6 = voorgerecht6;
              zaalObj.voorgerecht7 = voorgerecht7;
              zaalObj.hoofdgerecht1 = hoofdgerecht1;
              zaalObj.hoofdgerecht2 = hoofdgerecht2;
              zaalObj.hoofdgerecht3 = hoofdgerecht3;
              zaalObj.hoofdgerecht4 = hoofdgerecht4;
              zaalObj.hoofdgerecht5 = hoofdgerecht5;
              zaalObj.hoofdgerecht6 = hoofdgerecht6;
              zaalObj.hoofdgerecht7 = hoofdgerecht7;
              koetshuisArr.push(zaalObj);
            } else if (dataBlad1[i]["zaal-training"] === "wagenzaal") {
              let zaalObj = {};
              let fullName = `${dataBlad1[i].voornaam} ${dataBlad1[i].achternaam}`;
              let voorgerecht1 = dataBlad1[i].voorgerecht1;
              let voorgerecht2 = dataBlad1[i].voorgerecht2;
              let voorgerecht3 = dataBlad1[i].voorgerecht3;
              let voorgerecht4 = dataBlad1[i].voorgerecht4;
              let voorgerecht5 = dataBlad1[i].voorgerecht5;
              let voorgerecht6 = dataBlad1[i].voorgerecht6;
              let voorgerecht7 = dataBlad1[i]["geen-voorgerecht"];
              let hoofdgerecht1 = dataBlad1[i].hoofdgerecht1;
              let hoofdgerecht2 = dataBlad1[i].hoofdgerecht2;
              let hoofdgerecht3 = dataBlad1[i].hoofdgerecht3;
              let hoofdgerecht4 = dataBlad1[i].hoofdgerecht4;
              let hoofdgerecht5 = dataBlad1[i].hoofdgerecht5;
              let hoofdgerecht6 = dataBlad1[i].hoofdgerecht6;
              let hoofdgerecht7 = dataBlad1[i]["geen-hoofdgerecht"];
              zaalObj.fullName = fullName;
              zaalObj.voorgerecht1 = voorgerecht1;
              zaalObj.voorgerecht2 = voorgerecht2;
              zaalObj.voorgerecht3 = voorgerecht3;
              zaalObj.voorgerecht4 = voorgerecht4;
              zaalObj.voorgerecht5 = voorgerecht5;
              zaalObj.voorgerecht6 = voorgerecht6;
              zaalObj.voorgerecht7 = voorgerecht7;
              zaalObj.hoofdgerecht1 = hoofdgerecht1;
              zaalObj.hoofdgerecht2 = hoofdgerecht2;
              zaalObj.hoofdgerecht3 = hoofdgerecht3;
              zaalObj.hoofdgerecht4 = hoofdgerecht4;
              zaalObj.hoofdgerecht5 = hoofdgerecht5;
              zaalObj.hoofdgerecht6 = hoofdgerecht6;
              zaalObj.hoofdgerecht7 = hoofdgerecht7;
              wagenzaalArr.push(zaalObj);
            } else if (dataBlad1[i]["zaal-training"] === "forum") {
              let zaalObj = {};
              let fullName = `${dataBlad1[i].voornaam} ${dataBlad1[i].achternaam}`;
              let voorgerecht1 = dataBlad1[i].voorgerecht1;
              let voorgerecht2 = dataBlad1[i].voorgerecht2;
              let voorgerecht3 = dataBlad1[i].voorgerecht3;
              let voorgerecht4 = dataBlad1[i].voorgerecht4;
              let voorgerecht5 = dataBlad1[i].voorgerecht5;
              let voorgerecht6 = dataBlad1[i].voorgerecht6;
              let voorgerecht7 = dataBlad1[i]["geen-voorgerecht"];
              let hoofdgerecht1 = dataBlad1[i].hoofdgerecht1;
              let hoofdgerecht2 = dataBlad1[i].hoofdgerecht2;
              let hoofdgerecht3 = dataBlad1[i].hoofdgerecht3;
              let hoofdgerecht4 = dataBlad1[i].hoofdgerecht4;
              let hoofdgerecht5 = dataBlad1[i].hoofdgerecht5;
              let hoofdgerecht6 = dataBlad1[i].hoofdgerecht6;
              let hoofdgerecht7 = dataBlad1[i]["geen-hoofdgerecht"];
              zaalObj.fullName = fullName;
              zaalObj.voorgerecht1 = voorgerecht1;
              zaalObj.voorgerecht2 = voorgerecht2;
              zaalObj.voorgerecht3 = voorgerecht3;
              zaalObj.voorgerecht4 = voorgerecht4;
              zaalObj.voorgerecht5 = voorgerecht5;
              zaalObj.voorgerecht6 = voorgerecht6;
              zaalObj.voorgerecht7 = voorgerecht7;
              zaalObj.hoofdgerecht1 = hoofdgerecht1;
              zaalObj.hoofdgerecht2 = hoofdgerecht2;
              zaalObj.hoofdgerecht3 = hoofdgerecht3;
              zaalObj.hoofdgerecht4 = hoofdgerecht4;
              zaalObj.hoofdgerecht5 = hoofdgerecht5;
              zaalObj.hoofdgerecht6 = hoofdgerecht6;
              zaalObj.hoofdgerecht7 = hoofdgerecht7;
              forumArr.push(zaalObj);
            } else if (dataBlad1[i]["zaal-training"] === "ruiterkamer") {
              let zaalObj = {};
              let fullName = `${dataBlad1[i].voornaam} ${dataBlad1[i].achternaam}`;
              let voorgerecht1 = dataBlad1[i].voorgerecht1;
              let voorgerecht2 = dataBlad1[i].voorgerecht2;
              let voorgerecht3 = dataBlad1[i].voorgerecht3;
              let voorgerecht4 = dataBlad1[i].voorgerecht4;
              let voorgerecht5 = dataBlad1[i].voorgerecht5;
              let voorgerecht6 = dataBlad1[i].voorgerecht6;
              let voorgerecht7 = dataBlad1[i]["geen-voorgerecht"];
              let hoofdgerecht1 = dataBlad1[i].hoofdgerecht1;
              let hoofdgerecht2 = dataBlad1[i].hoofdgerecht2;
              let hoofdgerecht3 = dataBlad1[i].hoofdgerecht3;
              let hoofdgerecht4 = dataBlad1[i].hoofdgerecht4;
              let hoofdgerecht5 = dataBlad1[i].hoofdgerecht5;
              let hoofdgerecht6 = dataBlad1[i].hoofdgerecht6;
              let hoofdgerecht7 = dataBlad1[i]["geen-hoofdgerecht"];
              zaalObj.fullName = fullName;
              zaalObj.voorgerecht1 = voorgerecht1;
              zaalObj.voorgerecht2 = voorgerecht2;
              zaalObj.voorgerecht3 = voorgerecht3;
              zaalObj.voorgerecht4 = voorgerecht4;
              zaalObj.voorgerecht5 = voorgerecht5;
              zaalObj.voorgerecht6 = voorgerecht6;
              zaalObj.voorgerecht7 = voorgerecht7;
              zaalObj.hoofdgerecht1 = hoofdgerecht1;
              zaalObj.hoofdgerecht2 = hoofdgerecht2;
              zaalObj.hoofdgerecht3 = hoofdgerecht3;
              zaalObj.hoofdgerecht4 = hoofdgerecht4;
              zaalObj.hoofdgerecht5 = hoofdgerecht5;
              zaalObj.hoofdgerecht6 = hoofdgerecht6;
              zaalObj.hoofdgerecht7 = hoofdgerecht7;
              ruiterkamerArr.push(zaalObj);
            } else if (dataBlad1[i]["zaal-training"] === "koetsierskamer") {
              let zaalObj = {};
              let fullName = `${dataBlad1[i].voornaam} ${dataBlad1[i].achternaam}`;
              let voorgerecht1 = dataBlad1[i].voorgerecht1;
              let voorgerecht2 = dataBlad1[i].voorgerecht2;
              let voorgerecht3 = dataBlad1[i].voorgerecht3;
              let voorgerecht4 = dataBlad1[i].voorgerecht4;
              let voorgerecht5 = dataBlad1[i].voorgerecht5;
              let voorgerecht6 = dataBlad1[i].voorgerecht6;
              let voorgerecht7 = dataBlad1[i]["geen-voorgerecht"];
              let hoofdgerecht1 = dataBlad1[i].hoofdgerecht1;
              let hoofdgerecht2 = dataBlad1[i].hoofdgerecht2;
              let hoofdgerecht3 = dataBlad1[i].hoofdgerecht3;
              let hoofdgerecht4 = dataBlad1[i].hoofdgerecht4;
              let hoofdgerecht5 = dataBlad1[i].hoofdgerecht5;
              let hoofdgerecht6 = dataBlad1[i].hoofdgerecht6;
              let hoofdgerecht7 = dataBlad1[i]["geen-hoofdgerecht"];
              zaalObj.fullName = fullName;
              zaalObj.voorgerecht1 = voorgerecht1;
              zaalObj.voorgerecht2 = voorgerecht2;
              zaalObj.voorgerecht3 = voorgerecht3;
              zaalObj.voorgerecht4 = voorgerecht4;
              zaalObj.voorgerecht5 = voorgerecht5;
              zaalObj.voorgerecht6 = voorgerecht6;
              zaalObj.voorgerecht7 = voorgerecht7;
              zaalObj.hoofdgerecht1 = hoofdgerecht1;
              zaalObj.hoofdgerecht2 = hoofdgerecht2;
              zaalObj.hoofdgerecht3 = hoofdgerecht3;
              zaalObj.hoofdgerecht4 = hoofdgerecht4;
              zaalObj.hoofdgerecht5 = hoofdgerecht5;
              zaalObj.hoofdgerecht6 = hoofdgerecht6;
              zaalObj.hoofdgerecht7 = hoofdgerecht7;
              koetsierskamerArr.push(zaalObj);
            } else if (dataBlad1[i]["zaal-training"] === "rododendron") {
              let zaalObj = {};
              let fullName = `${dataBlad1[i].voornaam} ${dataBlad1[i].achternaam}`;
              let voorgerecht1 = dataBlad1[i].voorgerecht1;
              let voorgerecht2 = dataBlad1[i].voorgerecht2;
              let voorgerecht3 = dataBlad1[i].voorgerecht3;
              let voorgerecht4 = dataBlad1[i].voorgerecht4;
              let voorgerecht5 = dataBlad1[i].voorgerecht5;
              let voorgerecht6 = dataBlad1[i].voorgerecht6;
              let voorgerecht7 = dataBlad1[i]["geen-voorgerecht"];
              let hoofdgerecht1 = dataBlad1[i].hoofdgerecht1;
              let hoofdgerecht2 = dataBlad1[i].hoofdgerecht2;
              let hoofdgerecht3 = dataBlad1[i].hoofdgerecht3;
              let hoofdgerecht4 = dataBlad1[i].hoofdgerecht4;
              let hoofdgerecht5 = dataBlad1[i].hoofdgerecht5;
              let hoofdgerecht6 = dataBlad1[i].hoofdgerecht6;
              let hoofdgerecht7 = dataBlad1[i]["geen-hoofdgerecht"];
              zaalObj.fullName = fullName;
              zaalObj.voorgerecht1 = voorgerecht1;
              zaalObj.voorgerecht2 = voorgerecht2;
              zaalObj.voorgerecht3 = voorgerecht3;
              zaalObj.voorgerecht4 = voorgerecht4;
              zaalObj.voorgerecht5 = voorgerecht5;
              zaalObj.voorgerecht6 = voorgerecht6;
              zaalObj.voorgerecht7 = voorgerecht7;
              zaalObj.hoofdgerecht1 = hoofdgerecht1;
              zaalObj.hoofdgerecht2 = hoofdgerecht2;
              zaalObj.hoofdgerecht3 = hoofdgerecht3;
              zaalObj.hoofdgerecht4 = hoofdgerecht4;
              zaalObj.hoofdgerecht5 = hoofdgerecht5;
              zaalObj.hoofdgerecht6 = hoofdgerecht6;
              zaalObj.hoofdgerecht7 = hoofdgerecht7;
              rododendronArr.push(zaalObj);
            } else if (dataBlad1[i]["zaal-training"] === "patio") {
              let zaalObj = {};
              let fullName = `${dataBlad1[i].voornaam} ${dataBlad1[i].achternaam}`;
              let voorgerecht1 = dataBlad1[i].voorgerecht1;
              let voorgerecht2 = dataBlad1[i].voorgerecht2;
              let voorgerecht3 = dataBlad1[i].voorgerecht3;
              let voorgerecht4 = dataBlad1[i].voorgerecht4;
              let voorgerecht5 = dataBlad1[i].voorgerecht5;
              let voorgerecht6 = dataBlad1[i].voorgerecht6;
              let voorgerecht7 = dataBlad1[i]["geen-voorgerecht"];
              let hoofdgerecht1 = dataBlad1[i].hoofdgerecht1;
              let hoofdgerecht2 = dataBlad1[i].hoofdgerecht2;
              let hoofdgerecht3 = dataBlad1[i].hoofdgerecht3;
              let hoofdgerecht4 = dataBlad1[i].hoofdgerecht4;
              let hoofdgerecht5 = dataBlad1[i].hoofdgerecht5;
              let hoofdgerecht6 = dataBlad1[i].hoofdgerecht6;
              let hoofdgerecht7 = dataBlad1[i]["geen-hoofdgerecht"];
              zaalObj.fullName = fullName;
              zaalObj.voorgerecht1 = voorgerecht1;
              zaalObj.voorgerecht2 = voorgerecht2;
              zaalObj.voorgerecht3 = voorgerecht3;
              zaalObj.voorgerecht4 = voorgerecht4;
              zaalObj.voorgerecht5 = voorgerecht5;
              zaalObj.voorgerecht6 = voorgerecht6;
              zaalObj.voorgerecht7 = voorgerecht7;
              zaalObj.hoofdgerecht1 = hoofdgerecht1;
              zaalObj.hoofdgerecht2 = hoofdgerecht2;
              zaalObj.hoofdgerecht3 = hoofdgerecht3;
              zaalObj.hoofdgerecht4 = hoofdgerecht4;
              zaalObj.hoofdgerecht5 = hoofdgerecht5;
              zaalObj.hoofdgerecht6 = hoofdgerecht6;
              zaalObj.hoofdgerecht7 = hoofdgerecht7;
              patioArr.push(zaalObj);
            } else if (dataBlad1[i]["zaal-training"] === "magnolia") {
              let zaalObj = {};
              let fullName = `${dataBlad1[i].voornaam} ${dataBlad1[i].achternaam}`;
              let voorgerecht1 = dataBlad1[i].voorgerecht1;
              let voorgerecht2 = dataBlad1[i].voorgerecht2;
              let voorgerecht3 = dataBlad1[i].voorgerecht3;
              let voorgerecht4 = dataBlad1[i].voorgerecht4;
              let voorgerecht5 = dataBlad1[i].voorgerecht5;
              let voorgerecht6 = dataBlad1[i].voorgerecht6;
              let voorgerecht7 = dataBlad1[i]["geen-voorgerecht"];
              let hoofdgerecht1 = dataBlad1[i].hoofdgerecht1;
              let hoofdgerecht2 = dataBlad1[i].hoofdgerecht2;
              let hoofdgerecht3 = dataBlad1[i].hoofdgerecht3;
              let hoofdgerecht4 = dataBlad1[i].hoofdgerecht4;
              let hoofdgerecht5 = dataBlad1[i].hoofdgerecht5;
              let hoofdgerecht6 = dataBlad1[i].hoofdgerecht6;
              let hoofdgerecht7 = dataBlad1[i]["geen-hoofdgerecht"];
              zaalObj.fullName = fullName;
              zaalObj.voorgerecht1 = voorgerecht1;
              zaalObj.voorgerecht2 = voorgerecht2;
              zaalObj.voorgerecht3 = voorgerecht3;
              zaalObj.voorgerecht4 = voorgerecht4;
              zaalObj.voorgerecht5 = voorgerecht5;
              zaalObj.voorgerecht6 = voorgerecht6;
              zaalObj.voorgerecht7 = voorgerecht7;
              zaalObj.hoofdgerecht1 = hoofdgerecht1;
              zaalObj.hoofdgerecht2 = hoofdgerecht2;
              zaalObj.hoofdgerecht3 = hoofdgerecht3;
              zaalObj.hoofdgerecht4 = hoofdgerecht4;
              zaalObj.hoofdgerecht5 = hoofdgerecht5;
              zaalObj.hoofdgerecht6 = hoofdgerecht6;
              zaalObj.hoofdgerecht7 = hoofdgerecht7;
              magnoliaArr.push(zaalObj);
            } else if (dataBlad1[i]["zaal-training"] === "zadelkamer") {
              let zaalObj = {};
              let fullName = `${dataBlad1[i].voornaam} ${dataBlad1[i].achternaam}`;
              let voorgerecht1 = dataBlad1[i].voorgerecht1;
              let voorgerecht2 = dataBlad1[i].voorgerecht2;
              let voorgerecht3 = dataBlad1[i].voorgerecht3;
              let voorgerecht4 = dataBlad1[i].voorgerecht4;
              let voorgerecht5 = dataBlad1[i].voorgerecht5;
              let voorgerecht6 = dataBlad1[i].voorgerecht6;
              let voorgerecht7 = dataBlad1[i]["geen-voorgerecht"];
              let hoofdgerecht1 = dataBlad1[i].hoofdgerecht1;
              let hoofdgerecht2 = dataBlad1[i].hoofdgerecht2;
              let hoofdgerecht3 = dataBlad1[i].hoofdgerecht3;
              let hoofdgerecht4 = dataBlad1[i].hoofdgerecht4;
              let hoofdgerecht5 = dataBlad1[i].hoofdgerecht5;
              let hoofdgerecht6 = dataBlad1[i].hoofdgerecht6;
              let hoofdgerecht7 = dataBlad1[i]["geen-hoofdgerecht"];
              zaalObj.fullName = fullName;
              zaalObj.voorgerecht1 = voorgerecht1;
              zaalObj.voorgerecht2 = voorgerecht2;
              zaalObj.voorgerecht3 = voorgerecht3;
              zaalObj.voorgerecht4 = voorgerecht4;
              zaalObj.voorgerecht5 = voorgerecht5;
              zaalObj.voorgerecht6 = voorgerecht6;
              zaalObj.voorgerecht7 = voorgerecht7;
              zaalObj.hoofdgerecht1 = hoofdgerecht1;
              zaalObj.hoofdgerecht2 = hoofdgerecht2;
              zaalObj.hoofdgerecht3 = hoofdgerecht3;
              zaalObj.hoofdgerecht4 = hoofdgerecht4;
              zaalObj.hoofdgerecht5 = hoofdgerecht5;
              zaalObj.hoofdgerecht6 = hoofdgerecht6;
              zaalObj.hoofdgerecht7 = hoofdgerecht7;
              zadelkamerArr.push(zaalObj);
            } else if (dataBlad1[i]["zaal-training"] === "prins-hendrik1") {
              let zaalObj = {};
              let fullName = `${dataBlad1[i].voornaam} ${dataBlad1[i].achternaam}`;
              let voorgerecht1 = dataBlad1[i].voorgerecht1;
              let voorgerecht2 = dataBlad1[i].voorgerecht2;
              let voorgerecht3 = dataBlad1[i].voorgerecht3;
              let voorgerecht4 = dataBlad1[i].voorgerecht4;
              let voorgerecht5 = dataBlad1[i].voorgerecht5;
              let voorgerecht6 = dataBlad1[i].voorgerecht6;
              let voorgerecht7 = dataBlad1[i]["geen-voorgerecht"];
              let hoofdgerecht1 = dataBlad1[i].hoofdgerecht1;
              let hoofdgerecht2 = dataBlad1[i].hoofdgerecht2;
              let hoofdgerecht3 = dataBlad1[i].hoofdgerecht3;
              let hoofdgerecht4 = dataBlad1[i].hoofdgerecht4;
              let hoofdgerecht5 = dataBlad1[i].hoofdgerecht5;
              let hoofdgerecht6 = dataBlad1[i].hoofdgerecht6;
              let hoofdgerecht7 = dataBlad1[i]["geen-hoofdgerecht"];
              zaalObj.fullName = fullName;
              zaalObj.voorgerecht1 = voorgerecht1;
              zaalObj.voorgerecht2 = voorgerecht2;
              zaalObj.voorgerecht3 = voorgerecht3;
              zaalObj.voorgerecht4 = voorgerecht4;
              zaalObj.voorgerecht5 = voorgerecht5;
              zaalObj.voorgerecht6 = voorgerecht6;
              zaalObj.voorgerecht7 = voorgerecht7;
              zaalObj.hoofdgerecht1 = hoofdgerecht1;
              zaalObj.hoofdgerecht2 = hoofdgerecht2;
              zaalObj.hoofdgerecht3 = hoofdgerecht3;
              zaalObj.hoofdgerecht4 = hoofdgerecht4;
              zaalObj.hoofdgerecht5 = hoofdgerecht5;
              zaalObj.hoofdgerecht6 = hoofdgerecht6;
              zaalObj.hoofdgerecht7 = hoofdgerecht7;
              prinshendrik1Arr.push(zaalObj);
            } else if (dataBlad1[i]["zaal-training"] === "prins-hendrik2") {
              let zaalObj = {};
              let fullName = `${dataBlad1[i].voornaam} ${dataBlad1[i].achternaam}`;
              let voorgerecht1 = dataBlad1[i].voorgerecht1;
              let voorgerecht2 = dataBlad1[i].voorgerecht2;
              let voorgerecht3 = dataBlad1[i].voorgerecht3;
              let voorgerecht4 = dataBlad1[i].voorgerecht4;
              let voorgerecht5 = dataBlad1[i].voorgerecht5;
              let voorgerecht6 = dataBlad1[i].voorgerecht6;
              let voorgerecht7 = dataBlad1[i]["geen-voorgerecht"];
              let hoofdgerecht1 = dataBlad1[i].hoofdgerecht1;
              let hoofdgerecht2 = dataBlad1[i].hoofdgerecht2;
              let hoofdgerecht3 = dataBlad1[i].hoofdgerecht3;
              let hoofdgerecht4 = dataBlad1[i].hoofdgerecht4;
              let hoofdgerecht5 = dataBlad1[i].hoofdgerecht5;
              let hoofdgerecht6 = dataBlad1[i].hoofdgerecht6;
              let hoofdgerecht7 = dataBlad1[i]["geen-hoofdgerecht"];
              zaalObj.fullName = fullName;
              zaalObj.voorgerecht1 = voorgerecht1;
              zaalObj.voorgerecht2 = voorgerecht2;
              zaalObj.voorgerecht3 = voorgerecht3;
              zaalObj.voorgerecht4 = voorgerecht4;
              zaalObj.voorgerecht5 = voorgerecht5;
              zaalObj.voorgerecht6 = voorgerecht6;
              zaalObj.voorgerecht7 = voorgerecht7;
              zaalObj.hoofdgerecht1 = hoofdgerecht1;
              zaalObj.hoofdgerecht2 = hoofdgerecht2;
              zaalObj.hoofdgerecht3 = hoofdgerecht3;
              zaalObj.hoofdgerecht4 = hoofdgerecht4;
              zaalObj.hoofdgerecht5 = hoofdgerecht5;
              zaalObj.hoofdgerecht6 = hoofdgerecht6;
              zaalObj.hoofdgerecht7 = hoofdgerecht7;
              prinshendrik2Arr.push(zaalObj);
            } else if (dataBlad1[i]["zaal-training"] === "prins-hendrik3") {
              let zaalObj = {};
              let fullName = `${dataBlad1[i].voornaam} ${dataBlad1[i].achternaam}`;
              let voorgerecht1 = dataBlad1[i].voorgerecht1;
              let voorgerecht2 = dataBlad1[i].voorgerecht2;
              let voorgerecht3 = dataBlad1[i].voorgerecht3;
              let voorgerecht4 = dataBlad1[i].voorgerecht4;
              let voorgerecht5 = dataBlad1[i].voorgerecht5;
              let voorgerecht6 = dataBlad1[i].voorgerecht6;
              let voorgerecht7 = dataBlad1[i]["geen-voorgerecht"];
              let hoofdgerecht1 = dataBlad1[i].hoofdgerecht1;
              let hoofdgerecht2 = dataBlad1[i].hoofdgerecht2;
              let hoofdgerecht3 = dataBlad1[i].hoofdgerecht3;
              let hoofdgerecht4 = dataBlad1[i].hoofdgerecht4;
              let hoofdgerecht5 = dataBlad1[i].hoofdgerecht5;
              let hoofdgerecht6 = dataBlad1[i].hoofdgerecht6;
              let hoofdgerecht7 = dataBlad1[i]["geen-hoofdgerecht"];
              zaalObj.fullName = fullName;
              zaalObj.voorgerecht1 = voorgerecht1;
              zaalObj.voorgerecht2 = voorgerecht2;
              zaalObj.voorgerecht3 = voorgerecht3;
              zaalObj.voorgerecht4 = voorgerecht4;
              zaalObj.voorgerecht5 = voorgerecht5;
              zaalObj.voorgerecht6 = voorgerecht6;
              zaalObj.voorgerecht7 = voorgerecht7;
              zaalObj.hoofdgerecht1 = hoofdgerecht1;
              zaalObj.hoofdgerecht2 = hoofdgerecht2;
              zaalObj.hoofdgerecht3 = hoofdgerecht3;
              zaalObj.hoofdgerecht4 = hoofdgerecht4;
              zaalObj.hoofdgerecht5 = hoofdgerecht5;
              zaalObj.hoofdgerecht6 = hoofdgerecht6;
              zaalObj.hoofdgerecht7 = hoofdgerecht7;
              prinshendrik3Arr.push(zaalObj);
            } else if (dataBlad1[i]["zaal-training"] === "serre") {
              let zaalObj = {};
              let fullName = `${dataBlad1[i].voornaam} ${dataBlad1[i].achternaam}`;
              let voorgerecht1 = dataBlad1[i].voorgerecht1;
              let voorgerecht2 = dataBlad1[i].voorgerecht2;
              let voorgerecht3 = dataBlad1[i].voorgerecht3;
              let voorgerecht4 = dataBlad1[i].voorgerecht4;
              let voorgerecht5 = dataBlad1[i].voorgerecht5;
              let voorgerecht6 = dataBlad1[i].voorgerecht6;
              let voorgerecht7 = dataBlad1[i]["geen-voorgerecht"];
              let hoofdgerecht1 = dataBlad1[i].hoofdgerecht1;
              let hoofdgerecht2 = dataBlad1[i].hoofdgerecht2;
              let hoofdgerecht3 = dataBlad1[i].hoofdgerecht3;
              let hoofdgerecht4 = dataBlad1[i].hoofdgerecht4;
              let hoofdgerecht5 = dataBlad1[i].hoofdgerecht5;
              let hoofdgerecht6 = dataBlad1[i].hoofdgerecht6;
              let hoofdgerecht7 = dataBlad1[i]["geen-hoofdgerecht"];
              zaalObj.fullName = fullName;
              zaalObj.voorgerecht1 = voorgerecht1;
              zaalObj.voorgerecht2 = voorgerecht2;
              zaalObj.voorgerecht3 = voorgerecht3;
              zaalObj.voorgerecht4 = voorgerecht4;
              zaalObj.voorgerecht5 = voorgerecht5;
              zaalObj.voorgerecht6 = voorgerecht6;
              zaalObj.voorgerecht7 = voorgerecht7;
              zaalObj.hoofdgerecht1 = hoofdgerecht1;
              zaalObj.hoofdgerecht2 = hoofdgerecht2;
              zaalObj.hoofdgerecht3 = hoofdgerecht3;
              zaalObj.hoofdgerecht4 = hoofdgerecht4;
              zaalObj.hoofdgerecht5 = hoofdgerecht5;
              zaalObj.hoofdgerecht6 = hoofdgerecht6;
              zaalObj.hoofdgerecht7 = hoofdgerecht7;
              serreArr.push(zaalObj);
            } else if (dataBlad1[i]["zaal-training"] === "vierspan") {
              let zaalObj = {};
              let fullName = `${dataBlad1[i].voornaam} ${dataBlad1[i].achternaam}`;
              let voorgerecht1 = dataBlad1[i].voorgerecht1;
              let voorgerecht2 = dataBlad1[i].voorgerecht2;
              let voorgerecht3 = dataBlad1[i].voorgerecht3;
              let voorgerecht4 = dataBlad1[i].voorgerecht4;
              let voorgerecht5 = dataBlad1[i].voorgerecht5;
              let voorgerecht6 = dataBlad1[i].voorgerecht6;
              let voorgerecht7 = dataBlad1[i]["geen-voorgerecht"];
              let hoofdgerecht1 = dataBlad1[i].hoofdgerecht1;
              let hoofdgerecht2 = dataBlad1[i].hoofdgerecht2;
              let hoofdgerecht3 = dataBlad1[i].hoofdgerecht3;
              let hoofdgerecht4 = dataBlad1[i].hoofdgerecht4;
              let hoofdgerecht5 = dataBlad1[i].hoofdgerecht5;
              let hoofdgerecht6 = dataBlad1[i].hoofdgerecht6;
              let hoofdgerecht7 = dataBlad1[i]["geen-hoofdgerecht"];
              zaalObj.fullName = fullName;
              zaalObj.voorgerecht1 = voorgerecht1;
              zaalObj.voorgerecht2 = voorgerecht2;
              zaalObj.voorgerecht3 = voorgerecht3;
              zaalObj.voorgerecht4 = voorgerecht4;
              zaalObj.voorgerecht5 = voorgerecht5;
              zaalObj.voorgerecht6 = voorgerecht6;
              zaalObj.voorgerecht7 = voorgerecht7;
              zaalObj.hoofdgerecht1 = hoofdgerecht1;
              zaalObj.hoofdgerecht2 = hoofdgerecht2;
              zaalObj.hoofdgerecht3 = hoofdgerecht3;
              zaalObj.hoofdgerecht4 = hoofdgerecht4;
              zaalObj.hoofdgerecht5 = hoofdgerecht5;
              zaalObj.hoofdgerecht6 = hoofdgerecht6;
              zaalObj.hoofdgerecht7 = hoofdgerecht7;
              vierspanArr.push(zaalObj);
            } else if (dataBlad1[i]["zaal-training"] === "tweespan") {
              let zaalObj = {};
              let fullName = `${dataBlad1[i].voornaam} ${dataBlad1[i].achternaam}`;
              let voorgerecht1 = dataBlad1[i].voorgerecht1;
              let voorgerecht2 = dataBlad1[i].voorgerecht2;
              let voorgerecht3 = dataBlad1[i].voorgerecht3;
              let voorgerecht4 = dataBlad1[i].voorgerecht4;
              let voorgerecht5 = dataBlad1[i].voorgerecht5;
              let voorgerecht6 = dataBlad1[i].voorgerecht6;
              let voorgerecht7 = dataBlad1[i]["geen-voorgerecht"];
              let hoofdgerecht1 = dataBlad1[i].hoofdgerecht1;
              let hoofdgerecht2 = dataBlad1[i].hoofdgerecht2;
              let hoofdgerecht3 = dataBlad1[i].hoofdgerecht3;
              let hoofdgerecht4 = dataBlad1[i].hoofdgerecht4;
              let hoofdgerecht5 = dataBlad1[i].hoofdgerecht5;
              let hoofdgerecht6 = dataBlad1[i].hoofdgerecht6;
              let hoofdgerecht7 = dataBlad1[i]["geen-hoofdgerecht"];
              zaalObj.fullName = fullName;
              zaalObj.voorgerecht1 = voorgerecht1;
              zaalObj.voorgerecht2 = voorgerecht2;
              zaalObj.voorgerecht3 = voorgerecht3;
              zaalObj.voorgerecht4 = voorgerecht4;
              zaalObj.voorgerecht5 = voorgerecht5;
              zaalObj.voorgerecht6 = voorgerecht6;
              zaalObj.voorgerecht7 = voorgerecht7;
              zaalObj.hoofdgerecht1 = hoofdgerecht1;
              zaalObj.hoofdgerecht2 = hoofdgerecht2;
              zaalObj.hoofdgerecht3 = hoofdgerecht3;
              zaalObj.hoofdgerecht4 = hoofdgerecht4;
              zaalObj.hoofdgerecht5 = hoofdgerecht5;
              zaalObj.hoofdgerecht6 = hoofdgerecht6;
              zaalObj.hoofdgerecht7 = hoofdgerecht7;
              tweespanArr.push(zaalObj);
            } else if (dataBlad1[i]["zaal-training"] === "stalmeester") {
              let zaalObj = {};
              let fullName = `${dataBlad1[i].voornaam} ${dataBlad1[i].achternaam}`;
              let voorgerecht1 = dataBlad1[i].voorgerecht1;
              let voorgerecht2 = dataBlad1[i].voorgerecht2;
              let voorgerecht3 = dataBlad1[i].voorgerecht3;
              let voorgerecht4 = dataBlad1[i].voorgerecht4;
              let voorgerecht5 = dataBlad1[i].voorgerecht5;
              let voorgerecht6 = dataBlad1[i].voorgerecht6;
              let voorgerecht7 = dataBlad1[i]["geen-voorgerecht"];
              let hoofdgerecht1 = dataBlad1[i].hoofdgerecht1;
              let hoofdgerecht2 = dataBlad1[i].hoofdgerecht2;
              let hoofdgerecht3 = dataBlad1[i].hoofdgerecht3;
              let hoofdgerecht4 = dataBlad1[i].hoofdgerecht4;
              let hoofdgerecht5 = dataBlad1[i].hoofdgerecht5;
              let hoofdgerecht6 = dataBlad1[i].hoofdgerecht6;
              let hoofdgerecht7 = dataBlad1[i]["geen-hoofdgerecht"];
              zaalObj.fullName = fullName;
              zaalObj.voorgerecht1 = voorgerecht1;
              zaalObj.voorgerecht2 = voorgerecht2;
              zaalObj.voorgerecht3 = voorgerecht3;
              zaalObj.voorgerecht4 = voorgerecht4;
              zaalObj.voorgerecht5 = voorgerecht5;
              zaalObj.voorgerecht6 = voorgerecht6;
              zaalObj.voorgerecht7 = voorgerecht7;
              zaalObj.hoofdgerecht1 = hoofdgerecht1;
              zaalObj.hoofdgerecht2 = hoofdgerecht2;
              zaalObj.hoofdgerecht3 = hoofdgerecht3;
              zaalObj.hoofdgerecht4 = hoofdgerecht4;
              zaalObj.hoofdgerecht5 = hoofdgerecht5;
              zaalObj.hoofdgerecht6 = hoofdgerecht6;
              zaalObj.hoofdgerecht7 = hoofdgerecht7;
              stalmeesterArr.push(zaalObj);
            } else if (dataBlad1[i]["zaal-training"] === "dissel") {
              let zaalObj = {};
              let fullName = `${dataBlad1[i].voornaam} ${dataBlad1[i].achternaam}`;
              let voorgerecht1 = dataBlad1[i].voorgerecht1;
              let voorgerecht2 = dataBlad1[i].voorgerecht2;
              let voorgerecht3 = dataBlad1[i].voorgerecht3;
              let voorgerecht4 = dataBlad1[i].voorgerecht4;
              let voorgerecht5 = dataBlad1[i].voorgerecht5;
              let voorgerecht6 = dataBlad1[i].voorgerecht6;
              let voorgerecht7 = dataBlad1[i]["geen-voorgerecht"];
              let hoofdgerecht1 = dataBlad1[i].hoofdgerecht1;
              let hoofdgerecht2 = dataBlad1[i].hoofdgerecht2;
              let hoofdgerecht3 = dataBlad1[i].hoofdgerecht3;
              let hoofdgerecht4 = dataBlad1[i].hoofdgerecht4;
              let hoofdgerecht5 = dataBlad1[i].hoofdgerecht5;
              let hoofdgerecht6 = dataBlad1[i].hoofdgerecht6;
              let hoofdgerecht7 = dataBlad1[i]["geen-hoofdgerecht"];
              zaalObj.fullName = fullName;
              zaalObj.voorgerecht1 = voorgerecht1;
              zaalObj.voorgerecht2 = voorgerecht2;
              zaalObj.voorgerecht3 = voorgerecht3;
              zaalObj.voorgerecht4 = voorgerecht4;
              zaalObj.voorgerecht5 = voorgerecht5;
              zaalObj.voorgerecht6 = voorgerecht6;
              zaalObj.voorgerecht7 = voorgerecht7;
              zaalObj.hoofdgerecht1 = hoofdgerecht1;
              zaalObj.hoofdgerecht2 = hoofdgerecht2;
              zaalObj.hoofdgerecht3 = hoofdgerecht3;
              zaalObj.hoofdgerecht4 = hoofdgerecht4;
              zaalObj.hoofdgerecht5 = hoofdgerecht5;
              zaalObj.hoofdgerecht6 = hoofdgerecht6;
              zaalObj.hoofdgerecht7 = hoofdgerecht7;
              disselArr.push(zaalObj);
            } else if (dataBlad1[i]["zaal-training"] === "larix") {
              let zaalObj = {};
              let fullName = `${dataBlad1[i].voornaam} ${dataBlad1[i].achternaam}`;
              let voorgerecht1 = dataBlad1[i].voorgerecht1;
              let voorgerecht2 = dataBlad1[i].voorgerecht2;
              let voorgerecht3 = dataBlad1[i].voorgerecht3;
              let voorgerecht4 = dataBlad1[i].voorgerecht4;
              let voorgerecht5 = dataBlad1[i].voorgerecht5;
              let voorgerecht6 = dataBlad1[i].voorgerecht6;
              let voorgerecht7 = dataBlad1[i]["geen-voorgerecht"];
              let hoofdgerecht1 = dataBlad1[i].hoofdgerecht1;
              let hoofdgerecht2 = dataBlad1[i].hoofdgerecht2;
              let hoofdgerecht3 = dataBlad1[i].hoofdgerecht3;
              let hoofdgerecht4 = dataBlad1[i].hoofdgerecht4;
              let hoofdgerecht5 = dataBlad1[i].hoofdgerecht5;
              let hoofdgerecht6 = dataBlad1[i].hoofdgerecht6;
              let hoofdgerecht7 = dataBlad1[i]["geen-hoofdgerecht"];
              zaalObj.fullName = fullName;
              zaalObj.voorgerecht1 = voorgerecht1;
              zaalObj.voorgerecht2 = voorgerecht2;
              zaalObj.voorgerecht3 = voorgerecht3;
              zaalObj.voorgerecht4 = voorgerecht4;
              zaalObj.voorgerecht5 = voorgerecht5;
              zaalObj.voorgerecht6 = voorgerecht6;
              zaalObj.voorgerecht7 = voorgerecht7;
              zaalObj.hoofdgerecht1 = hoofdgerecht1;
              zaalObj.hoofdgerecht2 = hoofdgerecht2;
              zaalObj.hoofdgerecht3 = hoofdgerecht3;
              zaalObj.hoofdgerecht4 = hoofdgerecht4;
              zaalObj.hoofdgerecht5 = hoofdgerecht5;
              zaalObj.hoofdgerecht6 = hoofdgerecht6;
              zaalObj.hoofdgerecht7 = hoofdgerecht7;
              larixArr.push(zaalObj);
            }
          }
          load++;
        }
      });
  });
