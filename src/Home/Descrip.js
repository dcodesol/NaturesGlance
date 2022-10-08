import './descrip.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Descrip = () => {
     return (
          <>
               <div className='d-flex container'>
                    <div>
                         <div className='new-pr-90'>NEW PRODUCTS</div>
                    </div>
                    <div className='d-flex content'>
                         <div className='cntn-txt'>
                              <div>naturalife is good for your health</div>
                              <div>How
                               NarturaLife Helps You Feel Better After Ten Days of Usage?</div>
                              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porttitor nisl nec ex consectetur, quis ornare sem molestie. Sed suscipit sollicitudin nulla tempor congue. Integer sed elementum odio. </div>
                              <div></div>
                         </div>
                         <div className='img-main'>
                              <img className='img-padd' src={require('../Assets/5.png')}></img>
                              {/* <img className='img-background' src={require('../Assets/7.png')}></img> */}
                         </div>
                    </div>
               </div>

          </>
     );
}

export default Descrip;