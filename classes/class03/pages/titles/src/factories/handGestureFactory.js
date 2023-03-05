import "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core@4.2.0/dist/tf-core.min.js"
import "https://unpkg.com/@tensorflow/tfjs-backend-webgl@3.7.0/dist/tf-backend-webgl.min.js"
import "https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1646424915/hands.min.js"
import "https://cdn.jsdelivr.net/npm/@tensorflow-models/hand-pose-detection@2.0.0/dist/hand-pose-detection.min.js"
import "https://cdn.jsdelivr.net/npm/fingerpose@0.1.0/dist/fingerpose.min.js"

import HandGestureController from "../controllers/handGestureController.js"
import HandleGestureService from "../services/handGestureService.js"
import HandleGestureView from "../views/handGestureView.js"
import Camera from "../../../../lib/shared/camera.js"
import { fingerLookupIndexes, gestureStrings, knowGestures } from "../util/util.js"

const camera = await Camera.init()



const factory = {
    async initalize() {
        return HandGestureController.initialize({
            camera,
            view: new HandleGestureView({
                fingerLookupIndexes
            }),

            service: new HandleGestureService({
                gestureStrings,
                knowGestures,
                fingerpose: window.fp,
                handPoseDetection: window.handPoseDetection,
                handsVersion: window.VERSION
            })
        })
    }
}

export default factory