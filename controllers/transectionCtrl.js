const moment = require("moment/moment");
const transectionModel = require("../models/transectionModel");

const getAllTransection = async (req, res) => {
  try {
    const { frequency, selectedDate,type } = req.body;
    
    console.log(type,'ye1s')
    const transections = await transectionModel.find({
      ...(frequency !== "custom"
        ? { date: { $gt: moment().subtract(Number(frequency),'d').toDate() } }
        : {
            date: {
              $gte: selectedDate[0],
              $lte: selectedDate[1],
            },
          }),
      userid: req.body.userid,
      ...(type !=='all' && {type})
    });
    res.status(200).json(transections);
  } catch (error) {
    console.log("consoe in trasectionCtrl", error);
    res.status(500).json(error);
  }
};

const addTransection = async (req, res) => {
  try {
    const newTrasection = new transectionModel(req.body);
    await newTrasection.save();
    res.status(201).send("Transection Created");
  } catch (error) {
    console.log("consoe in trasectionCtrl", error);
    res.status(500).json(error);
  }
};

const editTransection = async(req,res)=>{
  try {
    await transectionModel.findOneAndUpdate({_id:req.body.transacationId},req.body.payload)
    res.status(200).send("Edit Successful")
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const deteleTransection = async (req,res)=>{
  try {
    await transectionModel.findOneAndDelete({
_id:req.body.transacationId
    })
    res.status(200).send("Transacrion Deleted")
    
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }

}    
module.exports = { getAllTransection, addTransection ,editTransection,deteleTransection};
