import Header from "components/Header";
import CardRazasPerros from "components/CardRazasPerros";
import Footer from "components/Footer";
import borderCollie from 'media/borderCollie.jpg';
import rhodesian from 'media/rhodesian.jpg';
function Index(){

return ( <div>
  <Header/>
      <main>
        <section>
          <h1>Razas de Perros</h1>
          <ul className='breedCardContainer'>
            <CardRazasPerros nombreRaza="BorderCollie" imagen={borderCollie} color='backGroudVerde'/>
            <CardRazasPerros nombreRaza="Rhodesian" imagen={rhodesian} color='backGroudRojo'/>
            <CardRazasPerros nombreRaza="Rhodesian" imagen={rhodesian} color='backGroudVerde'/>
            <CardRazasPerros nombreRaza="Rhodesian" imagen={rhodesian} color='backGroudRojo'/>
            <CardRazasPerros nombreRaza="Rhodesian" imagen={rhodesian} color='backGroudVerde'/>
          </ul>
        </section>
        <section></section>
      </main>
      <Footer/>


</div>);

}
 export default Index;