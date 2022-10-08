import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStore, FaFlask } from 'react-icons/fa';
import './card.css'

function Cards() {
  return (
    <>

      <div>
        <section className="d-flex container justify-content-between my-5 py-5">
          <div className='box-item text-center'>
            <div>
              <div className="round">
                <div className="wrapper">
                  <FaStore className="font-icon" />
                </div>
              </div>
            </div>
            <div>
              <div className='head-card'>
                <span>Availability</span>
              </div>
              <div className='card-para'>
                <p>Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum.</p>
              </div>
            </div>
          </div>
          <div className='box-item text-center'>
            <div>
              <div className="round">
                <div className="wrapper">
                  <FaFlask className="font-icon" />
                </div>
              </div>
            </div>
            <div>
              <div className='head-card'>
                <span>Availability</span>
              </div>
              <div className='card-para'>
                <p>Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum.</p>
              </div>
            </div>
          </div>
          <div className='box-item text-center'>
            <div>
              <div className="round">
                <div className="wrapper">
                  <FaStore className="font-icon" />
                </div>
              </div>
            </div>
            <div>
              <div className='head-card'>
                <span>Availability</span>
              </div>
              <div className='card-para'>
                <p>Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  );
}

export default Cards;