const router = require("../rootRoutes");
const ProductCol= require("../../DB/collections/Product");

router.put('/product/:id',async (request,response)=>{
   
    console.log( request.params.id);
    
    try {
        
        const productID = request.params.id;
        if(!productID){
            return response.status(500).json({error:"Please Provide Product id: "});
        }
        
        const checkProduct = await ProductCol.findById(productID);
        if(!checkProduct){
            return response.status(500).json({error:"Could not find Product !"});

        }
      
        const product = await ProductCol.findByIdAndUpdate(productID, request.body);

        if(product){
            response.status(201).json({message:"Successfully Updated "});

        }else{
            response.status(401).json({error:"Updating Product Process failed !"});
        }

    } catch (error) {
        console.log(error);
        response.status(401).json({error});
    }

    

});
