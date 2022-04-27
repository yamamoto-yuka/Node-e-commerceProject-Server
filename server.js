//console.log("This is a node server");
import express from "express";
import cors from "cors";
import {First} from "./first.mpdule";

const server = express();
server.use(cors());

let jsonData = [
  {
    id: 1,
    name: "iPhone",
    price: 1999,
    image: "https://www.bell.ca/Styles/images/apple/img-WhyBell_Apple_marchLTO_Savings.png",
  },
  {
    id: 2,
    name: "Samsung",
    price: 999,
    image: "https://www.bell.ca/Styles/images/Samsung_Galaxy_A03s_Black_lrg1.png",
  },
  {
    id: 3,
    name: "LG",
    price: 599,
    image:
      "https://www.lg.com/ca_en/images/cell-phones/md07512171/features/MC-Velvet-AuroraGray-3a-SecondYearPromise-Mobile.jpg",
  },
];

// req is what the browser (client) sends to the server
// res is what the server would send to the browser (client)
server.get("/", (req, res) => {
  res.send("Hello from the Node server");
});

server.get("/contact", (req, res) => {
  // res.send("This is the contact page");
  res.json([
    {
      title: "Contact Us",
      Contacttext:
        "For answers to common questions, browse our Help Centre pages. If you need help with something more specific, have an in-store question, or need to contact us urgently, see below:",
      detail1:
        'Our 24/7 live chat is a great way to get the help you need. If the chat appears offline, wait a moment and you will see the status switch to "Online".',
      detail2:
        "If our live chat isn't available, please give us a call. We have a convenient call-back feature, so you won’t have to wait on hold.",
      detail3:
        "Please note: Our live chat agents are unavailable to assist with questions about your scheduled home delivery. For more information, please visit our Large Item Scheduled Delivery help page.",
      Heading2: "Still looking for an answer?",
      helpText:
        "We’re here to help. Please contact us and we’ll make sure you get the information you need.",
      phone: "123-456-789",
      email: "bestbuy@email.com",
    },
  ]);
});

server.get("/about-us", (req, res) => {
  // res.send("This is the about us page");
  res.json([
    {
      heading: "Our Company",
      Desc1: "Wholly-owned subsidiary of Best Buy Co. Inc.",
      Desc2: "Canada’s largest consumer electronics retailer",
      Desc3: "Operating the Best Buy, Geek Squad, Best Buy Mobile and Best Buy Business brands",
    },
    {
      heading: "Our Presence",
      Desc1: "160+ stores coast-to-coast",
      Desc2: "80% of Canadians live within 25 km of one of our stores",
      Desc3:
        "Most visited multichannel retailer with over 250 million visits in-store and on BestBuy.ca each year",
    },
    {
      heading: "Our People",
      Desc1: "12,000+ Canadians employed nationwide",
      Desc2: "More than 1,200 employees at corporate head office in Burnaby, BC",
      Desc3:
        "We invest in our people through flexible work hours, remote work options, comprehensive benefits, a company-matched pension plan, an in-house professional development program, and more",
    },
  ]);
});

server.get("/product/:id", (req, res) => {
  // res.send(req.params.id);
  res.send(jsonData.find(x => x.id == req.params.id));
});

// Req us by the Client to the Server
// Res is by the Server to the Client
server.get("/products", (req, res) => {
  res.json(jsonData);
});

// Create a server and run from the port number specified
server.listen(4400, function () {
  console.log("Node Express server is now running on port 4400");
});

let objGreeting = new First();
console.log(objGreeting.greetings());
