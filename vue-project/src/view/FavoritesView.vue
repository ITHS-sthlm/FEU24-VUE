<template>
  <div id="main-div">
    <h1>Your Favorites</h1>
    <div v-if="favorites.length === 0">
      <p>No favorite images yet.</p>
    </div>
    <div class="favorite-image" v-else>
      <FavoriteItem
        v-for="(image, index) in favorites"
        :key="index"
        :favorite="image"
      />
    </div>
  </div>
</template>

<script>
import FavoriteItem from '@/components/FavoriteItem.vue';

export default {
  name: "FavoritesView",
  components: {
    FavoriteItem
  },
  data() {
    return {
      favorites: JSON.parse(localStorage.getItem("favorites")) || []
    };
  }
};
</script>

<style scoped>
#main-div {
  justify-items: center;
  margin-bottom: 18rem;
  margin-top: 4rem;
  margin-left: 2rem;
  margin-right: 2rem;
}

div h1 {
  font-weight: bold;
  font-size: 5rem;
  margin-bottom: 1rem;
}

.favorite-image {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  justify-items: center;
}

.favorite-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

/* Media queries för responsiv design */
@media (max-width: 768px) {
  div h1 {
    font-size: 3rem;
    color: #ffff;
    font-weight: bold;
  }
  .favorite-image {
    margin: 0rem 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  div h1 {
    font-size: 2rem;
    color: #ffff;
    font-weight: bold;
  }
  .favorite-image {
    margin: 0rem 1rem;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
