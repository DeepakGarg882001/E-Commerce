const router = require("../rootRoutes");
const ProductCol = require("../../DB/collections/Product.js");

router.get("/product/:id" ,async (request, response)=>{
 
    const productID = request.params.id;
    
    try {
         
        if(!productID){
            return response.status(500).json({error:"Please Provide a Product id: "});
        }


        const checkProduct = await ProductCol.findById(productID);

        if(checkProduct){
            response.status(201).json({message:"Got all the Details of Product",details:checkProduct});
        }else{
            response.status(401).json({error:"Could not Found Product !"});
        }
      

    } catch (error) {
        console.log(error);
        response.status(401).json({error});
    }
  

});