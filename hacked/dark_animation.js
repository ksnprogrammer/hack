function darknessFalls() {
    const canvas = document.getElementById('darknessFalls');
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, width, height);
    
    const particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 10 + 5,
            speed: Math.random() * 2 + 1
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
        
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            p.y += p.speed;
            if (p.y > height) p.y = 0;
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

darknessFalls();