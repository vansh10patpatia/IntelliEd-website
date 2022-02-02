import React from 'react';
import feature_1 from "../images/feature_1.jpg";
import feature_2 from "../images/features2.png";
import feature_3 from "../images/features3.png";

import feature_4 from "../images/features4.png";
import feature_5 from "../images/features5.png";
import feature_6 from "../images/features6.png";
import "./Feature.css";
import { Row, Container, Col } from "react-bootstrap";



function Feature(props) {

    const features = [
        {
            image:feature_1,
            heading:'Predictive Analytics',
            subHeading:'Discover patterns and insights through our <br /> interactive visualizations that are designed<br /> to answer key questions'
        },
        {
            image:feature_2,
            heading:'Interactive Visualizations',
            subHeading:'From models trained on prior student<br /> performance data, predict future outcomes<br /> so that you can address learning gaps<br /> before it’s too late.',
        },
        {
            image:feature_3,
            heading:'One Click Sharing',
            subHeading:'With just a few clicks, you can share your<br /> reports with students, counsellors, parents & <br />school admins.',
        },
        {
            image:feature_4,
            heading:'Timely Interventions',
            subHeading:'Use insights to provide feedback and make<br /> effective interventions to support struggling <br /> students.',
        },
        {
            image:feature_5,
            heading:'Real Time Notifications',
            subHeading:'Within seconds, notify your institution<br /> regarding important circulars and keep them<br /> updated.',
        },
        {
            image:feature_6,
            heading:'Unified Data Source',
            subHeading:'An interactive system that integrates data<br /> from multiple sources to provide detailed<br /> analysis.',
        }
    ]

    function renderFeature(item,key){
        return(
            <Col md={4}>
                <div className='feature-container'>
                    <div className='feature-box'>
                        <div className='feature-image-box'>
                        <img src={item.image} className='features-image' />
                        </div>
                        <div className='feature-context'>{item.heading}</div>
                        <div className='feature-sub-context' dangerouslySetInnerHTML={{ __html: item.subHeading }}></div>
                    </div>
                </div>
            </Col>
        )
    }

    return (
        <Container>
            <Row>
                <h1 className='feature-heading'>
                    <div className='feature-lining'></div>
                    Features
                    <div className='feature-lining'></div>
                </h1>
            </Row>
            <Row>
                {features.map((item,key) =>renderFeature(item,key))}
            </Row>
        </Container>
//         <div className='Feature'>
            
//             <h1 className='feature-heading'>
//                 <div className='feature-lining'></div>&emsp;
//                 Features
//                 &emsp;<div className='feature-lining'></div>
//             </h1>
//             <div className='feature-container'>
//                  <div className='feature-box'>
//                      <div className='feature-image-box'>
//                      <img src={feature_1} className='features-image' />
//                      </div>
//                      <div className='feature-context'>Predictive Analytics</div>
//                      <div className='feature-sub-context'>Discover patterns and insights through our<br /> interactive visualizations that are designed<br /> to answer key questions</div>
//                  </div>

//                  <div className='feature-box'>
//                  <div className='feature-image-box'>
//                  <img src={feature_2} className='features-image'/>
//                  </div>
//                  <div className='feature-context'>Interactive Visualizations </div>
//                     <div className='feature-sub-context'>From models trained on prior student<br /> performance data, predict future outcomes<br /> so that you can address learning gaps<br /> before it’s too late.</div> 
//                 </div>

//                 <div className='feature-box'>
//                 <div className='feature-image-box'>
//                 <img src={feature_3}  className='features-image'/>
//                 </div>
//                 <div className='feature-context'>One Click Sharing</div>
//                      <div className='feature-sub-context'>With just a few clicks, you can share your<br /> reports with students, counsellors, parents & <br />school admins.</div>
//                 </div>
//             </div>

            



// <br />

//             <div className='feature-container'>

//                  <div className='feature-box'>
//                      <div className='feature-image-box'>
//                      <img src={feature_4} className='features-image' />
//                      </div>
//                      <div className='feature-context'>Timely Interventions</div>
//                      <div className='feature-sub-context'>Use insights to provide feedback and make<br />
//  effective interventions to support struggling <br />
// students.</div>
//                  </div>

//                  <div className='feature-box'>
//                  <div className='feature-image-box'>
//                  <img src={feature_5} className='features-image'/>
//                  </div>
//                  <div className='feature-context'>Real Time Notifications</div>
//                     <div className='feature-sub-context'>Within seconds, notify your institution<br />
//  regarding important circulars and keep them<br />
//  updated.</div> 
//                 </div>

//                 <div className='feature-box'>
//                 <div className='feature-image-box'>
//                 <img src={feature_6}  className='features-image'/>
//                 </div>
//                 <div className='feature-context'>Unified Data Source</div>
//                      <div className='feature-sub-context'>An interactive system that integrates data<br />
//  from multiple sources to provide detailed<br />
//  analysis.</div>
//                 </div>
//             </div>
//         </div>
    );
}

export default Feature;