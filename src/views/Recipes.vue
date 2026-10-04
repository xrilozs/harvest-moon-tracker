<template>
  <div>
    <h1 class="title">Resep Makanan</h1>
    <p class="subtitle">Semua resep masakan dan bahan yang dibutuhkan.</p>
    
    <div class="filters-container">
      <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="Cari resep..." class="search-input" />
      </div>
      <div class="filter-chips">
        <button 
          v-for="cat in categories" 
          :key="cat" 
          class="chip-btn" 
          :class="{ active: selectedCategories.includes(cat) }" 
          @click="toggleCategory(cat)">
          {{ cat }}
        </button>
      </div>
    </div>

    <div class="recipes-grid">
      <div v-for="recipe in filteredRecipes" :key="recipe.id" class="card recipe-card">
        <div class="recipe-header">
          <label class="checkbox-container">
            <input type="checkbox" :checked="progressStore.cookedRecipes.includes(recipe.id)" @change="progressStore.toggleRecipe(recipe.id)" />
            <span class="checkmark"></span>
          </label>
          <template v-if="recipe.image.startsWith('sprite:')">
            <div class="pixel-sprite" :style="{ backgroundPosition: `-${recipe.image.split(':')[1]}px -${recipe.image.split(':')[2]}px` }"></div>
          </template>
          <img v-else :src="recipe.image"  :alt="recipe.name" class="recipe-img" @error="onImgError">
          <div class="recipe-title-box">
            <h3>{{ recipe.name }}</h3>
          </div>
        </div>
        <div class="recipe-details">
          <p><strong>🍳 Alat:</strong> {{ recipe.utensil }}</p>
          <p><strong>📦 Bahan:</strong></p>
          <div class="ingredients">
            <span v-for="ing in recipe.ingredients" :key="ing" class="ingredient-tag">{{ ing }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { recipesData } from '../data/recipes';
import { useProgressStore } from '../store/progress';

const progressStore = useProgressStore();
const categories = ['No Utensil', 'Knife', 'Frying Pan', 'Pot', 'Oven', 'Mixer', 'Whisk', 'Rolling Pin', 'Seasoning Set'];

const searchQuery = ref('');
const selectedCategories = ref<string[]>([]);

const toggleCategory = (cat: string) => {
  const index = selectedCategories.value.indexOf(cat);
  if (index > -1) {
    selectedCategories.value.splice(index, 1);
  } else {
    selectedCategories.value.push(cat);
  }
};

const filteredRecipes = computed(() => {
  return recipesData.filter(r => {
    const matchSearch = r.name.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchCategory = selectedCategories.value.length === 0 || selectedCategories.value.includes(r.category);
    return matchSearch && matchCategory;
  });
});

const onImgError = (e: Event) => { (e.target as HTMLImageElement).src = 'https://placehold.co/56x56/fef3c7/d97706?text=Food'; };
</script>

<style scoped>
.filters-container { display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px; }
.search-input { padding: 12px 16px; border-radius: 12px; border: 1px solid var(--border); background: var(--surface); color: var(--text-main); font-size: 1rem; width: 100%; max-width: 400px; outline: none; transition: border-color 0.2s; font-family: inherit; }
.search-input:focus { border-color: var(--accent); }
.filter-chips { display: flex; gap: 8px; flex-wrap: wrap; }
.chip-btn { background: var(--surface); border: 1px solid var(--border); padding: 6px 14px; border-radius: 20px; cursor: pointer; font-weight: 500; color: var(--text-light); transition: all 0.2s; font-size: 0.85rem; font-family: inherit; }
.chip-btn.active { background: var(--note-bg); color: var(--note-color); border-color: var(--accent); }
.chip-btn:hover:not(.active) { background: var(--nav-hover); }

.recipes-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
.recipe-card { display: flex; flex-direction: column; gap: 14px; }
.recipe-header { display: flex; align-items: center; gap: 16px; }
.recipe-img { width: 56px; height: 56px; border-radius: 12px; object-fit: cover; background: var(--note-bg); }
.recipe-title-box { flex: 1; }
.recipe-header h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.recipe-details p { color: var(--text-light); font-size: 0.9rem; margin-bottom: 6px; }
.ingredients { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px; }
.ingredient-tag { background: var(--info-bg); border: 1px solid var(--border); padding: 3px 10px; border-radius: 8px; font-size: 0.85rem; color: var(--text-main); }

.pixel-sprite {
  width: 16px; height: 16px;
  background-image: url('/img/items_spritesheet.png');
  background-repeat: no-repeat;
  image-rendering: pixelated;
  transform: scale(2.5);
  transform-origin: center;
  margin: 0 auto;
}

/* Custom Checkbox */
.checkbox-container { display: block; position: relative; cursor: pointer; user-select: none; width: 24px; height: 24px; flex-shrink: 0; }
.checkbox-container input { position: absolute; opacity: 0; cursor: pointer; height: 0; width: 0; }
.checkmark { position: absolute; top: 0; left: 0; height: 24px; width: 24px; background-color: var(--surface-secondary); border: 2px solid var(--border); border-radius: 6px; transition: all 0.2s ease; }
.checkbox-container:hover input ~ .checkmark { border-color: var(--primary); }
.checkbox-container input:checked ~ .checkmark { background-color: var(--primary); border-color: var(--primary); }
.checkmark:after { content: ""; position: absolute; display: none; }
.checkbox-container input:checked ~ .checkmark:after { display: block; }
.checkbox-container .checkmark:after { left: 7px; top: 3px; width: 6px; height: 12px; border: solid white; border-width: 0 2px 2px 0; transform: rotate(45deg); }
</style>
