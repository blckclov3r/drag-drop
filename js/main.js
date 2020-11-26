// JavaScript source code



   function readURL(input) {
        if (input.files && input.files[0]) {
      
          var reader = new FileReader();
      
          reader.onload = function(e) {
            $('.file-upload-wrap').hide();
            $('.file-upload-content').show();
            $('#file-title').val(input.files[0].name);
          };
      
          reader.readAsDataURL(input.files[0]);
        } else {
          removeUpload();
        }
        off();
      }
      
      function removeUpload() {
        $('.file-upload-input').replaceWith($('.file-upload-input').clone());
        $('.file-upload-input').val('');
        $('.file-upload-content').hide();
        $('.file-upload-wrap').show();
      }

      $('.file-upload-wrap').bind('dragover', function () {
         
              $('.file-upload-wrap').addClass('image-dropping');
              on();
       });

       $('.file-upload-wrap').bind('dragleave', function () {
              $('.file-upload-wrap').removeClass('image-dropping');
              off();
      });
      

    
      function on() {
        document.getElementById("overlay").style.display = "block";
        
      }
      
      function off() {
        document.getElementById("overlay").style.display = "none";
      }

 



  //disable opening external file from the dropdown 
   window.addEventListener("dragover",function(e){
    e = e || event;
    console.log(e);
    if (e.target.tagName != "INPUT") { // check which element is our target
      e.preventDefault();
    }
  },false);
  window.addEventListener("drop",function(e){
    e = e || event;
    console.log(e);
    if (e.target.tagName != "INPUT") {  // check which element is our target
      e.preventDefault();
    }  
  },false);