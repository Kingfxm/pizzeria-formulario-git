import { createContext, useState, useEffect } from "react";
import useInput from "../customHooks/useInput";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext ()
console.log("no sabia donde agregar el cart al backend asi que se agrega al hacer click en ir a pagar y se borra al hacer logout")
const UserProvider = ({ children }) => {
    const [logged, setLogged] = useState(false)
    const navigate = useNavigate()
    const email = useInput('')
    const password = useInput('')
    const confirmar = useInput('')
    const [user, setUser] = useState(null)

//  -----------     LOGIN     -----------------

const handleSubmitLogin = async(e) => {
  e.preventDefault()
  

  if (!email.value || !password.value){
    alert("Debe llenar todos los campos")
  }
  else if (password.value.length < 6){
    alert("La contraseña debe tener al menos 6 carácteres")
  }
  else {
    const response = await fetch("http://localhost:5000/api/auth/login", {
        method:"POST",
        headers:{"Content-Type" : "application/json"},
        body: JSON.stringify({email: email.value, password: password.value})
      })
    const data = await response.json()
    alert(data?.error || "¡Login exitoso!")
    setLogged(!data?.error || "")
    localStorage.setItem("token", data.token)
    setUser(email.value)
    navigate("/profile")

  }
} 

// ---------      Register     -------------
const handleSubmitRegister = async(e) => {
    e.preventDefault()
    if (!email.value || !password.value || !confirmar.value){
        alert("Debe llenar todos los campos")
    }
    else if (password.value.length < 6){
        alert("La contraseña debe tener al menos 6 carácteres")
    }
    else if (password.value !== confirmar.value) {
        alert("Las contraseñas no coinciden")
    }
    else {
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method:"POST",
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify({email: email.value, password: password.value})
        })
        const data = await response.json()
        alert("¡Registro exitoso!")
        setLogged(true)
        setUser(email.value)
        navigate("/profile")
    }
}


// ----------       Perfil       -------------

useEffect(()=> {
    const token = localStorage.getItem("token")
    if (token) {
    fetch ("http://localhost:5000/api/auth/me",{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    .then((response) => response.json())
    .then((data) => setUser(data.email))
    }
},[])

// ----------    Log out   ------------

const logout = () => {
    localStorage.clear()
    setUser(null)
    setLogged(false)
}

    return (
        <UserContext.Provider value = {{logged, setLogged, email, password, handleSubmitLogin, handleSubmitRegister, confirmar, user, logout}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider