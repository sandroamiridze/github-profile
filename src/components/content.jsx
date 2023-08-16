import React, { useState, useEffect } from "react";
const url = 'https://api.github.com/users';


const FetchData = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const users = await response.json()
                setUsers(users)
                console.log(users)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return <section>
        <h2>GitHub Users</h2>
        <ul className="users">
        {users.map((user) => {
            const {id, avatar_url, login, html_url} = user
            return (
                <li key={id}>
                    <img src={avatar_url} alt = {login} />
                    <div>
                        <h3>{login}</h3>
                        <a href={html_url}>Profile</a>
                    </div>
                </li>
            )
        })}
        </ul>
    </section>
};

export default FetchData;
