const uploader = document.getElementById('fileUpload')
const preview = document.getElementById('preview_box')
const reader = new FileReader();
uploader.addEventListener('change', function () {
    if (!uploader.files[0].type.startsWith('image/')) {
        alert("Please choose image")
        uploader.value = null
    } else {
        reader.onload = function (e) {
            preview.src = e.target.result;
        };
        console.log(uploader.files[0])
        reader.readAsDataURL(uploader.files[0]);
    }
})
