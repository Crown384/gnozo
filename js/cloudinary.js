// const cloudinary = require("cloudinary");

// cloudinary.config({ 
//     cloud_name: 'djsofkqxq', 
//     api_key: '228657222395921', 
//     api_secret: "EYje1Lw_BKlq-eHy45cS1RNgkwk" 
//   });


// //   cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
// //     { public_id: "olympic_flag" }, 
// //     function(error, result) {console.log(result); });

// const uploadFile = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     const fileToUpload = reader.readAsDataURL(file);
//     console.log(fileToUpload)
    
// }

// class Upload {
//     constructor()
// }


// import {v2 as cloudinary} from 'cloudinary'
//     const cloudinary = new Cloudinary()
//     cloudinary.config({ 
//     cloud_name: 'djsofkqxq', 
//     api_key: '228657222395921', 
//     api_secret: "EYje1Lw_BKlq-eHy45cS1RNgkwk" 
//   });

//     const uploadFile = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     // console.log(file)
//     const fileToUpload = reader.readAsDataURL(file);
//     reader.onloadend = () => {
//         // console.log(reader.result)
//         cloudinary.uploader.upload(reader.result,
//   { public_id: file.name }, 
//   function(error, result) {console.log(result); });
//     }