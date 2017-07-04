(function () {
  var input = document.getElementById('hit-me')

  input.addEventListener('change', function (e) {
    var val = e.target.value
    var color = ''
    var container = document.querySelector('.container')

    if (val.indexOf('color') === 0) {
      var valArray = val.trim().split(' ')
      color = valArray[valArray.length-1]
      console.log(color);
      container.style.background = color

    } else {
      container.style.background = 'black'
    }
  })
})()
