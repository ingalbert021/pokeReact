
import React from "react";
import git from '../../Assets/IMG/git.ico';
import '../../Assets/Styles/styles.css';
export default function Footer() {

    return (
        <div className="mt-2">
<footer className="mt-4 text-center text-white">
<div className="card">
  <div className="card-body">
  copyright©albertodelacruz.
  <a href="https://ingalbert021.github.io/presentacion/" target="_blank"><img src={git} className="icon" alt="git" /></a>
  
  </div>
</div>
  </footer>
</div>
    );
}