/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/** @module Login-script*/
/**
* Membuat variabel loginFormatElement untuk tampilan form.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');

/**
* Membuat variabel inputEmailElement untuk tampilan input email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/**
* Membuat variabel inputPasswordElement untuk tampilan input password.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');


/**
* Membuat variabel expectedEmail untuk menyimpan email sementara.
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';

/**
* Membuat variabel expectedPassword untuk menyimpan password sementara.
* @constant {string}
*/
const expectedPassword = 'superpassword';


/* Coment: Menambahkan aksi klik pada button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();


/**
* Membuat variabel email untuk menyimpan nilai email yang didapat saat button ditekan.
* @constant {string}
*/
  const email = inputEmailElement.value;

/**
* Membuat variabel password untuk menyimpan nilai password yang didapat saat button ditekan.
* @constant {string}
*/
  const password = inputPasswordElement.value;

/* Coment: Memastikan nilai email dan password sesuai dengan yang tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {
    /* Coment: Jika seuai akan menampilkan homepage. */
    goToHome();
  } else {
    /* Coment: Jika tidak sesuai akan menampilkan informasi bahwa input salah. */
    showPopUp();
  }
});
