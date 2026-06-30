const services = [

{
icon:"fa-faucet",
title:"Bathroom Installation",
description:"Complete installation of toilets, wash basins, showers and bathroom fittings."
},

{
icon:"fa-shower",
title:"Shower Installation",
description:"Professional shower installation and repairs."
},

{
icon:"fa-toilet",
title:"Toilet Installation",
description:"Modern toilet installation for homes and businesses."
},

{
icon:"fa-water",
title:"Water Pump Installation",
description:"Domestic and commercial water pump installation."
},

{
icon:"fa-tools",
title:"Leak Detection",
description:"Detecting and repairing hidden leaks."
},

{
icon:"fa-wrench",
title:"Emergency Plumbing",
description:"Fast emergency plumbing repairs."
},

{
icon:"fa-sink",
title:"Kitchen Plumbing",
description:"Kitchen sink and drainage installation."
},

{
icon:"fa-tint",
title:"Pipe Installation",
description:"PVC, PPR, Copper and HDPE pipe installation."
}

];

const grid=document.getElementById("servicesGrid");

services.forEach(service=>{

grid.innerHTML+=`

<div class="col-lg-3 col-md-6">

<div class="service-card">

<div class="service-icon">

<i class="fas ${service.icon}"></i>

</div>

<h4>${service.title}</h4>

<p>${service.description}</p>

<a href="tel:+2349012709720"

class="btn btn-primary w-100">

Book Service

</a>

</div>

</div>

`;

});