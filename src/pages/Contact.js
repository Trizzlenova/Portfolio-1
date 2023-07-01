import React from 'react';

const Contact = () => {
  const githubURL = 'https://github.com/Jessaroo';
  const linkedInURL = 'www.linkedin.com/in/1jessicafigueroa';

  return (
    <div>
      <h1>Feel free to contact me by email or through LinkedIn. Check out my Github page as well.</h1>
      <p>Email: J_caetana@yahoo.com</p>
      <p>Github: <a href={githubURL} target="_blank" rel="noopener noreferrer">{githubURL}</a></p>
      <p>LinkedIn: <a href={`https://${linkedInURL}`} target="_blank" rel="noopener noreferrer">{linkedInURL}</a></p>
    </div>
  );
};

export default Contact;