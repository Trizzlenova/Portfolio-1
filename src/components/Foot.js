import React from 'react';
import '../App.css';

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h1>Created by Jessica Figueroa</h1>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}