<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">Developer's Portfolio</h1>

  <p align="center">
    A personal static website/portfolio template hosted with GitHub Pages, forked from:
    <a href="https://github.com/hashirshoaeb/home">/hashirshoaeb/home</a>
  </p>
</p>

[![GitHub license](https://img.shields.io/github/license/yang573/personal-page)](https://github.com/hashirshoaeb/home/blob/master/LICENSE)

<!-- [![Site preview](/public/social-image.png)](https://yang573.github.io/) -->

## Table of Contents

- [Technology Stack](#technology-stack-)
- [Structure](#structure-)
- [Sharing](#sharing-)
- [Prerequisites](#prerequisites-)
- [Setup And Deployment](#setup-and-deployment-)
- [Contributing](#contributing-)

## Technology Stack

Dependencies defined in package.json:

[Reactjs](https://reactjs.org/)
| [Bootstrap](https://getbootstrap.com/)
| [Typist](https://github.com/jstejada/react-typist)
| [GitHub API](https://developer.github.com/v3/repos/)
| [Instagram API](https://www.instagram.com/developer/embedding/)

## Structure

- Navigation bar (optional)
- Body
  - Name | Profession
  - Contact / Follow / Find me / Facebook / LinkedIn / GitHub / Instagram / Email / CodePen
  - Resume | About me
- About Me
  - Display picture (optional)
  - About myself, my Interests, Goals and Hobbies
  - Things I'm good at (Skills)
  - Resume button
- Recent Projects (using GitHub API) (optional)
- Leadership (optional)
  - Paragraph
  - Carousel images
- Skills (optional)
  - Technical Skills
  - Soft Skills
- Footer
  - Footer Note (optional)
  - Copyrights - open source
  - Acknowledgements(

## Sharing

Project is open source. Feel free to make your own version. All you need to do is to fork this repository, edit [src/editable-stuff/config.js](./src/editable-stuff/config.js) and add resume. Mark star if you like the project.

## Prerequisites

You should have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your PC. You should also own a GitHub account.

## Setup And Deployment 🔧

1. To Get Started, Fork this repository to your GitHub account:
2. Rename the repo so that it's \<your-username\>.github.io
2. Clone the forked repo from your account

3. Open in editor and edit [src/editable-stuff/config.js](./src/editable-stuff/config.js) file.

4. Add your resume as <resume.pdf> in place of [src/editable-stuff/resume.pdf](./src/editable-stuff/)

5. Edit [title](./public/index.html#L34) and meta [description](./public/index.html#L13) in [public/index.html](./public/index.html).
6. Change URL in [package.json](./package.json) file:

   ```json
    "homepage": "https://<your-username>.github.io/"
   ```

   Or for deployment at custom domain, refer [create-react-app.dev](https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson)

7. After editing run the following bash commands:

   ```bash
   npm install
   npm start
   ```

8. To deploy website, run:

   ```bash
    npm run build
    npm run deploy
   ```

   If deployment fails with:

   ```
    fatal: A branch named 'live' already exists
   ```

   simply delete the node\_modules/gh-pages/.cache/ folder and try again.

9. Go to your GitHub repo settings and change the GitHub Pages branch to "live"

10. Congrats your site is up and running. To see it live, visit:

   ```https
     https://<your-username>.github.io/
   ```

11. To change the thumbnail image:

    - Navigate to the "public" folder.  
    - There you will see "social-image.png".  
    - Delete it.   
    - Take a screenshot of your version and rename it "social-image.png" and place it there.  
    
   Next time if you make changes, repeat from step 8.

