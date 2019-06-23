+function () {
  $(document).on('click', '.navbar-collapse a', function () {
    $('.navbar-collapse').collapse('hide')
  })

  $(document).on('submit', '[data-toggle="validation"]', function (event) {
    var form = event.currentTarget

    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    $(form).addClass('was-validated')
  })
}()
