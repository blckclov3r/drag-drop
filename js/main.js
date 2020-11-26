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
  } 
  // else {
  //   removeUpload138();
  // }
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
  }
  //  else {
  //   removeUploadGM();
  // }
}

//good moral character
function readURLPSA(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('.file-upload-wrapPSA').hide();
      $('.file-upload-contentPSA').show();
      $('#psa-title').val(input.files[0].name);
    };
    reader.readAsDataURL(input.files[0]);
  } 
  // else {
  //   removeUploadPSA();
  // }
}


// NCAE Results
function readURLNCAE(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('.file-upload-wrapNCAE').hide();
      $('.file-upload-contentNCAE').show();
      $('#ncae-title').val(input.files[0].name);
    };
    reader.readAsDataURL(input.files[0]);
  } 
  // else {
  //   removeUploadNCAE();
  // }
}

//remove upload form 138
function removeUpload138() {
  $('.file-upload-input138').replaceWith($('.file-upload-input138').clone());
  $('.file-upload-input138').val(''); //reset upload file
  $('.file-upload-content138').hide();
  $('.file-upload-wrap138').show();
}

//Remove upload good moral character
function removeUploadGM() {
  $('.file-upload-inputGM').replaceWith($('.file-upload-inputGM').clone());
  $('.file-upload-inputGM').val(''); //reset upload file
  $('.file-upload-contentGM').hide();
  $('.file-upload-wrapGM').show();
}

//Remove upload PSA
function removeUploadPSA() {
  $('.file-upload-inputPSA').replaceWith($('.file-upload-inputPSA').clone());
  $('.file-upload-inputPSA').val(''); //reset upload file
  $('.file-upload-contentPSA').hide();
  $('.file-upload-wrapPSA').show();
}

//Remove upload NCAE
function removeUploadNCAE() {
  $('.file-upload-inputNCAE').replaceWith($('.file-upload-inputNCAE').clone());
  $('.file-upload-inputNCAE').val(''); //reset upload file
  $('.file-upload-contentNCAE').hide();
  $('.file-upload-wrapNCAE').show();
}

// drag & drop 138
$('.file-upload-wrap138').bind('dragover', function () {

  $('.file-upload-wrap138').addClass('image-dropping');
});

$('.file-upload-wrap138').bind('dragleave', function () {
  $('.file-upload-wrap138').removeClass('image-dropping');
});

// drag & drop Good Moral Character
$('.file-upload-wrapGM').bind('dragover', function () {

  $('.file-upload-wrapGM').addClass('image-dropping');
});

$('.file-upload-wrapGM').bind('dragleave', function () {
  $('.file-upload-wrapGM').removeClass('image-dropping');
});


// drag & drop PSA
$('.file-upload-wrapPSA').bind('dragover', function () {

  $('.file-upload-wrapPSA').addClass('image-dropping');
});

$('.file-upload-wrapPSA').bind('dragleave', function () {
  $('.file-upload-wrapPSA').removeClass('image-dropping');
});


// drag & drop NCAE
$('.file-upload-wrapNCAE').bind('dragover', function () {

  $('.file-upload-wrapNCAE').addClass('image-dropping');
});

$('.file-upload-wrapNCAE').bind('dragleave', function () {
  $('.file-upload-wrapNCAE').removeClass('image-dropping');
});


//disable opening external file from the dropdown 
window.addEventListener("dragover", function (e) {
  e = e || event;
  // console.log(e);
  if (e.target.tagName != "INPUT") { // check which element is our target
    e.preventDefault();
  }
}, false);
window.addEventListener("drop", function (e) {
  e = e || event;
  // console.log(e);
  if (e.target.tagName != "INPUT") {  // check which element is our target
    e.preventDefault();
  }
}, false);