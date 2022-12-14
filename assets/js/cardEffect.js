if (typeof cardEffectMouseHandler === 'undefined') {
    const cardEffectMouseHandler = e => {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    }
    
    
    for (const card of document.querySelectorAll(".card")) {
        card.addEventListener("mousemove", cardEffectMouseHandler);
    }
}
