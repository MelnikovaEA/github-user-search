import './App.css'
import {Container} from "./components/Container";
import {Header} from "./components/Header";
import {Search} from "./components/Search";
import {UserCard} from "./components/UserCard";
import {defaultUser} from "./mock";

function App() {

    return (
        <Container>
            <Header/>
            <Search onSubmit={()=>{}} error={true} />
            <UserCard {...defaultUser} />
        </Container>
    )
}

export default App