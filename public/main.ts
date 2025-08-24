async function fetchMessage(): Promise<void> {
  try {
    const response = await fetch("http://localhost:8080");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log("Message from server:", data.message);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

fetchMessage();
