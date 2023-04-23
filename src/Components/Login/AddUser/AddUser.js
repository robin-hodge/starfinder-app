const AddUser = () => {
    const handleSubmit = (event) => {
        console.log(event)
        event.preventDefault()
    }

    return (
        <>
            <h2>Add new user</h2>
            <form>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" />
                <label for="password">Password</label>
                <input type="text" id="password" name="password" />
                <label for="repeat-password">Repeat password</label>
                <input type="text" id="repeat-password" name="repeat-password" />
                <input type="submit" value="Add new user" onClick={handleSubmit} />
            </form>
        </>
    )
}

export default AddUser