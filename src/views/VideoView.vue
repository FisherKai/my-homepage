<script setup lang="ts">
import { ref, onMounted } from 'vue';
const preview = ref(null);
const checkMedia = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // 浏览器支持摄像头调用
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                // 获取摄像头输入流成功
                preview.value.srcObject = stream;
            })
            .catch(function (error) {
                // 获取摄像头输入流失败
            });

    } else {
        // 浏览器不支持摄像头调用
    }
}
onMounted(() => {
    checkMedia();
})
</script>

<template>
    <main class="pages-of-videos">
        <section class="m-monitor-container">
            <p>视频监控</p>
            <video ref="preview" autoplay></video>
        </section>
    </main>
</template>

<style>
.pages-of-videos {
    display: flex;
    justify-content: center;
    align-items: center;
}

.m-monitor-container {
    padding: 10px;
}
p{
    text-align: center;
}
video {
    border-radius: 10px;
}
</style>
