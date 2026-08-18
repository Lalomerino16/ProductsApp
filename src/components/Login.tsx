import { useState } from "react";
import { useAuthStore } from "../auth/store/auth.store"




export const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')

    const login = useAuthStore(state => state.login);

    const handleLogin = () => {
        login({
            id: Date.now(),
            name: name,
            email: email
        })
    }

    return(
        <article>
            <h2>Login</h2>

            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>

                <label style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                    Nombre: 
                    <input
                        value={name}
                        type="text" placeholder="nombre" 
                        onChange={(e) => setName(e.target.value)}
                    />  
                </label>
                <label style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                    Email: 
                    <input
                        value={email}
                        type="email"
                        placeholder="Correo" 
                        onChange={(e) => setEmail(e.target.value)}    
                    />  
                </label>

                <button 
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>

        </article>
    )
}