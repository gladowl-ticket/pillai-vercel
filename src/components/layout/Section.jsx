import React from 'react';
import { Header } from './Header';
import Hero  from '../../sections/Hero/Hero';
import Partner from '../../sections/Partner/Partner';
import About from '../../sections/About/About';
import Stats from '../../sections/Stats/Stats';
import Accreditations from '../../sections/Accreditations/Accreditations';
import Research from '../../sections/Research/Research';
import Programs from '../../sections/Programs/Programs';
import Placement from '../../sections/Placement/Placement';
import Recruiters from '../../sections/Recruiters/Recruiters';
import WhyChoose from '../../sections/WhyChoose/WhyChoose';
import Alumni from '../../sections/Alumni/Alumni';
import Life from '../../sections/Life/Life';
import Infrastructure from '../../sections/Infra/Infra';
import CTA from '../../sections/CTA/CTA';
import Footer from './Footer';
import Marquee from '../../sections/Marquee/Marquee';
import Immerse from '../../sections/Immerse/Immerse';
import ApplyNowDrawer from '../../sections/ApplyNowDrawer/ApplyNowDrawer';
import FormModal from '../../sections/FormModal/FormModal';

const Section = () =>{
    return(
        <>
            <Header/>
            <Hero/>
            <About/>
            <Stats/>
            <Partner/>
            <Accreditations/>
            <Research/>
            <Programs/>
            <Placement/>
            <Recruiters/>
            <WhyChoose/>
            <Alumni/>
            <Life/>
            <Infrastructure/>
            <Immerse/>
            <CTA/>
            <Footer/>
            <Marquee/>
            <ApplyNowDrawer/>
            <FormModal/>
        </>
    );
}

export default Section;