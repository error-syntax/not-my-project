export const handleUserFormSubmit = async (form, appUpdater, url) => {
  const formEl = document.querySelector(`#${form}`);
  const inputsArr = formEl.querySelectorAll("input");
  let userObject = {};

  inputsArr.forEach(input => {
    userObject[input.dataset.colname] = input.value;
  });

  const fetchOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user: userObject })
  };

  await fetch(url, fetchOptions)
    .then(res => {
      console.log(typeof res.status, res.status);
      if (res.status === 409) {
        res
          .text()
          .then(errs => {
            throw new Error(errs);
          })
          .catch(err => {
            console.log('User already exists...')
            const errJSON = JSON.parse(err.message);
            return errJSON;
          });
      } else if (res.status === 403) {
        res
          .text()
          .then(errs => {
            throw new Error(errs);
          })
          .catch(err => {
            console.log("Invalid UN/PW combo...");
            const errJSON = JSON.parse(err.message);
            return errJSON;
          });
      } else {
        return res.json();
      }
    })
    .then(user => {
      appUpdater(user);
    });
};
