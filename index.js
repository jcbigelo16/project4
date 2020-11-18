let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.8283, lng: 98.5795 },
    zoom: 6,
  });
}

// Initialize and add the map
      function initMap() {
        // The location of Uluru
        const joshua = { lat: 33.881866, lng: -115.900650 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: joshua,
        });

      /*LIST VIEW MODAL WINDOWS*/
        /*global window*/
        (function iife() {
            "use strict";
            function closestEl(el, selector) {
                var doc = el.document || el.ownerDocument;
                var matches = doc.querySelectorAll(selector);
                var i;
                while (el) {
                    i = matches.length - 1;
                    while (i >= 0) {
                        if (matches.item(i) === el) {
                            return el;
                        }
                        i -= 1;
                    }
                    el = el.parentElement;
                }
                return el;
            }
            var modalBtns = document.querySelectorAll(".button");
            modalBtns.forEach(function addBtnClickEvent(btn) {
                btn.onclick = function showModal() {
                    var modal = btn.getAttribute("data-modal");
                    document.getElementById(modal).style.display = "block";
                };
            });

            var closeBtns = document.querySelectorAll(".close");
            closeBtns.forEach(function addCloseClickEvent(btn) {
                btn.onclick = function closeModal() {
                    var modal = closestEl(btn, ".modal");
                    modal.style.display = "none";
                };
            });

            window.onclick = function closeOnClick(event) {
                if (event.target.className === "modal") {
                    event.target.style.display = "none";
                }
            };
        }());

  // Array of markers
  var markers = [
    {
      coords:{lat: 33.881866, lng: -115.900650},
      content: '<h1>Joshua Tree National Park</h1> <p>Joshua Tree National Park is a small natural preserve situated in the southernmost part of California, USA. The park can be found about 4 miles east of Palm Springs and it is a part of the park system of the area. The total area of the park is close to 800,000 acres, with over a half of the area taken by deserted plantless area. Green parts of the park are beautiful and green year round, and they are very popular with the tourists who love all kinds of outdoor activities like hiking, rock climbing, camping, bird watching, observing skies, etc. Flora and especially the fauna of the park is unique, with the species like the local tree frogs, the roadrunners, green darners, etc.</p>'
    },
    {
      coords:{lat: 44.338974, lng: -68.273430},
      content: '<h1>Acadia National Park</h1> <p>Acadia National Park is a large national park situated in southern coastal part of Maine state in the USA. The area includes mountainous parts, woodlands, and ocean shores. The number of wildlife species is not too large, but it is possible to observe some interesting examples of marine life species. Flora of the national park is more diverse, and there are plenty of interesting examples of plants can be found in the area.</p>'
    },
    {
      coords:{lat: 38.733082, lng: -109.592514},
      content: '<h1>Arches National Park</h1> <p>Covering almost 2000 acres, Arches National Park is a natural preserve located in eastern Utah, USA, located near the Colorado river on the Colorado plateau. The park is very famous with its landmarks like rocky formations (The Delicate Arc, The Landscape Arch, The Three Gossips, The Organ, Dark Angel, the Babylon Tower, and others), the signs of ancient civilizations Ute, Paiute, Fermont, etc. The park is very popular as it offers a great number of various outdoor activities like hiking, mount climbing, camping, bungee jumping, biking, auto touring, slacklining, and many more.</p>'
    },
    {
      coords:{lat: 35.593670, lng: -83.824997},
      content: '<h1>Great Smoky Mountains National Park</h1> <p>Located right on the border between Tennessee and North Carolina, Great Smoky Mountains National Park is a large preserve located high in the Great Smoky Mountains. It is in the list of UNISCO World Heritage, it is named among the most visited national parks of the country. Tourists come to the park for sightseeing, hiking, fishing, horseback riding, taking part in numerous events and recreation programs. There are some historic parts in the park, which include old shelters, some old buildings and constructions which also are the points of interest for some tourists.</p>'
    },
    {
      coords:{lat: 40.453739, lng: -80.400864},
      content: '<h1>Hillman State Park</h1> <p>Hillman State Park is a large national park located in Burgettstown near Pittsburgh, PA, USA. It is a 3,600-acre park opened in the middle of the 20th century and currently governed by the Pennsylvania Game Commission. It offers excellent facilities for hiking, mountain biking, horse riding, skiing, etc.</p>'
    },
    {
      coords:{lat: 37.865101, lng: -119.538330},
      content: '<h1>Yosemite National Park</h1> <p>Located on a wonderful setting in the highlands of the Sierra Nevada, Yosemite National Park is a part of the northern region of California that can be found in the south westernmost part of the United States of America. The total area of the park is exceeding 300 hectares, and the park was named after the common name of an old indigenous tribe living at the area. Very high rocky formations like Cathedral Peak, forests and small creeks, waterfalls like famous Vernal Fall or Bridalveil Fall, breathtaking fresh air, touchy voices of nature, limitless freedom for a human mind, are among the main features of the environment of the park.</p>'
    },
    {
      coords:{lat: 44.429764, lng: -110.584663},
      content: '<h1>Yellowstone National Park</h1> <p>Yellowstone National Park is a large national preserve located on the shores of Yellowstone Lake in northwestern Wyoming, as well as partially in Idaho and Wyoming. The total area of the park is close to 3,500 square miles, making it a really huge area covered with forests, mountain ranges and rocky formations, small lakes, rivers and creeks, etc. The area have very unstable geology, and such things as volcano eruptions and small earthquakes happen there quite often. The park is famous with its amazing fauna, with some unique mammals, reptiles and birds.</p>'
    },
    {
      coords:{lat: 25.286615, lng: -80.898651},
      content: '<h1>Everglades National Park</h1> <p>Known as one of the largest wilderness areas in the United States, Everglades National Park is situated in the southernmost part of Florida, about 55-60 miles southeast of Miami city. Some part of the protected area is covered with the tropical forest, but large parts of the park are dried out. Local fauna is diverse and unique, with some endangered species like West Indian manatee or American crocodile.</p>'
    },
    {
      coords:{lat: 34.765972, lng: -84.143517},
      content: '<h1>Chattahoochee National Forest</h1> <p>One of the greatest and the most visited national parks in Georgia, Chattahoochee National Forest is located in the northern part of the state, near Suches. It is a very large national park which actually comprises two natural forests. It is famous with beautiful waterfalls and numerous excellent hiking routes.</p>'
    },
    {
      coords:{lat: 37.230873, lng: -108.461838},
      content: '<h1>Mesa Verde National Park</h1> <p>Located at Ute Mountain Reservation near famous Four Corners, Mesa Verde National Park is a small national preserve, created by the initiative of Roosevelt. It covers the area close to 52.5 thousand acres and is a home to very well preserved archaeological and natural wonders of the state.</p>'
    },
    {
      coords:{lat: 32.590797, lng: -95.273666},
      content: '<h1>Little Sandy National Wildlife Refuge</h1> <p>Little Sandy National Wildlife Refuge is a famous national pakr located near the town of Lindale, Texas. Fresh air, amazing tall trees, fresh-water lakes, excellent facilities for hunting, boating, fishing, hiking, etc. are at the services for those who decide to spend a great day off in this natural park. Bring your children to this great park and youll have a truly unforgettable experience!</p>'
    },
    {
      coords:{lat: 21.363251, lng: -157.781265},
      content: '<h1>Honolulu Watershed Forest Preserve</h1> <p>Honolulu Watershed Forest Preserve is one of the most known national parks located right to the northeast of Honolulu, Hawaii. It is a part of highlands covered with the area of about 600 square miles of unique natural forest. The park is a must see place for everyone who came to Honolulu, especially for those who enjoy various outdoor activities. There are two large hiking trails and other options to enjoy the beauty of the nature.</p>'
    },
  ];

    // Loop through markers
    for(var i = 0;i < markers.length;i++){
      addMarker(markers[i]);
    }

  //add marker function
    function addMarker(props){
      var marker = new google.maps.Marker({
        position: props.coords,
        map:map,
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
      });

      // Check content
      if(props.content){
        var infoWindow = new google.maps.InfoWindow({
       content:props.content
       });

       marker.addListener('click', function(){
         infoWindow.open(map, marker)
      });
    }
  }
  }

  function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
