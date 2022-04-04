import React from 'react';
import feature_1 from "../images/feature_1.jpg";
import feature_2 from "../images/features2.png";
import feature_3 from "../images/features3.png";

import feature_4 from "../images/features4.png";
import feature_5 from "../images/features5.png";
import feature_6 from "../images/features6.png";
import "./Feature.css";
import { Row, Container, Col } from "react-bootstrap";



function Feature() {

    const features = [
        {
            image:feature_1,
            heading:'Predictive Analytics',
            subHeading:'Discover patterns and insights through our  interactive visualizations that are designed to answer key questions'
        },
        {
            image:feature_2,
            heading:'Interactive Visualizations',
            subHeading:'From models trained on prior student performance data, predict future outcomes so that you can address learning gaps before it’s too late.',
        },
        {
            image:feature_3,
            heading:'One Click Sharing',
            subHeading:'With just a few clicks, you can share your reports with students, counsellors, parents & school admins.',
        },
        {
            image:feature_4,
            heading:'Timely Interventions',
            subHeading:'Use insights to provide feedback and make effective interventions to support struggling  students.',
        },
        {
            image:feature_5,
            heading:'Real Time Notifications',
            subHeading:'Within seconds, notify your institution regarding important circulars and keep them updated.',
        },
        {
            image:feature_6,
            heading:'Unified Data Source',
            subHeading:'An interactive system that integrates data from multiple sources to provide detailed analysis.',
        }
    ]

    function renderFeature(item,key){
        return(
            <Col md={4}>
                <div className='feature-container'>
                    <div className='feature-box'>
                        <div className='feature-image-box'>
                            <img src={item.image} alt='features-image' className='features-image' />
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
    );
}

export default Feature;