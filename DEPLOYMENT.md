# GitHub repository and deployment

**Requested:** November 9, 2026.  
**Visibility:** Public repository and public GitHub Pages site, explicitly selected by the student.  
**Status:** Prepared; upload and deployment verification are in progress.

- Repository: https://github.com/ethanmarcin0/alvernia-logins-redesign
- Planned website URL: https://ethanmarcin0.github.io/alvernia-logins-redesign/

## Publication layout

The source repository preserves the portable project, including the course Markdown files and screenshots. `scripts/build-pages.py` creates `_site/` with Classic copied to `index.html`, keeps `classic.html` for existing local navigation, and exposes the comparison page as `concepts.html`. The Modern alternative links back to that comparison page in the deployed artifact.

`.github/workflows/pages.yml` validates, builds, and deploys the static artifact. No backend, new authentication system, or third-party package installation is introduced. Provider sign-ins still occur on the existing university services. This GitHub Pages publication does not modify alvernia.edu.
