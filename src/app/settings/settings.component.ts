import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  careers = [
    {
      company: 'ServisHero',
      duration: 'May 2016 - Jul 2017',
      industry: 'Booking Platform (Services)',
      role: 'Intern / Junior Developer',
      url: 'https://servishero.com/',
      imgUrl: 'assets/servishero.png',
      desc: 'ServisHero provides the best way to hire local service professionals for both home and office, and is regarded as Southeast Asia’s leading mobile app for booking local service professionals.',
      workSummary: 'I initially worked with their mobile app development team, developing their then hybrid application using Ionic. Thereafter, I joined their web development team primarily on the front-end, mainly using React and Redux.',
    },
    {
      company: 'Pencil',
      duration: 'May - Aug, 2018, 2019, 2020',
      industry: 'Creative AI (Advertisting)',
      role: 'Development Intern',
      url: 'https://trypencil.com/',
      imgUrl: 'assets/pencil.png',
      desc: 'Pencil provides a generative creative platform to create language and automate visuals that scales up the creativity of advertising.',
      workSummary: 'I joined them across three summers, helping them kick-start their SaaS platform initially back in 2018 when they were first founded. Thereafter in 2019, I joined their AI team and helped build a model to predict a set of metrics for the copies generated by Pencil\'s AI system. In 2020, I joined them to assist the development as they transit to a redesign of their platform UI.',
    },
    {
      company: 'Supabase',
      duration: 'May 2020 - Present',
      industry: 'Realtime Database',
      role: 'Contributor',
      url: 'http://supabase.io/',
      imgUrl: 'assets/supabase.png',
      desc: 'Supabase adds realtime and restful APIs to Postgres without a single line of code, and is the open source alternative to Firebase',
      workSummary: 'I joined the team in May 2020 as the company was first inducted into Y-Combinator (S20), mainly developing the platform\'s table editor interface for users to interact with their database with.',
    },
  ]

  freelances = [
    {
      company: 'Lightbox Rooftop',
      industry: 'Event Space',
      workType: 'Design & Development',
      url: 'https://lightboxrooftop.com/',
      imgUrl: 'assets/lightbox.png',
      desc: 'Lightbox is a creative and event hub, which caters to the unconventional and contemporary crowd within our social circle.',
      workSummary: 'I worked on both the design and development of the website and deployed it on AWS S3.',
    },
    {
      company: 'Hotel 89',
      industry: 'Fashion (E-Commerce)',
      workType: 'Design & Development',
      url: 'http://hotel89menswear.com',
      imgUrl: 'assets/hotel89.png',
      desc: 'A luxury men\'s fashion label from Bhutan that seamlessly integrates with the country\'s traditional arts.',
      workSummary: 'I worked on both the design and development of the website, as well as set up their e-commerce shop on Shopify which is thereafter embedded on the site.',
    },
    {
      company: 'MyFishman',
      industry: 'Seafood',
      workType: 'Design & Development',
      url: 'http://myfishman.com',
      imgUrl: 'assets/myfishman.png',
      desc: 'MyFishman delivers freshly caught fish & shellfish from Malaysia\'s seas right to your doorstep at an affordable price.',
      workSummary: 'I helped them in migrating their old e-commerce website from Wix over to Shopify, and worked on building a customized theme from a template.',
    },
    {
      company: 'Stared',
      industry: 'Cosmetics',
      workType: 'Design & Development',
      url: 'http://staredcosmetics.com.s3-website-ap-southeast-1.amazonaws.com/',
      imgUrl: 'assets/stared.png',
      desc: 'Stared Cosmetics focuses on creating an affordable and essential highlighter that complements your everyday look',
      workSummary: 'I covered both the design and development of their site and deployed them on AWS S3. The company, however, is no longer in operation, and their official site is inactive.'
    },
    {
      company: 'MadThread',
      industry: 'Fashion (Rental)',
      workType: 'Development',
      url: null,
      imgUrl: 'assets/thecloset.png',
      desc: 'MadThread is Singapore\'s leading cult fashion rental platform.',
      workSummary: 'I aided them in building two landing pages using the designs provided by their designers, and deployed them on AWS S3.'
    },
    {
      company: 'AngelCentral',
      industry: 'Investor Community',
      workType: 'Design',
      url: 'http://angelcentral.co',
      imgUrl: 'assets/angelcentral.png',
      desc: 'AngelCentral is a community for angel investors in Singapore and SEA to get quality deal flow, learning on angel investing and syndication services.',
      workSummary: 'I was hired as their design consultant and crafted designs for their public website and private user platform through the use of Sketch and Figma',
    },
  ]

  projects = [
    {
      company: 'Live Text Recognition',
      url: 'https://github.com/joshenlim/live-text-recognition',
      imgUrl: 'assets/textrec.png',
      desc: 'My final year project (AY18/19 S2 ~ AY19/20 S1) as part of my undergraduate bachelors requirements at NTU where I had the opportunity to explore deep neural network solutions to scene text recognition and built my own text recognition model. I also extended the project by creating a simple web and mobile application to utilize the trained model, by serving the text recognition service over an API server.',
    },
    {
      company: 'Parallax',
      url: 'https://parallax.joshen.me',
      imgUrl: 'assets/parallax.png',
      desc: 'A simple project for me to explore implementing parallax scrolling animations for web designs. I used a couple of my own photos from my trip to Seoul back in December 2018.',
    },
    {
      company: 'Galax-C',
      url: 'https://space.joshen.me/',
      imgUrl: 'assets/space.png',
      desc: 'A random project which I had in mind to design sites for unrealistic/futuristic/random products, to challenge and practice my designing. I built this site with the context that we were in a time when space travel was normalized.',
    },
  ]

}
