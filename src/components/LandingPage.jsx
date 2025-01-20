import '../styles/LandingPage.css'
import { Link } from 'react-router-dom';
import useWindowDimensions from '../hooks/useWindowDimensions';
import RMCMap from '../assets/RMCMap.png'
import { useCallback, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';



function LandingPage() {
    const { height } = useWindowDimensions();

    const handleClick = useCallback(() => {
        window.scrollTo(0, height);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        let previousScrollY = 0;

        //window.ScrollToY caused lag on mobile instead using scrollIntoView.
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 500 && currentScrollY < previousScrollY) {
                const targetElement = document.getElementById("container3D");
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                    });
                }
            }

            previousScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);




    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const container = document.getElementById('container3D');
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        let adjustment = window.innerWidth < 600 ? 0 : 17;

        renderer.setSize(window.innerWidth - adjustment, window.innerHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.BasicShadowMap;

        if (!container) {
            console.error("Container element not found");
            return;
        }
        container.appendChild(renderer.domElement);

        let object;
        const loader = new GLTFLoader();

        //loads GLTF model
        loader.load(
            `/models/spAtom/scene.gltf`,
            function (gltf) {
                object = gltf.scene;
                object.scale.set(0.1, 0.1, 0.1); // Scale down model for easier management

                gltf.scene.traverse(function (node) {
                    if (node.isMesh) node.castShadow = true;
                });

                scene.add(object);
                console.log('Model loaded successfully');
            },
            xhr => console.log((xhr.loaded / xhr.total) * 100 + '% loaded'),
            error => console.log('An error happened: ' + error)
        );


        // Create rotating text ring
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 96;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'magenta';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.clearRect(0, 10, canvas.width, canvas.height - 20);
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'aqua';
        ctx.font = 'bold 80px Arial';
        ctx.fillText('The Grandy Lab', canvas.width * 0.5, canvas.height * 0.5);

        const textTexture = new THREE.CanvasTexture(canvas);
        textTexture.wrapS = THREE.RepeatWrapping;
        textTexture.wrapT = THREE.RepeatWrapping;
        textTexture.repeat.set(6, 1);

        const textRingGeometry = new THREE.CylinderGeometry(100, 100, 10, 72, 1, true);
        textRingGeometry.scale(-1, 1, 1);

        const textRingMaterial = new THREE.MeshBasicMaterial({
            map: textTexture,
            side: THREE.DoubleSide,
            alphaTest: 0.5,
        });

        const textRing = new THREE.Mesh(textRingGeometry, textRingMaterial);
        textRing.position.set(0, 50, 0);
        scene.add(textRing);


        //creates user interactions
        const controls = new OrbitControls(camera, renderer.domElement);
        camera.position.z = 7;

        //creates floor
        var meshFloor;
        meshFloor = new THREE.Mesh(
            new THREE.PlaneGeometry(50, 50, 100, 100),
            new THREE.MeshPhongMaterial({ color: 0x3D3D3D, wireframe: false })
        );
        meshFloor.rotation.x -= Math.PI / 2;
        meshFloor.position.y -= 3;
        meshFloor.receiveShadow = true;
        scene.add(meshFloor)

        //lights
        scene.add(new THREE.AmbientLight(0xffffff, 2));

        const spotLight = new THREE.SpotLight(0xffffff, 60);
        spotLight.angle = Math.PI / 5;
        spotLight.penumbra = 0.2;
        spotLight.position.set(2, 3, 3);
        spotLight.castShadow = true;

        spotLight.shadow.camera.near = 1;
        spotLight.shadow.camera.far = 20;

        spotLight.shadow.camera.right = 3;
        spotLight.shadow.camera.left = - 3;
        spotLight.shadow.camera.top = 3;
        spotLight.shadow.camera.bottom = - 3;

        spotLight.shadow.mapSize.width = 1024;
        spotLight.shadow.mapSize.height = 1024;
        scene.add(spotLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
        dirLight.position.set(0, 4, 0);
        dirLight.castShadow = true;
        dirLight.shadow.camera.near = 1;
        dirLight.shadow.camera.far = 10;

        dirLight.shadow.camera.right = 3;
        dirLight.shadow.camera.left = - 3;
        dirLight.shadow.camera.top = 3;
        dirLight.shadow.camera.bottom = - 3;

        dirLight.shadow.mapSize.width = 1024;
        dirLight.shadow.mapSize.height = 1024;
        scene.add(dirLight);

        let clock = new THREE.Clock();
        function animate() {
            if (object) {
                object.rotation.x += 0.01;
                object.rotation.y += 0.01;
            }
            let t = clock.getDelta();
            textTexture.offset.x += t * -0.125;
            controls.update();
            renderer.render(scene, camera);
        }

        renderer.setAnimationLoop(animate);

        //corrects for window adjustments
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            adjustment = window.innerWidth < 600 ? 0 : 17;
            renderer.setSize(window.innerWidth - adjustment, window.innerHeight);
        });

        return () => {
            console.log(scene);
            // Cleanup Three.js resources
            scene.traverse((object) => {
                if (object.isMesh) {
                    object.geometry.dispose();

                    if (Array.isArray(object.material)) {
                        object.material.forEach((material) => material.dispose());
                    } else {
                        object.material.dispose();
                    }
                }
            });

            if (renderer.domElement && renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }

            renderer.dispose();
            scene.clear();
        };
    }, []);



    return (
        <>
            <section
                style={{
                    '--dynamic-height': `${height}px`,
                }}>
                <div className='content'>
                    <a className='arrow' onClick={handleClick}>↓</a>
                </div>
            </section>
            <div id="container3D" />
            <section className='about-us'>
                <div className='info'>
                    <h1>About Us</h1>
                    <h2>We investigate corrosion and other materials degradation in the presence of ionizing radiation.</h2>
                    <p>The long-term objective is to predict the impact of a constant flux of ionizing radiation on metal degradation to improve the confidence in and lifetime of nuclear-related materials. With the use of advanced and unique tools, including localized electrochemical probes and the SLOWPOKE-2 nuclear reactor, our team determines corrosion rates and mechanisms to develop long-term modeling for accurate degradation mechanisms. We are a diverse and interdisciplinary team of chemists, engineers, metallurgists and physics, who do both fundamental and applied science research.</p>
                    <Link to='/Research'>Learn More</Link>
                    <div className='divider' />
                </div>
                <div className='info'>
                    <h1>Grandy Lab is Recruiting!</h1>
                    <h2>There are currently MSc and PhD positions available.</h2>
                    <p>Students with a science or engineering background who are interested in developing knowledge in electrochemistry, radiation, chemical modelling, and surface analysis are encouraged to apply. Please send an email with your CV and which project you&apos;re interested in.</p>
                    <Link to='mailto:lindsay.grandy@rmc.ca'>Contact</Link>
                    <div className='divider' />
                </div>
                <div className='contact-us'>
                    <div className='contactus-info'>
                        <h1>Contact us</h1>
                        <h2>Grandy Lab</h2>
                        <p>Royal Military College of Canada<br />
                            Sawyer Mod 5, Room 2517 (office)<br />
                            Sawyer Mod #, Room # (lab)</p>
                        <h2>Lindsay Grandy, PhD</h2>
                        <p><Link to='mailto:lindsay.grandy@rmc.ca' className='email'>lindsay.grandy@rmc.ca</Link><br />
                            613-541-6000 ext. 6989<br />
                            11 General Crerar Crescent, Kingston, ON, K7K 7B4</p>
                    </div>
                    <div className='contactus-img'>
                        <img src={RMCMap} alt='RMCMAP'></img>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandingPage