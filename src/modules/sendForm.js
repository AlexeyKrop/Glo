const sendForm = () => {
  const errorMessage = "Что то пошло не так...",
    loadMessage = "Загрузка...",
    successMessage = "Спасибо...Мы скоро с вами свяжемся";
  const form = document.querySelectorAll("form"),
    statusMessage = document.createElement("p");
  statusMessage.style.color = "red";
  const image = document.createElement("img");
  statusMessage.append(image);
  const inputs = document.querySelectorAll("input"),
    popup = document.querySelector(".popup");

  const cleanInputs = () => {
    inputs.forEach((item) => {
      item.value = "";
    });
  };
  // настройка отправки
  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
  };

  form.forEach((item) => {
    item.addEventListener("submit", (event) => {
      event.preventDefault();
      item.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;
      const formData = new FormData(item);
      let body = {};
      formData.forEach((item, key) => {
        body[key] = item;
      });
      sendData(body)
        .then((response) => {
          statusMessage.style.color = "green";
          statusMessage.textContent = successMessage;
          cleanInputs();
          setTimeout(() => {
            statusMessage.textContent = "";
          }, 2000);
          if (item.matches("#form3")) {
            setTimeout(() => {
              popup.style.display = "none";
            }, 2000);
          }
        })
        .catch((error) => {
          statusMessage.textContent = errorMessage;
          console.error(error);
        });
    });
  });
};
export default sendForm;
