<template>
  <section class="favorite-item">
    <div class="image-container">
      <img :src="favorite.src.large" :alt="favorite.alt" />
    </div>
    <figcaption>{{ favorite.alt }}</figcaption>
    <figcaption id="photographer">{{ favorite.photographer }}</figcaption>
  </section>
</template>

<script>
export default {
  name: "FavoriteItem",
  props: {
    favorite: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.favorite-item {
  margin-bottom: 1rem;
  padding: 1.5rem;
  background-color: #ffffff;
}

.image-container {
  overflow: hidden;
}

.favorite-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

figcaption {
  color: #000;
}

#photographer {
  font-weight: bold;
}
</style>
