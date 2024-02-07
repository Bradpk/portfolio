import Navbar from "../components/navbar";
import styles from './blog.module.css';

function Blog() {
  return (
    <div>
      <Navbar />
      <div className={`container ${styles.blogcontainer}`}>
        <div id="carouselExampleCaptions" className='carousel slide'>
          <div className='carousel-indicators'>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="10" aria-label="Slide 11"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="11" aria-label="Slide 12"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="12" aria-label="Slide 13"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="13" aria-label="Slide 14"></button>
          </div>
          <div className={`container carousel-inner ${styles.content}`}>
            <div class="carousel-item active">
              <div className='justify-content-center text-center'>
                <h1>WEEK ONE</h1>
                <p>It begins. Going into this, I didn't have any preconceptions about what the bootcamp would be like or how it would be structured, so I can't say either way that it was or wasn't what I expected. It seems so far that the boot camp strikes a good balance between self problem solving which prepares us of what an actual job environment would be like, yet having the tutors there to help us out if we hit a blocker. What struck me out of the gate, is how quickly I am going to have to adapt to being in a learning environment again. The last time I was in school was about 8 years ago so it's been a fair minute. It's a little intimidating but I am up for a challenge and I'm curious to see how well I will be able to retain all this new information. </p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK TWO</h1>
                <p>This week was the second week of our onboarding process. We were introduced to HTML, CSS and JavaScript. The anology I have latched onto is that HTML is the builder, CSS is the artist and JavaScript is the wizard. They each play an important and unique role in the creation of an app or webpage. I had looked into all three of these on a rudimentary level before the bootcamp started which gave me a little headstart. HTML and CSS do not seem too difficult at the moment other than the sheer amount tags I need to remember, I find myself constantly needing to look at cheatsheets. JavaScript on the other hand seems like it's a different beast and requires much more of a problem solving mindset, will definately need more time until I'm comfortable with it.  </p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK THREE</h1>
                <p>This was the first week after the onboarding process. Definitely figuring out how to approach problem-solving. I felt confident going into this week. My understanding of JavaScript syntax and what I'm looking at on the screen is coming together. Although I was cut down to size and felt a little dissapointed in myself after this weeks project. It was a mind reader project that uses a math trick to guess a number the user picked in their head. I was unable to figure out how to dynamically render the answer and instead decided to just hard code it in. I realized that merely knowing and understanding syntax doesn't get you very far as far as building a project goes. I need to become more methodical and calculated in how I approach future projects. </p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK FOUR</h1>
                <p>This week we were introduced to API's and our project involved making a weather app that fetches weather data for a given zipcode. I felt good this week and was able to successfully create the project with all the functionality intended. The most valuable lesson I learned was the significance of strategizing before diving into a project. By approaching tasks in a calculated manner, you ultimately save time in the long run, even if it means delaying the actual coding process. This involves thoroughly analyzing the project, planning the logic, and outlining the implementation steps. Here's hoping the rest of the bootcamp runs as smoothly as this week. We'll see. </p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK FIVE</h1>
                <p>This week, we began focusing on principles and techniques commonly employed by companies to enhance speed, efficiency, and teamwork in the work environment, known as agile development. We learned about Kanban boards, tickets, and implementing MoSCoW principles, which involve categorizing Must-haves, Should-haves, Could-haves, and Wants before starting coding. It's a method for prioritizing which aspects of the code should be implemented first. Our project this week was a tic-tac-toe game, which I successfully completed, although the responsiveness of my project looked wack on mobile devices. The complexity of the javascript needed for this project definitely seemed like a big step up from our other projects. </p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK SIX</h1>
                <p>Frameworks! To be honest I wasn't even aware frameworks were a thing. I assumed that vanilla javascript and the other coding languages was all there really was, certainly a spanner has been thrown into the works. We are learning about a JavaScript framework called React. Currently I find it challenging to use. I do recognize that frameworks have the potential to streamline the coding process in the long run. However, since I'm still in the early stages of learning how to work with React, I find it more difficult compared to working with vanilla JavaScript. Although we didn't go into this week they also told about Next.js. So theres frameworks on top of frameworks? Gah</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK SEVEN</h1>
                <p>This week, we continued working with React. Additionally, we were introduced to using the command line and learned some basic commands such as cd, ls, mkdir, pwd, and a few others. Learning the command line feels almost as in-depth and involved as learning a language or a framework. There are definitely more aspects to programming than I initially thought. The breadth of things I need to know and learn keeps expanding, which is becoming quite intimidating. I hope my brain can keep up. Anyway, this week's project was a to-do list. It required functionality for users to add and delete different items, and to categorize them into views by completed and not completed tasks. </p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK EIGHT</h1>
                <p>Python! I had already anticipated that we'd be learning Python at some point. I was actually surprised at how many similarities there were between JavaScript and Python. The syntax was definitely different, but the underlying principles seemed to be more or less the same to me. This also marks the halfway point in the bootcamp. I think my biggest hurdles in the bootcamp have been more or less the same since day one: retention and how quickly I'm able to adapt to new concepts and information. It's incredibly fast-paced, to the point where I'm questioning whether I'm absorbing all the information needed before we move on to the next topic. I plan to definately keep studying after the bootcamp to solidify all the things I've learnt so far.</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK NINE</h1>
                <p>SQL! This week, we've been delving into SQL and databases. I've completed a couple of basic SQL tutorials now, and it seems much more straightforward than learning Python or JavaScript because the syntax is more akin to plain English. Although the SQL syntax seemed fairly easy, I still had some difficulty grasping how to use Python in combination with SQL, as I was under the misconception that you would use one or the other. I'm sure, like everything in programming so far, it will become more intuitive the more time you spend with it. The ideas of backend and frontend are still somewhat mysterious to me. I perfectly understand what they both are, but as for how they connect with each other, there's a gap in my understanding.  </p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK TEN</h1>
                <p>Django! Django is Python based framework that is named after Django Reinhardt, a fact I appreciate as a guitarist. So we've been learning about how models, views and url files in Django work and how to set up a back end repo and making our own databases. Our project this week had us revisit an older react project and combine it with our back end repo to make http requests, which cleared up a huge ammount of confusion I had the week prior about how the back end and front end actually commincate with each other. The front aspect of this project was as simple as just repalcing a prior url with a new one, the bulk of the work was setting up the database. We also had to use a google chrome extension called CORS to get it to work correctly. </p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK ELEVEN</h1>
                <p>Frameworks on top of frameworks. This week, we had to use Django Rest Framework, which is a framework built on top of Django. There were a few differences between the two, but the one that stood out to me the most was the use of a separate serializer file. Overall, my experience with Django and the Django Rest Framework has been a mix of ups and downs. Getting the project set up seems to be half the battle and can be very frustrating. However, once I figured out how to get everything installed and running, it seemed fairly easy. Creating our own database in hindsight was not as daunting as it initially seemed, and the Thunder Client extension we used made running CRUD operations on our database information a piece of cake.</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK TWELVE</h1>
                <p>Not long now! This week, we're shifting gears and planning for our capstone project, which we will complete over the following two weeks. We had to get approval for a project of our choice and write out a plan for it that utilizes aspects of the agile development process, including setting up a Kanban board, MoSCoW, creating wireframes, and pseudocoding. The project idea I've chosen is an app for musicians, something within my wheelhouse. It will consist of musical games that use a JavaScript library called Tone.js, allowing me to code audible sound waves of different pitches and lengths. The games will have users listen to and then guess different musical scales, intervals, and arpeggios. The app will also allow them to create an account to keep track of their prior scores.</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK THIRTEEN</h1>
                <p>.</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK FOURTEEN</h1>
                <p>.</p>
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
      </div>
    </div>

  );
}

export default Blog;