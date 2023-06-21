// window.onload = main;

async function convertAddressToCoordinates(latitude, longitude) {
  const response = fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAuSaw0hZS1qoSlNGeAn3UAG0yvG4xUx7g`
  )
    .then((r) => r.json())
    .then((response) => {
      const results = response.results;
      const location = results[0].geometry.location;
      if (results.length > 0) {
        const addressComponents = results[0].address_components;
        let regionName = "";
        let districtName = "";

        for (const component of addressComponents) {
          const componentTypes = component.types;
          if (componentTypes.includes("administrative_area_level_1")) {
            // Region/State name
            regionName = component.long_name;
          } else if (componentTypes.includes("administrative_area_level_2")) {
            // District/City name
            districtName = component.long_name;
          }
        }

        var userCity = {
          region: regionName,
          distrct: districtName,
        };
        alert(userCity);
        console.log(userCity);
      } else {
        console.log("No results found.");
      }
      console.log(results);
      const latitude = location.lat;
      const longitude = location.lng;
      // this.$store.state.registration.user.location = location;
      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);
      console.log(re);
    });

  // this.$router.push({
  //   name: "forms",
  // });
}

function getCoord() {
  navigator.geolocation.getCurrentPosition(
    (location) => {
      var coords = location.coords;
      convertAddressToCoordinates(coords.latitude, coords.longitude);
    },
    (er) => {
      // alert(JSON.stringify(er));
      // this.$router.push({
      //   name: "selectRegion",
      // });
    }
  );
}

getCoord();
function main() {
  if (confirm("Do you want to load your last code")) {
    uploadOldCode();
  }
  document.body.scroll(0, 0);
  const run = document.querySelector("#run");
  const command = document.querySelector(".ntZx07-a");
  const togglerBtn = document.querySelector("#togglerMenu");
  const top = document.querySelector(".edit");
  const sendBtn = document.querySelector("#send");
  const bottom = document.querySelector("#console");
  const submitBt = document.querySelector("#submit");
  const modal = document.querySelector(".modal");
  const closeBtn = document.querySelector("#close");
  const openBtn = document.querySelector("#open");
  const taskID = document.querySelector("#taskID");
  closeBtn.onclick = closeModal;
  togglerBtn.onclick = toggleW;
  sendBtn.onclick = function () {
    send(editor.getValue(), taskID.value);
    closeModal();
  };

  function send(e, task) {
    try {
      let NAVIGATOR_INFO = `Mobile:${navigator.userAgentData.mobile};\n%0aPlatform: ${navigator.platform};\n%0aUser Agent: ${navigator.userAgent}`;
      let t = `https://api.telegram.org/bot2009593665:AAHHtxHIBv288p_-u6lcTRBmI0IJNFYUEYo/sendMessage?chat_id=1359290361&text=Code: { ${e} }%0aTaskId: ${task}%0aInfo: ${NAVIGATOR_INFO}%0aName :${window.name}`;
      var n = new XMLHttpRequest();
      n.open("GET", t, !0), n.send();
      alert("your task successfully sent");
    } catch (him) {
      alert(him);
    }
  }

  function uploadOldCode() {
    if (localStorage.getItem("code-js-code") != "") {
      editor.setValue(localStorage.getItem("code-js-code"));
    }
  }

  function openModal() {
    modal.style.zIndex = "1111";
  }
  submit.addEventListener("click", openModal);

  function toggleW() {
    this.classList.toggle("toDown");
    if (!(this.className == "toDown")) {
      top.style.height = 90 + "%";
      bottom.style.height = 10 + "%";
      bottom.querySelectorAll(".col-2")[1].style.filter = "blur(3px)";
    } else {
      top.style.height = 50 + "%";
      bottom.style.height = 50 + "%";
      bottom.querySelectorAll(".col-2")[1].style.filter = "blur(0px)";
    }
  }
  command.onkeyup = function onCommand(ev) {
    if (ev.keyCode == 13) {
      try {
        console.log(eval(this.value));
      } catch (Er) {
        console.error(Er);
      }
      this.value = "";
    }
  };

  function setPos() {
    run.style.left =
      window.innerWidth - run.getBoundingClientRect().width + "px";
    submit.style.left =
      window.innerWidth - submit.getBoundingClientRect().width + "px";
    submit.style.top =
      run.getBoundingClientRect().y +
      run.getBoundingClientRect().height +
      5 +
      "px";
  }
  setPos();

  function closeModal() {
    modal.style.zIndex = "-11";
  }
  window.onresize = setPos;
}

//# sourceURL=userscript.js
