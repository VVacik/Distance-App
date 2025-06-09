//Login Function

export async function Login_Post(UserName, password) {
  const res = await fetch("https://localhost:7294/api/Users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ UserName, password }),
  });

  if (!res.ok) {
    throw new Error("Nieprawidłowe dane logowania");
  }

  const data = await res.json(); // zawiera token + dane użytkownika
  return data;
}

//Register function

export async function Register_Post(UserName, Email, Password) {
  const res = await fetch("https://localhost:7294/api/Users/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ UserName, Email, Password }),
  });

  if (!res.ok) {
    throw new Error("Coś poszło nie tak");
  }

  const data = await res.json();

  alert("Rejestracja przebiegła pomyślnie!");

  return data;
}

//Get profile from Key

export async function getProfile() {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Brak tokena");

  try {
    const res = await fetch("https://localhost:7294/api/Users/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Nieautoryzowany");
    }

    return await res.json();
  } catch (error) {
    console.error("Błąd w getProfile:", error);
    throw error; // nie ukrywaj błędu
  }
}
