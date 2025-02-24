<template>
  <div>
    <div id="search_bar">

      <input v-model="searchQuery" @input="searchImages" @keydown.enter="performSearch" placeholder="Seach photos..." />
      <button @click="performSearch" id="btn-hero">Search</button>

    </div>

    <div id="resultText" v-if="searchResult">
      <h2>Search result: {{ searchResult }}</h2>
    </div>

    <div class="display_images">

      <section v-for="(image, index) in images" :key="index">

        <div class="image-container">
          <img :src="image.src.large" alt="image.alt" />
          <button @click="toggleFavorite(image)" class="save-remove-btn">
            <span v-if="favorites.some(fav => fav.id === image.id)" class="heart filled">❤️</span>
            <span v-else class="heart">🤍</span>
          </button>
        </div>

        <figcaption id="caption">{{ image.alt }}</figcaption>
        <figcaption>Photo by {{ image.photographer }}</figcaption>

      </section>
    </div>

    <div id="sad-message" v-if="noResults" class="no-result-message">
      <span id="emoji">😭</span><br />
      <h2>Ohh no! We can't find what you're looking for.</h2>
    </div>

    <div id="parent-btn">
      <button id="show_more" v-if="showMore" @click="loadMore">Show More</button>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      searchQuery: "",
      searchResult: "",
      pageNum: 1,
      images: [],
      favorites: [],
      showMore: false,
      noResults: false,
      search: false,
      apiKey: "iWfikUFnHPGhmltkBYqgZpaaGL1RfsJwA0J0AKmkPTaYLdXkiKO8Rbx3",
    };
  },
  methods: {
    async performSearch() {
      if (this.searchQuery === "") {
        alert("Write something in the field! 😈");
        return;
      }
      this.searchResult = this.searchQuery;
      this.clearGallery();
      this.search = true;
      this.searchPhotos(this.searchQuery, this.pageNum);
    },




    async searchPhotos(query, pageNum) {
      try {
        const response = await axios.get("https://api.pexels.com/v1/search", {
          params: {
            query: query,
            page: pageNum,
          },
          headers: {
            Authorization: this.apiKey,
          },
        });
        this.displayImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
        this.noResults = true;
      }
    },

    async fetchPhotos(pageNum) {
      try {
        const response = await axios.get("https://api.pexels.com/v1/curated", {
          params: { page: pageNum },
          headers: { Authorization: this.apiKey },
        });
        this.displayImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    },

    displayImages(response) {
      this.noResults = false;
      if (response.photos.length === 0) {
        this.noResults = true;
        this.showMore = false;
      } else {
        this.images.push(...response.photos);
        this.showMore = response.photos.length > 0;
      }
    },

    clearGallery() {
      this.images = [];
      this.pageNum = 1;
    },

    loadMore() {
      this.pageNum++;
      if (this.search) {
        this.searchPhotos(this.searchQuery, this.pageNum);
      } else {
        this.fetchPhotos(this.pageNum);
      }
    },

    toggleFavorite(image) {
      const index = this.favorites.findIndex(fav => fav.id === image.id);
      if (index === -1) {
        this.favorites.push(image);
      } else {
        this.favorites.splice(index, 1);
      }

      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    }
  },
  mounted() {
    this.fetchPhotos(this.pageNum);
  },
};

</script>

<style scoped>

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}

#search_bar {
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 1rem;
}


input {
  align-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 3rem;
  padding-right: 40rem;
}

button {
  padding: 1rem;
}

#resultText {
  margin-top: 3rem;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.2rem;
  color: rgb(255, 239, 118);
}

.display_images {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  justify-items: center;
}

.display_images section {
  width: 100%;
  box-sizing: border-box;
}

img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.image-container {
  position: relative;
}

.save-remove-btn {
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.124);
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
}

.heart {
  transition: color 0.5s ease;
}




figcaption {
  text-align: left;
  margin-top: 10px;
}

#parent-btn {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;

}
#show_more {
  display: inline-block;
  margin: 0 auto;
  margin-bottom: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;

  font-weight: 600;
  transition: all 0.3s ease;
}

#show_more:hover {
  display: inline-block;
  margin: 0 auto;
  margin-bottom: 3rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  font-weight: 700;
  font-size: 1rem;
}

#sad-message {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;

  font-size: 4rem;
  color: rgb(211, 187, 2);
}


@media (max-width: 768px) {
  .display_images {
    margin: 0rem 1rem ;
    grid-template-columns: repeat(2, 1fr);
  }

  #search_bar {
  margin-top: 3rem;
  margin-bottom: 2rem;
}

input {
  align-content: center;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
}

button {
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
}

#resultText {
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: rgb(255, 239, 118);
}
}

@media (max-width: 480px) {

  .display_images {
    margin: 0rem 1rem ;
    grid-template-columns: repeat(1, 1fr);
  }

  #search_bar {
  margin-top: 2rem;
  margin-bottom: 3rem;

}

input {
  align-content: center;
  padding-left: 0.5rem;
  padding-right: 0rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
}

button {
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
}

#resultText {
  margin-bottom: 1rem;
  text-align: center;
  font-size: 0.8rem;
  color: rgb(255, 239, 118);
}
}


</style>
