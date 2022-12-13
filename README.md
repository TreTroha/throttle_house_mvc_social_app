# Install

`npm install`

---

# Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

---

# Run

`npm start`

---

<p align="center">
  <img src="https://github.com/TreTroha/throttle_house_mvc_social_app/blob/main/throttle_house.gif" alt="animated walkthrough" />
 </p>

## Throttle House
This is a social media web application built from scratch ideally targeted towards car enthusiasts or gear heads in general!

## How It's Made:
**Tech used:** EJS, Bootstrap, JavaScript, Node.JS, MongoDB, Cloudinary (for image storage)

This application was built using MVC design pattern and primary focuses on the structure in the backend. We utilize MongoDB for keeping track of users, comments, and posts; then layer on cloudinary to manage our image uploading. Regarding users we utilize passport and local Auth (email & passwords) to log users in and out of the account. I plan to add google auth later down the road as well for ease of access. This application functions entirely without client side JS which marginally speeds up responsiveness + cuts out event listeners all together. This also means we are utilizing method override to change our forms from post to get, put, and delete actions. On this application as well we are utilizing mongo-store and express session to manage our returning users and alleviate that repetitive logging in and out by utilizing a cookie on the end users device. This project was a blast to make and I want to build onto it on the future

## Optimizations
As mentioned above I would like to go over this application once more and flush out both the styling and some of the layout. Additionally I am looking to add additional authorizations such as google, microsoft, and twitter to ease the user creation/log-in process. Finally I will switch out the EJS for React down the road so I can update information without forcing reloads on pages like the feed/profiles which will aid the user experience as well.

## Lessons Learned:
This was one of my first builds from scratch encorporating multiple node packages I was not familiar with such as passport and sessions, it was a ton of fun learning how to fit all the pieces together and flush out a working prototypal app that I can fork and build from in the future. I will admit styling is not my strong suit so I kept the css/bootstrap to a minimum and mainly kept this to a MVP which demonstrates function over looks. Overall this application was truly fun to build :)!
