const Person =require('../models/person');

const updateProfile = async (req, res) => {
    try {
    // ✅ Allowed fields only
    const allowedFields = ["name", "age", "mobile", "address","salary","username","role"];
    
    // Filter request body
    const updates = {};
    allowedFields.forEach(field => {

        if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
        }
    });

    const updatedUser = await Person.findByIdAndUpdate(
        req.user.id,
        updates,
        { new: true, runValidators: true }
    ).select("-password");

    res.json({
        message: "Profile updated successfully",
        user: updatedUser 
    });
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: " nahi ho raha " });
    }
};



module.exports={updateProfile};

// // post req
// const createperson = async (req,res) => {

//     try{

//         const CREATEUSER = new Person(req.body);
//         const SAVEUSER = await CREATEUSER.save();
//         res.status(201).json(SAVEUSER);
//         console.log("user created ")

//     }catch(err){
//         console.log(err)
//         res.status(500).json({msg:"internal server error"})

//     }
// };

// // get req

// const getperson = async (req,res) => {

//     try {

//     const getusers = await Person.find();
//     res.status(200).json(getusers);
//     console.log("person feched ");
//     }catch(err){
//         res.status(500).json({msg:"person not found"})
//     }

// };

// // get request by id

// const getpersonbyid =async (req,res) => {
    
//     try{
//         const userid = req.params.id;
//         const user = await Person.findById(userid);

//         if (!user){
//             return res.status(404).json({msg:"person not found "});
//         }
//             res.status(200).json(user);
//             console.log("get person by id done");
        

//     }catch(err){
//         res.status(500).json({msg:"internal server error"});

//     }
// };

// const updateperson= async (req,res) => {

//     try{

//         const userid =req.params.id;
//         const updatedperson =req.body;

//         const updatedpersonbyclient = await Person.findByIdAndUpdate(userid,updatedperson,{
//             new:true,         // updated document return karega 
//             runvalidators:true // jo apni schema hoga usse apply karega 
//         });

//         if (!updatedpersonbyclient){
//             return res.status(404).json({msg:"not found"});
//         }

//         res.status(200).json(updatedpersonbyclient);
//         console.log("person updated successfully");

//     }catch(err){
//         console.log(err)
//         res.status(500).json({msg:"internal server error"})
//     }


// };

// // delete person by id 

// const deleteperson = async (req,res)  =>{
//         try{ 

//         const userid = req.params.id;
//         const deletepersonbyid = await Person.findByIdAndDelete(userid);

//         if (!deletepersonbyid){
//             return res.status(404).json({msg:" person id not found "});
//         }

//         res.status(200).json({msg:"person deleted successfully"},deletepersonbyid);
//         console.log("person delete ho gaya ");

//         }catch(err){
//         console.log(err)
//         res.status(500).json({msg:"internal server error "})
        

//     }
// };

// module.exports=
//                 {createperson,
//                 getperson,
//                 getpersonbyid,
//                 updateperson,
//                 deleteperson};