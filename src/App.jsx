import React, { useState, useRef } from "react";
import "./index.css";
import TemplateDemo from "./TemplateDemo";
import MusicCard from "./MusicCard";
import AboutSection from "./AboutSection";
import { Fade } from "react-reveal";
import Footer from "./Footer";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle'; // Import DialogTitle if you want to add a title

import song1 from "./assets/song1.mp3";
import song2 from "./assets/song2.mp3";
import image1 from "./assets/imgSong1.jpg";
import image2 from "./assets/imgSong2.jpg";

function App() {
  const [musicData, setMusicData] = useState([
    {
      id: 1,
      title: "Song 1",
      artist: "Berserk",
      imageUrl: image1,
      audioUrl: song1,
    },
    {
      id: 2,
      title: "Song 2",
      artist: "L'Morphine",
      imageUrl: image2,
      audioUrl: song2,
    },
    {
      id: 3,
      title: "Song 1",
      artist: "Berserk",
      imageUrl: image1,
      audioUrl: song1,
    },
    {
      id: 4,
      title: "Song 2",
      artist: "L'Morphine",
      imageUrl: image2,
      audioUrl: song2,
    },    {
      id: 5,
      title: "Song 1",
      artist: "Berserk",
      imageUrl: image1,
      audioUrl: song1,
    },
    {
      id: 6,
      title: "Song 2",
      artist: "L'Morphine",
      imageUrl: image2,
      audioUrl: song2,
    },
    // Add more songs as needed
  ]);

  const [open, setOpen] = useState(false);
  const [selectedMusic, setSelectedMusic] = useState(null);

  const musicCardRef = useRef(null);

  const scrollToMusicCard = () => {
    musicCardRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickOpen = (music) => {
    setSelectedMusic(music);
    setOpen(true);
  };

  const handleClose = () => {
    // Reload the page to stop music
    window.location.reload();
    setOpen(false);
    setSelectedMusic(null);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
      <TemplateDemo onMusicButtonClick={scrollToMusicCard} />
      <Fade left duration={3000}>
        <AboutSection onMusicButtonClick={scrollToMusicCard} />
      </Fade>
      <div
        ref={musicCardRef}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <Fade left duration={3000}>
          {musicData.map((music) => (
            <MusicCard
              key={music.id}
              image={music.imageUrl}
              title={music.title}
              artist={music.artist}
              audioUrl={music.audioUrl}
              onClick={() => handleClickOpen(music)}
            />
          ))}
        </Fade>
      </div>
      <Fade bottom duration={3000}>
        <Footer />
      </Fade>

      <Dialog open={open} onClose={handleClose} maxWidth="md" >
        <DialogTitle>Song</DialogTitle> {/* Optional: Add a title */}
        <DialogContent style={{backgroundColor: 'black', width:"500px"}}>
          {selectedMusic && (
            <>
              <MusicCard
                image={selectedMusic.imageUrl}
                title={selectedMusic.title}
                artist={selectedMusic.artist}
                audioUrl={selectedMusic.audioUrl}
              />
              <p style={{ marginTop: "16px", color: 'white', }}>
                Enjoy this amazing song while relaxing or working. Feel the rhythm and let the music take over!
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
