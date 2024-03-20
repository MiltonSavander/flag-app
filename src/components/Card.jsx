import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useEffect } from 'react';

export default function ActionAreaCard({
  flagPng,
  countryName,
  population,
  region,
  capital,
}) {
  const h2Style = {
    color: 'white',
    fontWeight: 600,
    fontSize: '17px',
    margin: '2px 0 6px 0',
  };
  const strongStyle = {
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: 500,
    fontSize: '14px',
  };
  const spanStyle = {
    color: 'rgba(232, 230, 227, 0.7)',
    fontWeight: 400,
    fontSize: '14px',
  };

  return (
    <Card
      sx={{ width: 270 }}
      style={{
        backgroundColor: '#2B3844',
        boxShadow: '0 5px 10px 5px rgba(0, 0, 0, 0.2)',
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={flagPng} alt="" />
        <CardContent>
          <h2 style={h2Style}>{countryName}</h2>
          <Typography variant="body1">
            <strong style={strongStyle}>Population:</strong>{' '}
            <span style={spanStyle}>{population}</span>
          </Typography>
          <Typography variant="body1">
            <strong style={strongStyle}>Region:</strong>{' '}
            <span style={spanStyle}>{region}</span>
          </Typography>
          <Typography variant="body1">
            <strong style={strongStyle}>Capital:</strong>{' '}
            <span style={spanStyle}>{capital}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
