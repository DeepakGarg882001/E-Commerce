const router = require("../rootRoutes");
const ProductCol = require("../../DB/collections/Product");

router.get("/product", async (request, response) => {
  try {
    const Products = await ProductCol.find();

    if (Products) {
      console.log("Successfully got all Product list");
      response.status(201).json({productList: Products,message: "Successfully Got all Products"});

    } else {
      console.log("Getting Products Process failed !");
      response.status(401).json({ error: "Getting Products Process failed !" });
    }
  } catch (error) {
    console.log(error);
    response.status(401).json({ error });
  }

});
