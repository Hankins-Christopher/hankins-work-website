# Hankins public website

Informational website about security testing and AI integration. The internal Hankins.work dashboard is in a separate private repository and is not included here.

## Preview

Serve this directory with any static web server, for example `python -m http.server 8765`. No build, dependencies, tracking, or form backend are required.

## Publish

The GitHub Actions workflow publishes only the explicitly selected public files and assets to GitHub Pages on pushes to main. Enable Pages with the GitHub Actions source.

For the custom domain, follow [DOMAIN-SETUP.md](DOMAIN-SETUP.md). Configure the domain in Pages settings, then configure DNS and enable HTTPS once its certificate is issued. GitHub Actions publishing uses the Pages setting rather than a CNAME file. Local split DNS may also need its apex record changed.

## Content and privacy

The business uses the Hankins brand with the owner-confirmed attribution “A service of MAU Properties LLC,” without asserting certifications, clients, provider affiliations, or membership eligibility. Client services are not currently available. Contact prompts and the brief planner have been removed at the owner’s request.

Fonts are self-hosted. Manrope is distributed under the SIL Open Font License in assets/OFL-Manrope.txt.
