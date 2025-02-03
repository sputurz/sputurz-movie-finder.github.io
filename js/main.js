window.addEventListener('DOMContentLoaded', () => {

    startRender()

});

async function startRender() {
    const renderModule = await import("./render.js")
    renderModule.default()
}

