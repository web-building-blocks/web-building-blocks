const uploader = document.getElementById('fileUpload')
uploader.addEventListener('change', function () {
    const fileNum = 2
    if (uploader.files.length != fileNum) {
        alert(`You can only upload ${fileNum} files`)
        uploader.value = null
    }
})
