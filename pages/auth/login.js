import '@/styles/routes/auth/login.scss'
import { useState } from 'react'
import { login } from '@/operations/user.fetch'
import { useRouter } from 'next/router'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleLogin = async () => {
        if (email === '' || password === '') {
            alert('Please fill all fields')
            return;
        }

        const data = {
            email,
            password
        }

        const response = await login(data)

        if (response.status === 200) {
            alert('Login successful')
            router.push('/')
        } else {
            alert(response.message)
        }


    }

    return (
        <div className='Login'>
            <div className='Login__form'>
                <h1>Welcome</h1>
                <p>Login to you account to access a <br />world of convenience</p>
                <input type="text" placeholder="Email" style={{color: 'white', paddingLeft: '10px'}} onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password" placeholder="Password" style={{color: 'white', paddingLeft: '10px'}} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
                <p>Don't have an account? <a href="/auth/register">Register</a></p>
                <p>Forgot your password? <a href="/auth/forgotpassword">Reset</a></p>
            </div>
            <div className='Login__backimg'></div>
        </div>
    )
}

export default Login