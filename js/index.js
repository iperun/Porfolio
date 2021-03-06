let container;
let camera, scene, renderer;
let uniforms;

function init() {
    container = document.getElementById('awesome');
    camera = new THREE.PerspectiveCamera(-80, window.innerWidth / window.innerHeight, 1, 1200);
    camera.position.z = -200;
    camera.position.x = 680;
    console.log(camera.lookAt(0, 0, -100));
    scene = new THREE.Scene();
    var geometry = new THREE.Geometry();
    var particleCount = 60000;
    for (i = 0; i < particleCount; i++) {
        var vertex = new THREE.Vector3();
        vertex.x = 0;
        vertex.y = 0;
        vertex.z = i;
        geometry.vertices.push(vertex)
    }
    uniforms = {
        u_time: {
            type: "f",
            value: -170.0
        },
        u_resolution: {
            type: "v2",
            value: new THREE.Vector2()
        },
        u_mouse: {
            type: "v2",
            value: new THREE.Vector2()
        }
    };
    var material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent
    });
    material.transparent = !0;
    material.blending = THREE.AdditiveBlending;
    material.depthTest = !1;
    var mesh = new THREE.Points(geometry, material);
    scene.add(mesh);
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setPixelRatio(1);
    container.appendChild(renderer.domElement);
    onWindowResize();
    window.addEventListener('resize', onWindowResize, !1)
}

function onWindowResize(event) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    uniforms.u_resolution.value.x = renderer.domElement.width;
    uniforms.u_resolution.value.y = renderer.domElement.height
}

function animate() {
    requestAnimationFrame(animate);
    render()
}

function render() {
    uniforms.u_time.value += 0.01;
    renderer.render(scene, camera)
}
init();
animate()