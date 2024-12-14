export default function (Alpine) {
    Alpine.directive('youtube-embed', (el) => {
        const link = el.getAttribute('x-video-id') || '';
        const title = el.getAttribute('x-title') || '';
        // Create the button's HTML structure
        el.innerHTML = `
            <h3 class="text-2xl font-bold">${title}</h3>
            <iframe class="mb-10 rounded-xl shadow-xl m-auto" width="560" height="315"
                src="https://www.youtube.com/embed/${link}" title="${title}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    });
}
