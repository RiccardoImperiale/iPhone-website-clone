<script>

export default {
    name: 'PhoneGaming',
};
</script>

<template>
    <div class="phone container">
        <img class="frame_img" src="/assets/images/frame.png" alt="phone frame">
        <video class="frame_vid" ref="gaming_vid" preload="none" muted playsInline autoplay>
            <source src="/assets/videos/frame.mp4" type="video/mp4">
        </video>
    </div>
    <div class="game_title">Honkai: Star Rail</div>
</template>

<style scoped>
.phone {
    margin-top: 9rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .frame_img {
        position: absolute;
        width: 100%;
        z-index: 1;
    }

    .frame_vid {
        width: 96%;
        height: 96%;
        object-fit: cover;
        border-radius: 2rem;
    }
}

.game_title {
    margin-top: 3rem;
    text-align: center;
    font-size: 1.1rem;
    color: var(--apple-gray-500);
    font-weight: 500;
}
</style>
