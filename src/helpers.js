export const handleUserFormSubmit = async (form, setUserState, APIUrl) => {
  const formEl = document.querySelector(`#${form}`); //find form that user filled out
  const inputsArr = formEl.querySelectorAll("input"); // gets a list of all inputs on above form
  let userObject = {}; // initializing user obj

  inputsArr.forEach(input => {
    //loop through inputs
    userObject[input.dataset.colname] = input.value; // build user obj with input values
  });

  const fetchOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user: userObject })
  };

  await fetch(APIUrl, fetchOptions) // make fetch post request that waits for api res
    .then(res => {
      //then when res comes back check res status for code
      if (res.status === 409) {
        // conflict res'
        console.log("conflict");
        res
          .text()
          .then(errs => {
            throw new Error(errs);
          })
          .catch(err => {
            console.log(err, "User already exists...");
            const errJSON = JSON.parse(err.message);
            return errJSON;
          });
      } else if (res.status === 403) {
        // unauthorized res
        console.log("unauthorized");
        res
          .text()
          .then(errs => {
            throw new Error(errs);
          })
          .catch(err => {
            console.log(err, "Invalid UN/PW combo...");
            const errJSON = JSON.parse(err.message);
            return errJSON;
          });
      } else {
        console.log("success!");
        res.json()
          .then(user => {
            setUserState(user); // references the setUser hook in signIn.js
          })
      }
    })
};