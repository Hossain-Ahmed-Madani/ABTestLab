async function fetchAndParseURLApi(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            const html = await response.text();
            const dom = new DOMParser().parseFromString(html, "text/html");
            return dom;
        } catch (error) {
            console.error("Analysis failed:", error);
            return null;
        }
    }


async function getProductDataFromDom(dom) {
    try {
        if (!dom) {
            console.warn("No DOM provided to getProductDataFromDom");
            return null;
        }

        // Extract product ID
        const productIdInput = dom.querySelector('input[name="product"]');
        const productId = productIdInput ? productIdInput.value : "";

        // Extract product name
        const nameElement = dom.querySelector('span[data-ui-id="page-title-wrapper"]');
        const name = nameElement ? nameElement.textContent.trim() : "";

        // Extract SKU
        const skuElement = dom.querySelector('span[itemprop="sku"]');
        const sku = skuElement ? skuElement.textContent.trim() : "";

        // Extract image
        const imageElement = dom.querySelector('#gallery-zoom-wrapper img:first-child');
        const image = imageElement ? imageElement.getAttribute('src') : "";

        // Extract price
        const priceElement = dom.querySelector('span.price .price');
        const price = priceElement ? priceElement.textContent.trim() : "";

        // Get current URL
        const url = window.location.href;

        if (!productId) {
            console.warn("No product ID found in DOM");
            return null;
        }

        const productData = {
            id: productId,
            name: name,
            url: url,
            sku: sku,
            image: image,
            price: price,
        };

        console.log("Extracted product data:", productData);
        return productData;

    } catch (error) {
        console.error("Error extracting product data from DOM:", error);
        return null;
    }
}

// Function to process multiple URLs and return array of products
async function getProductsFromUrls(urls) {
    const products = [];

    for (const url of urls) {
        try {
            console.log(`Processing URL: ${url}`);
            
            const dom = await fetchAndParseURLApi(url);
            if (!dom) continue;

            const productData = await getProductDataFromDom(dom);
            if (productData) {
                products.push(productData);
            }

            // Add delay between requests to avoid overwhelming the server
            await new Promise(resolve => setTimeout(resolve, 500));
            
        } catch (error) {
            console.error(`Failed to process URL ${url}:`, error);
        }
    }

    return products;
}

// Get Most Purchased Products
const urls = [
    'https://www.hookandloop.com/brands/duragrip/sew-on',
    'https://www.hookandloop.com/brands/velcro/sew-on', 
    'https://www.hookandloop.com/brands/duragrip/peel-and-stick',
    'https://www.hookandloop.com/brands/velcro/peel-and-stick',
    'https://www.hookandloop.com/brands/duragrip/coins',
    'https://www.hookandloop.com/brands/velcro/coins',
    'https://www.hookandloop.com/brands/duragrip/straps',
    'https://www.hookandloop.com/brands/velcro/straps',
    'https://www.hookandloop.com/brands/duragrip/wide-loop/duragrip-brand-wide-loop',
    'https://www.hookandloop.com/brands/velcro/wide-loop',
    'https://www.hookandloop.com/brands/duragrip/webbing',
    'https://www.hookandloop.com/brands/velcro/double-sided-cable-ties',
    'https://www.hookandloop.com/brands/duragrip/ring',
    'https://www.hookandloop.com/brands/velcro/cable-ties',
    'https://www.hookandloop.com/brands/duragrip/specialtyn',
    'https://www.hookandloop.com/brands/velcro/sew-on/1-velcro-brand-sew-on-hook-black',
];

const data = await getProductsFromUrls(urls);
console.log("Final products array:", data);