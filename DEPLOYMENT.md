# GitHub repository and deployment

**Requested:** November 9, 2026.  
**Visibility:** Public repository and public GitHub Pages site, explicitly selected by the student.  
**Status:** Published and verified on November 9, 2026.

- Repository: https://github.com/ethanmarcin0/alvernia-logins-redesign
- Live website: https://ethanmarcin0.github.io/alvernia-logins-redesign/
- Successful deployment: https://github.com/ethanmarcin0/alvernia-logins-redesign/actions/runs/42641184109
- Deployed source commit: `19bff78c6bb0ada65484340a62f641c195d9c7ac`. Later documentation-only commits do not change the deployed pages.

## Verification

The public repository is on `main`, and GitHub Pages enforces HTTPS. The Actions build passed the service catalog, navigation, JavaScript syntax, and local asset checks; deployment completed successfully. Ten public pages/assets were fetched and matched the local build byte for byte; hashes are recorded in [reference/deployment-checks.json](reference/deployment-checks.json).

Browser inspection confirmed Classic at the root URL, the title `Logins | Alvernia University`, 34 directory listings, no concept bar, and no broken images. Desktop 1440 × 1000 and phone 375 × 812 had no horizontal overflow. The phone's first screen includes the title, search, audience controls, and initial quick links. Published screenshots are in `screenshots/deployed-classic-desktop.jpg` and `screenshots/deployed-classic-mobile.jpg`. Existing functional checks are recorded in TEST_LOG.md; university authentication was not tested.

Future pushes affecting the HTML, assets, build scripts, handoff guide, or workflow automatically validate and deploy. Documentation-only updates outside the workflow's path filters do not trigger another deployment. Check the Actions result after a page change.

## Publication layout

The source repository preserves the portable project, including the course Markdown files and screenshots. `scripts/build-pages.py` creates `_site/` with Classic copied to `index.html`, keeps `classic.html` for existing local navigation, and exposes the comparison page as `concepts.html`. The Modern alternative links back to that comparison page in the deployed artifact.

`.github/workflows/pages.yml` validates, builds, and deploys the static artifact. No backend, new authentication system, or third-party package installation is introduced. Provider sign-ins still occur on the existing university services. This GitHub Pages publication does not modify alvernia.edu.
