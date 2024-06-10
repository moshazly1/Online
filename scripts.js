//start rejester

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  const nameValidIcon = document.getElementById("nameValid");
  const emailValidIcon = document.getElementById("emailValid");
  const passwordValidIcon = document.getElementById("passwordValid");
  const confirmPasswordValidIcon = document.getElementById(
    "confirmPasswordValid"
  );

  function validateInput(input, icon, pattern) {
    if (pattern.test(input.value)) {
      icon.style.display = "inline";
    } else {
      icon.style.display = "none";
    }
  }

  nameInput.addEventListener("input", function () {
    validateInput(nameInput, nameValidIcon, /^.{3,}$/);
  });

  emailInput.addEventListener("input", function () {
    validateInput(
      emailInput,
      emailValidIcon,
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    );
  });

  passwordInput.addEventListener("input", function () {
    validateInput(passwordInput, passwordValidIcon, /^.{6,}$/);
  });

  confirmPasswordInput.addEventListener("input", function () {
    validateInput(
      confirmPasswordInput,
      confirmPasswordValidIcon,
      new RegExp(`^${passwordInput.value}$`)
    );
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for demo purposes

    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = ""; // Clear error message

    const namePattern = /^.{3,}$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordPattern = /^.{6,}$/;
    const confirmPasswordPattern = new RegExp(`^${passwordInput.value}$`);

    if (!namePattern.test(nameInput.value)) {
      errorMessage.textContent = "Name must be at least 3 characters long";
      return;
    }

    if (!emailPattern.test(emailInput.value)) {
      errorMessage.textContent = "Invalid email address";
      return;
    }

    if (!passwordPattern.test(passwordInput.value)) {
      errorMessage.textContent = "Password must be at least 6 characters long";
      return;
    }

    if (!confirmPasswordPattern.test(confirmPasswordInput.value)) {
      errorMessage.textContent = "Passwords do not match";
      return;
    }

    alert("Registration successful!");
    window.location.href = "index.html";
  });
});

//end rejester

//Select Landing page Element
let landingPage = document.querySelector(".landingpage");

//get arrey of imges
let imgesarr = [
  "1.jpg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpg",
  "6.png",
  "7.jpg",
  "8.webp",
  "9.jpeg",
  "10jpg.jpg",
  "11.jpeg",
  "12webg.webg",
];

setInterval(() => {
  //get random number

  let randomnumber = Math.floor(Math.random() * imgesarr.length);

  // chang back Ground URL
  landingPage.style.backgroundImage =
    'url("./imgs/' + imgesarr[randomnumber] + '")';
}, 10000);

// start plane
document
  .getElementById("booking-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const nationalId = document.getElementById("national-id").value;
    const address = document.getElementById("address").value;
    const province = document.getElementById("province").value;
    const creditCard = document.getElementById("credit-card").value;
    const departure = document.getElementById("departure").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;

    if (
      name &&
      email &&
      nationalId &&
      address &&
      province &&
      creditCard &&
      departure &&
      destination &&
      date
    ) {
      const confirmationMessage = `
          شكراً لك، ${name}! لقد تم حجز تذكرتك.
          <br> البريد الإلكتروني: ${email}
          <br> الرقم القومي: ${nationalId}
          <br> العنوان: ${address}
          <br> المحافظة: ${province}
          <br> مكان المغادرة: ${departure}
          <br> مكان الوصول: ${destination}
          <br> تاريخ الرحلة: ${date}
      `;
      document.getElementById("confirmation-message").innerHTML =
        confirmationMessage;
      document.getElementById("confirmation").style.display = "block";
      document.getElementById("ticket-form").style.display = "none";
    }
  });

function printTicket() {
  window.print();
}

//end plane
// start fot
document
  .getElementById("booking-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const nationalId = document.getElementById("national-id").value;
    const address = document.getElementById("address").value;
    const province = document.getElementById("province").value;
    const creditCard = document.getElementById("credit-card").value;
    const team1 = document.getElementById("team1").value;
    const team2 = document.getElementById("team2").value;
    const section = document.getElementById("section").value;
    const date = document.getElementById("date").value;
    const fanId = document.getElementById("fan-id").value;

    if (
      name &&
      email &&
      nationalId &&
      address &&
      province &&
      creditCard &&
      team1 &&
      team2 &&
      section &&
      date &&
      fanId
    ) {
      const confirmationMessage = `
          شكراً لك، ${name}! لقد تم حجز تذكرتك.
          <br> البريد الإلكتروني: ${email}
          <br> الرقم القومي: ${nationalId}
          <br> العنوان: ${address}
          <br> المحافظة: ${province}
          <br> الفريق الأول: ${team1}
          <br> الفريق الثاني: ${team2}
          <br> الدرجة: ${section}
          <br> تاريخ المباراة: ${date}
          <br> Fan ID: ${fanId}
      `;
      document.getElementById("confirmation-message").innerHTML =
        confirmationMessage;
      document.getElementById("confirmation").style.display = "block";
      document.getElementById("ticket-form").style.display = "none";
    }
  });

function printTicket() {
  window.print();
}

//end fot

// start cont
document
  .getElementById("reservation-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const nationalId = document.getElementById("national-id").value;
    const address = document.getElementById("address").value;
    const province = document.getElementById("province").value;
    const creditCard = document.getElementById("credit-card").value;
    const artist = document.getElementById("artist").value;
    const date = document.getElementById("date").value;

    if (
      name &&
      email &&
      nationalId &&
      address &&
      province &&
      creditCard &&
      artist &&
      date
    ) {
      const confirmationMessage = `
          شكراً لك، ${name}! لقد تم حجز تذكرتك.
          <br> البريد الإلكتروني: ${email}
          <br> الرقم القومي: ${nationalId}
          <br> العنوان: ${address}
          <br> المحافظة: ${province}
          <br> الفنان: ${artist}
          <br> تاريخ الحفلة: ${date}
      `;
      document.getElementById("confirmation-message").innerHTML =
        confirmationMessage;
      document.getElementById("confirmation").style.display = "block";
      document.getElementById("concert-form").style.display = "none";
    }
  });

function printTicket() {
  window.print();
}

// end cont
