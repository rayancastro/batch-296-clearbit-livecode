const authorization = "Bearer sk_11a996a530ab669bcc09d9285552e006";

const image = document.querySelector('#userAvatar');
const name = document.querySelector('#userName');
const userEmail = document.querySelector('#userEmail');
const bio = document.querySelector('#userBio');
const location = document.querySelector('#userLocation');

const baseUrl = `https://person.clearbit.com/v2/people/find?email=`;
// 1. Select the form
const form = document.querySelector('#clearbitForm');
// 2. Add listener to the form
form.addEventListener('submit', (event) => {
  // 3. Prevent the default submission of the form
  event.preventDefault();
  const email = document.querySelector('#clearbitEmail').value;
  fetchClearBit(email);
});
// 4. Send the AJAX request to the clearbit API
const fetchClearBit = (email) => {
  fetch(`${baseUrl}${email}`, {
    headers: {
      Authorization: authorization
    }
  })
    .then(response => response.json())
    .then((data) => {
      // 5. Read the API response and upload the dom with a DIV / TABLE / UL
      image.innerHTML = `<img src="${data.avatar}"/>`;
      name.innerText = data.name.fullName;
      userEmail.innerText = data.email;
      bio.innerText = data.bio;
      location.innerText = data.location;

      console.log(data);
    });
};



