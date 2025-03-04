import React from 'react';
import Image from '../components/Image';
import aboutSideImage from "../../src/assets/images/about-side.jpg";
import SectionTitle from '../components/SectionTitle';
import Paragraph from '../components/Paragraph';
import ListCheck from '../components/ListCheck';

function AboutSection() {
  return (
    <section className='position-relative section-padding-y'>
        <div className='container'>
            <div className="row">
                <div className="col-md-6 col-12">
                    <Image imgPath={aboutSideImage} imgAlt="About Image" classes="w-100 rounded-3" />
                </div>
                <div className="col-md-6 col-12">
                    <h5>Online property marketplace</h5>
                    <SectionTitle contentLight="We help you find your" contentBold="new place." />
                    <Paragraph content="Online property marketplace to buy, sell, and rent residential and commercial properties. Used by millions of renters to find property." />
                    <ListCheck/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection