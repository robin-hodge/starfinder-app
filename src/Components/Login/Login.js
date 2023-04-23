import AddUser from "./AddUser/AddUser" 

const Login = () => {
    
    const handleSubmit = (event) => {
        console.log(event)
        event.preventDefault()
    }
    
    return (
        <>
            <h1>Login Below</h1>
            <form>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" />
                <label for="password">Password</label>
                <input type="text" id="password" name="password" />
                <input type="submit" value="login" onClick={handleSubmit} />
            </form>
            <AddUser />
        </>
    )
}

export default Login