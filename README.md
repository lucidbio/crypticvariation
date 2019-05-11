# Cryptic Genetic Variation Article

The main stuff you want to edit is probably in the [article](article) directory.

You can preview the master branch at https://lucidbio.github.io/crypticvariation/article/article.html (5 minute lag or so).

### How to make contributions

#### Get a copy of the article onto your own computer
[Install Git](https://git-scm.com/downloads) if you haven't already.

Open the command line and type:

`git clone https://github.com/lucidbio/crypticvariation.git`

This will copy the repository in to a folder called `crypticvariation` within the current directory.

#### Open the article locally

Find the new `crypticvariation` in your file browser, and open the `article` folder within it. Within this directory is a file called `article.html`, open this and it should load the full article in your browser.

#### Make edits

Edit the `article.html` with a text editor, and refresh the browser to view your changes.

#### Push your changes back to GitHub

Go into the `crypticvariation` directory in your browser by typing:

`cd crypticvariation`

(Optional:) in case you have added any new files to the directory, you need to tell Git about them with:

`git add *`

Now you need to tell Git you have made changes you are happy with, include a brief message about what you changed:

`git commit -am "Added a new section about gene Z"`

Finally, push the changes back to GitHub:

`git push`

### Alternative approach

You can also make small edits on the web through GitHub itself, by pressing `edit file` on the `article.html` file.

### Credit

The template we use is from [Distill](http://distill.pub).
