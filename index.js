// elements
const inputEl = document.getElementById("file-input");
const dropZoneEl = document.getElementById("drop-zone");

function handleFilesUpload(files) {
  const fileList = Array.from(files);
  const fileNameList = fileList.map((file) => file.name);
  console.log("The following files was uploaded: ", fileNameList);
}

// upload via the input
function handleInputChange(event) {
  handleFilesUpload(event.target.files);
}

if (inputEl !== null) {
  inputEl.addEventListener("change", handleInputChange);
}

// upload via the drag'n'drop
function handleDropZoneDrop(event) {
  event.preventDefault();
  handleFilesUpload(event.dataTransfer.files);
  dropZoneEl.classList.remove("upload-field_highlighted");
}

function handleDropZoneDragOver(event) {
  event.preventDefault();
  dropZoneEl.classList.add("upload-field_highlighted");
}

function handleDropZoneDragLeave() {
  dropZoneEl.classList.remove("upload-field_highlighted");
}

if (dropZoneEl !== null) {
  dropZoneEl.addEventListener("drop", handleDropZoneDrop);
  dropZoneEl.addEventListener("dragover", handleDropZoneDragOver);
  dropZoneEl.addEventListener("dragleave", handleDropZoneDragLeave);
}
