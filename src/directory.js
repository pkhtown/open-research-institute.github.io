export async function initDirectory(options = {}) {
    const { onlyFeatured } = options 

    const response = await fetch('./directory.yml');
    const directoryYaml = await response.text();
    const { researchers } = jsyaml.load(directoryYaml);
    const gridElement = document.querySelector(".advisors-grid")
    
    for (let item of researchers) {
        if (onlyFeatured) {
            if (item.featured != true) continue
        }
        const newElement = document.createElement('a')
        newElement.className = 'advisor-card rainbow-border'
        newElement.href = item.website
        newElement.target = '_blank'
        newElement.innerHTML = 
        `
        <div class="advisor-photo">
            <img src="${item.picture}">
        </div>
        <div class="advisor-name">${item.name}</div>
        <div class="advisor-title">
            ${item.research_statement}
        </div>
        `

        gridElement.appendChild(newElement)
    }

    return researchers
}