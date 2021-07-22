import React from 'react';
import Baseball from '../baseball/Baseball';

// Here we accept an array of issues as a prop
const Results = ({ issues }) => {
  // We create a list of rendered IssueItems by using the map method on `issues`
  const renderedList = issues.map((issue) => {
    return <Baseball key={issue.id} issue={issue} />;
  });

  // Here we return our array of IssueItems wrapped inside a parent div
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default Results;