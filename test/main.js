(function () {
  const courses = (window.CSAI_COURSES || []).slice().sort((a, b) => a.order - b.order);
  const curriculum = window.CSAI_CURRICULUM || [];
  const projects = (window.CSAI_PROJECTS || []).slice().sort((a, b) => a.order - b.order);
  const courseById = new Map(courses.map((course) => [course.id, course]));

  const categoryNames = {
    math: "Mathematics",
    prog: "Programming and AI",
    proj: "Project-based",
    opt: "Elective",
    misc: "General studies",
  };

  const escapeHtml = (value) =>
    String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const truncate = (value, max = 210) => {
    const text = String(value || "").trim();
    if (text.length <= max) return text;
    return text.slice(0, max).replace(/\s+\S*$/, "") + "...";
  };

  function renderCurriculum() {
    const mount = document.querySelector("[data-curriculum]");
    if (!mount) return;
    mount.innerHTML = curriculum
      .map((semester) => {
        const items = semester.items
          .map((item) => {
            const hasDetails = courseById.has(item.id);
            const tag = hasDetails ? "button" : "span";
            const attrs = hasDetails
              ? `type="button" data-course-id="${escapeHtml(item.id)}"`
              : `aria-disabled="true"`;
            return `<${tag} class="course-pill ${escapeHtml(item.categoryKey)}" ${attrs}>
              ${escapeHtml(item.title)}
            </${tag}>`;
          })
          .join("");
        return `<section class="semester-column" aria-label="Semester ${semester.semester}">
          <h3 class="semester-title">Semester ${semester.semester}</h3>
          ${items}
        </section>`;
      })
      .join("");
  }

  function instructorImages(course) {
    return (course.instructors || [])
      .slice(0, 4)
      .map((person) => `<img src="${escapeHtml(person.image)}" alt="${escapeHtml(person.name)}">`)
      .join("");
  }

  function renderCourseCard(course) {
    return `<article class="course-card ${escapeHtml(course.categoryKey)}" data-category="${escapeHtml(course.categoryKey)}">
      <div class="course-meta">
        <span class="course-chip">${escapeHtml(course.group)}</span>
        <span class="course-chip">${escapeHtml(course.category)}</span>
      </div>
      <h3>${escapeHtml(course.title)}</h3>
      <p>${escapeHtml(truncate(course.summary))}</p>
      <div class="course-meta">
        <span class="course-chip">${escapeHtml(course.workload)}</span>
        <span class="course-chip">${escapeHtml(course.assessment)}</span>
      </div>
      <div class="instructor-row" aria-label="Instructors">${instructorImages(course)}</div>
      <button type="button" data-course-id="${escapeHtml(course.id)}">Details</button>
    </article>`;
  }

  function renderCourses(filter = "all") {
    const mount = document.querySelector("[data-courses]");
    if (!mount) return;
    const visible = filter === "all" ? courses : courses.filter((course) => course.categoryKey === filter);
    mount.innerHTML = visible.map(renderCourseCard).join("");
  }

  function listHtml(items) {
    if (!items || !items.length) return "<p>No data specified.</p>";
    return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function openCourse(courseId) {
    const course = courseById.get(courseId);
    const modal = document.querySelector("[data-modal]");
    const content = document.querySelector("[data-modal-content]");
    if (!course || !modal || !content) return;

    const instructors = (course.instructors || [])
      .map((person) => `<span class="course-chip">${escapeHtml(person.name)}</span>`)
      .join("");

    content.innerHTML = `<article class="modal-inner">
      <p class="eyebrow">${escapeHtml(course.group)}</p>
      <h2>${escapeHtml(course.title)}</h2>
      <div class="modal-meta">
        <span class="course-chip">${escapeHtml(categoryNames[course.categoryKey] || course.category)}</span>
        <span class="course-chip">${escapeHtml(course.semester)}</span>
        <span class="course-chip">${escapeHtml(course.workload)}</span>
        <span class="course-chip">${escapeHtml(course.assessment)}</span>
      </div>
      <p>${escapeHtml(course.summary)}</p>
      <div class="modal-meta">${instructors}</div>
      <div class="modal-grid">
        <section class="modal-panel"><h3>Prerequisites</h3>${listHtml(course.prerequisites)}</section>
        <section class="modal-panel"><h3>Where you will need it</h3>${listHtml(course.whereNeeded)}</section>
        <section class="modal-panel"><h3>Syllabus</h3>${listHtml(course.syllabus)}</section>
        <section class="modal-panel"><h3>You will learn</h3>${listHtml(course.outcomes)}</section>
      </div>
    </article>`;

    if (typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      modal.setAttribute("open", "");
    }
  }

  function closeModal() {
    const modal = document.querySelector("[data-modal]");
    if (!modal) return;
    if (typeof modal.close === "function") modal.close();
    else modal.removeAttribute("open");
  }

  function renderProjects() {
    const mount = document.querySelector("[data-projects]");
    if (!mount) return;
    mount.innerHTML = projects
      .map((project) => {
        const keywords = (project.keywords || [])
          .slice(0, 5)
          .map((keyword) => `<span class="keyword">${escapeHtml(keyword)}</span>`)
          .join("");
        return `<article class="project-card">
          <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}">
          <div class="course-meta">
            <span class="course-chip">${escapeHtml(project.term)}</span>
            <span class="course-chip">${escapeHtml(project.type)}</span>
          </div>
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(truncate(project.description, 260))}</p>
          <div class="keywords">${keywords}</div>
        </article>`;
      })
      .join("");
  }

  function bindEvents() {
    document.addEventListener("click", (event) => {
      const courseButton = event.target.closest("[data-course-id]");
      if (courseButton) {
        openCourse(courseButton.dataset.courseId);
      }

      const filter = event.target.closest("[data-filter]");
      if (filter) {
        document.querySelectorAll("[data-filter]").forEach((button) => button.classList.remove("active"));
        filter.classList.add("active");
        renderCourses(filter.dataset.filter);
      }

      if (event.target.matches("[data-close]")) {
        closeModal();
      }
    });

    const modal = document.querySelector("[data-modal]");
    if (modal) {
      modal.addEventListener("click", (event) => {
        const rect = modal.getBoundingClientRect();
        const inDialog =
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom;
        if (!inDialog) closeModal();
      });
    }
  }

  renderCurriculum();
  renderCourses();
  renderProjects();
  bindEvents();
})();
