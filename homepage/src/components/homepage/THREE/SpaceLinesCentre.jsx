import React from "react";
import * as THREE from "three";
import styles from "./styles/SpaceLinesCentre.module.css";

export default class SpaceLinesCentre extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            // === THREE.JS CODE START ===
            const parent = this.mount;

            var scene = new THREE.Scene();
            var camera = new THREE.PerspectiveCamera(12, parent.clientWidth / parent.clientHeight, 0.1, 1000);
            var renderer = new THREE.WebGLRenderer();

            renderer.setSize(parent.clientWidth, parent.clientHeight);

            this.mount.appendChild(renderer.domElement);

            // Setup the camera
            camera.position.set(0, 0, -10);
            camera.lookAt(0, 0, 0);

            // Setup start generation
            var geometry = new THREE.PlaneGeometry(0.5, 0.01);
            var material = new THREE.MeshBasicMaterial({ color: 0x33ffaa, side: THREE.DoubleSide});
            var cube = new THREE.Mesh(geometry, material);
            cube.rotation.y = 45;
            scene.add(cube);


            var animate = function () {
                requestAnimationFrame(animate);
                cube.position.x += 0.01;
                cube.position.z -= 0.01;
                renderer.render(scene, camera);
            };

            animate();
            // === THREE.JS EXAMPLE CODE END ===
        }, 500);
    }

    render() {
        return <div ref={ref => (this.mount = ref)} className={styles.canvasContainer} />;
    }
}