import Navbar from "../components/navbar";
import Image from "next/image";
import styles from './projects.module.css';

function Projects() {
  return (
    <div>
      <Navbar />
      <div className={`container ${styles.projectitems}`}>
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
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
              <div className='justify-content-center text-center'>
                <h1>EAR ELEVATION</h1>
                <p class="description">A game designed for musicians to improve their auditory recognition</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
                  <Image src='/ear-elevation.png' width={600} height={400} alt="img"></Image></a>
                <a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>VIRTUAL SYNTHESIZER</h1>
                <p class="description">A game designed for musicians to improve their auditory recognition</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
                  <Image src='/ear-elevation.png' width={300} height={200} alt="img"></Image></a>
                <a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>TIK-TAC-TOE</h1>
                <p class="description">A game designed for musicians to improve their auditory recognition</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
                  <Image src='/ear-elevation.png' width={300} height={200} alt="img"></Image></a>
                <a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>TO DO LIST</h1>
                <p class="description">A game designed for musicians to improve their auditory recognition</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
                  <Image src='/ear-elevation.png' width={300} height={200} alt="img"></Image></a>
                <a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEATHER APP</h1>
                <p class="description">A game designed for musicians to improve their auditory recognition</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
                  <Image src='/ear-elevation.png' width={300} height={200} alt="img"></Image></a>
                <a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>REACT RESTAURANT</h1>
                <p class="description">A game designed for musicians to improve their auditory recognition</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
                  <Image src='/ear-elevation.png' width={300} height={200} alt="img"></Image></a>
                <a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>ALARM CLOCK</h1>
                <p class="description">A game designed for musicians to improve their auditory recognition</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
                  <Image src='/ear-elevation.png' width={300} height={200} alt="img"></Image></a>
                <a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>STORY GENERATOR</h1>
                <p class="description">A game designed for musicians to improve their auditory recognition</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
                  <Image src='/ear-elevation.png' width={300} height={200} alt="img"></Image></a>
                <a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>MIND READER</h1>
                <p class="description">A game designed for musicians to improve their auditory recognition</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
                  <Image src='/ear-elevation.png' width={300} height={200} alt="img"></Image></a>
                <a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
              </div>
            </div>

  

          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className='row justify-content-center text-center'>
          <div className='col-4'>
            <h1>EAR ELEVATION</h1>
            <p class="description">A game designed for musicians to improve their auditory recognition</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
              <Image src='/ear-elevation.png' width={300} height={200} alt="img"></Image></a>
            <a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
          </div>

          <div className='col-4'>
            <h1>VIRTUAL SYNTH</h1>
            <p class="description">A virtual musical synthesizer with controls for oscillator selection and
              envelope settings</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
              <Image src='/ear-elevation.png' width={300} height={200} alt="img"></Image></a>
            <a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
          </div>

          <div className='col-4'>
            <h1>TIK-TAC-TOE</h1>
            <p class="description">A rendition of the classic game Tic-Tac-Toe<br></br>Give it
              a go!</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
              <Image src='/ear-elevation.png' width={300} height={200} alt="img"></Image></a>
            <a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
          </div>

        </div>
        <div className='row justify-content-center text-center'>

          <div className='col-4'>
            <h1>TO DO LIST</h1>
            <p class="description">A to-do list, because you keep forgetting that you need
              onions from Kroger </p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
              <Image src='/ear-elevation.png' width={300} height={200} alt="img"></Image></a>
            <a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
          </div>

          <div className='col-4'>
            <h1>WEATHER APP</h1>
            <p class="description">A weather app that allows you to fetch weather information from a given zip
              code</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
              <Image src='/ear-elevation.png' width={300} height={200} alt="img"></Image></a>
            <a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
          </div>

          <div className='col-4'>
            <h1>REACT RESTURANT</h1>
            <p class="description">A mock restaurant website I created to practice making HTTP requests</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
              <Image src='/ear-elevation.png' width={300} height={200} alt="img"></Image></a>
            <a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
          </div>

        </div>
        <div className='row justify-content-center text-center'>

          <div className='col-4'>
            <h1>ALARM CLOCK</h1>
            <p class="description">An alarm clock designed to get you up and at 'em. But whats the magic
              button do?</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
              <Image src='/ear-elevation.png' width={300} height={200} alt="img"></Image></a>
            <a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
          </div>

          <div className='col-4'>
            <h1>STORY GENERATOR</h1>
            <p class="description">A random story generator with options for names and measurements</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
              <Image src='/ear-elevation.png' width={300} height={200} alt="img"></Image></a>
            <a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
          </div>

          <div className='col-4'>
            <h1>MIND READER</h1>
            <p class="description">A project that guesses the number you picked in your head, whoa..</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
              <Image src='/ear-elevation.png' width={300} height={200} alt="img"></Image></a>
            <a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;