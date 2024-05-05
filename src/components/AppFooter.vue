<script>

export default {
    name: 'AppFooter'
};
</script>

<template>
    <footer class="container-xs">
        <div class="top">
            <p>More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#"> other retailer</a> near you.</p>
            <br>
            <p>Or call 000800-040-1966.</p>
        </div>

        <div class="bottom">
            <div class="left">
                <p>Copyright © 2024 Apple Inc. All right reserved.</p>
            </div>
            <div class="right">
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>Sales Policy</li>
                    <li>Legal</li>
                    <li>Site Map</li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--apple-gray-500);
    line-height: .7rem;

    & a {
        color: var(--apple-primary-light);
        text-decoration: underline;
    }

    .top,
    .bottom {
        padding: 1.5rem 0;
    }

    .bottom {
        border-top: .5px solid var(--apple-gray-700);
        display: flex;
        justify-content: space-between;
    }

    ul {
        display: flex;
        list-style: none;
        gap: .6rem;

        & li:not(:last-child)::after {
            content: '|';
            padding-left: .6rem;
        }
    }

}
</style>
