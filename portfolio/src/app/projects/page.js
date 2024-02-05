import Navbar from "../components/navbar";
import Image from "next/image";
import styles from './projects.module.css';

function Projects() {
  return (
    <div>
      <Navbar />
      <div className={`container ${styles.projectitems}`}>
        <div className='row justify-content-center text-center'>
          <div className='col-4'>
          <h1>EAR ELEVATION</h1>
					<p class="description">A game designed for musicians to improve their auditory recognition</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
						<Image class="project" src='/ear-elevation.png' width={240} height={160} alt="img"></Image></a>
					<a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
          </div>

          <div className='col-4'>
          <h1>VIRTUAL SYNTH</h1>
					<p class="description">A virtual musical synthesizer with controls for oscillator selection and
						envelope settings</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
						<Image class="project" src='/ear-elevation.png' width={240} height={160} alt="img"></Image></a>
					<a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
          </div>

          <div className='col-4'>
          <h1>TIK-TAC-TOE</h1>
					<p class="description">A rendition of the classic game Tic-Tac-Toe<br></br>Give it
						a go!</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
						<Image class="project" src='/ear-elevation.png' width={240} height={160} alt="img"></Image></a>
					<a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
          </div>

        </div>
        <div className='row justify-content-center text-center'>

          <div className='col-4'>
          <h1>TO DO LIST</h1>
					<p class="description">A rendition of the classic game Tic-Tac-Toe / Noughts and Crosses <br></br>Give it
						a go!</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
						<Image class="project" src='/ear-elevation.png' width={240} height={160} alt="img"></Image></a>
					<a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
          </div>

          <div className='col-4'>
          <h1>WEATHER APP</h1>
					<p class="description">A rendition of the classic game Tic-Tac-Toe / Noughts and Crosses <br></br>Give it
						a go!</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
						<Image class="project" src='/ear-elevation.png' width={240} height={160} alt="img"></Image></a>
					<a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
          </div>

          <div className='col-4'>
          <h1>REACT RESTURANT</h1>
					<p class="description">A rendition of the classic game Tic-Tac-Toe / Noughts and Crosses <br></br>Give it
						a go!</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
						<Image class="project" src='/ear-elevation.png' width={240} height={160} alt="img"></Image></a>
					<a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
          </div>

        </div>
        <div className='row justify-content-center text-center'>

          <div className='col-4'>
          <h1>ALARM CLOCK</h1>
					<p class="description">A rendition of the classic game Tic-Tac-Toe / Noughts and Crosses <br></br>Give it
						a go!</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
						<Image class="project" src='/ear-elevation.png' width={240} height={160} alt="img"></Image></a>
					<a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
          </div>

          <div className='col-4'>
          <h1>STORY GENERATOR</h1>
					<p class="description">A rendition of the classic game Tic-Tac-Toe / Noughts and Crosses <br></br>Give it
						a go!</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
						<Image class="project" src='/ear-elevation.png' width={240} height={160} alt="img"></Image></a>
					<a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
          </div>

          <div className='col-4'>
          <h1>MIND READER</h1>
					<p class="description">A rendition of the classic game Tic-Tac-Toe / Noughts and Crosses <br></br>Give it
						a go!</p><a href="https://ear-elevation-ni65itt2f-bradpk.vercel.app/" target='_blank'>
						<Image class="project" src='/ear-elevation.png' width={240} height={160} alt="img"></Image></a>
					<a href="https://github.com/Bradpk/Ear_Elevation_Front_Two"><br></br><br></br>Github Repo</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;