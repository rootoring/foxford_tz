import { defineStore } from 'pinia'

export const useRepositoryStore = defineStore({
  id: 'rep',
  state: () => ({
    array: [],
    statusSearch:'users'
  }),

  actions: {

    async fechRep(text){

      const queryString = 'q=' + encodeURIComponent(`${text}`);

      let data =  await fetch(`https://api.github.com/search/${this.statusSearch}?${queryString}`, {
        method: "GET",
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: "token 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"
        }
      });

       this.array = await data.json()
     
    }
  }
})