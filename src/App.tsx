import { ChangeEvent ,useState } from "react"

function App() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target as HTMLInputElement;
    setFormData({...formData, [name]: value})
  }

  function handleSubmit (event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault()

    console.log({email, password})
  }
  
  return (
    <div>
      <h1>Welcome to Poke Collection</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" >Email</label>
          <input 
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="example@mail.com"
          />
        </div>
        <div>
          <label htmlFor="password" >Password</label>
          <input 
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            placeholder="example@mail.com"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default App
