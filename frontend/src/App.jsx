import {useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/Homepage'
import Layout from './components/layout'
import About from './pages/AboutPage'
import Services from './pages/ServicesPage'
import Team from './pages/TeamPage'
import Contacts from './pages/ContactsPage'
import {ApolloProvider} from "@apollo/client";
import { createApolloClient } from "./api/graphql.js";

function App() {
    const [count, setCount] = useState(0)

    const client = createApolloClient();
    return (
        <>
            <BrowserRouter>
                <ApolloProvider client={client}>
                    <Routes>
                        <Route element={<Layout/>}>
                            <Route path='/' element={<HomePage/>}></Route>
                            <Route path='/about-us' element={<About/>}></Route>
                            <Route path='/services' element={<Services/>}></Route>
                            <Route path='/our-team' element={<Team/>}></Route>
                            <Route path='/contact-us' element={<Contacts/>}></Route>
                        </Route>
                    </Routes>
                </ApolloProvider>
            </BrowserRouter>
        </>
    )
}

export default App
