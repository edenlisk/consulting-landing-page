import {useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/Homepage'
import Layout from './components/layout'
import About from './pages/AboutPage'
import Services from './pages/ServicesPage'
import Team from './pages/TeamPage'
import Contacts from './pages/ContactsPage'
import {ApolloProvider} from "@apollo/client";
import {createApolloClient} from "./api/graphql.js";
import Dummy from './pages/DumyPgae'
import BreadCrumb from './components/BreadCrumb'
import Footer from './components/Footer'
import DummyPage from './pages/DummyPage.jsx'
import AdminLayout from './pages/admin-layout/AdminLayout.jsx'
import DataTable from './pages/admin-layout/pages/postsPage.jsx'
import RichTextEditor from "./components/RichTextEditor.jsx";
import PostsPage from './pages/admin-layout/pages/postsPage.jsx'
import UsersPage from './pages/admin-layout/pages/usersPage.jsx'
import ServicesPage from './pages/admin-layout/pages/servicesPage.jsx'
import Gallery from "./components/Gallery.jsx";
import GalleryPage from "./components/GalleryPage.jsx";
import Reports from "./components/Reports.jsx";

function App() {
    const [count, setCount] = useState(0)

    const client = createApolloClient();
    return (
        <>
            <BrowserRouter>
                <ApolloProvider client={client}>
                    <>
                        <Routes>
                            <Route element={<Layout/>}>
                                <Route path='/' element={<HomePage/>}></Route>
                                <Route path="/rich" element={<RichTextEditor/>}/>
                                <Route path='/about-us' element={<About/>}></Route>
                                <Route path='/services' element={<Services/>}></Route>
                                <Route path='/services/careers' element={<DummyPage/>}></Route>
                                <Route path='/services/partners' element={<DummyPage/>}></Route>
                                <Route path='/services/company-history' element={<DummyPage/>}></Route>
                                <Route path='/our-team' element={<Team/>}></Route>
                                <Route path='/contact-us' element={<Contacts/>}></Route>
                                <Route path='/gallery' element={<Gallery/>}></Route>
                                <Route path='/gallery/:eventId' element={<GalleryPage/>}></Route>
                                <Route path='/reports' element={<Reports/>}></Route>
                            </Route>

                            <Route element={<AdminLayout/>}>
                                <Route path='/admin/posts' element={<PostsPage/>}></Route>
                                <Route path='/admin/users' element={<UsersPage/>}></Route>
                                <Route path='/admin/services' element={<ServicesPage/>}></Route>
                                {/* <Route path='/admin/posts' element={<DataTable/>}></Route> */}
                            </Route>
                        </Routes>
                    </>
                </ApolloProvider>
            </BrowserRouter>
        </>
    )
}

export default App
