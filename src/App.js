import ProductKart from "./component/ProductKart";
function App() {
    const products = [
        {
            "id": 1,
            "title": "iPhone 13 Pro Max",
            "description": "One stop for support - Priority access to Apple experts via chat or phone, same-day service in most major metropolitan areas worldwide, pickup and delivery service: schedule a pickup at your home or office, carry-in repairs: take your iPhone to an Apple Authorised Service Provider",
            "price": 1199,
            "discountPercentage": 7.94,
            "rating": 4.94,
            "stock": 4,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            "images": [
                "https://www.chs.hu/Apple_iPhone_13_Pro_Max_128GB_Sierra_Blue-i749468.jpg",
            ]
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 10.94,
            "rating": 4.44,
            "stock": 10,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/2/1.jpg"

            ]
        },
        {
            "id": 3,
            "title": "iPhone 14 Pro Max",
            "description": "The iPhone 14 Pro and iPhone 14 Pro Max are smartphones designed, developed, and marketed by Apple Inc. They are the sixteenth-generation flagship iPhones, succeeding the iPhone 13 Pro and iPhone 13 Pro Max. The devices were unveiled alongside the iPhone 14 and iPhone 14 Plus during the Apple Event at Apple Park in Cupertino, California, on September 7, 2022.[7][8] Pre-orders for the iPhone 14 Pro and 14 Pro Max began on September 9, 2022, and were made available on September 16, 2022.",
            "price": 949,
            "discountPercentage": 12.04,
            "rating": 4.94,
            "stock": 8,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            "images": [
                "https://static.digitecgalaxus.ch/Files/6/8/2/2/8/8/8/4/iPhone_14_Pro_Max_Deep_Purple_PDP_Image_Position-1a__WWEN.jpg"

            ]
        },

        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.One stop for support - Priority access to Apple experts via chat or phone, same-day service in most major metropolitan areas worldwide, pickup and delivery service: schedule a pickup at your home or office, carry-in repairs: take your iPhone to an Apple Authorised Service Provider",
            "price": 99,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 9,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
            "images": [
                "https://images.fonearena.com/blog/wp-content/uploads/2021/04/OPPO-F19-1-1024x1015.jpg"

            ]
        },

        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 12,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
            "images": [
                "https://images.wondershare.com/recoverit/article/2019/08/huawei-phone.jpg"

            ]
        },
        {
            "id": 6,
            "title": "Samsung Galaxy A32",
            "description": "Samsung Galaxy A32 (2020) Phone With Intel Lakefield Chip, 8GB of RAM Launched",
            "price": 1129,
            "discountPercentage": 14.95,
            "rating": 4.85,
            "stock": 11,
            "brand": "Samsung",
            "category": "Phone",
            "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
            "images": [
                " http://egress.storeden.net/jpg/6095f321e39ee1fa75b075fa/file.jpg"

            ]
        },

        {
            "id": 7,
            "title": "Samsung Galaxy Book",
            "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
            "price": 1499,
            "discountPercentage": 15,
            "rating": 4.25,
            "stock": 10,
            "brand": "Samsung",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
            "images": [
                "https://m.media-amazon.com/images/I/51y4pytQpoS.jpg"

            ]
        },
        {
            "id": 8,
            "title": "Microsoft Surface Laptop 4",
            "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
            "price": 1499,
            "discountPercentage": 10.23,
            "rating": 4.43,
            "stock": 8,
            "brand": "Microsoft Surface",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/8/1.jpg"

            ]
        },
        {
            "id": 9,
            "title": "Infinix INBOOK",
            "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
            "price": 1099,
            "discountPercentage": 11.83,
            "rating": 4.54,
            "stock": 16,
            "brand": "Infinix",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/9/1.jpg"

            ]
        },
        {
            "id": 10,
            "title": "HP Pavilion 15-DK1056WM",
            "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
            "price": 1099,
            "discountPercentage": 11.18,
            "rating": 4.43,
            "stock": 9,
            "brand": "HP Pavilion",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
            "images": [
                "https://i.dummyjson.com/data/products/10/1.jpg"

            ]
        },

        {
            "id": 11,
            "title": "Perfume Oil",
            "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
            "price": 13,
            "discountPercentage": 10.4,
            "rating": 4.26,
            "stock": 5,
            "brand": "Impression of Acqua Di Gio",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/11/1.jpg",

            ]
        },
        {
            "id": 12,
            "title": "Brown Perfume",
            "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
            "price": 4,
            "discountPercentage": 15.66,
            "rating": 4,
            "stock": 7,
            "brand": "Royal_Mirage",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/12/1.jpg",

            ]
        },
        {
            "id": 13,
            "title": "Fog Scent Xpressio Perfume",
            "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
            "price": 13,
            "discountPercentage": 10.14,
            "rating": 4.59,
            "stock": 6,
            "brand": "Fog Scent Xpressio",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/13/thumbnail.webp",
            "images": [
                "https://i.dummyjson.com/data/products/13/1.jpg",

            ]
        },
        {
            "id": 14,
            "title": "Non-Alcoholic Concentrated Perfume Oil",
            "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
            "price": 120,
            "discountPercentage": 11.6,
            "rating": 4.21,
            "stock": 12,
            "brand": "Al Munakh",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/14/1.jpg",

            ]
        },
        {
            "id": 15,
            "title": "Eau De Perfume Spray",
            "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
            "price": 30,
            "discountPercentage": 10.99,
            "rating": 4.7,
            "stock": 11,
            "brand": "Lord - Al-Rehab",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/15/1.jpg"

            ]
        },
        {
            "id": 16,
            "title": "Hyaluronic Acid Serum",
            "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
            "price": 19,
            "discountPercentage": 13.31,
            "rating": 4.83,
            "stock": 10,
            "brand": "L'Oreal Paris",
            "category": "skincare",
            "thumbnail": "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/16/1.png"

            ]
        },
        {
            "id": 17,
            "title": "Tree Oil 30ml",
            "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
            "price": 12,
            "discountPercentage": 9.09,
            "rating": 4.52,
            "stock": 8,
            "brand": "Hemani Tea",
            "category": "skincare",
            "thumbnail": "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/17/1.jpg"

            ]
        },
        {
            "id": 18,
            "title": "Oil Free Moisturizer 100ml",
            "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
            "price": 10,
            "discountPercentage": 9.1,
            "rating": 4.56,
            "stock": 88,
            "brand": "Dermive",
            "category": "skincare",
            "thumbnail": "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/18/1.jpg"

            ]
        },
        {
            "id": 19,
            "title": "Skin Beauty Serum.",
            "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
            "price": 46,
            "discountPercentage": 10.68,
            "rating": 4.42,
            "stock": 11,
            "brand": "ROREC White Rice",
            "category": "skincare",
            "thumbnail": "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/19/1.jpg"

            ]
        },
        {
            "id": 20,
            "title": "Freckle Treatment Cream- 15gm",
            "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
            "price": 70,
            "discountPercentage": 10,
            "rating": 4.06,
            "stock": 14,
            "brand": "Fair & Clear",
            "category": "skincare",
            "thumbnail": "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/20/1.jpg"

            ]
        },
        {
            "id": 21,
            "title": "- Daal Masoor 500 grams",
            "description": "Fine quality Branded Product Keep in a cool and dry place",
            "price": 20,
            "discountPercentage": 8,
            "rating": 4.44,
            "stock": 23,
            "brand": "Saaf & Khaas",
            "category": "groceries",
            "thumbnail": "https://i.dummyjson.com/data/products/21/thumbnail.png",
            "images": [
                "https://i.dummyjson.com/data/products/21/1.png"

            ]
        },
        {
            "id": 22,
            "title": "Elbow Macaroni - 400 gm",
            "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm same-day service in most major metropolitan areas worldwide, pickup and delivery service: schedule a pickup at your home or office, carry-in repairs: take your iPhone to an Apple Authorised Service Provider",
            "price": 14,
            "discountPercentage": 11,
            "rating": 4.57,
            "stock": 16,
            "brand": "Bake Parlor Big",
            "category": "groceries",
            "thumbnail": "https://i.dummyjson.com/data/products/22/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/22/1.jpg"

            ]
        },
        {
            "id": 23,
            "title": "Orange Essence Food Flavou",
            "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
            "price": 14,
            "discountPercentage": 9,
            "rating": 4.85,
            "stock": 16,
            "brand": "Baking Food Items",
            "category": "groceries",
            "thumbnail": "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/23/1.jpg"

            ]
        },
        {
            "id": 24,
            "title": "cereals muesli fruit nuts",
            "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
            "price": 46,
            "discountPercentage": 12,
            "rating": 4.94,
            "stock": 13,
            "brand": "fauji",
            "category": "groceries",
            "thumbnail": "https://i.dummyjson.com/data/products/24/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/24/1.jpg"

            ]
        },
        {
            "id": 25,
            "title": "Gulab Powder 50 Gram",
            "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
            "price": 70,
            "discountPercentage": 11.58,
            "rating": 4.87,
            "stock": 14,
            "brand": "Dry Rose",
            "category": "groceries",
            "thumbnail": "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/25/1.png"

            ]
        },
        {
            "id": 26,
            "title": "MacBook Pro Max",
            "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
            "price": 1986,
            "discountPercentage": 9.02,
            "rating": 4.97,
            "stock": 12,
            "brand": "Apple",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
            "images": [
                "https://static.turbosquid.com/Preview/2016/11/21__08_14_15/mbp_15_gray0003.jpg25B4CF38-F615-4771-99F5-3D28424DBA7EZoom.jpg"

            ]
        },
        {
            "id": 27,
            "title": "Plant Hanger For Home",
            "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
            "price": 41,
            "discountPercentage": 12,
            "rating": 4.08,
            "stock": 13,
            "brand": "Boho Decor",
            "category": "home-decoration",
            "thumbnail": "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/26/1.jpg"

            ]
        },
        {
            "id": 28,
            "title": "Flying Wooden Bird",
            "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
            "price": 51,
            "discountPercentage": 11.58,
            "rating": 4.41,
            "stock": 7,
            "brand": "Flying Wooden",
            "category": "home-decoration",
            "thumbnail": "https://i.dummyjson.com/data/products/27/thumbnail.webp",
            "images": [
                "https://i.dummyjson.com/data/products/27/1.jpg"

            ]
        },
        {
            "id": 29,
            "title": "3D Embellishment Art Lamp",
            "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
            "price": 20,
            "discountPercentage": 11.49,
            "rating": 4.82,
            "stock": 5,
            "brand": "LED Lights",
            "category": "home-decoration",
            "thumbnail": "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/28/1.jpg"
            ]
        },
        {
            "id": 30,
            "title": "Handcraft Chinese style",
            "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
            "price": 60,
            "discountPercentage": 10.34,
            "rating": 4.44,
            "stock": 7,
            "brand": "luxury palace",
            "category": "home-decoration",
            "thumbnail": "https://i.dummyjson.com/data/products/29/thumbnail.webp",
            "images": [
                "https://i.dummyjson.com/data/products/29/1.jpg"

            ]
        },
        {
            "id": 31,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 9.9,
            "rating": 4.09,
            "stock": 6,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/3/1.jpg"
            ]
        },

        {
            "id": 32,
            "title": "MacBook Pro",
            "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
            "price": 1749,
            "discountPercentage": 11.02,
            "rating": 4.57,
            "stock": 9,
            "brand": "Apple",
            "category": "laptops",
            "images": [
                "https://images.idgesg.net/images/article/2019/11/16in-macbook-pro-angle-100818635-large.jpg"

            ]
        },
        {
            "id": 33,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "discountPercentage": 11.02,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "stock": 13,
            "brand": "Skybags",
            "category": "men's clothing",
            "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
            "images": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": 4.09

        },
        {
            "id": 34,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "discountPercentage": 12,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category": "men's clothing",
            "stock": 10,
            "brand": "Arrow",
            "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
            "images": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "rating": 4.78

        },
        {
            "id": 35,
            "title": "Mens Cotton Jacket",
            "price": 55.99,
            "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            "category": "men's clothing",
            "stock": 4,
            "discountPercentage": 13,
            "brand": "Peter England",
            "images": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            "rating": 4.07

        },

        {
            "id": 36,
            "title": "Key Holder",
            "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
            "price": 30,
            "discountPercentage": 9.1,
            "rating": 4.92,
            "stock": 14,
            "brand": "Golden",
            "category": "home-decoration",
            "thumbnail": "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/30/1.jpg",

            ]
        }
    ]
    return (
        <>
            <div className="grid grid-cols-1  md:grid-cols-4 gap-3 container mx-auto px-4">
                {products.map((product, index) => (
                    <div key={product.id} className="flex cursor-pointer items-center flex-col border shadow-2xl shadow-slate-400 justify-between hover:shadow-sm w-fit md:shadow-2xl md:shadow-slate-400 rounded-xl">

                        <ProductKart images={product.images}
                            title={product.title} stock={product.stock} category={product.category} price={product.price} rating={product.rating} description={product.description} brand={product.brand} discountPercentage={product.discountPercentage} />
                    </div>
                ))}
            </div>
        </>
    );
}
export default App;