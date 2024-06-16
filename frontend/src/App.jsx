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
import Dummy from './pages/DumyPgae'
import BreadCrumb from './components/BreadCrumb'
import Footer from './components/Footer'

function App() {
    const [count, setCount] = useState(0)

    const client = createApolloClient();
    return (
        <>
            <BrowserRouter>
                <ApolloProvider client={client}>
                    <>
      <Layout/>
      <BreadCrumb/>
      <Routes>
                        {/* <Route element={}> */}
                            <Route path='/' element={<HomePage/>}></Route>
                            <Route path='/about-us' element={<About/>}></Route>
                            <Route path='/services' element={<Services/>}></Route>
                            <Route path='/our-team' element={<Team/>}></Route>
                            <Route path='/contact-us' element={<Contacts/>}></Route>
                        <Route path='/well' element={<Dummy/>}></Route>
                      {/* </Route> */}
      </Routes>
                
            <Footer/>
            
      </>
      </ApolloProvider>
      </BrowserRouter>
        </>
    )
}

export default App
