// let imageFile =Event.target.files[0];
// let reader = new FileReader();
// reader.readAsDataURL(imageFile);
// reader.addEventListener('load', () => {
//     if (reader.result) {
//         // Convert data URL to base64 string
//         const imageData = reader.result.split(',')[1];

//         // Modify the code as needed
//         // For example, if you want to add a prefix to the base64 string
//         const modifiedImageData = 'prefix_' + imageData;

//         setProduct({
//             ...product,
//             image: modifiedImageData
//         });
//     } else {
//         alert('Error occurred');
//     }
// });
let imageFile =Event.target.files[0];
let reader = new FileReader();
reader.readAsDataURL(imageFile);
reader.addEventListener('load', () => {
    if (reader.result) {
        // Convert data URL to base64 string
        const imageData = reader.result.split(',')[1];

        // Modify the code as needed
        // For example, if you want to add a prefix to the base64 string
        const modifiedImageData = 'prefix_' + imageData;

        setProduct({
            ...product,
            image: modifiedImageData
        });
    } else {
        alert('Error occurred');
    }
});

      