// components/Header.tsx
import React from 'react';

interface Projects {
  title: string;
}

const Projects: React.FC<Projects> = ({ title }) => {
  return (
    <div className="section px-3 px-lg-4 pt-5" id="experience">
  <div className="container-narrow">
    <div className="text-center mb-5">
      <h2 className="title-desc">RECENT PROJECTS</h2>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="card mb-3">
          <div className="card-header px-3 py-2">
            <div className="d-flex justify-content-between">
              <div>
                <h3 className="h5 mb-1 title-desc">CrashWatch: IoT-Based Car Accident Detection and Reporting System</h3>
                <div className="text-muted text-small">Backend Programmer</div>
              </div>
            </div>
          </div>
          <div className="card-body px-3 py-2">
          <div><img className="img-fluid mt-2" src="images/crashwatch.png" alt="Walter Patterson"/></div>
          <div style={{marginTop: "18px"}}>
          <p>Having a capstone project like this, have opened up my mind about Internet of Things and Web Application communication. 
            We have developed a system capable of real-time emergency notifcation for repsonders with the use of sensors and modules.
            The system aims to minimize response times for unpredictable car accident scearios.</p>
          </div>
            
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card mb-3">
          <div className="card-header px-3 py-2">
            <div className="d-flex justify-content-between">
              <div>
                <h3 className="h5 mb-1 title-desc">DORMY: Dorm Management System (Multi-Tenant)</h3>
                <div className="text-muted text-small">Backend Programmer</div>
              </div>
            </div>
          </div>
          <div className="card-body px-3 py-2">
          <div><img className="img-fluid mt-2" src="images/dormy.PNG" alt="Walter Patterson"/></div>
            <div style={{marginTop: "18px"}}>
            <p>I also helped develop a dorm management system for the school's dorm system as a project requirement as a backend developer.
              This project aims to manage and monitor dorm transactions and room allocation which applies to all dorms in the university. 
              Since it is a multi-tenant system, the system is capable of handling a growing amount of users.
            </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card mb-3">
          <div className="card-header px-3 py-2">
            <div className="d-flex justify-content-between">
              <div>
                <h3 className="h5 mb-1 title-desc">POS and Inventory System for “Ang Lechon Manok ni Sr. Pedro”</h3>
                <div className="text-muted text-small">Backend/Frontend Programmer</div>
              </div>
            </div>
          </div>
          <div className="card-body px-3 py-2">
          <div><img className="img-fluid mt-2" src="images/pedro.PNG" alt="Walter Patterson"/></div>
            <div style={{marginTop: "18px"}}>
            <p>Having the chance to develop a system for a business made my group knowledgeable on project management and monitoring.
              This system provides POS and Inventory System of a renowned Lechon Manok store in the city which automates their transactions.
              The system is capable of handling transactions from products, sales, inventory, and user management.
            </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card mb-3">
          <div className="card-header px-3 py-2">
            <div className="d-flex justify-content-between">
              <div>
                <h3 className="h5 mb-1 title-desc">Books For Borrow: Book Borrowing System</h3>
                <div className="text-muted text-small">UI/UX Designer</div>
              </div>
            </div>
          </div>
          <div className="card-body px-3 py-2">
          <div><img className="img-fluid mt-2" src="images/borrow.PNG" alt="Walter Patterson"/></div>
            <div style={{marginTop: "18px"}}>
            <p>As the first system project in my IT journey, we have developed a book borrowing system prototype, which allows the borrowing of books and keep track of records.
              This project did not include backend or server-side programming since it is our first ever system project. Hence, we got to focus on the UI/UX side of the system
              along with the business logic the system exhibits.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Projects;
