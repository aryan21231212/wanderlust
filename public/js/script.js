(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()




  let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: coordinates[1], lng: coordinates[0] },
    zoom: 8,
    mapTypeId: "terrain"
  });

 const marker =  new google.maps.Marker({
    position: { lat: coordinates[1], lng: coordinates[0] },
    map: map,
    label: 'A',
    draggable:false,
    animation: google.maps.Animation.DROP
  });

  const infoWindow = new google.maps.InfoWindow({
    content:"<p>Exact loaction provided after booking.</p>"
  });

  infoWindow.open(map,marker)
}

initMap();