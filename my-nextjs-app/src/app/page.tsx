import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cover from '../components/Cover';
import About from '../components/About';

const Home = () => {
  return (
    <>      
      <Header title="My Header" />

      <main>
        <Cover title='My Cover' />
        <About title='My About' />
        <div className="section px-3 px-lg-4 pt-5" id="services">
  <div className="container-narrow">
    <div className="text-center mb-5">
      <h2 className="marker marker-center">My Services</h2>
    </div>
    <div className="text-center">
    <p className="mx-auto mb-3" style={{ maxWidth: '600px' }}>
  I offer services fit for any website or app. I can quickly maximize timely deliverables for real-time schemas.
</p>

    </div>
    <div className="row py-2">
      <div className="col-md-3 text-center"><img className="mb-2" src="images/services/web-design.svg" width="96" height="96" alt="web design"/>
        <div className="h5">Web Design</div>
      </div>
      <div className="col-md-3 text-center"><img className="mb-2" src="images/services/graphic-design.svg" width="96" height="96" alt="graphic design"/>
        <div className="h5">Graphic Design</div>
      </div>
      <div className="col-md-3 text-center"><img className="mb-2" src="images/services/ui-ux.svg" width="96" height="96" alt="ui-ux"/>
        <div className="h5">UI/UX</div>
      </div>
    </div>
  </div>
</div>
      </main>

      <Footer title="My Footer" />
    </>
  );
};

export default Home;
