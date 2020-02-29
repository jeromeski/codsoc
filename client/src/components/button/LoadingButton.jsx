
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';


let timer = (set) => setTimeout((set) => {
  return set
}, 5000);

const LoadingButton = ({isLoading}) => {
  console.log(isLoading)
  const [loading, setLoading] = useState(isLoading)

  useEffect(() => {

    timer(setLoading(false))

    return () => {
      clearTimeout(timer)
    };
  }, [loading])
  return (
    <div>
      <Button variant="success" type="submit" style={{ marginLeft: "1rem" }}>
        {loading ? <span class="sr-only">Loading</span> : "Submit"}
      </Button>
    </div>
  );
};

export default LoadingButton;
