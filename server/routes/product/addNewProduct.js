const router = require("../rootRoutes");
const ProductCol = require("../../DB/collections/Product");
require("../../DB/dataBase");

router.post("/product/new", async (request, response) => {
  const gottedData = request.body;

  console.log(gottedData);

  try {
    const { name, price, description, stock, category, images } = request.body;

    if (!name || !price || !description || !stock || !category || !images) {
      return response.status(401).json({ error: "Please fill complete form" });

    } else {
      const product = await ProductCol.create(request.body);

      if (product) {
        console.log("Product added Successfully");
        response.status(201).json({ message: "Product added Successfully" });
        
      } else {
        console.log("Adding a New Product Process failed !");
        response.status(401).json({ error:"Adding a New Product Process failed !" });
      }
    }
  } catch (error) {
        console.log(error);
        response.status(401).json({ error });
  }
});
