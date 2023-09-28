const uploader = document.getElementById('fileUpload')
uploader.addEventListener('change', function () {
    if (!uploader.files[0].type.startsWith('image/')) {
        alert("Please choose image")
        uploader.value = null
    }
})
