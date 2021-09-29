import Layout from 'layouts/Layout';
import Index from 'pages/Index';
import RhodesianInfoPage from 'pages/rhodesian';
import Bordercollie from 'pages/bordercollie';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'styles/styles.css';



function App() {
  return (
    <div className='App'>
      <Router>
      <Layout>
        <Switch>
           <Route path='/rhodesian' >
             <RhodesianInfoPage/>
           </Route>
           <Route path='/bordercollie' >
             <Bordercollie/>
           </Route>
           <Route path='/' >
               <Index/>
           </Route>
        </Switch>
      </Layout> 
      </Router>
    </div>
  );
}

export default App;
