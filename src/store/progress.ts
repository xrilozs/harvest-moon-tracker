import { defineStore } from 'pinia';

export const useProgressStore = defineStore('progress', {
  state: () => ({
    collectedPowerBerries: [] as string[],
    collectedJewels: [] as string[],
    caughtKingFish: [] as string[],
    completedEvents: [] as string[],
    obtainedGifts: [] as string[],
    cookedRecipes: [] as string[],
    obtainedMysticBerry: false,
  }),
  actions: {
    togglePowerBerry(id: string) {
      const index = this.collectedPowerBerries.indexOf(id);
      if (index > -1) this.collectedPowerBerries.splice(index, 1);
      else this.collectedPowerBerries.push(id);
    },
    toggleJewel(id: string) {
      const index = this.collectedJewels.indexOf(id);
      if (index > -1) this.collectedJewels.splice(index, 1);
      else this.collectedJewels.push(id);
    },
    toggleKingFish(id: string) {
      const index = this.caughtKingFish.indexOf(id);
      if (index > -1) this.caughtKingFish.splice(index, 1);
      else this.caughtKingFish.push(id);
    },
    toggleEvent(id: string) {
      const index = this.completedEvents.indexOf(id);
      if (index > -1) this.completedEvents.splice(index, 1);
      else this.completedEvents.push(id);
    },
    toggleGift(id: string) {
      const index = this.obtainedGifts.indexOf(id);
      if (index > -1) this.obtainedGifts.splice(index, 1);
      else this.obtainedGifts.push(id);
    },
    toggleRecipe(id: string) {
      const index = this.cookedRecipes.indexOf(id);
      if (index > -1) this.cookedRecipes.splice(index, 1);
      else this.cookedRecipes.push(id);
    },
    resetAll() {
      this.collectedPowerBerries = [];
      this.collectedJewels = [];
      this.caughtKingFish = [];
      this.completedEvents = [];
      this.obtainedGifts = [];
      this.cookedRecipes = [];
      this.obtainedMysticBerry = false;
    },
  },
  persist: true,
});
