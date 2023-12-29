// slider 
var imgBaza = [
    [
        {
            img: 'https://m.maccosmetics.com.tr/media/export/cms/products/640x600/mac_sku_SG7318_640x600_0.jpg'
        },
        {
            img: 'https://migrostv.migros.com.tr/wp-content/uploads/blog/2016/02/ruj-kullanma.jpg'
        },
        {
            img: 'https://best10selling.com/wp-content/uploads/Best-Lipstick-Set.jpg'
        },
        {
            img: 'https://cdn-seph.akinon.net/products/2019/09/25/88772/16ed91e4-4ff6-4879-ae26-21a15c1a152c.jpg'
        },
        {
            img: 'https://www.picclickimg.com/d/l400/pict/202594310030_/MAC-Shiny-Pretty-Things-Party-Favours-4pc-Holiday.jpg'
        }
    ],
    [
        {
            img: 'https://a.cdnsbn.com/images/products/l/21948096802.jpg'
        },
        {
            img: 'https://images-na.ssl-images-amazon.com/images/I/61m57MJZqDL._SL1001_.jpg'
        },
        {
            img: 'https://blogscdn.thehut.net/wp-content/uploads/sites/2/2018/08/03163722/1200x672-Blog-256073423-CA-LF-August-Batch-shot-16_1200x672_acf_cropped.jpg'
        },
        {
            img: 'https://www.parispurplebeauty.com/wp-content/uploads/2019/04/theordinarycoveragefoundationspf15_1_gl.jpg'
        },
        {
            img: 'https://i.pinimg.com/736x/8a/c6/0f/8ac60f82c80b0337d435e55ec57df914.jpg'
        }
    ],
    [
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5_wZNOuJ9GRGwepvSIyxIYskd3N3a0P9PbQ&usqp=CAU'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKy9IcxKMkQjYfIBFPR4Oj1K-X-b-btn_n1g&usqp=CAU'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_GSxgM1vgwv-0pP1fBbw2BCEwxcK-HWjSGw&usqp=CAU'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTlvJL5BbEBUEmsTQfJurH0kQ6RxlDJCvo6w&usqp=CAU'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8Lf3XTAxPBw0MdaHy29VdboU08zdsOQ1tTQ&usqp=CAU'
        }

    ],
    [
        {
            img: 'https://images-na.ssl-images-amazon.com/images/I/71fABM%2Bl-6L._SL1500_.jpg'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFVkFYyBPpwEnvZ3sQbejkXcdw_XYep61ijg&usqp=CAU'
        },
        {
            img: 'https://blogscdn.thehut.net/wp-content/uploads/sites/506/2018/05/10004915/rockout.jpg'
        },
        {
            img: 'https://grandi.md/image/cache/catalog/pupa/61-fopaTSlL._SL1000_-500x500.jpg'
        },
        {
            img: 'https://www.kikocosmetics.com/mediaObject/2019/prod/box_categoria/Mascara/original/Mascara.jpg'
        }
    ],
    [
        {
            img: 'https://edited.beautybay.com/wp-content/uploads/2018/07/Liquid_eyeliners.jpg'
        },
        {
            img: 'https://imgaz3.staticbg.com/thumb/large/oaupload/banggood/images/E9/10/0cc1c8c9-d6dc-46df-8bf4-7b75945eb72f.png'
        },
        {
            img: 'https://media.astralbrandsmedia.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/o/n/onpointeyeliner_liquid_vip_capoff_72dpi.jpg'
        },
        {
            img: 'https://imgaz3.staticbg.com/thumb/large/oaupload/banggood/images/E9/10/0cc1c8c9-d6dc-46df-8bf4-7b75945eb72f.png'
        },
        {
            img: 'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dwa8a42f30/Products/grandioseliner/3614271312235_Grandiose_Liner_MATTE-NOIR_1000x1000.jpg?sw=650&sh=650&sm=fit&q=70'
        }
    ],
    [
        {
            img: 'https://cdn.shopify.com/s/files/1/0600/2197/products/Poolside-1_bf966232-14b4-4717-8294-d66e27e521c3_grande.jpg?v=1564903975'
        },
        {
            img: 'https://image.freepik.com/free-photo/close-up-bottles-with-spilled-nail-polish_23-2148194791.jpg'
        },
        {
            img: 'https://images-na.ssl-images-amazon.com/images/I/61Of7IcTDZL._SX425_.jpg'
        },
        {
            img: 'https://d1pqi63uwhi854.cloudfront.net/img/alt_photos/52_bloodgood_62119.jpg'
        },
        {
            img: 'https://www.ilnp.com/wp-content/uploads/2020/07/Pink-Flamingo-2-copy-600x600.jpg.webp'
        }

    ]

];

var index = 0;
function Slider() {
    setInterval(function () {
        index++;      
        Showimg(index);
        if (index == 4) {
            index = -1;
        }
    }, 3000)
};
Slider();

function Showimg(i) {
    index = i;
    var images = document.querySelectorAll('.cosmetic_img');
    for (var j = 0; j <= 5; j++) {
         images[j].setAttribute('src', imgBaza[j][index].img);
    }
};
Showimg(index);