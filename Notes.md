# Notes

## Keep in Mind

- This should be simple. Start with an MVP.

## Requirements

- [ ] Contact page
- [X] Links to LinkedIn and GitHub
- [ ] Mobile-friendly 
- [ ] Pass lighthouse a11y
- [ ] Deployed on Vercel
- [ ] CI/CD w/ GitHub Actions
- [ ] Resume Viewer

## Tasks

- [X] Take notes on what I struggle on 
- [x] Set this up in Git, send Chels the repo
  - [x] Send to both emails: zapier and chelseyachubb@gmail.com
- [x] Populate/style home page 
- [x] Take a crack at resume viewer
  - It's a bit of a mess, there are notes in the "What I Struggled On" section about this
- [x] Create Figma file for Contact Entry Component
  - [Figma Link](https://www.figma.com/design/4mRV23ogxCJM3UGVadqMxx/Contact-Card?node-id=0-1&t=U89qgyOu2vbLPVYH-1)
- [X] Think about edge cases that could break a contact card, especially with automatic phone/email identification:
  - General:
    - SQL injection
    - No input
    - Whitespace
    - Depending on how data is stored, emojis or other non-ascii stuff
  - Specific to email/phone input:
    - Intl. phone number
    - How do we handle user trying to add dashes after dashes are automatically added after three digits?
    - What if a user's email just starts with 3+ digits? Hell, what if a user's email is 123456789@hotmail.ru?
      - Probably need to instantly remove dashes if anything other than numbers are present, but dasherizing a user's email until they're most the way through typing it is still a shitty experience.

### On Deck

- [ ] Contact Entry Component
- [ ] Business card component

## What I Struggled On

- It surprised me that new pages had to be within directories as `page.tsx`--is that a React/next thing or was that one of the configurations we set up?
  - Do you know why it's a thing? It feels a little clunky but maybe I'm misunderstanding the utility of it.
- With this template also being a blog, it felt like there was a bit of a learning curve in navigating the code and it was tougher to tell what's a "react thing" vs. a "this template thing"
- Resume viewer:
  - I looked into the best ways to render a responsive pdf view, and it seems like the original `<object />` tag is a decent option. However, it's not super mobile-friendly and I haven't had the time to mess around with the CSS for it to see if it makes sense to keep it. I'm wondering what your thoughts are between the following options:
    - Try to CSS the default HTML pdf viewer into not looking ugly and being mobile-friendly
    - Convert the pdf into an image, then apply CSS to make that mobile-friendly
    - Move the resume into markdown and just use the existing blog setup to render it

## Ideas

- Improve CSS theming. Learn how to set up tailwind themes and set CSS variables to use throughout the project.
  - Current color scheme:
    - primary-dark: gray-950 (#030712)
    - primary-light: stone-50 (#fafaf9)
    - accent-1: indigo-300 (#a5b4fc)
    - accent-2: red-400 (#f87171)