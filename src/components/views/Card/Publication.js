import React from 'react'
import GroupedBarChart from '../Chart/GroupedBarChart'
import Button from '@mui/material/Button';

const Publication = () => {
  return (
    <>
          <Button
        size="large"
        style={{
          backgroundColor: "#931F1D",
          color: "#fff",
          padding: "10px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          marginLeft: "60rem",
          marginBottom: "10px",
        }}
      >
        Add Publication
      </Button>
    <GroupedBarChart />
    </>
  )
}

export default Publication