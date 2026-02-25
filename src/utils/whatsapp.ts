// whatsapp.ts

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

class WhatsAppMessageBuilder {
    private products: Product[];

    constructor(products: Product[]) {
        this.products = products;
    }

    public buildMessage(): string {
        let message = 'Check out our products:\n\n';

        this.products.forEach(product => {
            message += `*${product.name}* - $${product.price}\n`;
            message += `${product.description}\n`;
            message += `${product.imageUrl}\n\n`; // Assuming image URL directly links to the image
        });

        return message.trim();
    }
}

// Example usage
const products: Product[] = [
    {
        id: '1',
        name: 'Product 1',
        description: 'Description for product 1',
        price: 100,
        imageUrl: 'http://example.com/product1.jpg',
    },
    {
        id: '2',
        name: 'Product 2',
        description: 'Description for product 2',
        price: 200,
        imageUrl: 'http://example.com/product2.jpg',
    },
];

const messageBuilder = new WhatsAppMessageBuilder(products);
console.log(messageBuilder.buildMessage());