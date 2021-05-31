import React from 'react'

export default function About() {
    return (
        <div className="about-container">
            <h3>ash todd • software developer</h3>
            <h4>skills</h4>
            <ul className="language list">
                <li>
                    <h5>Ruby</h5>
                    <ul className="skill list">
                        <li>Rails</li>
                        <li>Action Cable</li>
                        <li>Active Storage</li>
                    </ul>
                </li>
                <li>
                    <h5>JavaScript</h5>
                    <ul className="skill list">
                        <li>React</li>
                        <li>Redux</li>
                        <li>JQuery</li>
                        <li>Vanilla DOM Manipulation</li>
                        <li>AJAX</li>
                    </ul>
                </li>
                <li>
                    <h5>CSS3</h5>
                    <ul className="skill list">
                        <li>SASS</li>
                    </ul>
                </li>
                <li>
                    <h5>HTML5</h5>
                    <ul className="skill list">
                        <li>Canvas</li>
                    </ul>
                </li>
                <li>
                    <h5>...etc.</h5>
                    <ul className="skill list">
                        <li>SQL</li>
                        <li>PostgreSQL</li>
                        <li>AWS (Amazon Web Services)</li>
                        <li>UI/UX Design</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
