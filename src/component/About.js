import React from 'react'
import { Container } from 'reactstrap'
import './About.css'

export default function MyAbout() {
    return (
        <Container>
            <h1 class="display-3 d-flex justify-content-center">About</h1>

            {/* BEGIN RPA Exp. */}
            <div class="row pt-5">
                <div class="col"></div>
                <div class="col myHeader d-flex justify-content-left">RPA Developer</div>
                <div class="col myHeader d-flex justify-content-center">Central Bank</div>
                <div class="col myHeader d-flex justify-content-center">Nov. 2021</div>
                <div class="col"></div>
            </div>
            <div class="row pt-3">
                <div class="col-1"></div>
                <div class="col-1"></div>
                <div class="col-8">
                    <ul>
                        <li>RPA = Robotic Process Automation</li>
                        <li>As an RPA Developer, my role is focused on working with various departments and users to help identify areas where automation can be a benefit to them and the company.</li>
                        <li>I'm always monitoring current automation processes and looking for ways to continually improve.</li>
                        <li>I participate in an on call rotation that could include working night's or weekends to address emergency issues.</li>
                        <li>I contribute to the support and development of architecture needs for the RPA department.</li>
                        <li>Primary technology used is; UiPath and Orchestrator.</li>
                        <li>I also develop code for more unique activities that are required for certain projects.  This code could be developed in python, vb, java, javascript, and SQL.</li>
                        <li>My wide array of experience in COBOL DB2, Java, and Web Development allow me to offer a unique insigth to various RPA processes.</li>
                    </ul>
                </div>
                <div class="col-1"></div>
                <div class="col-1"></div>
            </div>
            {/* END RPA Exp. */}

            {/* BEGIN Full Stack */}
            <div class="row pt-5">
                <div class="col"></div>
                <div class="col myHeader d-flex justify-content-left">Full Stack Developer</div>
                <div class="col myHeader d-flex justify-content-center">Central Bank</div>
                <div class="col myHeader d-flex justify-content-center">Jun. 2016 - Nov. 2021</div>
                <div class="col"></div>
            </div>
            <div class="row pt-3">
                <div class="col-1"></div>
                <div class="col-1"></div>
                <div class="col-8">
                    <ul>
                        <li>As a Full Stack Developer, my role was focused on development of new feature and fixes/upgrades to the current version of Central Banks Online Banking.</li>
                        <li>I worked with various internal and external users to </li>
                        <li>I'm always monitoring current automation processes and looking for ways to continually improve.</li>
                        <li>I participate in an on call rotation that could include working night's or weekends to address emergency issues.</li>
                        <li>I contribute to the support and development of architecture needs for the RPA department.</li>
                        <li>Primary technology used is; UiPath and Orchestrator.</li>
                        <li>I also develop code for more unique activities that are required for certain projects.  This code could be developed in python, vb, java, javascript, and SQL.</li>
                        <li>My wide array of experience in COBOL DB2, Java, and Web Development allow me to offer a unique insigth to various RPA processes.</li>
                    </ul>
                </div>
                <div class="col-1"></div>
                <div class="col-1"></div>
            </div>
            {/* END Full Stack */}

        </Container>
    )
}