const uploader = document.getElementById('fileUpload')
const fileName = document.getElementById('fileName')
uploader.addEventListener('change', function changeFile (e) {
    fileName.innerHTML = e.target.files[0].name
})
