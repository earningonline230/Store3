
const UIContreller = (function(){
    const Selectors ={
        productList:".products",
        productDettail:".products_details_center",
        productBasketList:".basket_div"
    }
    return{
        // product list
        creatProductList: function(data){
            var html_one_product = "";
            var html_one_product = `   
            <div class="one_product_div">
            <button class="add_btn">
            <a href="../Cosmetic_Store_online/basket.html?name=${data.id+data.id}" target="_blank" class="details"> Add basket</a>
             </button>
              <div class="one_product">
                   <div class="product_img_div">
                   <img src='${data.image_link}' alt="foto" class="product_img">
                </div>
                  <p class="product_brand" id="one">${data.brand}</p>
                  <p class="product_name" id="one">${data.name}</p>
                  <p class="price" id="one">${data.price}<span class="span_sign">${data.price_sign}</span></p>
                 <button class="detail_btn">
                     <a href="../Cosmetic_Store_online/details.html?name=${data.id}" target="_self" class="details">details</a>
                  </button>
                </div>
             </div>
            `
            document.querySelector(Selectors.productList).innerHTML += html_one_product;
        },
        
      // extra information about product Detail
        creatDetail:function(data){
            var html_details = "";
            html_details = `
            <div class="product_details_information">
             <div class="detail_img_div">
                 <img src="${data.image_link}" alt="detal_foto" class="detail_img">
             </div>
             <p class="detail_brand"><strong>${data.brand}</strong> </p>
             <p class="detail_name"><strong>${data.name}</strong> </p>
             <p class="detail_price">${data.price}<span class="detail_price_sign">${data.price_sign}</span></p>
             <p class="detail_description"> ${data.description} </p>
             <p class="detail_creat">created time: ${data.created_at} </p>
             <p class="detail_update">update time: ${data.updated_at}</p>
            </div>
            `
            document.querySelector(Selectors.productDettail).innerHTML += html_details;
        },

        // add btn list basket
        createBasketList:function(data){
         var  htmlbasket="";
          htmlbasket=`
       <tr>
          <th> 
          <button class="detail_btn">
          <a href="../Cosmetic_Store_online/details.html?name=${data.id}" target="_self" class="details">details</a>
          </button>
          </th>
          <th>${data.brand}</th>
          <th>${data.name}</th> 
          <th>${data.price}<span class="span_sign">${data.price_sign}</span></th>
      </tr>  
          `
            document.querySelector(Selectors.productBasketList).innerHTML+=htmlbasket;
        },
        getSelectors:function(){
            return Selectors;
        }
    }
})();


// api
var tip = location.search.split("=")[1];


const App = (function(UIctr){
    var loading = document.getElementById('load_img');
    loading.style.display = 'block';
    const link = fetch('http://makeup-api.herokuapp.com/api/v1/products.json');
    link.then(data => {
        return data.json();
    }).then(datas => {
        datas.forEach(data => {
            loading.style.display = 'none';
            if (tip == data.product_type) {
                UIctr.creatProductList(data);
            }
            else if (tip == data.id) {
                 UIctr.creatDetail(data);
             } 
            else if (tip == data.id+data.id) {
                console.log(data);
                 UIctr.createBasketList(data);
             }                   
        })  
    })
})(UIContreller);




             