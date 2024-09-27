import './app.css'

//  tech blog section DRY
 const blogs = [
  {
    'heading' : 'This Is Your Brain On Helium',
    'text' : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, voluptate mollitia voluptates iure harum autem facere aut cum. Dolorem, molestias animi nisi esse quam quo optio! Quidem nobis",
    'date' : 'May 19, 2025'
  },
  {
    'heading' : 'In Search Of Intelligence',
    'text' : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, voluptate mollitia voluptatesiure harum autem facere aut cum. Dolorem, molestias animi nisi esse quam quo optio! Quidem nobis inventore voluptatum.",
    'date' : 'June 12, 2025'
  },
  {
    'heading' : 'Should Public Transit Be Free?',
    'text' : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, voluptate mollitia voluptates iure harum autem facere aut cum. Dolorem, molestias animi nisi esse quam quo optio! Quidem nobis",
    'date' : 'March 17, 2025'
  },
 ];

 const speaking = [
  {
    'title': 'NY Economics Forum',
    'location': 'New York, NY',
    'date': 'August 25th 2025, 7:00pm'
  },
  {
    'title': 'Emerging Tech Meet-Up',
    'location': 'San Francisco, CA',
    'date': 'August 25th 2025, 7:00pm'
  },
  {
    'title': 'Creative Code Meetup',
    'location': 'Denver, CO',
    'date': 'August 25th 2025, 7:00pm'
  },
 ];

 const blogSection = document.querySelector('.blog-posts');

 blogs.forEach(post =>  {
  const blogItem = 
  `
  <div>
  <p class="blog-heading">${post.heading}</p>
  <p class="blog-text">${post.text}</p>
  <p class="blog-date">${post.date}</p>
  </div>
  `;
  blogSection.innerHTML += blogItem;
 });

//  dynamically render speaking events

const eventSection = document.querySelector(".events-card");
 speaking.forEach(event => {
  const eventItem = `
  <div>
  <p class="event-title">${event.title}</p>
  <p class="event-location">${event.location}</p>
  <p class="event-date">${event.date}</p>
  </div>
  `;
  eventSection.innerHTML += eventItem;
 });