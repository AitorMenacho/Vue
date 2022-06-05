<template>
    <div 
        class="entry-container mb-3 pointer p-2"
        @click="$router.push({ name: 'entry', params: { id: 10 } })"
    >
        <!-- Titulo -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2021, jueves</span>
        </div>

        <div class="entry-description">
            Ipsum ex occaecat duis voluptate est quis ut. Cillum ut occaecat et fugiat. Cillum laborum laboris qui labore occaecat duis velit officia id exercitation in eiusmod velit tempor. Velit quis adipisicing esse ipsum. Adipisicing minim nisi cillum cupidatat cillum nisi ad enim dolore. Elit incididunt nostrud quis pariatur.
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .entry-container{
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;

        &:hover {
            background-color: lighten($color: grey, $amount: 45);
            transition: 0.2s all ease-in;
        }

        .entry-description{
            font-size: 12px;
        }
    }
</style>