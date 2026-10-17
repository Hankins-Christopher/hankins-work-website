# Connect Hankins.work

The public site can be viewed at https://hankins-christopher.github.io/hankins-work-website/ until the custom domain is connected.

Verified October 17, 2026: public nameservers are Cloudflare, and the apex domain has no public A record. On the owner's local network, the apex resolves to a private address. This repository contains no Cloudflare credentials. Do not expose the internal dashboard to complete this setup.

## One-time domain connection

1. Open [this repository's Pages settings](https://github.com/Hankins-Christopher/hankins-work-website/settings/pages). Set the custom domain to `hankins.work` and save. Do this before updating DNS. The GitHub preview URL will then redirect to the custom domain.
2. In Cloudflare DNS for `hankins.work`, add these records with proxy status **DNS only** during certificate setup:

| Type | Name | Target |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | hankins-christopher.github.io |

Preserve unrelated records, including private service subdomains and MX/TXT mail records. Inspect any conflicting records for the apex or www before replacing them.

3. Wait for GitHub's DNS check and certificate provisioning, then enable **Enforce HTTPS** in Pages settings.
4. Verify `https://hankins.work/`, `https://hankins.work/privacy.html`, and the interactive diagram from a device on cellular data.
5. If the public site works on cellular but not at home, update only the local apex DNS override that currently points `hankins.work` to a private address. Keep unrelated internal subdomain overrides intact.

Source: [GitHub's custom domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Contact details

Client services are not currently available. The site has no inquiry channel or project brief planner.
