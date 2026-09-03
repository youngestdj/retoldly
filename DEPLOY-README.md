# Retoldly — Deploy to Vercel

This folder is the deploy-ready static site for retoldly.com.

## Recommended deployment
1. Create a new GitHub repository under your own account.
2. Upload the **contents of this folder** to the repository root. `index.html` should be at the top level.
3. In Vercel, choose **Add New → Project**, import that repository, and deploy it as a static site. No build command is needed.
4. Review the temporary `*.vercel.app` URL on desktop and mobile.
5. When ready, add `retoldly.com` in the Vercel project’s Domains settings and follow the DNS records Vercel gives you.
6. Only replace the web-hosting A/CNAME records for retoldly.com. Leave mail-related MX/TXT records alone.

## Important live checks
- **Project form:** Uses FormSubmit and sends enquiries to `ogloryann@gmail.com`. FormSubmit may send a one-time activation email the first time the live form is submitted. Complete that activation before relying on the form.
- **Book a call:** Goes directly to `https://cal.com/gloryann-oshafi-retoldly`.
- **Playbook:** The CTA sends visitors to `https://thegloryann.substack.com/subscribe`. The Substack welcome email should contain `https://retoldly.com/playbook-download` as the playbook link.
- **Playbook download page:** `/playbook-download` is excluded from the sitemap and marked noindex.

## Included
- Home
- Work + full carousel lightboxes
- Favour Agari case study
- Services
- Pricing
- About
- FAQ
- Start a Project form
- Playbook signup page
- Private playbook download page
- Thank-you page
- 404 page
- Sitemap, robots.txt, favicon, and Vercel config
