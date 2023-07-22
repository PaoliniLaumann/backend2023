const ProductManager = require('./ProductManager');

const manager = new ProductManager('productos.json');

const runTest = async () => {
  // Agregar un producto
  await manager.addProduct({
    title: 'Producto 3',
    description: 'Descripción del producto 3',
    price: 100,
    thumbnail: 'imagen2.jpg',
    code: 'ABC124',
    stock: 50
  });  

  // Obtener todos los productos
 /*  const allProducts = await manager.getProducts();
  console.log('Todos los productos:', allProducts);  */

  // Obtener un producto por ID
  /* const productId = 1;
  const productById = await manager.getProductById(productId);
  console.log(`Producto con ID ${productId}:`, productById);   */

  // Actualizar un producto
    /*  const updatedFields = {
    title: 'Producto Actualizado',
    price: 100,
    stock: 20
  };
  await manager.updateProduct(productId, updatedFields);    */

  // Obtener el producto actualizado por ID
   /* const updatedProduct = await manager.getProductById(productId);
  console.log(`Producto actualizado con ID ${productId}:`, updatedProduct); 
   */
  // Eliminar un producto
 /*  await manager.deleteProduct(1);  */

  // Obtener todos los productos después de eliminar
  /* const remainingProducts = await manager.getProducts();
  console.log('Productos restantes:', remainingProducts);  */
};

runTest();
