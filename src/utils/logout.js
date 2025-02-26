export const handleLogout = (info, setInfo) => {
  // Elimina loggedInUser primero
  localStorage.removeItem("loggedInUser");

  // Actualiza la lista de usuarios
  const updatedInfo = info.map((user) => ({ ...user, login: false }));
  setInfo(updatedInfo);

  // Guarda la lista actualizada en localStorage
  localStorage.setItem("users", JSON.stringify(updatedInfo));

  // Redirige a la página de login
  window.location.href = "/login";

  return;
};
