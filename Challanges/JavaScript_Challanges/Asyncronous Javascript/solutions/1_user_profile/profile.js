async function fetchUserProfile() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();

    document.getElementById("name").textContent = data.name;
    document.getElementById("email").textContent = data.email;
    document.getElementById(
      "address"
    ).textContent = `${data.address.street}, ${data.address.city}`;
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
}

fetchUserProfile();
