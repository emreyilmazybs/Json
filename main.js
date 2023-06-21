
// var burgerRepo = [];
// var chickenBurger = [];
// var meatBurger = [];



// //    var burger= 
// //       {
// //         mod_ID: "",
// //         mod_Name: " ",
// //         mod_Price: "",
// //         mod_ImgSrc:""
// //       } 

// var specialMenu,meatBurgerGet,chickenBurgerGet,hotDogGet,saladGet,drinkGet;

// var data =  fetch("price.json")
//     .then(response =>  response.json()
//         .then(table => {
//             table['Burgers'].forEach(element => {
//                 // console.log(element.Name)
//                 var burger = {
//                     mod_ID: element.Id,
//                     mod_Name: element.Name,
//                     mod_Price: element.mod_Price,
//                     mod_ImgSrc: element.ImgSrc,
//                     mod_Type: element.Type
//                 };

//                 burgerRepo.push(burger);
//             });
//             burgerRepo.forEach(el => {
//               //  el.mod_Type =='Chicken' ? console.log('Chicken'):console.log('Meat');
//                 if (el.mod_Type =='Chicken') {
//                     chickenBurger.push(el);
//                 }else if(el.mod_Type =='Meat'){
//                     meatBurger.push(el)
//                 }

//             });
//             chickenBurger.forEach(element => {
//                 console.log(element)
//             });
//         })
//         );


// var hiddenCampaign = function () {
//     var res;
//     res = document.getElementById("campaignSection");
//     res.style.display = "none";
//     console.log("Çalıştı")
// };

// //  console.log(chickenBurger);

// // console.log(meatBurger);




// // var content = '<div class="card" style="width: 18rem;">\n'+
// // '        <img class="card-img-top" src="img/content/chickenBurger/classic tavuk.jpg" alt="Card image cap">\n'+
// // '        <div class="card-body">\n'+
// // '          <h5 class="card-title">X Burger</h5>\n'+
// // '          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\n'+
// // '            content.</p>\n'+
// // '          <a href="#" class="btn btn-primary">Price TL</a>\n'+
// // '        </div>\n'+
// // '      </div>';



var burgerRepo = [];//Tüm ürünlerin çekilip toplandığı dizi.
var chickenBurger = []; // BurgerRepo içinden alınıp Sadece tavuk ürünlerin çekilip toplandığı dizi.
var meatBurger = []; //BurgerRepo içinden alınıp Sadece et ürünlerin çekilip toplandığı dizi.

//Html sayfasında Click event tanımlamaları
var chickenBurgerGet = function(){};
var meatBurgerGet = function(){};
var hotDogGet = function(){};
var saladGet = function(){};
var drinkGet = function(){};
var specialMenuGet = function(){};



var fetchData = async () => {
    try {
        var response = await fetch("price.json");
        var data = await response.json();

        data['Burgers'].forEach(element => {
            var burger = {
                mod_ID: element.Id,
                mod_Name: element.Name,
                mod_Price: element.Price,
                mod_ImgSrc: element.ImgSrc,
                mod_Type: element.Type,
                mod_Desc:element.Description
            };

            burgerRepo.push(burger);
        });

        burgerRepo.forEach(el => {
            if (el.mod_Type == 'Chicken') {
                chickenBurger.push(el);
            } else if (el.mod_Type == 'Meat') {
                meatBurger.push(el);
            }
        });

        //Döngü içerisinden aktarılan Listeler
        var chickenList = [];
        var meatList = [];

        //Tavuk Burger döngüsü
        for (let index = 0; index < chickenBurger.length; index++) {

            var element = ' <div  class="col-md-3 mx-auto" >\n' +
                '      <div  id="content"></div>\n' +
                '      <div class="card" style="width: 18rem;">\n' +
                '        <img class="card-img-top" src="' + chickenBurger[index].mod_ImgSrc + '" alt="Card image cap">\n' +
                '        <div class="card-body">\n' +
                '          <h5 class="card-title">' + chickenBurger[index].mod_Name + '</h5>\n' +
                '          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\n' +
                '            content.</p>\n' +
                '          <a href="#" class="btn btn-primary">' + chickenBurger[index].mod_Price + '</a>\n' +
                '        </div>\n' +
                '      </div>\n' +
                '    </div>';
            chickenList.push(element);

        }

        //Et Burger döngüsü
        for (let index = 0; index < meatBurger.length; index++) {

            var element = ' <div  class="col-md-3 mx-auto" >\n' +
                '      <div  id="content"></div>\n' +
                '      <div class="card" style="width: 18rem;">\n' +
                '        <img class="card-img-top" src="' + meatBurger[index].mod_ImgSrc + '" alt="Card image cap">\n' +
                '        <div class="card-body">\n' +
                '          <h5 class="card-title">' + meatBurger[index].mod_Name + '</h5>\n' +
                '          <p style=" display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical; overflow:hidden;" class="card-text">' +  meatBurger[index].mod_Desc + '</p>\n' +
                '          <a href="#" class="btn btn-primary">' + meatBurger[index].mod_Price + '</a>\n' +
                '        </div>\n' +
                '      </div>\n' +
                '    </div>';
            meatList.push(element);

        }


        //Ürünlerin kategori  click eventleri ile main.html'e basılması. 
         chickenBurgerGet = function () {
            var content = document.getElementById("content");
            return content.innerHTML = chickenList;
        }

         meatBurgerGet = function () {
            var content = document.getElementById("content");
            return content.innerHTML = meatList;
        }
        


    } catch (error) {
        console.log("Veri alınamadı: ", error);
    }


};

var hiddenCampaign = function () {
    var res = document.getElementById("campaignSection");
    res.style.display = "none";
    console.log("Çalıştı");
};



fetchData();







