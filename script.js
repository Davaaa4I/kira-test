function showPage(id, btn) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
   
    const target = document.getElementById(id);
    if(target) {
        target.classList.add('active');
        target.scrollTop = 0;
    }

    document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function zoom(el) {
    const overlay = document.getElementById('zoomOverlay');
    const zoomedImg = document.getElementById('zoomedImg');
    
    zoomedImg.src = el.src; 
    overlay.style.display = 'flex'; 
}

function closeZoom() {
    document.getElementById('zoomOverlay').style.display = 'none';
}

function showPage(id, btn) {
    closeZoom(); 
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(id);
    if(target) {
        target.classList.add('active');
        target.scrollTop = 0;
    }
    document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}