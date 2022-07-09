const router = require("../rootRoutes");
const ProductCol = require("../../DB/collections/Product");

router.delete('/product/:id', async (request, response)=>{
  
    const productID = request.params.id;

    try {
        
        if(!productID){
            return response.status(500).json({error:"Please Provide a Product id: "});
    
        }else{
             
            const checkProduct = await ProductCol.findById(productID);

            if(checkProduct){
                const remove = await checkProduct.remove();
                 
                if(remove){
                    response.status(201).json({message:"Product Deleted Successfully "});

                }else{
                    response.status(401).json({error:"Deleting Product Process failed !"});
                }

            }else{
               return response.status(500).json({error:"Could not find Product !"});

            }
            
        }
            
    } catch (error) {
        response.status(401).json({error});
    }

   
});
