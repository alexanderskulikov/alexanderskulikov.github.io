# CSAI Web Page

This is a static GitHub Pages-ready version of the curriculum PDF.

## Files

- `index.html` contains the page structure and selected top-level sections from the PDF.
- `curriculum.html`, `research.html`, `olympiads.html`, `professors.html`, and `career.html` are detail pages linked from the main page.
- `styles.css` contains all responsive layout and visual styling.
- `main.js` contains all rendering logic for curriculum items, course cards, course details, filters, projects, professors, and career profiles.
- `data/courses.js` is the course catalog. It is data-only.
- `data/curriculum.js` is the 8-semester overview.
- `data/projects.js` is the project catalog.
- `data/professors.js` is the professor profile catalog.
- `data/career.js` is the career profile catalog.
- Images are referenced from the repository-level `../images/` directory. They are not duplicated inside `webpage/`.

## Course Data Format

Each course is one object in `data/courses.js`:

```js
{
  id: "alg1",
  title: "Algorithms 1: Basic Toolbox",
  group: "Semester 2",
  category: "Programming and AI",
  categoryKey: "prog",
  semester: "2nd semester",
  workload: "6 ECTS, 3 hours per week",
  assessment: "homework, final exam",
  summary: "...",
  prerequisites: ["..."],
  whereNeeded: ["..."],
  syllabus: ["..."],
  outcomes: ["..."],
  instructors: [{ name: "Pavel Mavrin", image: "../images/professors/mavrin.jpeg" }],
  source: "curriculum/courses/algorithms_1.tex",
  order: 10
}
```

To add a new course, append a new object to `window.CSAI_COURSES`.
If it should appear in the 8-semester map, add an item with the same `id` to `window.CSAI_CURRICULUM`.
The UI does not need to be changed; `main.js` renders all courses through the same functions.

## GitHub Pages

Use the `webpage/` directory as the Pages source. The site has no build step and no external runtime dependencies.
