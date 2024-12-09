document.getElementById('loadButton').addEventListener('click', async () => {
  const apiURL = 'https://jsonplaceholder.typicode.com/users';
  const userList = document.getElementById('userList');

  userList.innerHTML = '';

  try {
    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();


    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
});
