// --- DATOS DE PRODUCTOS SIMULADOS ---
const mockProducts = [

    /* 1 */
    { title: "Perfume Bulgari Plus+*", newPrice: "$29.99", oldPrice: "$59.99", badge: "50% OFF", salesInfo: "Envío Gratis | 1.2K vendidos", imageUrl: "./img/perfume1.png" },
    
    /* 2 */
    { title: "Perfume", newPrice: "$75.00", oldPrice: "", badge: "Nuevo", salesInfo: "150+ pedidos", imageUrl: "./img/perfume2.png" },
    
    /* 3 */
    { title: "Perfume (Varios Olores)", newPrice: "$12.99", oldPrice: "$25.99", badge: "Oferta Flash", salesInfo: "Más de 5K comprados", imageUrl: "./img/perfume3.png", href: "./perfume1.png" },
    
    /* 4 */
    { title: "(PACK-50 Item) Pera", newPrice: "$18.50", oldPrice: "$37.00", badge: "-50%", salesInfo: "Stock Limitado", imageUrl: "./img/pera.png", href: "./perfume1.png" },
    
    /* 5 */
    { title: "Set de 30 Bananas", newPrice: "$9.90", oldPrice: "$19.80", badge: "2x1", salesInfo: "3.2K comentarios", imageUrl: "./img/banana.png" },
    
    /* 6 */
    { title: "Limón (Pack-50 Item)", newPrice: "$15.99", oldPrice: "$24.99", badge: "Más Vendido", salesInfo: "Envío Rápido", imageUrl: "./img/lemon.png", href: "./perfume1.png" },
    
    /* 7 */
  { title: "Cosina (Moderna)", newPrice: "33.15", oldPricr: "63.00", badge: "Oferta Flash", salesInfo: "Más de 3.2K comprados", imageUrl: "./img/cosina.png" },
  
    /* 8 */
    { title: "Cosina-(Horno)", newPrice: "$100", oldPrice: "$200", badge: "50% OFF", salesInfo: "Envío Gratis | 1.2K vendidos", imageUrl: "./img/cosinahorno.png" },
    
    /* 9 */
    { title: "Sarten (2▪︎Item)", newPrice: "$75.00", oldPrice: "", badge: "Nuevo", salesInfo: "670+ pedidos", imageUrl: "./img/sarten2.png", href: "./sarten2.png" },
    
    /* 10 */
    { title: "Sarten (Premiun)", newPrice: "$7.99", oldPrice: "$15.99", badge: "Oferta Flash", salesInfo: "Más de 5K comprados", imageUrl: "./img/sarten.png", href: "./perfume1.png" },
    
    /* 11 */
    { title: "Ducha ▪︎Electrica▪︎", newPrice: "$25.50", oldPrice: "$37.00", badge: "-13%", salesInfo: "Stock Limitado", imageUrl: "./img/ducha.png", href: "./perfume1.png" },
    
    /* 12 */
    { title: "Calentador", newPrice: "$239.90", oldPrice: "$300", badge: "2x1", salesInfo: "3.2K comentarios", imageUrl: "./img/calentador.png" },
    
    /* 13 */
    { title: "Alfombra (Roja)", newPrice: "$15.99", oldPrice: "$24.99", badge: "Más Vendido", salesInfo: "Envío Rápido", imageUrl: "./img/alfombra_roja.png", href: "./perfume1.png" },

    /* 14 */
  { title: "Espejo", newPrice: "33.15", oldPricr: "50.00", badge: "Oferta Flash", salesInfo: "Más de 3.2K comprados", imageUrl: "./img/espejo.png" }
  
    /* 15 */
  
];

const gallery = document.getElementById('productGallery');
const template = document.getElementById('productCardTemplate');
const loadingIndicator = document.getElementById('loadingIndicator');

let page = 0;
const productsPerPage = 14;
let isLoading = false;

// --- FUNCIÓN PARA CREAR UNA TARJETA ---
function createProductCard(product) {
    // Clonamos el contenido de la plantilla oculta
    const cardClone = document.importNode(template.content, true);
    const card = cardClone.querySelector('.product-card');

    // Rellenamos los datos dinámicamente
    card.querySelector('.data-image').src = product.imageUrl;
    card.querySelector('.data-image').alt = product.title;
    card.querySelector('.data-badge').textContent = product.badge;
    card.querySelector('.data-price-new').textContent = product.newPrice;
    
    
    const priceOldElement = card.querySelector('.data-price-old');
    if (product.oldPrice) {
        priceOldElement.textContent = product.oldPrice;
        priceOldElement.style.display = 'inline-block';
    } else {
        priceOldElement.style.display = 'none'; // Ocultar si no hay precio anterior
    }

    card.querySelector('.data-title').textContent = product.title;
    card.querySelector('.data-sales-info').textContent = product.salesInfo;

    return card;
}

// --- FUNCIÓN PARA CARGAR PRODUCTOS ---
function loadMoreProducts() {
    if (isLoading) return;
    isLoading = true;
    loadingIndicator.style.display = 'block';

    // Simulación de una llamada a la API con un retraso de 1 segundo
    setTimeout(() => {
        const startIndex = page * productsPerPage;
        // Simplemente duplicamos los datos mock para simular "nuevos" resultados
        const productsToLoad = mockProducts; 

        if (productsToLoad.length > 0) {
            productsToLoad.forEach(product => {
                const newCard = createProductCard(product);
                gallery.appendChild(newCard);
            });
            page++;
        } else {
            // No hay más productos (en un caso real, la API devolvería un array vacío)
            loadingIndicator.textContent = "¡Has llegado al final de la galería!";
            window.removeEventListener('scroll', handleScroll);
        }

        loadingIndicator.style.display = 'none';
        isLoading = false;
    }, 1000); // Retraso de 1 segundo para simular la carga
}

// --- FUNCIÓN DE CARGA INFINITA (SCROLL) ---
function handleScroll() {
    // Detecta si el usuario está cerca del final de la página (a menos de 300px del fondo)
    const isNearBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 300);

    if (isNearBottom && !isLoading) {
        loadMoreProducts();
    }
}

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    // Carga los primeros productos al iniciar
    loadMoreProducts();
   
    // Añadir el listener para la carga infinita
    //window.addEventListener('scroll', handleScroll);
});


/* Menu */
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})