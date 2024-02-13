import Navbar from "../components/navbar";
import Image from "next/image";
import styles from './projects.module.css';
import Template from "../components/template";

function Projects() {
  return (
    <div>
      <Navbar />
      <Template>
      <div className={`container-fluid ${styles.projectitems}`}>
        <div id="carouselExampleCaptions" class='carousel slide'>
          <div className={`carousel-indicators ${styles.indicators}`}>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
            </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className='text-center'>
                <h1>EAR ELEVATION</h1>
                <p>A game designed for musicians to improve their auditory recognition</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
                  <Image className={styles.test} src='/ear-elevation.png' width={450} height={300} alt="project screenshot"></Image></a><br></br>
                <a className={styles.github} href="https://github.com/Bradpk/Ear_Elevation_Front_Two" target='_blank'><br></br><br></br>Github Repo</a>
              </div>
            </div>
            <div class="carousel-item">
              <div className='text-center'>
                <h1>VIRTUAL SYNTHESIZER</h1>
                <p>A synthesizer with controls for oscillator selection and envelope settings</p><a href="https://synth-pi.vercel.app/piano/" target='_blank'>
                  <Image src='/synth.png' width={450} height={300} alt="project screenshot"></Image></a><br></br>
                <a className={styles.github} href="https://github.com/Bradpk/Synth" target='_blank'><br></br><br></br>Github Repo</a>
              </div>
            </div>
            <div class="carousel-item">
              <div className='text-center'>
                <h1>TIK-TAC-TOE</h1>
                <p>A rendition of the classic game Tic-Tac-Toe or Noughts and Crosses</p><a href="https://bradpk.github.io/tic-tac-toe//" target='_blank'>
                  <Image src='/tictactoe.png' width={450} height={300} alt="project screenshot"></Image></a><br></br>
                <a className={styles.github} href="https://github.com/Bradpk/tic-tac-toe" target='_blank'><br></br><br></br>Github Repo</a>
              </div>
            </div>
            <div class="carousel-item">
              <div className='text-center'>
                <h1>TO DO LIST</h1>
                <p>A to-do list, because you keep forgetting that you need onions from Kroger </p><a href="https://bradpk.github.io/to-do-list//" target='_blank'>
                  <Image src='/todolist.png' width={450} height={300} alt="project screenshot"></Image></a><br></br>
                <a className={styles.github} href="https://github.com/Bradpk/to-do-list" target='_blank'><br></br><br></br>Github Repo</a>
              </div>
            </div>
            <div class="carousel-item">
              <div className='text-center'>
                <h1>WEATHER APP</h1>
                <p>A weather app that allows you to fetch weather information from a given zip code</p><a href="https://bradpk.github.io/weather-app//" target='_blank'>
                  <Image src='/weatherapp.png' width={450} height={300} alt="project screenshot"></Image></a><br></br>
                <a className={styles.github} href="https://github.com/Bradpk/weather-app" target='_blank'><br></br><br></br>Github Repo</a>
              </div>
            </div>
            <div class="carousel-item">
              <div className='text-center'>
                <h1>REACT RESTAURANT</h1>
                <p>A mock restaurant website to practice get requests (requires CORS extension)</p><a href="https://bradpk.github.io/React-Restaurant-/#/" target='_blank'>
                  <Image src='/bistro.png' width={450} height={300} alt="project screenshot"></Image></a><br></br>
                <a className={styles.github} href="https://github.com/Bradpk/React-Restaurant-" target='_blank'><br></br><br></br>Github Repo</a>
              </div>
            </div>
            <div class="carousel-item">
              <div className='text-center'>
                <h1>ALARM CLOCK</h1>
                <p>An alarm clock designed to get you up and at 'em. Whats the magic button do?</p><a href="https://bradpk.github.io/alarm-clock/" target='_blank'>
                  <Image src='/alarmclock.png' width={450} height={300} alt="project screenshot"></Image></a><br></br>
                <a className={styles.github} href="https://github.com/Bradpk/alarm-clock" target='_blank'><br></br><br></br>Github Repo</a>
              </div>
            </div>
            <div class="carousel-item">
              <div className='text-center'>
                <h1>STORY GENERATOR</h1>
                <p>A random story generator with options for names and measurements</p><a href="https://bradpk.github.io/silly-story-generator/" target='_blank'>
                  <Image src='/sillystory.png' width={450} height={300} alt="project screenshot"></Image></a><br></br>
                <a className={styles.github} href="https://github.com/Bradpk/silly-story-generator" target='_blank'><br></br><br></br>Github Repo</a>
              </div>
            </div>
            <div class="carousel-item">
              <div className='text-center'>
                <h1>MIND READER</h1>
                <p>A project that guesses the number you picked in your head, whoa..</p><a href="https://bradpk.github.io/mind-reader/" target='_blank'>
                  <Image src='/mindreader.png' width={450} height={300} alt="project screenshot"></Image></a><br></br>
                <a className={styles.github} href="https://github.com/Bradpk/mind-reader" target='_blank'><br></br><br></br>Github Repo</a>
              </div>
            </div>
          </div>
          <div className={styles.buttonwidth}>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        </div>
      </div>
      </Template>
      </div>
    

  );
}

export default Projects;