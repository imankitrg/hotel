const MenuItem = require('../models/menu');

// post method for create menuitem

const createmenu = async (req, res) => {
  try {
    let result;

    if (Array.isArray(req.body)) {
      // multiple items
      result = await MenuItem.insertMany(req.body);
    } else {
      // single item
      result = await MenuItem.create(req.body);
    }

    res.json({
      success: true,
      data: result
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

const getmenu =async (req,res) =>{

    try{
        const menu = await MenuItem.find();
        res.status(200).json(menu);
        console.log("menu item feched");
        // console.log(menu);


    }catch(err){
        console.log(err);
        res.status(500).json({msg:"internal server error"});

    }
};

// get menu by id 

const  getmenubyid = async (req,res) =>{
    try{

        const menuid = req.params.id;
        const menu = await MenuItem.findById(menuid);

        if(!menu){
            return res.status(404).json({msg:"menu item not found"});
        }

        res.status(200).json(menu)
        console.log("get menu by id is feched");


    }catch(err){
        console.log(err);
        res.status(500).json({msg:"internal server error "});

    }
};

// update menu 

const updatemenu = async (req,res) =>{
    try{
        
        const menuid = req.params.id;
        const updatemenu = req.body;

        const updatedmenu= await MenuItem.findByIdAndUpdate(menuid,updatemenu,{
            new:true,
            validators:true
    });

            if (!updatedmenu){
                return res.status(404).json({msg:"updated book not found "});

            }
            // res.send("menuitem updated succesfully");
            res.status(200).json(updatedmenu);
            
            
    


    }catch(err){
        console.log(err);
        res.status(500).json({msg:"internal server error"});

    }
};

// delete menuitem

const deletemenu = async (req,res) =>{
        try{

        const menuid = req.params.id;
        const deletedmenu = await MenuItem.findByIdAndDelete(menuid);

        if(!deletedmenu){
            return res.status(404).json({msg:"menu id not found"});
        }

        res.status(200).json({msg:"menu deleted succesfully"});

        }catch(err){
        console.log(err);
        res.status(500).json({msg:"internal server error "});

        }
};
module.exports={createmenu,
                getmenu,
                getmenubyid,
                updatemenu,
                deletemenu};