# zeppelin-website

The website for zeppelin.

- `src` -- contains the jekyll sources for the website itself.

## Building the site

### Install jekyll, if you haven't already

If running Ubuntu you can do:

```
sudo apt install ruby
sudo apt-get install ruby-dev
sudo gem install bundler jekyll
```

### Previewing

To preview changes as you are hacking on, do the following:

```
bundle exec jekyll serve
```

Then connect to `http://127.0.0.1:4000`. This will stay updated as you
tweak things, for the most part.

