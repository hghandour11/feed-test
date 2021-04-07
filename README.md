# Feed frontend developer interview test

## Examiner Notes

One of the pages on the Feed app shows the users posts from different platform, and some data about these posts. Your task is to build this page based on the [supplied designs](#designs).

We don't expect you to spend more than a 2 to 3 hours on this task. If you can think of any other improvements that you would make to the app that would take too long to complete in this test, make a note of them in the `CHANGES.md` file.

## Getting started

To start, clone this repository and run `yarn`.

To begin develoment, run `yarn dev` and open the browser to [http://localhost:3000](http://localhost:3000). Any changes you make to the code will be hot-reloaded in the browser.

## Additional instructions

We have setup the app with Next.js (like the real Feed app) and created most of the components that you will need. However, the code has deliberately been written badly so you will need to refactor it.

We have also left a few comments throughout the code labelled "TODO". Try and complete as many of these as possible.

We mostly use Tailwind.css at Feed so we've set it up here and used it in a few places. If you would like to continue the use of Tailwind, that would be great. But if this is too unfamiliar do feel free to use whatever CSS solution you feel most comfortable with.

If you do want to use Tailwind, we recommend the cheat sheet available at [https://nerdcave.com/tailwind-cheat-sheet](https://nerdcave.com/tailwind-cheat-sheet). **N.B.** This project uses version `1.4.6`.

Please do not edit any of the files in the `/api` directory.

## Submitting the task

You can either email use the finished task, or share with us a private repository with your solution.

## Designs

These are the designs for the posts overview and the post sidepanel that the "link" and "insight" buttons open. Don't worry about pixel-perfection, but try and copy the spirit of the details.

### The overview

![Posts page overview](/public/designs/posts.jpg)

### The post sidepanel

The totals for "Engagement", "Impressions", and "Reach" can be found in `post.metrics.engagement.data`, `post.metrics.impressions.data`, and `post.metrics.reach.data`, respectively. You will need to add the values for each date within `data` to calculate the total value.

![Post sidepanel](/public/designs/sidepanel.jpg)

## Questions

If you have any questions about this task, then feel free to get in touch.
