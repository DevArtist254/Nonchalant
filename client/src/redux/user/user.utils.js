export const setTokenStorage = (token) => {
  //Driving fn
  localStorage.setItem("token", `${token}`)

  console.log("Token is set")
}

export const getTokenStorage = () => {}
