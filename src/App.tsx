import './App.css'
import {useState} from "react";
import {Container} from "./components/Container";
import {Header} from "./components/Header";
import {Search} from "./components/Search";
import {UserCard} from "./components/UserCard";
import {defaultUser} from "./mock";
import {GithubError, GithubUser, LocalGithubUser} from "./types";
import {isGithubUser} from "./utils/typeGuards.ts";
import {extractLocalUser} from "./utils/extract-local-user.ts";

const BASE_URL = 'https://api.github.com/users/'

function App() {

    const [user, setUser] = useState<LocalGithubUser | null>(defaultUser)

    const fetchUser = async (userName: string) => {
        const url = BASE_URL + userName;

        const res = await fetch(url);
        const user = await res.json() as GithubUser | GithubError;

        if (isGithubUser(user)) {
            setUser(extractLocalUser(user));
        } else {
            setUser(null);
        }
    }
    return (
        <Container>
            <Header/>
            <Search onSubmit={fetchUser} error={!user}/>
            {user && <UserCard {...user} />}
        </Container>
    )
}

export default App
