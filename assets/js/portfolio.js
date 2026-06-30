const projects = [

{
    title:"Luxury Bathroom Installation",
    image:"assets/images/portfolio/project1.jpg",
    category:"Bathroom",
    location:"Enugu",
    description:"Complete bathroom plumbing installation with premium fittings."
},

{
    title:"Kitchen Plumbing System",
    image:"assets/images/portfolio/project2.jpg",
    category:"Kitchen",
    location:"Enugu",
    description:"Modern kitchen sink and drainage installation."
},

{
    title:"Water Tank Installation",
    image:"assets/images/portfolio/project3.jpg",
    category:"Water Supply",
    location:"Enugu",
    description:"1000L overhead water tank installation."
},

{
    title:"Pipe Repair Service",
    image:"assets/images/portfolio/project4.jpg",
    category:"Repairs",
    location:"Enugu",
    description:"Emergency leak repair and pipe replacement."
},

{
    title:"Hotel Plumbing Project",
    image:"assets/images/portfolio/project5.jpg",
    category:"Commercial",
    location:"Enugu",
    description:"Complete plumbing installation for a hotel."
},

{
    title:"Residential Plumbing",
    image:"assets/images/portfolio/project6.jpg",
    category:"Residential",
    location:"Enugu",
    description:"Complete home plumbing installation."
}

];

const container=document.getElementById("portfolioContainer");

projects.forEach(project=>{

container.innerHTML +=`

<div class="col-lg-4 col-md-6">

<div class="portfolio-card">

<img src="${project.image}" class="img-fluid">

<div class="portfolio-body">

<span class="badge bg-primary">

${project.category}

</span>

<h4 class="mt-3">

${project.title}

</h4>

<p>

${project.description}

</p>

<p>

<i class="fas fa-map-marker-alt"></i>

${project.location}

</p>

<a href="contact.html"

class="btn btn-primary w-100">

Request Similar Service

</a>

</div>

</div>

</div>

`;

});
