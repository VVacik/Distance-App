export async function Wardrobe_Post(localisation_Name, UserID) {
  const res = await fetch("https://localhost:7294/api/Wardrobes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ localisation_Name, UserID }),
  });

  if (!res.ok) {
    throw new Error("Nie udało się utworzyć szafy");
  }

  const data = await res.json();
  return data;
}
