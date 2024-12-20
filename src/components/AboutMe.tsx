'use client';

import { useEffect } from 'react';
import * as THREE from 'three';
// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// @ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Head from 'next/head';

function ThreeScene() {
    useEffect(() => {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('black');

        const camera = new THREE.PerspectiveCamera(
            80,
            600 / 300,
            0.1,
            1000
        );
        camera.position.set(0, 2, 10);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(800, 400);
        const mountNode = document.getElementById('three-container');
        if (mountNode) mountNode.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.04;
        controls.enableZoom = true;


        controls.minDistance = 9;
        controls.maxDistance = 11;
        controls.minPolarAngle = Math.PI / 2 - 0.108;
        controls.maxPolarAngle = Math.PI / 2 + 0.108;
        const light = new THREE.HemisphereLight("white", 'black');
        scene.add(light);

        const directionalLight = new THREE.DirectionalLight("white");
        directionalLight.position.set(1, 1, 1).normalize();
        scene.add(directionalLight);

        const loader = new GLTFLoader();
        loader.load(
            '/models/walter_white.glb',
            (gltf: any) => {
                const model = gltf.scene;
                model.scale.set(0.65, 0.65, 0.65);
                scene.add(model);

                const directionalLight1 = new THREE.DirectionalLight('white', 0.5);
                directionalLight1.position.set(5, 10, 5);
                directionalLight1.color.setHSL(0.6, 1, 0.9);
                scene.add(directionalLight1);

                const directionalLight2 = new THREE.DirectionalLight('white', 0.5);
                directionalLight2.position.set(-5, 10, -5);
                directionalLight2.color.setHSL(0.1, 1, 0.5);
                scene.add(directionalLight2);

                let hue1 = 15;
                let hue2 = 0.9;

                function animateGradient() {
                    hue1 += 0.005;
                    hue2 += 0.005;

                    if (hue1 > 1) hue1 -= 1;
                    if (hue2 > 1) hue2 -= 1;

                    directionalLight1.color.setHSL(hue1, 1, 0.5);
                    directionalLight2.color.setHSL(hue2, 1, 0.5);
                }

                function animateModel() {
                    model.rotation.y -= 0.0002;
                }

                function animate() {
                    requestAnimationFrame(animate);
                    animateModel();
                    animateGradient();
                    controls.update();
                    renderer.render(scene, camera);
                }

                animate();
            },
            undefined,
            (error: any) => {
                console.error('Ошибка загрузки модели:', error);
            }
        );

        const handleResize = () => {
            camera.aspect = 2
            camera.updateProjectionMatrix();
            renderer.setSize(600, 300);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);

    return (
        <div className="w-full flex justify-center h-64 items-center">
            <div id="three-container" className="w-5/12 h-[300px]"/>
            <div className="w-6/12 text-white px-6">
                <h1 className="text-4xl font-bold mb-4">
                    Добро пожаловать в мою цифровую вселенную!
                </h1>
                <p className="text-lg leading-7">
                    Здесь рождаются идеи и воплощаются самые смелые проекты. Это место, где код встречается с креативом,
                    а технологии становятся инструментом искусства.
                    Зайди, вдохновись и узнай, как из строчек кода создаются невероятные миры.
                </p>
            </div>
        </div>

    );
}

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>3D Scene</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <main className="flex flex-col items-center justify-center w-full h-screen bg-black">
                <div className="relative w-full h-[80vh]">
                    <ThreeScene/>
                </div>
            </main>
        </>
    );
}
