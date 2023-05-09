interface Product {
  name: string;
  description: string;
  price: number;
}

type ProductPreview = Pick<Product, 'name' | 'description'>;

const product: ProductPreview = {
  name: 'NoteBook',
  description: 'NoteBook Samsung',
};

console.log({ product });
