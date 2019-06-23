+function () {
  $(document).on('click', '.navbar-collapse a', function () {
    $('.navbar-collapse').collapse('hide')
  })

  $(document).on('submit', 'form.needs-validation', function (event) {
    var form = event.currentTarget

    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    $(form).addClass('was-validated')
  })
}()
