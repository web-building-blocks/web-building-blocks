const uploader = document.getElementById('fileUpload')
uploader.addEventListener('change', function () {
    console.log(uploader.files)
    alert(uploader.files[0].size)
    if (uploader.files[0].size>2000000) {
        alert("The file size exceeds 2MB")
        uploader.value = null
    }
})
