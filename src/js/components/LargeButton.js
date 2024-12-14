export default function (Alpine) {
    Alpine.directive('large-button', (el) => {

        const content = el.innerHTML.trim();
        const color = el.getAttribute('x-color') || '#';
        const link = el.getAttribute('x-link') || '#';
        const title = el.getAttribute('x-title') || '#';

        el.innerHTML = `
      <a href="${link}" target="_blank"
            class='${color} w-full group block p-6 mb-10 rounded-xl shadow-lg hover:shadow-2xl transform transition hover:-translate-y-2 hover:scale-105'>
            <div class="flex items-center justify-center space-x-4">
                ${content}
                <span class="text-lg font-semibold group-hover:text-purple-100">${title}</span>
            </div>
        </a>
      `;
    });
}
