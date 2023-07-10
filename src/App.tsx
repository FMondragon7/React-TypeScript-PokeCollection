import { ChangeEvent ,useState } from "react"

import Input from "./components/inputs";

function App() {

  const [formData, setFormData] = useState({
    email: "fernando@mail.com",
    password: "123456",
  });

  const { email, password } = formData;

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target as HTMLInputElement;
    setFormData({...formData, [name]: value})
  }

  function handleSubmit (event: ChangeEvent<HTMLFormElement>): void {
    event.preventDefault()

    console.log({email, password})
  }
  
  return (
    <div>
      <h1>Welcome to Poke Collection</h1>
      <form onSubmit={handleSubmit}>
        <Input 
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="example@mail.com"
          label="Email"
        />
        <Input 
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="********"
          label="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default App
