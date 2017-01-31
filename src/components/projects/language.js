import React from 'react';
import getResponse from '../../actions/utils'

//refer to the youtube example for making a stateless component => video list item component

const Language = (props) => {
  console.log(props, "tis props");
  const displayLanguage = "languagesssss"
  // getResponse(project.languages_url)

  return (
    <ul className="col-md-4 list-group">
      {displayLanguage}
    </ul>
  );
};

export default Language;
