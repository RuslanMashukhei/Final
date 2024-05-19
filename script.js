// script.js

function addToCart() {
    alert('Товар добавлен в корзину!');
}


const products = {
    "nike-air-max": {
        title: "Nike Air Max",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5bc5bc81-9e76-444f-93ce-c7e1446f17af/air-max-dn-shoes-27XkSQ.png",
        description: "Say hello to the next generation of Air technology. The Air Max Dn features our Dynamic Air unit system of dual-pressure tubes, creating a reactive sensation with every step. This results in a futuristic design that’s comfortable enough to wear from day to night. Go ahead—Feel the Unreal.",
        price: "$100"
    },
    "nike-air-jordan": {
        title: "Nike Air Jordan",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/i1-6a253663-e5cd-49f6-918f-6685dc6b1f85/air-jordan-1-mid-shoes-X5pM09.png",
        description: "Inspired by the original AJ1, the Air Jordan 1 Mid offers fans a chance to follow in MJ's footsteps. Fresh color trims the clean, classic materials, imbuing modernity into a classic design.",
        price: "$110"
    },
    "nike-blazer-mid-77": {
        title: "Nike Blazer Mid '77",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7dcc6fd4-b41c-493e-85bd-58b8944b6b1d/blazer-mid-77-womens-shoes-NPWfjm.png",
        description: "Styled for the 70s. Loved in the 80s. Classic in the 90s. Ready for the future. The Nike Blazer Mid 77 delivers a timeless design thats easy to wear. Its unbelievably crisp leather upper breaks in beautifully and pairs with bold retro branding and luscious suede accents for a premium feel. Exposed foam on the tongue and a special midsole finish make it look like youve just pulled them from the history books. Go ahead, perfect your outfit.",
        price: "$120"
    },
    "nike-dunk-low": {
        title: "Nike Dunk Low",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/af53d53d-561f-450a-a483-70a7ceee380f/dunk-low-womens-shoes-ppQwKZ.png",
        description: "Created for the hardwood but taken to the streets, the '80s b-ball icon returns with perfectly shined overlays and classic team colors. With its iconic hoops design, the Nike Dunk Low channels '80s vintage back onto the streets while its padded, low-cut collar lets you take your game anywhere—in comfort.",
        price: "$130"
    },
    "nike-revolution-5": {
        title: "Nike Revolution 5",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/jvcf7clhvzyavyopsi9n/revolution-5-womens-road-running-shoes-hC41Vf.png",
        description: "When the road beckons, answer the call in a lightweight pair that’ll keep you moving mile after mile. Soft foam cushions your stride, and a reinforced heel delivers a smooth, stable ride. Crafted with knit material for breathable support, while a minimalist design fits in just about anywhere your day takes you.",
        price: "$140"
    },
    "nike-air-jordan-1-retro-high-og": {
        title: "Nike Air Jordan 1 Retro High OG 'Black & White'",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a0f19658-e0e2-456d-906e-21ec5595f122/air-jordan-1-retro-high-og-black-white-mens-shoes-JHpxkn.png",
        description: "Classic, original, remastered. Ready to hit the streets with sophistication, this black-and-white AJ1 strikes an elegant balance in premium leather. Refined details, retro branding and a sleek white Swoosh bring it all together. Black tie optional.",
        price: "$150"
    }
};


function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


function displayProductDetails(productKey) {
    const product = products[productKey];
    if (product) {
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-title').innerText = product.title;
        document.getElementById('product-description').innerText = product.description;
        document.getElementById('product-price').innerText = product.price;
    } else {
        document.querySelector('.product-details').innerHTML = '<p>Product not found</p>';
    }
}


const productKey = getQueryParam('product');
displayProductDetails(productKey);
