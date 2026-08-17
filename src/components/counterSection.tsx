import Decking_Img from '../assets/images/counter_img/decking_785x448.webp'; // Counter Sectionn Image
import { counterMetrics }  from '../features/systemData/animatedCounterData.tsx';
import { CounterItem } from '../utils/counterUtils/animatedCounterUtil.tsx';


export const CounterSection: React.FC = () => {
  return (
    <div id="section-counter">
            <div className="section pt-0 sigma_counter-sec">
                <div className="container">
                    <div className="row">
                            <div className="col-lg-6">
                              <div className="sigma_counter-wrapper style-3">
                                {counterMetrics.map((metric) => (
                                    <CounterItem key={metric.id} metric={metric} />
                                ))}
                            </div>  
                        </div>                
                        <div className="col-lg-6">
                            <div className="sigma_counter-image with-bg style-3 bg-center bg-cover" style={{ backgroundImage: `url(${Decking_Img})` }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};