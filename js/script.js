document
  .querySelector("#js-drawer-button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#js-drawer-button").classList.toggle("is-checked");
    document.querySelector("#js-drawer-content").classList.toggle("is-checked");
  });

document
  .querySelectorAll('#js-drawer-content a[href^="#"]')
  .forEach(function (link) {
    link.addEventListener("click", function (e) {
      document
        .querySelector("#js-drawer-button")
        .classList.remove("is-checked");
      document
        .querySelector("#js-drawer-content")
        .classList.remove("is-checked");
    });
  });

const swiper = new Swiper("#js-about-swiper", {
  slidesPerView: "auto",
  // Optional parameters
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 0,
  },
});

const modalBtns = document.querySelectorAll(".modal-toggle");
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});
const closeBtns = document.querySelectorAll(".modal-close");
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.closest(".modal");
    modal.style.display = "none";
  };
});

window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};

const swiper2 = new Swiper("#js-spots-swiper", {
  slidesPerView: "auto",
  // Optional parameters
  loop: true,
  initialSlide: 3,

  centeredSlides: true,
  navigation: {
    nextEl: "#js-spots-next",
    prevEl: "#js-spots-prev",
  },

  breakpoint: {
    900: {
      centeredSlides: false,
      initialSlide: 1,
    },
  },
});

$(window).on("load resize", function () {
  var x = $(window).width();
  var y = 374;
  if (x <= y) {
    $(".js-button").removeClass("button-md");
    $(".js-button").css("font-size", "13px");
  } else if (x >= 900) {
    $(".js-button").css("font-size", "20px");
    $(".js-button-sm").addClass("button-md");
  } else {
    $(".js-button").addClass("button-md");
    $(".js-button").css("font-size", "16px");
    $(".js-button-sm").removeClass("button-md");
  }
});

$(window).on("load resize", function () {
  var x = $(window).width();
  var y = 1200;
  if (x <= y) {
    $("#js-qa-box1").addClass("is-open");
    $("#js-qa-box2").removeClass("is-open");
  } else {
    $("#js-qa-box1").removeClass("is-open");
    $("#js-qa-box2").addClass("is-open");
  }
});

jQuery(".js-accordion").on("click", function (e) {
  e.preventDefault();

  if (jQuery(this).parent().hasClass("is-open")) {
    jQuery(this).parent().removeClass("is-open");
    jQuery(this).next().slideUp();
  } else {
    jQuery(this).parent().addClass("is-open");
    jQuery(this).next().slideDown();
  }
});

$(function () {
  $(".js-form-required").bind("keyup", function () {
    const inputName = document.getElementById("inputName");
    const inputMail = document.getElementById("inputMail");
    const inputMessage = document.getElementById("inputMessage");

    if (inputName.value !== "") {
      document.getElementById("inputName").style.backgroundColor = "#f5f5f5";
      document.getElementById("inputName").style.border = "none";
      document.getElementById("inputNameLabel").style.color = " #4A3636";
    }
    if (inputMail.value !== "") {
      document.getElementById("inputMail").style.backgroundColor = "#f5f5f5";
      document.getElementById("inputMail").style.border = "none";
      document.getElementById("inputMailLabel").style.color = " #4A3636";
    }

    if (inputMessage.value !== "") {
      document.getElementById("inputMessage").style.backgroundColor = "#f5f5f5";
      document.getElementById("inputMessage").style.border = "none";
      document.getElementById("inputMessageLabel").style.color = "#4A3636";
    }
  });
});

function selectChange() {
  const value = document.getElementById("inputSelect").value;
  if (value !== "") {
    document.getElementById("inputSelect").style.background =
      "linear-gradient(90deg,#f5f5f5 calc(100% - 52px), #9ed0e0 52px)";
    document.getElementById("inputSelect").style.border = "none";

    document.getElementById("inputSelectLabel").style.color = " #4A3636";
  }
}

//
window.onload = function () {
  const btnSubmit = document.getElementById("btnSubmit");
  const inputName = document.getElementById("inputName");
  const inputSelect = document.getElementById("inputSelect");
  const inputMail = document.getElementById("inputMail");
  const inputMessage = document.getElementById("inputMessage");

  btnSubmit.addEventListener("click", function (event) {
    if (inputName.value == "") {
      document.getElementById("inputName").style.backgroundColor = "#FFF0F7";
      document.getElementById("inputName").style.border = " 1px solid #CE2073";
      document.getElementById("inputNameLabel").style.color = " #CE2073";
    }
    if (inputSelect.value == "") {
      document.getElementById("inputSelect").style.background =
        "linear-gradient(90deg,#FFF0F7 calc(100% - 52px), #CE2073 52px)";
      document.getElementById("inputSelect").style.border =
        " 1px solid #CE2073";
      document.getElementById("inputSelectLabel").style.color = " #CE2073";
    }
    if (inputMail.value == "") {
      document.getElementById("inputMail").style.backgroundColor = "#FFF0F7";
      document.getElementById("inputMail").style.border = " 1px solid #CE2073";
      document.getElementById("inputMailLabel").style.color = " #CE2073";
    } else if (!reg.test(inputMail.value)) {
      document.getElementById("inputMail").style.backgroundColor = "#FFF0F7";
      document.getElementById("inputMail").style.border = " 1px solid #CE2073";
      document.getElementById("inputMailLabel").style.color = " #CE2073";
    }
    if (inputMessage.value == "") {
      document.getElementById("inputMessage").style.backgroundColor = "#FFF0F7";
      document.getElementById("inputMessage").style.border =
        " 1px solid #CE2073";
      document.getElementById("inputMessageLabel").style.color = " #CE2073";
    }
  });
};

jQuery('a[href^="#"]').on("click", function (e) {
  const speed = 300;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" == id ? "html" : id);
  const position = jQuery(target).offset().top;
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing" // swing or linear
  );
});

jQuery(window).on("scroll", function () {
  if (250 < jQuery(window).scrollTop()) {
    jQuery("#js-pagetop").addClass("is-show");
  } else {
    jQuery("#js-pagetop").removeClass("is-show");
  }
});
