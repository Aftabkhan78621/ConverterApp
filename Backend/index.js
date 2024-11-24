const express = require('express')
const multer  = require('multer')
const docxToPDF  = require('docx-pdf')
const path = require('path')
const cors = require('cors')


const app = express()
const port = 3000
app.use(cors())





// file storage setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads")
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname )
    }
  })

  const upload  = multer({storage:storage})
  app.post('/convertFile', upload.single('file'),(req, res, next)=> {
      try{
            if(!req.file){
                return res.status(400).json({
                    Message:"No file Uploaded."
                })           
             }
             // Defining output file pat
            
             const outputpath = path.join(__dirname,"files",`${req.file.originalname}.pdf`)
        docxToPDF(req.file.path ,outputpath,   (err,result)=>{
        if(err){
        console.log(err);
        return res.status(500).json({
            Message:"Error in converting docx to pdf"
        })
        }
        res.download(outputpath,()=>{
            console.log("File downloaded successfully");
        })
        console.log('result'+result);
  });
      }
      catch(error){
        console.log(error)
        res.status(500).json({
            Message:"Internal Server Error"
        })
      }
  })
  
    







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
