const multer = require('multer');

const storage = path =>
  multer.diskStorage({
    destination: './uploads/' + path,
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });



const upload = path =>
    multer({
        storage: storage(path),

        fileFilter: (req, file, cb) => {
 
            // if (file.fieldname === 'image') {
           // if (!file.originalname.toLowerCase().match(/\.(jpg|jpeg|png|gif)$/)) {
                   // return cb(new Error('You can upload only image files!'));
                 //   return cb(new Error('You can upload only image files:'+file));
              //  }
              //  else {
                    cb(null, true);
               // }
            //}
          // if (file.fieldname === 'video') {
         /**
          * if (!file.originalname.toLowerCase().match(/\.(mp4|mp3)$/)) {
                    return cb(new Error('You can upload only video files!'));
                }
                else {
                    cb(null, true);
                } 
                **/
         }
       // },
    });

//fileFilter: Function to control which files are accepted
const upload1 = path =>
  multer({
    storage: storage(path),
    
      fileFilter: (req, file, cb) => {


          return cb(new Error('You can upload only image fileswwwww: %o' + file));
      if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
      ) {
        cb(null, true);
      } else if(file.mimetype === 'video/mp4'){
        cb(null, true);
      }
      else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
    },
  });

module.exports = upload;
