# AI_USE — Agent assistance and student decisions

**Project:** Alvernia Logins — Classic, Refined.  
**Documentation date:** November 6, 2026.  
**Agent:** Codex. An exact model version was not recorded in the project log.

## How the agent was used

The student supplied the redesign brief and references, then used Codex to plan, implement, inspect, test, and package the prototypes. The agent contributed substantial code and documentation; the package should not be described as entirely student-written code.

The agent:

- Reviewed the current login directory and recovered a February 2026 archived reference.
- Built the Classic and Modern HTML/CSS/JavaScript prototypes, the shared service catalog, filters, favorites, and empty states.
- Read the public homepage theme to match its maroon, gold, and neutral colors.
- Applied the student's revisions to wording, branding size, text readability, and service layout.
- Performed browser and source checks, captured screenshots, and prepared the portable ZIP and handoff guide.
- Drafted these Markdown records from the chat and saved validation evidence. This is documentation assistance, not a claim that the student independently wrote the records before the work occurred.

## Decisions retained by the student

| Decision | Student direction and resulting change |
| --- | --- |
| Explore alternatives | Requested an older-page-inspired version and a new Modern option. |
| Select the design | Preferred Classic and made it the project baseline. |
| Change the agent's copy | Asked to remove "Less searching. More doing." and "Your everyday essentials" for a more professional but warm tone. They were replaced with direct headings. |
| Match university identity | Requested colors closer to the current Alvernia homepage. Classic now uses its brighter maroon and gold. |
| Improve readability | Requested a larger, more visible website name for visitors with sight difficulties. The wordmark, Logins title, and service text were enlarged. |
| Correct the layout | Identified the empty lower-right area. Unequal parallel audience columns became consecutive full-width sections with balanced card grids. |
| Choose the delivery | Selected a portable ZIP for class review and developer handoff rather than hosted publication. |

## Peer involvement reported by the student

On November 6, the student said a classmate considered the page a huge improvement and identified color and whitespace revisions. The student clarified that they and the classmate scrolled up and down for a visual review without following links. The classmate reviewed the revised version and reported an improvement. This is reported visual peer feedback and retesting, not an agent-observed usability session or a functional link/sign-in test. The agent has not supplied a peer name, completion time, or unreported task outcome. See [TEST_LOG.md](TEST_LOG.md).

## Sources and assets

- [Current login directory](https://www.alvernia.edu/logins): service names, audiences, and destinations, captured November 5, 2026.
- [Archived February 15, 2026 page](https://web.archive.org/web/20260215195630/https://www.alvernia.edu/logins): the familiar Classic reference confirmed by the student.
- [Alvernia homepage](https://www.alvernia.edu/) and its public theme stylesheet: current visual palette.
- Official university logo files were bundled locally without redrawing them. Service icons were written as SVG code. No AI-generated photos or illustrations were used.

The archive's original hover animation was not verified; the new animations interpret the experience described by the student.

## Verification and limits

The agent compared the catalog with the captured source, checked rendered links, tried filters/favorites/empty states, and inspected desktop and phone layouts. Existing evidence is in [VALIDATION.md](VALIDATION.md) and [reference/browser-checks.json](reference/browser-checks.json).

The agent did not sign in to university systems, deploy to the university CMS, observe the peer session, or conduct a full accessibility audit. Direct `file://` browser execution was blocked by the preview tool; the local dependency structure was checked. Student review, any required functional peer task, and the remaining course submission items are still required.

## November 9 navigation revision

The student requested the original university dropdown menus in the white header and supplied two reference screenshots. Codex extracted current public menu labels/destinations, implemented the static header and local JavaScript/CSS behavior, and checked desktop/phone menus, keyboard controls, Find It results/empty states, and directory regressions. The source capture and new browser observations are included. No new peer review of this header has been reported.

The student subsequently requested removal of the top design-concept bar for a final-concept appearance. Codex removed it from Classic and aligned the browser title, footer, and directory helper wording with that presentation. The comparison alternative and academic documentation remain available separately.
