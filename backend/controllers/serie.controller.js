const Serie = require('../models/serie.model');


const serieCtrl = {};

serieCtrl.addSerie = async (req,res)=>{
    const mySerie = new Serie(req.body);
    await mySerie.save()
        .then(()=>{
            res.json({message : 'Serie Successfully Inserted'})
        })
        .catch(err=>res.send(err.message));
}
serieCtrl.getSeries = async (req,res)=>{
    const series= await Serie.find()
        .then((data)=>res.json(data))
        .catch((err)=> console.log(err))
}
serieCtrl.deleteSerie = async (req, res) => {
    await Serie.findByIdAndDelete(req.params.id)
        .then((data) => {
            if (data != null) res.json({status: 'Serie eliminada correctamente'})
            else res.json({status: 'La serie no existe'})
        })
        .catch(err => res.send(err.message));
}



serieCtrl.getSerieTitle= async (req,res)=>{
    const series = await Serie.find({title:req.params.title})
        .then((data)=>{
            if (data!=null) res.json(data)
            else res.json({message:"Serie Doesn't Exist"})
        })
        .catch(err=>console.log(err))
}
serieCtrl.getSerie = async (req, res) => {
    const series = await Serie.findById(req.params.id)
        .then((data) =>  {
            if (data != null) res.json(data)
            else res.json({status: 'La serie no existe'})
        })
        .catch((err) => console.log(err));
}

serieCtrl.updateSerie = async (req, res) => {
    const series = req.body;
    await Serie.findByIdAndUpdate(
        req.params.id,
        {$set: series},
        {new: true})
        .then((data) =>
        {
            if(data!= null) res.json({status: 'serie actualizada'})
            else res.json({status: 'La serie no existe'})
        })
        .catch((err) => res.send(err.message));
}

module.exports = serieCtrl;
