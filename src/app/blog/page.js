import Navbar from "../components/navbar";
import styles from './blog.module.css';
import Template from "../components/template";

function Blog() {
  return (
    <div>
      <Navbar />
      <Template>
      <div className={`container-fluid ${styles.blogcontainer}`}>
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
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="14" aria-label="Slide 15"></button>
          </div>
          <div className={`container carousel-inner ${styles.content}`}>
            <div class="carousel-item active">
              <div className='justify-content-center text-center'>
                <h1>WEEK ONE</h1>
                <p>Here marks the beginning of a blog I wrote following my journey through a coding bootcamp in Lexington, Kentucky. Going into this, I didn't have any preconceptions about what the bootcamp would be like or how it would be structured, so I can't say either way that it was or wasn't what I expected. So far that the boot camp strikes a good balance between self problem solving which prepares us of what an actual job environment would be like, yet having the tutors there to help us out if we hit a blocker. What struck me out of the gate, is how quickly I am going to have to adapt to being in a learning environment again. The last time I was in school was about 8 years ago so it's been a fair minute. It's intimidating but I'm up for a challenge and I'm curious to see how well I will be able to retain all this new information. </p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK TWO</h1>
                <p>This week was the second week of our onboarding process. We were introduced to HTML, CSS and JavaScript. The anology I have latched onto is that HTML is the builder, CSS is the artist and JavaScript is the wizard. It may be a simplistic analogy but it helps. They each play an important and unique role in the creation of an app or webpage. I had looked into all three of these on a rudimentary level before the bootcamp started which gave me a little headstart. HTML and CSS do not seem too difficult at the moment other than the sheer amount tags I need to remember, I find myself constantly needing to look at cheatsheets. JavaScript on the other hand seems like it's a different beast and requires much more of a problem solving mindset, will definately need more time until I'm comfortable with it.  </p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK THREE</h1>
                <p>This was the first official week after the onboarding process. I felt confident going into this week. My understanding of JavaScript syntax and what I'm looking at on the screen is coming together. Although I was cut down to size and felt a little dissapointed in myself after this weeks project. It was a mind reader project that uses a math trick to guess a number the user picked in their head. We have goals for each project we are given and one of our goals for this weeks project was to figure out how to dynamically render the answer, I was unable to do so and instead decided to just hard code it in. I realized that merely knowing and understanding syntax doesn't get you very far as far as building a project goes. I need to become more methodical and calculated in how I approach future projects. </p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK FOUR</h1>
                <p>This week we were introduced to API's. The project we were given involved making a weather app that fetches weather data from a zipcode that the user enters, for this we used an HTTP library called Axios. I felt good this week and was able to successfully create the project with all the functionality intended and a working HTTP 'get' request. The most valuable lesson I learned was the significance of strategizing before diving into a project. By approaching tasks in a calculated manner, you ultimately save time in the long run, even if it means delaying the actual coding process. This involves thoroughly analyzing the project, planning the logic, and outlining the implementation steps. Here's hoping the rest of the bootcamp runs as smoothly as this week. There's only one way to find out. </p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK FIVE</h1>
                <p>This week, we began focusing on principles and techniques commonly used by companies to enhance speed, efficiency, and teamwork in the work environment, known as agile development. We learned about Kanban boards, tickets, and implementing MoSCoW principles, which involve categorizing Must-haves, Should-haves, Could-haves, and Wants before starting coding. It's a method for prioritizing which aspects of the code should be implemented first. Our project this week was a tic-tac-toe game, which I definately found difficult yet not too difficult as I managed to successfully complete it. Although the responsiveness of my project looked completely wack on mobile devices. The complexity of the javascript needed for this project definitely seemed like a big step up from our other projects. </p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK SIX</h1>
                <p>Frameworks! To be honest I wasn't even aware frameworks were a thing. I assumed that vanilla javascript and the other coding languages was all there really was, certainly a spanner has been thrown into the works. We are learning about a JavaScript framework called React. Currently I find it challenging to use. I do recognize that frameworks have the potential to streamline the coding process in the long run. However, since I'm still in the early stages of learning how to work with React, I find it more difficult compared to working with vanilla JavaScript. The weeks project was to make a mock restaurant website that used another HTTP 'get' request. Although we didn't go into this week they also told about Next.js. So theres frameworks on top of frameworks? Gah</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK SEVEN</h1>
                <p>This week, we continued working with React. Additionally, we were introduced to using the command line and learned some basic commands such as cd, ls, mkdir, pwd, and a few others. Learning the command line feels almost as in-depth and involved as learning a language or a framework. There are definitely more aspects to programming than I thought there would be. My main concern at this point of the bootcamp is that the breadth of things I need to know and learn is expanding so quickly and I'm worried that I may not be able to abosrb all the information before moving on to the next topic. Anyway, this week's project was a to-do list. It required functionality for users to add and delete different items, and to categorize them into views by completed and not completed tasks. </p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK EIGHT</h1>
                <p>Python! I had anticipated that we'd be learning Python at some point. I was actually surprised at how many similarities there were between JavaScript and Python. The syntax was different, but the underlying principles seemed to be more or less the same to me in that sense that they both use variables, conditionals, loops, functions etc.. This also marks the halfway point in the bootcamp. I think my biggest hurdles in the bootcamp have been more or less the same since day one: retention and how quickly I'm able to adapt to new concepts and information. It's incredibly fast-paced, to the point where I'm questioning whether I'm absorbing all the information needed before we move on to the next topic. I plan to definately keep studying after the bootcamp to solidify all the things I've learnt so far.</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK NINE</h1>
                <p>SQL! This week, we've been delving into SQL and databases. I've completed a few basic SQL tutorials now, and it seems much more straightforward than Python or JavaScript because the syntax is more akin to plain English. Although the SQL syntax seemed fairly easy, I still had some difficulty grasping how to use Python in combination with SQL, I was under the impression that you would use one or the other instead of both at the same time. I'm sure, like everything else I've encountered so far in programming, it will become more intuitive the more time you spend with it. I keep hearing the terms 'Client Side' and 'Server Side' being thrown around which are somewhat confusing. I understand what they both are on a basic level, but as for how they connect with each other, there's a gap in my understanding. </p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK TEN</h1>
                <p>Django! Django is Python based framework that is named after Django Reinhardt, a fact I appreciate as a guitarist. So this week has been spent learning about how models, views and url files in Django work and how to set up a back end repo and making our own databases. Our project this week had us revisit an older react project we did and combine it with our back end repo to make http requests, which cleared up a huge ammount of confusion I had the week prior about how the back end and front end actually commincate with each other. The front aspect of this project was as simple as just repalcing a prior url with a new one, the bulk of the work was setting up the database which was pretty tough I'll admit. We also had to use a google chrome extension called CORS to get it to work correctly. </p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK ELEVEN</h1>
                <p>Frameworks on top of frameworks. This week, we had to use Django Rest Framework, which is a framework built on top of Django. There were a few differences between the two, but the one thing that stood out to me the most was the use of a separate serializer file. Overall, my experience with Django and the Django Rest Framework has been a mix of ups and downs. Getting the project repositories set up correctly seems to be half the battle and can be very frustrating. However, once I figured out how to get everything installed and running properly, it didn't seem that bad. Creating our own database in hindsight was not as daunting as it initially seemed, and the Thunder Client extension we used made running CRUD operations on our database information a piece of cake.</p>
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
                <p>I began coding my capstone project this week. I would like to say it went well, but I ended up facing some challenges that led me to waste a huge amount of time. We were encouraged to use Next.js, which is a framework I hadn't used prior to this project, so it took some time to get used to the differences between Next.js and regular React. Although the major hurdle was the fact that I opted for my project to have user accounts, which required me to wrap my head around how user authentication works. This has proven to be far more complicated and time-consuming than I thought. In fact, as I type this, it is still not working. In hindsight, I should have coded all the games that only required front-end work first and then worried about user authentication afterward. </p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>WEEK FOURTEEN</h1>
                <p>Final week of the bootcamp! I got a head start and coded throughout the weekend. I decided to code all the games first so that I would have something presentable, as after the first week I didn't have much to show. The games weren't too difficult to code, and I had played around with the Tone.js library earlier in the bootcamp, so I was already familiar with how it worked. I was quite proud of the games I created and thought the utilization of an audible library was quite cool and unique. After making the frontend all look pretty, I tackled the user authentication one more time. Some other members of our cohort were having similar issues, so we got in a group and, with some help from our tutors, we were able to get the user authentication working, and I had a completed capstone project! Success! </p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='justify-content-center text-center'>
                <h1>DEMO DAY</h1>
                <p>After completing our capstone project, our bootcamp held an event where we had to present our projects to a room full of people from the local tech community. I used to have terrible stage fright when I was younger, but I was surprised at my lack of nervousness. The demo day went well and I felt a lot of pride in what I had achieved. In retrospect, there is no doubt the bootcamp was worth it. As someone who had zero prior experience in coding or anything tech-related, I almost cannot believe the amount I was able to learn in just a few months. It was definitely a very challenging course, and there were plenty of times I was feeling overwhelmed and stressed out with all the deadlines and sheer volume of material I needed to learn. However, it has become clear to me that it's an environment I thrive in. </p>
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
    </Template>
     </div>


  );
}

export default Blog;