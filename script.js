let cameraStream = null;

async function startCamera() {

    const video = document.getElementById("video");

    const status = document.getElementById("cameraStatus");

    try {

        status.innerText = "Opening camera...";

        cameraStream = await navigator.mediaDevices.getUserMedia({
            video: {
                width: 640,
                height: 480
            },
            audio: false
        });

        video.srcObject = cameraStream;

        await video.play();

        status.innerText = "Camera is ON";

        console.log("SignConnect AI camera started!");

    } catch (error) {

        console.error("Camera error:", error);

        status.innerText =
            "Camera error: " + error.message;

    }
}

function stopCamera() {

    if (cameraStream) {

        cameraStream.getTracks().forEach(track => track.stop());

        cameraStream = null;

    }

    const video = document.getElementById("video");

    video.srcObject = null;

    document.getElementById("cameraStatus").innerText =
        "Camera is off";
}