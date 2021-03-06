import React from 'react';
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

const App=() =>{
    return (
    <Router> 
        <Header/>
       <main className='py-3'>
         <Container>
            {/* <h1>Selamat Datang Di Toko Datu Sinar Jaya</h1> */}
            {/* <HomeScreen/> */}
            <Route  path='/' component={HomeScreen} exact />
            <Route  path='/product/:id' component={ProductScreen} />
        </Container>
       </main>
        <Footer/>
    </Router>
   

    );
}

export default App;