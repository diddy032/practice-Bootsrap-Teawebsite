$(document).ready(function () {
  //動態特效
  // var s = skrollr.init();

  //表單驗證 
  //Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    'use strict';
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  //數字
  var countnum1 = 1;

  $(".count1-minus").click(
    function () {
      countnum1 = countnum1 - 1
      $(".count1-num").text(countnum1);
      if (countnum1 < 1) {
        countnum1 = 1
        $(".count1-num").text(countnum1);
      }
    }
  );
  $(".count1-add").click(
    function () {
      countnum1 = countnum1 + 1
      $(".count1-num").text(countnum1);
    }
  );


  var countnum2 = 1;

  $(".count2-minus").click(
    function () {
      countnum2 = countnum2 - 1
      $(".count2-num").text(countnum2);
      if (countnum2 < 1) {
        countnum2 = 1
        $(".count2-num").text(countnum2);
      }
    }
  );
  $(".count2-add").click(
    function () {
      countnum2 = countnum2 + 1
      $(".count2-num").text(countnum2);
    }
  );

  var countnum3 = 1;

  $(".count3-minus").click(
    function () {
      countnum3 = countnum3 - 1
      $(".count3-num").text(countnum3);
      if (countnum3 <1) {
        countnum3 = 1
        $(".count3-num").text(countnum3);
      }
    }
  );
  $(".count3-add").click(
    function () {
      countnum3 = countnum3 + 1
      $(".count3-num").text(countnum3);
    }
  );

  //互動視窗
  $('#car-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })

});