console.log("app.js loaded");

fetch("data/projects.json")
    .then(response => response.json())
    .then(projects => {

        const projectList = document.getElementById("project-list");

        projects.forEach(project => {

            const card = document.createElement("article");
            card.className = "project-card";

            card.innerHTML = `
                <h3>${project.title}</h3>

                <p class="project-description">
                    ${project.description}
                </p>

                <div class="project-tags">
                    ${project.technology.map(tech =>
                        `<span>${tech}</span>`
                    ).join("")}
                </div>

                <a
                    class="project-link"
                    href="${project.github}"
                    target="_blank"
                >
                    GitHub Repository →
                </a>
            `;

            projectList.appendChild(card);

        });

    });
