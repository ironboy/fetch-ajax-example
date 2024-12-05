// Read all data from the JSON file
// (the data strucure is an array of objects)
let customers = await $.ajax('kunddata.json');

// reading a JSON file without jQuery
// let customers = await(await fetch('kunddata.json')).json();

// A for...of loop where use destructuring
// to get each property from a customer object
// as a separate loop variable
for (let { firstName, lastName, email, phone } of customers) {
  $('body').append(`
      <article class="customer">
        <h3>${firstName} ${lastName}</h3>
        <p><b>E-mail:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
      </article>
  `);
}