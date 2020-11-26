// JavaScript source code


//form 138 
function readURL138(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('.file-upload-wrap138').hide();
      $('.file-upload-content138').show();
      $('#tor-title').val(input.files[0].name);
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    removeUpload138();
  }
  off();
}

//good moral character
function readURLGMoral(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('.file-upload-wrapGM').hide();
      $('.file-upload-contentGM').show();
      $('#gm-title').val(input.files[0].name);
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    removeUploadGM();
  }
  off();
}




//remove upload form 138
function removeUpload138() {
  $('.file-upload-input138').replaceWith($('.file-upload-input138').clone());
  $('.file-upload-input138').val(''); //reset upload file
  $('.file-upload-content138').hide();
  $('.file-upload-wrap138').show();
}

//Rremove upload good moral character
function removeUploadGM() {
  $('.file-upload-inputGM').replaceWith($('.file-upload-inputGM').clone());
  $('.file-upload-inputGM').val(''); //reset upload file
  $('.file-upload-contentGM').hide();
  $('.file-upload-wrapGM').show();
}

// drag & drop 138
$('.file-upload-wrap138').bind('dragover', function () {

  $('.file-upload-wrap138').addClass('image-dropping');
  on();
});

$('.file-upload-wrap138').bind('dragleave', function () {
  $('.file-upload-wrap138').removeClass('image-dropping');
  off();
});

// drag & drop Good Moral Character
$('.file-upload-wrapGM').bind('dragover', function () {

  $('.file-upload-wrapGM').addClass('image-dropping');
  on();
});

$('.file-upload-wrapGM').bind('dragleave', function () {
  $('.file-upload-wrapGM').removeClass('image-dropping');
  off();
});







//overlay on & off
function on() {
  document.getElementById("overlay").style.display = "block";

}

function off() {
  document.getElementById("overlay").style.display = "none";
}


//disable opening external file from the dropdown 
window.addEventListener("dragover", function (e) {
  e = e || event;
  console.log(e);
  if (e.target.tagName != "INPUT") { // check which element is our target
    e.preventDefault();
  }
}, false);
window.addEventListener("drop", function (e) {
  e = e || event;
  console.log(e);
  if (e.target.tagName != "INPUT") {  // check which element is our target
    e.preventDefault();
  }
}, false);