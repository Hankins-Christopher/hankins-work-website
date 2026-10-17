# Hosting Hankins.work

Production runs on Proxmox through a dedicated Cloudflare Tunnel at https://hankins.work/ and https://www.hankins.work/. The tunnel publishes only the static website, without inbound router port forwarding. Mail records and private service routes remain separate.

GitHub Pages is a separate preview at https://hankins-christopher.github.io/hankins-work-website/. Git pushes update that preview; production updates must also be deployed to Proxmox.

Client services are not currently available. The site has no inquiry forms or project brief planner.
