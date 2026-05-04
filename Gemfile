source "https://rubygems.org"

# GitHub Pages — keeps us in sync with what GitHub actually builds.
# See https://pages.github.com/versions/ for the current version.
gem "github-pages", group: :jekyll_plugins

# Plugins used by github-pages (declared so local builds work too).
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end

# Windows / JRuby compatibility shims (harmless on Linux/macOS)
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
