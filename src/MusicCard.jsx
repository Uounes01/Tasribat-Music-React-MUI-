import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { AudioPlayer } from 'react-audio-player-component';

export default function MusicCard({ image, title, artist, audioUrl, onClick }) {
  return (
    <Card 
      sx={{
        margin: 2,
        maxWidth: 545,
        backgroundColor: '#1a1a1a',
        color: "white",
        borderRadius: "15px",
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="h6" sx={{ color: 'white' }}>
            {artist}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent >
        <div style={{ borderRadius: "15px", overflow: "hidden" }}>
          <AudioPlayer
            src={audioUrl}
            minimal={false}
            width={300}
            trackHeight={75}
            barWidth={1}
            gap={1}
            visualise={true}
            backgroundColor="#FFF8DE"
            barColor="#C1D0B5"
            barPlayedColor="#99A98F"
            skipDuration={2}
            showLoopOption={true}
            showVolumeControl={true}
          />
        </div>
      </CardContent>
    </Card>
  );
}
